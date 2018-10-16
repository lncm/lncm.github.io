import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <h2>Projects</h2>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </h3>
        <h4>{node.frontmatter.date}</h4>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "project" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
