const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const braindumps = path.resolve(`./src/templates/braindumps.tsx`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            body
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.nodes;
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: "/braindumps/" + post.frontmatter.slug,
        component: braindumps,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      slug: String
      description: String
      date: Date @dateformat
    }
  `);
};
