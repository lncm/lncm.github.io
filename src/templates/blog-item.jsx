/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

export default ({ data: { markdownRemark: post } }) => (
  <Layout>
    <div>
      <h2>{post.frontmatter.title}</h2>
      <h3>By {post.frontmatter.author} on {post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">⬅ Back to Blog</Link>
    </div>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownItemFormatter
    }
  }
`;
