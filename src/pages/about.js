import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quis
      quidem nesciunt eaque laudantium. Quaerat laboriosam officiis magnam
      debitis repellat?
    </p>

    <Link to="/page-2/"></Link>
  </Layout>
)

export default AboutPage
