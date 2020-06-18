import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show here</p>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li
            style={{
              backgroundColor: "#bd9491",
              width: "50%",
              textAlign: "center",
              listStyle: "none",
              padding: "0.3rem",
              marginBottom: "1rem",
            }}
          >
            <Link
              to={`/blog/${edge.node.slug}`}
              style={{ textDecoration: "none" }}
            >
              <h2 style={{ color: "black" }}>{edge.node.title}</h2>
              <h5 style={{ color: "white", fontStyle: "italic" }}>
                {edge.node.publishedDate}
              </h5>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
