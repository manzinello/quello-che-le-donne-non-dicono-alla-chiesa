import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import Rassegna from "../components/rassegna"
import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
    <Rassegna />
  </Layout>
)

export default IndexPage
