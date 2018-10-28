import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import RenderHtml from '../components/RenderHtml';

export default ({ data: { markdownRemark: post } }) => (
  <Layout title={post.frontmatter.title}>
    <h3>Created {post.frontmatter.date}</h3>
    <RenderHtml html={post.html} />
    <Link to="/projects">⬅ Back to Projects</Link>
  </Layout>
);

export const query = graphql`query($slug: String!) { ...MarkdownItemFormatter }`;
