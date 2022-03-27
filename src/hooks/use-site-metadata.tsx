import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      description: string
      siteUrl: string
      title: string
      siteDescription: string
      titleDefault: string
    }
  }
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
          siteDescription
          titleDefault
        }
      }
    }
  `)

  return data.site.siteMetadata
}