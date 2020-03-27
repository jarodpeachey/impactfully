var plugins = [{
      plugin: require('D:/Jarod/Code/Freelancer Gigs/Impactfully/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"D:\\Jarod\\Code\\Freelancer Gigs\\Impactfully\\src\\components\\layout.js"},
    },{
      plugin: require('D:/Jarod/Code/Freelancer Gigs/Impactfully/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/Jarod/Code/Freelancer Gigs/Impactfully/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Impactfully","short_name":"Impactfully","start_url":"/","background_color":"tomato","theme_color":"tomato","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('D:/Jarod/Code/Freelancer Gigs/Impactfully/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/Jarod/Code/Freelancer Gigs/Impactfully/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}