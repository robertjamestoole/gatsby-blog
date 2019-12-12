import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Blog</h1>
    <p>
      Feel free to browse the blog and let me know if it helped you or any
      comments you might have via email or contact form.
    </p>

    <Link to="/page-2/"></Link>
  </Layout>
)

export default IndexPage
