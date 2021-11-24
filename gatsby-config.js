module.exports = {
  plugins: [
    // add images before markdown
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/src/data/static/`,
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
    'gatsby-transformer-toml',
    'gatsby-remark-copy-linked-files',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
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
