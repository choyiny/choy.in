import * as React from "react";
import Layout from "../components/layout";
import { DisplayContainer } from "../components/display-container";
import SkipNav from "../components/skip-nav";
import {
  Heading,
  Stack,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { graphql, Link as GatsbyLink } from "gatsby";
import Seo from "../components/seo";

const BraindumpsPage = ({ data: { dumps } }) => {
  return (
    <Layout activePage={"index"}>
      <Seo
        title="Braindumps"
        description="A place to put down quick, technical thoughts and lessons."
      />
      <SkipNav />
      <DisplayContainer>
        <Box my="2em">
          <Heading textAlign="center">Braindumps</Heading>
          <Text textAlign="center">
            A place to put down quick, technical thoughts and lessons.
          </Text>
        </Box>
        <Stack mb="5">
          {dumps.nodes.map((dump) => {
            return (
              <LinkBox
                as="article"
                p="5"
                borderWidth="1px"
                rounded="md"
                key={dump.id}
              >
                <Box as="time" dateTime={dump.frontmatter.date}>
                  {dump.frontmatter.date}
                </Box>
                <Heading size="md" my="2">
                  {dump.frontmatter.externalBlogUrl ? (
                    <LinkOverlay href={dump.frontmatter.externalBlogUrl}>
                      {dump.frontmatter.title}
                    </LinkOverlay>
                  ) : (
                    <LinkOverlay as={GatsbyLink} to={dump.frontmatter.slug}>
                      {dump.frontmatter.title}
                    </LinkOverlay>
                  )}
                </Heading>
              </LinkBox>
            );
          })}
        </Stack>
      </DisplayContainer>
    </Layout>
  );
};

export default BraindumpsPage;

export const query = graphql`
  {
    dumps: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fileAbsolutePath: { glob: "**/content/braindumps/**" } }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          updatedDate(formatString: "MMMM DD, YYYY")
          externalBlogUrl
        }
      }
    }
  }
`;
