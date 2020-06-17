import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              excerpt
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show here</p>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <h5>{edge.node.frontmatter.date}</h5>
            <p>{edge.node.excerpt}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
