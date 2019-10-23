import React from "react"
import Layout from "../components/layout"
export default ({ pageContext: { edge } }) => (
  <Layout>
    <h1>{edge.node.title}</h1>
  </Layout>
)