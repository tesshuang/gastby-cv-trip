import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageAPI from '../components/image-api'

const wrapperStyle = {
  position: 'relative',
}
const textStyle = {
  position: 'absolute',
  zIndex: 99,
  color: 'white',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '2.5rem',
}

export default ({ data }) => {
  console.log(data);
  const trip = data.internalTrips;
  return (
    <Layout>
      <SEO title={trip.name}/>
      <div style={wrapperStyle}>
        <h2 style={textStyle}>{trip.name.indexOf('&amp;') ? trip.name.replace(/&amp;/gi, '&') : trip.name }</h2>
        <ImageAPI 
          imageInfo={{
            image: trip.imageFile,
            alt: `Feature image for ${trip.name}`,
          }}
        />
      </div>
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
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`