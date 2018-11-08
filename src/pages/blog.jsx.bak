import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

export default ({ data }) => (
  <Layout title="Blog">
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="blog-entry">
        {node.frontmatter.cover_image
          && (
          <div className="image">
            <Link to={node.fields.slug}>
              <Img fixed={node.frontmatter.cover_image.childImageSharp.fixed} />
            </Link>
          </div>
          )}
        <div className="content">
          <h3>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <h4>By {node.frontmatter.author} on {node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
        </div>
      </div>
    ))}
  </Layout>
);

export const query = graphql`query { ...BlogItemsQuery }`;
