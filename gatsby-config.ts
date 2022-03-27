import {GatsbyConfig} from "gatsby";
import {site} from './src/constants/meta'

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: site.title,
    titleDefault: site.titleDefault,
    siteUrl: site.url,
    siteDescription: site.description,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "static/icon.png",
        "title": site.titleDefault,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./static"
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: false,
      },
    },
  ]
};
export default gatsbyConfig