import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import RenderHtml from '../components/RenderHtml';

export default ({ data: { markdownRemark: post } }) => (
  <Layout title={post.frontmatter.title}>
    <RenderHtml html={post.html} />
  </Layout>
);

export const query = graphql`query($slug: String!) { ...MarkdownItemFormatter }`;
