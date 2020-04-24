const proxy = require('http-proxy-middleware');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Impactfully',
    description: 'A website',
    author: '@jarodpeachey'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Impactfully',
        short_name: 'Impactfully',
        start_url: '/',
        background_color: '#145ec7',
        theme_color: '#145ec7',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components'
  ]
};
