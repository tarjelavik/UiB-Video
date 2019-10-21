import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KalturaPage = ({ data }) => (
  <Layout>
    <SEO title="Kaltura" />
    <h1>UiBs videoer på Kaltura / {data.allKaltura.totalCount}</h1>
    
    <div style={{ display: `flex`, flexDirection: `column`}}>
      {data.allKaltura.nodes.map((node, index) => (
        <div style={{ paddingBottom: `1em`, width: `100%`, display: `flex`, alignItems: `flex-start`}} key={index}>
          <div style={{alignSelf: `flex-start`}}>
          <img style={{ width: `400px`, maxHeight: `250px`}}  src={node.thumbnailUrl} alt={node.name} />
            <div>
              <ul>
                <li>Kanal: {node.categories}</li>
                <li>{node.createdAt}</li>
                <li>{node.id}</li>
              </ul>
            </div>
          </div>
          {/* <img style={{ width: `300px`}} src={node.localThumbnail.childImageSharp.fluid.src} alt={node.title} /> */}
          <div style={{ paddingLeft: `1em`}}>
            <h2>{node.name}</h2>
            <p>{node.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default KalturaPage

export const data = graphql`
{
  allKaltura {
    nodes {
      id
      name
      description
      createdAt
      downloadUrl
      thumbnailUrl
      tags
      status
      sourceType
      searchText
      rootEntryId
      partnerId
      partnerSortValue
      objectType
      mediaType
      licenseType
      dataUrl
      categories
      capabilities
    }
    totalCount
  }
}`