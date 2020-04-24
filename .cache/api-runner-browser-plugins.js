module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Impactfully","short_name":"Impactfully","start_url":"/","background_color":"#145ec7","theme_color":"#145ec7","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
