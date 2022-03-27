import React from "react"
import Header from "./header";
import {Footer} from "./footer";
import {DisplayContainer} from "./display-container";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";

export default function Layout({ children, activePage }) {
  return (
    <ChakraProvider theme={theme}>
      <Header activePage={activePage}/>
      <main>{ children }</main>
      <Footer/>
    </ChakraProvider>
  )
}