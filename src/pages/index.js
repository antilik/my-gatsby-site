import * as React from "react";

import { StaticImage } from 'gatsby-plugin-image'

import Layout from "../layouts/layout";
import Seo from "../components/seo";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// const headingAccentStyles = {
//   color: "#663399",
// }

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle={'Home page'}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/inspiration.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title={'Home Page'}/>

export default IndexPage
