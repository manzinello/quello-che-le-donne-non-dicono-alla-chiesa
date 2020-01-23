import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Content from "../components/content";
import Presentazioni from "../components/presentazioni";
import PresentazioniPassate from "../components/presentazioni-passate";
import Rassegna from "../components/rassegna";
import CallToAction from "../components/cta";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
    {false && <Presentazioni />}
    <Rassegna />
    <br />
    <PresentazioniPassate />
  </Layout>
);

export default IndexPage;
