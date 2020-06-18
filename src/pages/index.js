import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>I'm Usman</h2>
      <p>
        Visit my blog <Link to="/blog">Click here</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
