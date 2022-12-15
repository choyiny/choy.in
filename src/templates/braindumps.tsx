import * as React from "react";
import SkipNav from "../components/skip-nav";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { DisplayContainer } from "../components/display-container";
import { graphql } from "gatsby";
import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import Seo from "../components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { components } from "../components/mdx";
import Giscus from "@giscus/react";

const BraindumpsTemplate = ({ data, location }) => {
  const post = data.mdx;
  return (
    <Layout activePage={"index"}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      >
        <meta name="article:published_time" content={post.seoDate} />
        <meta name="article:modified_time" content={post.seoLastUpdated} />
        <meta name="og:image" content={post.frontmatter.coverImageUrl} />
        <meta name="twitter:image" content={post.frontmatter.coverImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            image: post.frontmatter.coverImageUrl,
            url: post.frontmatter.slug,
            datePublished: post.seoDate,
            dateCreated: post.seoDate,
            dateModified: post.seoLastUpdated,
            description: post.frontmatter.description,
            author: {
              "@type": "Person",
              name: "Cho Yin Yong",
              url: "https://choy.in",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://choy.in/braindumps",
            },
          })}
        </script>
      </Seo>
      <SkipNav />
      <DisplayContainer>
        <Box my="1em">
          <Heading textAlign={{ sm: "center", md: "left" }} itemProp="headline">
            {post.frontmatter.title}
          </Heading>
          <Divider my="1em" />
          <Text my="1em">
            Created {post.frontmatter.date} - Last Updated{" "}
            {post.frontmatter.updatedDate}
          </Text>
        </Box>
        <Image src={post.frontmatter.coverImageUrl}></Image>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <br />
        <Giscus
          id="comments"
          repo="choyiny/choy.in"
          repoId="R_kgDOHCPsjA"
          category="Braindump Discussions"
          categoryId="DIC_kwDOHCPsjM4CQ3Ik"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
      </DisplayContainer>
    </Layout>
  );
};

export default BraindumpsTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        seoUpdatedDate: updatedDate
        seoDate: date
        updatedDate(formatString: "MMMM DD, YYYY")
        description
        coverImageUrl
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
