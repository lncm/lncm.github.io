import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log('got post', post);
  return (
    <Layout>
      <div>
        <h2 style={{ margin: 0 }}>{post.frontmatter.title}</h2>
        <h3 style={{ margin: 0 }}>By {post.frontmatter.author} on {post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link to='/blog'>⬅ Back to Blog</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
