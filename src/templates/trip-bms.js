import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BMSData = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="" />
    </Layout>
  )
}

export default BMSData;