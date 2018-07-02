module.exports = {
  siteMetadata: {
    title: "Qameta Software",
    siteUrl: "https://www.qameta.io"
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              backgroundColor: "#ffffff"
            }
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null
            }
          }
        ]
      }
    }
  ]
};
