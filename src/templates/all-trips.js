import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { allTripData } }) => {
  console.log(allTripData);
  return(
    <Layout>
      <SEO title="trip template" />
      <h1>All Trips</h1>
      <ul>
      {allTripData.map(trip => (
        <li key={trip.ID}>
          <Link to={`/all-trips/${trip.slug}`}>
            {trip.name}
          </Link>
        </li>
        ))}
      </ul>

    </Layout>
  )
}
