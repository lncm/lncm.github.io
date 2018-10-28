import { graphql } from 'gatsby';

// used in individual articles (templates)
export const markdownPost = graphql`
  fragment MarkdownItemFormatter on Query {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`;

// used in list of items (page)
export const markdownItemsFormatter = graphql`
  fragment MarkdownItemsFormatter on MarkdownRemarkConnection  {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          author
          date(formatString: "YYYY.MM.DD")
          cover_image {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export const blogItemsQuery = graphql`
  fragment BlogItemsQuery on Query {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "blog" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...MarkdownItemsFormatter
    }
  }
`;

export const projectItemsQuery = graphql`
  fragment ProjectItemsQuery on Query {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "project" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...MarkdownItemsFormatter
    }
  }
`;

export const teamImagesQuery = graphql`
  fragment TeamImagesQuery on Query {
    allFile(filter: {
      relativeDirectory : { eq: "team" },
      sourceInstanceName: { eq: "static" }
    }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
