require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetch = require('node-fetch');

const auth = {
  user: {
    username: process.env.API_USER,
    password: process.env.API_PASS
  }
};

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  try {
    const postAuth = await fetch('https://api.bms.staging.freshtracks.com/users/sign_in', {
      method: 'post',
      body: JSON.stringify(auth),
      headers: { 'Content-Type': 'application/json' }
    })

    const token = await postAuth.json();
    
    const getTrip = await fetch('https://api.bms.staging.freshtracks.com/v1/trips/', {
      method: 'get',
      headers: {
        'Authorization': await token.auth_token
      }
    })

    const tripData = await getTrip.json();
    tripData.trips.forEach(trip => {
      const node = {
        ...trip,
        id: createNodeId(`BMS-trip-${trip.id}`),
        internal: {
          type: 'BmsTrip',
          contentDigest: createContentDigest(trip)
        }
      };
      actions.createNode(node);
    })
    return
    // console.log(tripData);

  } catch (error) {
    console.log(error);
  }
}