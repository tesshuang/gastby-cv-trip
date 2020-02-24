import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  console.log(data);
  const trips = data.allInternalTrips.edges;
  const showTrips = trips.map(trip => (
    <li key={trip.node.id}>
      <Link to={`/trips-graph/${trip.node.slug}`}>
       {trip.node.name}
      </Link>
    </li>
  ))
  return (
    <Layout>
      <SEO title="All trip data from API plugin" />
      <h1>All Trip Data</h1>
      <ul>
        {showTrips}   
      </ul>
      
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allInternalTrips(filter: {slug: {ne: null}}) {
      edges {
        node {
          slug
          name
          id
        }
      }
    }
  }
`
