import * as React from "react"
import { Helmet } from "react-helmet"
import {useSiteMetadata} from "../hooks/use-site-metadata";


const faviconSrc = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🔥</text></svg>`

export default function Seo({ }) {
  const siteMetadata = useSiteMetadata()

  return (
    <Helmet title={siteMetadata.titleDefault}>
      <html lang="en-CA" />
      <meta name="description" content={siteMetadata.description} />
      <link rel="icon" type="image/svg+xml" href={faviconSrc} />
      <meta property="og:title" content={siteMetadata.titleDefault} />
      <meta property="og:type" content="website" />
      <meta property="og:see_also" content="https://github.com/choyiny" />
      <meta property="og:see_also" content="https://linkedin.com/in/choyiny" />
      <meta name="msapplication-TileColor" content="#0f172a" />
    </Helmet>
  )
}