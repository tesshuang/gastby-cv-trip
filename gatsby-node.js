// Fetching data without GraphQL -- unstructured data
const axios = require('axios');

const getAllTrips = async() => {
  try {
    const response = await axios.get('https://uat1.canadavacations.com/wp-json/wp/v2/trips-archive/');
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const allTripData = await getAllTrips();

  createPage({
    path: `/all-trips/`,
    component: require.resolve('./src/templates/all-trips.js'),
    context: {
      allTripData
    }
  })

  allTripData.forEach(trip => {
    createPage({
      path: `/all-trips/${trip.slug}/`,
      component: require.resolve('./src/templates/trip.js'),
      context: { trip }
    });
  })
  
  // Fetching Data with GraphQL Layer
  const tripResult = await graphql(
    `
    {
      allInternalTrips(filter: {slug: {ne: null}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  )
  if (tripResult.errors) {
    return
  }
  tripResult.data.allInternalTrips.edges.map((trip) => {
    const tripPath = trip.node.slug
    createPage({
      path: `/trips-graph/${tripPath}`,
      component: require.resolve('./src/templates/trip-graph.js'),
      context: { tripPath }
    })
  })
  // console.log(tripResult);
}