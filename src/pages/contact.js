import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            <input type="text" name="name" placeholder="Name" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message" placeholder="Message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </Layout>
)

export default ContactPage
