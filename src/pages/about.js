import * as React from 'react';

import Layout from "../layouts/layout";
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const headingAccentStyles = {
//   color: "#663399",
// }

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle={'About me'}>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/about.jpg"
      />
    </main>
  )
}

export const Head = () => <Seo title={'About me page'}/>

export default AboutPage
