import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

export default ({ data }) => (
  <Layout title="Projects">
    <div className="item-grid">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {node.frontmatter.cover_image
            && (
            <Link to={node.fields.slug}>
              <Img fluid={node.frontmatter.cover_image.childImageSharp.fluid} />
            </Link>
            )}
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
