import * as React from "react";
import { Box, Divider, Flex, HStack, Link, Spacer } from "@chakra-ui/react";
import { DisplayContainer } from "./display-container";
import { BsGithub, BsLinkedin } from "react-icons/all";

export const Footer = () => {
  return (
    <DisplayContainer>
      <Divider />
      <Box as="footer" py="16px" role="contentinfo">
        <Flex
          flexDirection={[`column`, `row`]}
          textAlign="center"
          alignItems="center"
          justifyContent="space-between"
        >
          <div>
            &copy; {new Date().getFullYear()} by Cho Yin Yong. Made in Toronto.
          </div>
          {/*<Spacer/>*/}
          {/*<HStack spacing={[`4`, `8`]}>*/}
          {/*  <Link href='https://github.com/choyiny'>*/}
          {/*    <BsGithub/>*/}
          {/*  </Link>*/}
          {/*  <Link href='https://linkedin.com/in/choyiny'>*/}
          {/*    <BsLinkedin/>*/}
          {/*  </Link>*/}
          {/*</HStack>*/}
        </Flex>
      </Box>
    </DisplayContainer>
  );
};
