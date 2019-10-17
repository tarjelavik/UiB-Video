import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const TivoliPage = ({ data }) => (
  <Layout>
    <SEO title="Tivoli" />
    <h1>UiBs videoer i Tivoli / {data.allVideoproduksjonDigitaliseringTivoliCsv.totalCount}</h1>
    
    <table style={{ maxWidth: `960px`, overflowX: `scroll`, display: `block`}}>
      <tr>
        <th>Ref</th>
        <th>Programtittel</th>
        <th>Innhold</th>
        <th>Produsent_Regi</th>
        <th>Personer</th>
        <th>Oppdragsgiver</th>
        <th>Rettigheter</th>
        <th>Lengde</th>
        <th>Lyd</th>
        <th>Format</th>
        <th>Foto</th>
        <th>Prod_dato</th>
        <th>Opptaksted</th>
        <th>Emne</th>
        <th>Arkivert</th>
        <th>Arkivert_Billy</th>
      </tr>
      {data.allVideoproduksjonDigitaliseringTivoliCsv.nodes.map((node, index) => (
        <tr key={index}>
          <td>{node.Ref}</td>
          <td>{node.Programtittel}</td>
          <td>{node.Innhold}</td>
          <td>{node.Produsent_Regi}</td>
          <td>{node.Personer}</td>
          <td>{node.Oppdragsgiver}</td>
          <td>{node.Rettigheter}</td>
          <td>{node.Lengde}</td>
          <td>{node.Lyd}</td>
          <td>{node.Format}</td>
          <td>{node.Foto}</td>
          <td>{node.Prod_dato}</td>
          <td>{node.Opptaksted}</td>
          <td>{node.Emne}</td>
          <td>{node.Arkivert}</td>
          <td>{node.Arkivert_Billy}</td>
        </tr>
      ))}
    </table>
    
  </Layout>
)

export default TivoliPage

export const data = graphql`
query tivoli {
  allVideoproduksjonDigitaliseringTivoliCsv(sort: {fields: Prod_dato, order: DESC}) {
    nodes {
      Ref
      Programtittel
      Innhold
      Produsent_Regi
      Personer
      Oppdragsgiver
      Rettigheter
      Lengde
      Lyd
      Format
      Foto
      Prod_dato
      Opptaksted
      Emne
      Arkivert
      Arkivert_Billy
    }
    totalCount
  }
}`
