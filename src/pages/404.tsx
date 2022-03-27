import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout activePage={'404'}>
      <h1>404 Not Found</h1>
    </Layout>
  )
}

export default NotFoundPage
