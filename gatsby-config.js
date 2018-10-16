console.log('loaded config ');

module.exports = {
  siteMetadata: {
    title: 'LNCM',
    description: 'Lightning Network Chiang Mai'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
