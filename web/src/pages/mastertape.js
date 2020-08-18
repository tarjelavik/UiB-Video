import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MastertapePage = ({ data }) => (
  <Layout>
    <SEO title="Mastertape" />
    <h1>UiBs Mastertapes / {data.allVideoproduksjonMastertapeCsv.totalCount}</h1>
    
    <table style={{ maxWidth: `960px`, overflowX: `scroll`, display: `block`}}>
      <tr>
        <th>identifier</th>
        <th>title</th>
        <th>description</th>
        {/* <th>Produsent</th>
        <th>Personer</th>
        <th>Oppdragsgiver</th>
        <th>Rettigheter</th>
        <th>Tid</th>
        <th>Format</th>
        <th>Generasjon</th>
        <th>Dato</th>
        <th>Merknader</th> */}
      </tr>
      {data.allVideoproduksjonMastertapeCsv.nodes.map((node, index) => (
        <tr key={index}>
          <td><Link to={`/mastertape/${node.id}`}>{node.identifier}</Link></td>
          <td>{node.title}</td>
          <td>{node.description}</td>
          {/* <td>{node.Produsent}</td>
          <td>{node.Personer}</td>
          <td>{node.Oppdragsgiver}</td>
          <td>{node.Rettigheter}</td>
          <td>{node.Tid}</td>
          <td>{node.Format}</td>
          <td>{node.Generasjon}</td>
          <td>{node.Dato}</td>
          <td>{node.Merknader}</td> */}
        </tr>
      ))}
    </table>
    
  </Layout>
)

export default MastertapePage

export const data = graphql`
query mastertape {
  allVideoproduksjonMastertapeCsv(sort: {fields: identifier, order: DESC}) {
    nodes {
      accessLevel
      client
      description
      digitizedFromFormat
      duration
      generation
      id
      identifier
      internalNote
      mediaType
      person
      producer
      recordedDate
      rightsholder
      source
      title
    }
    totalCount
  }
}`
