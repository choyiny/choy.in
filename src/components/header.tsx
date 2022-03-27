import React from "react"
import Navigation from "./navigation";
import Seo from "./seo";

export default function Header({ activePage }) {
  return (
    <>
      <Seo/>
      <Navigation/>
    </>
  )
}