import React from "react";
import { Footer } from "./footer";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Seo from "./seo";
import Navigation from "./navigation";

export default function Layout({ children, activePage }) {
  return (
    <ChakraProvider theme={theme}>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
}
