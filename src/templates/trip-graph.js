import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  console.log(data);
  const trip = data.internalTrips;
  return (
    <Layout>
      <SEO title="" />
      <h1>Hi from Trip Graph Template Page</h1>
      <h2>{trip.name}</h2>
      <p>Duration: {trip.duration} days</p>
    </Layout>
  )
}

export const query = graphql`
  query TripQuery ($slug: String) {
    internalTrips(slug: {eq: $slug}) {
      name
      duration
      hero_img_url
      slug
      imageFile {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    }
  }
`