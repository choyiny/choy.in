import * as React from "react"
import {Flex, Stack, Text, Image, Spacer, Link} from "@chakra-ui/react";
import {DisplayContainer} from "./display-container";

// @ts-ignore
import Me from "../../static/me.jpeg";

export default function Hero() {
  return (
    <DisplayContainer variant={'hero'}>
      <Flex mb='5em' flexWrap='wrap' flexDirection={{sm: 'column-reverse', md: 'row'}} align={{sm: 'center'}}>
        <Stack flex={9}>
          <Text
            fontSize='4xl'
            fontWeight='bold'
            bgGradient='linear(to-l, #0093E9, #80D0C7)'
            bgClip='text'
            lineHeight='normal'
            textAlign={{sm: 'center', md: 'left'}}
          >
            Hi, I'm Cho Yin Yong.
          </Text>
          <Text
            fontSize='3xl'
            fontWeight='semibold'
            bgGradient='linear(to-l, #0093E9, #80D0C7)'
            bgClip='text'
            textAlign={{sm: 'center', md: 'left'}}
          >
            I lead Development Innovation at <Link isExternal={true} href='https://verto.health'>Verto Health</Link>.<br/>
          </Text>
          <Text textAlign='justify'>
            I'm part of the team that enabled over 6 million vaccination appointments to be made across Ontario through regional and hospital partners.
            I am an entrepreneur at heart - I have won the <Link isExternal={true} textDecoration='underline' href='https://entrepreneurs.utoronto.ca/2020-lo-family-social-venture-fund-award-winners/'>UofT Lo Family Social Venture Fund</Link> with <Link isExternal={true} textDecoration='underline' href='https://pickeasy.ca'>PickEasy</Link> and
            helped modernize restaurants with digital menus amid the pandemic.
            I also love teaching, and currently teach <Link isExternal={true} textDecoration='underline' href='https://cscc09.com'>Programming on the Web</Link> at the University of Toronto, a third-year computer science course.
          </Text>
        </Stack>
        <Spacer flex={1}/>
        <Image
          flex={2}
          borderRadius='full'
          boxSize='200px'
          src={Me}
          alt='Cho Yin Yong'
          mb={{sm: 5}}
          alignItems='center'
        />
      </Flex>
    </DisplayContainer>
  )
}
