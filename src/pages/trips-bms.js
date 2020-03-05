import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TripBMS = ({ data }) => {
  console.log(data);
  const BMSTrips = data.allBmsTrip.edges;
  return (
    <Layout>
      <SEO title="Trip from BMS" />
      <h1>Hi From the BMS Trip page</h1>
      <ul>
        {BMSTrips.map(trip => (
          <li key={trip.node.id}>
            <Link to={`/trips-bms/${trip.node.code}`}>
              {trip.node.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </Layout>
  )
}

export const query = graphql`
  query BMSQuery {
    allBmsTrip {
      edges {
        node {
          id
          name
          code
        }
      }
    }
  }
`

export default TripBMS;