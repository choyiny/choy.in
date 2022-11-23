import * as React from "react";
import Layout from "../components/layout";
import { DisplayContainer } from "../components/display-container";
import Hero from "../components/hero";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from "@chakra-ui/react";
import { LinkCard } from "../components/link-card";
import { useProjects } from "../hooks/use-projects";
import { useWork } from "../hooks/use-work";
import SkipNav from "../components/skip-nav";
import { graphql, Link as GatsbyLink } from "gatsby";

// markup
const IndexPage = ({ data: { dumps } }) => {
  const projects = useProjects();
  const work = useWork();
  return (
    <Layout activePage={"index"}>
      <SkipNav />
      <DisplayContainer>
        <Hero />
        <Box my="1em">
          <Flex justifyContent="space-between" alignItems="center" my="1em">
            <Tag
              size="lg"
              key="projects"
              colorScheme="blue"
              borderRadius="full"
              px="1.5em"
            >
              Latest Braindump
            </Tag>
            <Link href="/braindumps">Read all</Link>
          </Flex>
          <LinkBox>
            {dumps.nodes[0].frontmatter.externalBlogUrl ? (
              <LinkOverlay href={dumps.nodes[0].frontmatter.externalBlogUrl}>
                <Heading size="lg" mb="0.5em">
                  {dumps.nodes[0].frontmatter.title}
                </Heading>
              </LinkOverlay>
            ) : (
              <LinkOverlay
                as={GatsbyLink}
                to={`/braindumps/${dumps.nodes[0].frontmatter.slug}`}
              >
                <Heading size="lg" mb="0.5em">
                  {dumps.nodes[0].frontmatter.title}
                </Heading>
              </LinkOverlay>
            )}

            <Text>{dumps.nodes[0].frontmatter.description}...</Text>
          </LinkBox>
        </Box>
        <Divider />
        <Box my="1em">
          <Flex justifyContent="space-between" alignItems="center" my="1em">
            <Tag
              size="lg"
              key="projects"
              colorScheme="blue"
              borderRadius="full"
              px="1.5em"
            >
              Featured Works
            </Tag>
          </Flex>
          <Grid
            templateColumns={[`repeat(1, 1fr)`, null, `2fr 1fr`]}
            gap={[4, null, 8]}
          >
            {work.map((project, index) => {
              const color = ["blue.900", "blue.800", "blue.700", "blue.600"][
                index
              ];
              return (
                <LinkCard
                  key={"project" + index}
                  bgColor={color}
                  projectName={project.name}
                  projectDescription={project.description}
                  projectLink={project.link}
                  projectLogo={project.logo}
                />
              );
            })}
          </Grid>
        </Box>
        <Divider />
        <Box my="1em">
          <Flex justifyContent="space-between" alignItems="center" my="1em">
            <Tag
              size="lg"
              key="projects"
              colorScheme="blue"
              borderRadius="full"
              px="1.5em"
            >
              Open Source Projects
            </Tag>
            <Link href="https://github.com/choyiny">See more</Link>
          </Flex>
          <Grid
            templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]}
            gap={[4, null, 8]}
          >
            {projects.map((project, index) => {
              const color = ["blue.700", "blue.600", "blue.500"][index];
              return (
                <LinkCard
                  key={"project" + index}
                  bgColor={color}
                  projectName={project.name}
                  projectDescription={project.description}
                  projectLink={project.link}
                  projectLogo={project.logo}
                />
              );
            })}
          </Grid>
        </Box>
      </DisplayContainer>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    dumps: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          tags
          description
          slug
          externalBlogUrl
        }
      }
    }
  }
`;
