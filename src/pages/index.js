import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Blog</h1>
    <p>This is a Blog about what I am learning in Web Development.</p>

    <Link to="/page-2/"></Link>
  </Layout>
)

export default IndexPage
