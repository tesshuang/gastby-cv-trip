import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BMSData = ({ data }) => {
  console.log(data);
  const trip = data.bmsTrip;
  return (
    <Layout>
      <SEO title={trip.name} />
      <h1>{trip.name}</h1>
      <h3>Overview</h3>
      <div dangerouslySetInnerHTML={{__html: trip.description}}/>
      <h3>Marketing highlights</h3>
      <div dangerouslySetInnerHTML={{ __html: trip.marketing_highlights }} />
      <h3>What's Included</h3>
      <div dangerouslySetInnerHTML={{__html: trip.whats_included}}/>
    </Layout>
  )
}

export const query = graphql`
  query BMSTripQuery($code: String) {
    bmsTrip(code: {eq: $code}) {
      name
      marketing_highlights
      description
      whats_included
    }
  }
`

export default BMSData;