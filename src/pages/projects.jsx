import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

export default ({ data }) => (
  <Layout>
    <h2>Projects</h2>
    <div className="item-grid">
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
    </div>
  </Layout>
);

export const query = graphql`query { ...ProjectItemsQuery }`;
