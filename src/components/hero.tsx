import * as React from "react";
import { Flex, Stack, Text, Image, Spacer, Link } from "@chakra-ui/react";
import { DisplayContainer } from "./display-container";

// @ts-ignore
import Me from "../../static/me.jpeg";

export default function Hero() {
  return (
    <DisplayContainer variant={"hero"}>
      <Flex
        mb="5em"
        flexWrap="wrap"
        flexDirection={{ sm: "column-reverse", md: "row" }}
        align={{ sm: "center" }}
      >
        <Stack flex={9}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-l, #0093E9, #80D0C7)"
            bgClip="text"
            lineHeight="normal"
            textAlign={{ sm: "center", md: "left" }}
          >
            Hi, I'm Cho Yin Yong.
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            bgGradient="linear(to-l, #0093E9, #80D0C7)"
            bgClip="text"
            textAlign={{ sm: "center", md: "left" }}
          >
            I lead Development Innovation at{" "}
            <Link isExternal={true} href="https://verto.health">
              Verto Health
            </Link>
            .<br />
          </Text>
          <Text textAlign="justify">
            I lead innovation with a vision-driven development approach. With 6
            years of growing with a Healthcare AI startup and co-founding an{" "}
            <Link
              isExternal={true}
              textDecoration="underline"
              href="https://entrepreneurs.utoronto.ca/2020-lo-family-social-venture-fund-award-winners/"
            >
              award-winning side hustle
            </Link>
            , my unique experience of working on timeline-sensitive projects and
            leading province-wide enterprise deployments in the healthcare
            domain has allowed me to master the end-to-end workflow of running
            software projects. I am also a lecturer at the University of Toronto
            teaching several upper-year undergraduate computer science courses,
            ranging from{" "}
            <Link
              isExternal={true}
              textDecoration="underline"
              href="https://cscd01.com"
            >
              enterprise software architecture
            </Link>{" "}
            to{" "}
            <Link
              isExternal={true}
              textDecoration="underline"
              href="https://cscc09.com"
            >
              full-stack web development
            </Link>
            .
          </Text>
        </Stack>
        <Spacer flex={1} />
        <Image
          flex={2}
          borderRadius="full"
          boxSize="200px"
          src={Me}
          alt="Cho Yin Yong"
          mb={{ sm: 5 }}
          alignItems="center"
        />
      </Flex>
    </DisplayContainer>
  );
}
