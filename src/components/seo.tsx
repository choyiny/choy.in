import * as React from "react";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const faviconSrc = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🔥</text></svg>`;

export default function Seo({ title, description, children }) {
  const siteMetadata = useSiteMetadata();
  const { href } = useLocation();

  const seo = {
    title: title || siteMetadata.titleDefault,
    description: description || siteMetadata.description,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.titleDefault}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang="en-CA" />
      <meta name="description" content={siteMetadata.description} />
      <meta name="author" content="Cho Yin Yong" />
      <link rel="icon" type="image/svg+xml" href={faviconSrc} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={href} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:see_also" content="https://github.com/choyiny" />
      <meta property="og:see_also" content="https://linkedin.com/in/choyiny" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={href} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="msapplication-TileColor" content="#0f172a" />
      {children}
    </Helmet>
  );
}
