import React from "react"
import Layout from "../components/layout"
import Moment from "react-moment"
import SEO from "../components/seo"

export default ({ pageContext: { edge } }) => (
  <Layout>
  <SEO title="Mastertape" />
  
  <div style={{ maxWidth: `960px`, overflowX: `scroll`, display: `block`}}>
    <h1>{edge.node.Programtittel}</h1>
    <h2>Tape_nr: {edge.node.Tape_nr}</h2>
    <p>{edge.node.Dato}</p>
    <p>{edge.node.Innhold}</p>
    <ul>
      <li>Produsent: {edge.node.Produsent}</li>
      <li>Personer: {edge.node.Personer}</li>
      <li>Oppdragsgiver: {edge.node.Oppdragsgiver}</li>
      <li>Rettigheter: {edge.node.Rettigheter}</li>
    </ul>
    <ul>
      <li>{edge.node.Tid}</li>
      <li>{edge.node.Format}</li>
      <li>{edge.node.Generasjon}</li>
    </ul>
    <p>{edge.node.Merknader}</p>
  </div>  
</Layout>
)
