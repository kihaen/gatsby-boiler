/**
 * @type {import('gatsby').GatsbyConfig}
 */
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: `kihaen-gatsby-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {resolve : "gatsby-plugin-postcss", 
    options: {
      postCssPlugins: [ require(`tailwindcss`)(tailwindConfig)]
    }
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};