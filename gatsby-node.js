const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // Handle markdown in `/pages/`
    let slug = createFilePath({ node, getNode, basePath: 'pages' });
    let template = 'markdown';
    // ...and in `/data/`
    if (slug.indexOf('/data/') === 0) {
      slug = slug.replace('/data', '');
      [, template] = slug.split('/');
    }
    createNodeField({ node, name: 'template', value: template });
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => new Promise((resolve) => {
  const { createPage } = actions;
  graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                template
              }
            }
          }
        }
      }
    `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${node.fields.template}.jsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
    resolve();
  });
});


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.toml/,
          use: ['toml-loader'],
        },
      ],
    },
  });
};
