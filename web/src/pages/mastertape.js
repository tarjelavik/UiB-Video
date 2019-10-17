import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MastertapePage = ({ data }) => (
  <Layout>
    <SEO title="Mastertape" />
    <h1>UiBs Mastertapes / {data.allVideoproduksjonDigitaliseringMastertapeCsv.totalCount}</h1>
    
    <table style={{ maxWidth: `960px`, overflowX: `scroll`, display: `block`}}>
      <tr>
        <th>Tape_nr</th>
        <th>Programtittel</th>
        <th>Innhold</th>
        <th>Produsent</th>
        <th>Personer</th>
        <th>Oppdragsgiver</th>
        <th>Rettigheter</th>
        <th>Tid</th>
        <th>Format</th>
        <th>Generasjon</th>
        <th>Dato</th>
        <th>Merknader</th>
      </tr>
      {data.allVideoproduksjonDigitaliseringMastertapeCsv.nodes.map((node, index) => (
        <tr key={index}>
          <td>{node.Tape_nr}</td>
          <td>{node.Programtittel}</td>
          <td>{node.Innhold}</td>
          <td>{node.Produsent}</td>
          <td>{node.Personer}</td>
          <td>{node.Oppdragsgiver}</td>
          <td>{node.Rettigheter}</td>
          <td>{node.Tid}</td>
          <td>{node.Format}</td>
          <td>{node.Generasjon}</td>
          <td>{node.Dato}</td>
          <td>{node.Merknader}</td>
        </tr>
      ))}
    </table>
    
  </Layout>
)

export default MastertapePage

export const data = graphql`
query mastertape {
  allVideoproduksjonDigitaliseringMastertapeCsv(sort: {fields: Dato, order: DESC}) {
    nodes {
      Tape_nr
      Programtittel
      Innhold
      Produsent
      Personer
      Oppdragsgiver
      Rettigheter
      Tid
      Format
      Generasjon
      Dato
      Merknader
    }
    totalCount
  }
}`
