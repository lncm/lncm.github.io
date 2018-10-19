module.exports = {
  siteMetadata: {
    title: 'LNCM',
    description: 'Lightning Network Chiang Mai',
  },
  plugins: [
    // add images before markdown
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/static/`,
        name: 'static',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/images/logo.png',
        appName: 'LNCM',
        appDescription: 'Lightning Network Chiang Mai',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-toml',
    'gatsby-remark-copy-linked-files',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },

  ],
};
