import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>
      Robert Toole here and this is where I air out all of my daily thoughts on
      things I had learned throughout the day based on web development. Although
      is a personal blog, this is public and I do hope that someone can gain
      something whether that's knowledge, clarification, or understanding on a
      specific topic. I'll chronicle my journey of knowing very little html/css
      to hopefully many more languages and frameworks.
    </p>

    <Link to="/page-2/"></Link>
  </Layout>
)

export default AboutPage
