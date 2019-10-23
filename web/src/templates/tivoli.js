import React from "react"
import Layout from "../components/layout"
import Moment from "react-moment"
import SEO from "../components/seo"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <SEO title="Tivoli" />
              
    <h1>{edge.node.Programtittel}</h1>
    <h2>Ref: {edge.node.Ref}</h2>
    <p>{edge.node.Prod_dato}</p>
    <p>{edge.node.Innhold}</p>
    <p>{edge.node.Emne}</p>
    <p>{edge.node.Opptaksted}</p>
    <ul>
      <li>Produsent_Regi: {edge.node.Produsent_Regi}</li>
      <li>Personer: {edge.node.Personer}</li>
      <li>Oppdragsgiver: {edge.node.Oppdragsgiver}</li>
      <li>Foto: {edge.node.Foto}</li>
    </ul>
    <ul>
      <li>Rettigheter: {edge.node.Rettigheter}</li>
      <li>Lengde: {edge.node.Lengde}</li>
      <li>Lyd: {edge.node.Lyd}</li>
      <li>Format: {edge.node.Format}</li>
      <li>Arkivert: {edge.node.Arkivert}</li>
      <li>Arkivert_Billy: {edge.node.Arkivert_Billy}</li>
    </ul>
    
  </Layout>
)

/* 
vimeo: allVimeoVideo {
      totalCount
      edges {
        node {
          date
          description
          duration
          url
          title
          iframe
          id
        }
      }
    }
*/