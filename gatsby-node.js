const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(JSON.stringify(node, undefined, 4))
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //1. Get path to template
  const blogTemplatePath = path.resolve("./src/templates/blog.js")

  //2. Get markdown data
  //This graphql is different from what we used in the pages files. This func returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //3. create new pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplatePath, //path to component template
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        //This contains stuff which we pass down to the template. We will pass slug so that blog component can fetch the md file
        slug: edge.node.fields.slug,
      },
    })
  })
}
