import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Banner img={data.homeBg.childImageSharp.fluid} />
    <h1>True</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    homeBg: file(relativePath: { eq: "home_bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
