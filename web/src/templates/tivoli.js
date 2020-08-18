import React from "react"
import Layout from "../components/layout"
import Moment from "react-moment"
import SEO from "../components/seo"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <SEO title="Tivoli" />
              
    <h1>{edge.node.title}</h1>
    <h2>Ref: {edge.node.identifier}</h2>
    <p>{edge.node.recordedDate}</p>
    <p>{edge.node.description}</p>
    <p>{edge.node.tags}</p>
    <p>{edge.node.location}</p>
    <ul>
      <li>Produsent_Regi: {edge.node.producer}</li>
      <li>Personer: {edge.node.person}</li>
      <li>Oppdragsgiver: {edge.node.client}</li>
      <li>Foto: {edge.node.directorOfPhotography}</li>
    </ul>
    <ul>
      <li>Rettigheter: {edge.node.rightsholder}</li>
      <li>Lengde: {edge.node.duration}</li>
      <li>Lyd: {edge.node.audioTechnician}</li>
      <li>Format: {edge.node.format}</li>
      <li>Intern note: {edge.node.internalNote}</li>
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