module.exports = {
  siteMetadata: {
    title: 'LNCM',
    description: 'Lightning Network Chiang Mai'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-toml'
  ],
}
