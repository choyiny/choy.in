import * as React from "react"
import Layout from "../components/layout";
import {DisplayContainer} from "../components/display-container";
import Hero from "../components/hero";
import {Box, Divider, Flex, Grid, Heading, HStack, Link, LinkBox, LinkOverlay, Tag, Text} from "@chakra-ui/react";
import {LinkCard} from "../components/link-card";
import {cardGradients} from "../constants/gradients";

// markup
const IndexPage = () => {
  return (
    <Layout activePage={'index'}>
      <DisplayContainer>
        <Hero/>
        <Divider/>
        <Box my='1em'>
          <Flex justifyContent="space-between" alignItems="center" my='1em'>
            <Tag size='lg' key='projects' colorScheme='blue' borderRadius='full' px='1.5em'>
              Projects
            </Tag>
            <Link display="none" href="/writing">Read all</Link>
          </Flex>
          <Grid templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]} gap={[4, null, 8]}>
            <LinkCard
              bgGradient={cardGradients[1]}
            >
              <LinkOverlay href={"https://pickeasy.ca"}><Heading>PickEasy</Heading></LinkOverlay>
              <Text textAlign={"right"}>Connecting restaurants to their local areas</Text>
            </LinkCard>
            <LinkCard
              bgGradient={cardGradients[2]}
            >
              <LinkOverlay href={"https://bogo.hollywood.cafe"}><Heading>Daily Deals</Heading></LinkOverlay>
              <Text textAlign={"right"}>Simple portal for restaurants to offer daily promotions</Text>
            </LinkCard>
          </Grid>
        </Box>
      </DisplayContainer>
    </Layout>
  )
}

export default IndexPage
