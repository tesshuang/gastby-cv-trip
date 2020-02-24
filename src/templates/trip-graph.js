import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="" />
      <h1>Hi from Trip Graph Template Page</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    ...
  }
`