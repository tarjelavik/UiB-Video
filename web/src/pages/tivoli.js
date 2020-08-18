import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const TivoliPage = ({ data }) => (
  <Layout>
    <SEO title="Tivoli" />
    <h1>UiBs videoer i Tivoli / {data.allVideoproduksjonTivoliCsv.totalCount}</h1>

    {data.allVideoproduksjonTivoliCsv.nodes.map((node, index) => (
      <article>
        <h1>{node.title || "Ingen tittel"}</h1>
        <p>{node.description}</p>
        <p>{node.internalNote}</p>
        <p>{node.accesslevel}</p>
        <p>{node.archivedDate}</p>
        <p>{node.audioTechnician}</p>
        <p>{node.client}</p>
        <p>{node.directorOfPhotography}</p>
        <p>{node.duration}</p>
        <p>{node.format}</p>
        <p>{node.id}</p>
        <p>{node.location}</p>
        <p>{node.mediaType}</p>
        <p>{node.person}</p>
        <p>{node.producer}</p>
        <p>{node.productionPeriod}</p>
        <p>{node.recordedDate}</p>
        <p>{node.rightsholder}</p>
        <p>{node.source}</p>
        <p>{node.tags}</p>
        <p>{node.title}</p>
      </article>
    ))}
    
  </Layout>
)

export default TivoliPage

export const data = graphql`
query tivoli {
  allVideoproduksjonTivoliCsv(sort: {fields: identifier, order: DESC}) {
    nodes {
      accesslevel
      archivedDate
      audioTechnician
      client
      description
      directorOfPhotography
      duration
      format
      id
      identifier
      internalNote
      location
      mediaType
      person
      producer
      productionPeriod
      recordedDate
      rightsholder
      source
      tags
      title
    }
    totalCount
  }
}`
