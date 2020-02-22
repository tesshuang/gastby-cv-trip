import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: trip }) => {
  const tripDetail = trip.trip;
  return (
    <Layout>
      <SEO title={tripDetail.name} />
      <h1>{tripDetail.name}</h1>
      <img src={tripDetail.hero_img_url} alt={tripDetail.name} />
      <p>Duration: {tripDetail.duration}</p>
    </Layout>
  )
}