import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  console.log(pageContext);
  return(
    <Layout>
      <SEO title="trip template" />
      <h1>All Trips</h1>

    </Layout>
  )
}
