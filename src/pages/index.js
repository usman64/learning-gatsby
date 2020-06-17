import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>I'm Usman</h2>
      <p>
        Visit my blog <Link to="/blog">Click here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
