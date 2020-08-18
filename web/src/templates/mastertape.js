import React from "react"
import Layout from "../components/layout"
import Moment from "react-moment"
import SEO from "../components/seo"

export default ({ pageContext: { edge } }) => (
  <Layout>
  <SEO title="Mastertape" />
  
  <div style={{ maxWidth: `960px`, overflowX: `scroll`, display: `block`}}>
    <h1>{edge.node.title}</h1>
    <h2>Tape_nr: {edge.node.identifier}</h2>
    <p>{edge.node.Dato}</p>
    <p>{edge.node.Innhold}</p>
    <ul>
      <li>Produsent: {edge.node.producer}</li>
      <li>Personer: {edge.node.person}</li>
      <li>Oppdragsgiver: {edge.node.client}</li>
      <li>Rettigheter: {edge.node.rightsholder}</li>
    </ul>
    <ul>
      <li>{edge.node.duration}</li>
      <li>{edge.node.format}</li>
      <li>{edge.node.generation}</li>
    </ul>
    <p>{edge.node.description}</p>
  </div>  
</Layout>
)
