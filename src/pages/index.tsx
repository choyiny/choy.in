import * as React from "react"
import Layout from "../components/layout";
import {DisplayContainer} from "../components/display-container";
import Hero from "../components/hero";
import {Box, Divider, Flex, Grid, Link, Tag} from "@chakra-ui/react";
import {LinkCard} from "../components/link-card";
import {AiOutlineRight} from "react-icons/all";

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
              My Work
            </Tag>
            <Link display="none" href="/writing">Read all</Link>
          </Flex>
          <Grid templateColumns={[`repeat(1, 1fr)`, null, `2fr 1fr`]} gap={[4, null, 8]}>
            <LinkCard
              bgColor='blue.900'
              projectName='PickEasy'
              projectDescription='PickEasy is an A.I. and social driven app that solves the greatest frustration of our generation - Where do we dine today?'
              projectLink='https://pickeasy.ca'
            >
            </LinkCard>
            <LinkCard
              bgColor='blue.800'
              projectName='Daily Deals'
              projectDescription='Portal for restaurants to offer discounted items per day.'
              projectLink='https://bogo.hollywood.cafe'
            >
            </LinkCard>
          </Grid>
        </Box>
        <Divider/>
        <Box my='1em'>
          <Flex justifyContent="space-between" alignItems="center" my='1em'>
            <Tag size='lg' key='projects' colorScheme='blue' borderRadius='full' px='1.5em'>
              Open Source Projects
            </Tag>
            <Link href="https://github.com/choyiny">See more</Link>
          </Flex>
          <Grid templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]} gap={[4, null, 8]}>
            <LinkCard
              bgColor='blue.700'
              projectName='Reliable Blog'
              projectDescription="A simple blog app to demonstrate Google's Site Reliability Engineering principles."
              projectLink='https://github.com/choyiny/reliable_blog'
            />
            <LinkCard
              bgColor='blue.600'
              projectName='Mobile Wizard'
              projectDescription='Nintendo Switch inspired two-player sword (phone) wielding game.'
              projectLink='https://github.com/choyiny/mobile-wizard'
            />
            <LinkCard
              bgColor='blue.500'
              projectName='Flask API Starter'
              projectDescription='Boilerplate for building REST APIs in Flask with Blueprints and MongoDB.'
              projectLink='https://github.com/choyiny/flask-api-starter'
            />
          </Grid>
        </Box>
      </DisplayContainer>
    </Layout>
  )
}

export default IndexPage
