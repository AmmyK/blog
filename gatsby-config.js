/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "amamamam",
    description: "Gatsbyで作成されたWebサイト",
    author: "amamamam"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-image`
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GASTBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GASTBY_CONTENTFUL_API_KEY
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        //commonmark: true,
        footnotes: true,
        //pedantic: true,
        gfm: true,
        plugins:[],

      },
    },
  ],
}
