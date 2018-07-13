const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const parseFilepath = require("parse-filepath");
const slash = require("slash");
const slugify = require("slugify");

// convert a string like `/some/long/path/name-of-docs/` to `name-of-docs`
const slugToAnchor = slug =>
  slug
    .split("/") // split on dir separators
    .filter(item => item !== "") // remove empty values
    .pop(); // take last item

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/blog-post/index.tsx");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { ne: null } }
      ) {
        edges {
          node {
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    console.log(result);

    const blogPosts = _.filter(result.data.allMarkdownRemark.edges, edge => {
      const slug = _.get(edge, "node.fields.slug");
      const draft = _.get(edge, "node.frontmatter.draft");
      if (!slug) return;

      if (_.includes(slug, `/blog/`) && !draft) {
        return edge;
      }
    });

    // Create blog pages.
    blogPosts.forEach((edge, index) => {
      const next = index === 0 ? null : blogPosts[index - 1].node;
      const prev =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;

      createPage({
        path: `${edge.node.fields.slug}`, // required
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.fields.slug,
          prev,
          next
        }
      });
    });
  });
};

// Create slugs for files.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === "File") {
    const parsedFilePath = parseFilepath(node.relativePath);
    if (node.sourceInstanceName === "data") {
      if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === ``) {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }
    if (slug) {
      createNodeField({ node, name: "slug", value: slug });
    }
  } else if (
    node.internal.type === "MarkdownRemark" &&
    getNode(node.parent).internal.type === "File"
  ) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = parseFilepath(fileNode.relativePath);
    // Add slugs for docs pages
    if (fileNode.sourceInstanceName === "data") {
      if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }
    if (slug) {
      createNodeField({ node, name: "anchor", value: slugToAnchor(slug) });
      createNodeField({ node, name: "slug", value: slug });
    }
  } else if (node.internal.type === "AuthorYaml") {
    slug = `/contributors/${slugify(node.id, {
      lower: true
    })}/`;
    createNodeField({ node, name: "slug", value: slug });
  }
};
