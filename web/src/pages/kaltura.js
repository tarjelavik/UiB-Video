import React from "react"
import { graphql, Link } from "gatsby"
import Moment from 'react-moment';

import Layout from "../components/layout"
import SEO from "../components/seo"

const KalturaPage = ({ data }) => (
  <Layout>
    <SEO title="Kaltura" />
    <h1>UiBs videoer på Kaltura / {data.allKaltura.totalCount}</h1>
    
    <div style={{ display: `flex`, flexDirection: `column`}}>
      {data.allKaltura.nodes.map((node, index) => (
        <div style={{ paddingBottom: `1em`, width: `100%`, display: `flex`, alignItems: `flex-start`}} key={index}>
          <div style={{alignSelf: `flex-start`, width: `40%`}}>
            <Link to={`/kaltura/${node.rootEntryId}`}><img style={{ width: `100%`}} src={node.thumbnailUrl} alt={node.name} /></Link>
            <div>
              <ul>
                <li>Kanal: {node.categories}</li>
                <li><Moment format="DD.MM.YYYY" unix>{node.createdAt}</Moment></li>
                <li>{node.rootEntryId}</li>
              </ul>
            </div>
          </div>
          {/* <img style={{ width: `300px`}} src={node.localThumbnail.childImageSharp.fluid.src} alt={node.title} /> */}
          <div style={{ width: `60%`, paddingLeft: `1em`}}>
            <h2><Link to={`/kaltura/${node.rootEntryId}`}>{node.name}</Link></h2>
            <p>{node.description ? node.description : '' }</p>
            {node.tags ? node.tags.split(', ').map((tag) => <span style={{border: `solid 1px black`, borderRadius: `4px`, padding: `0 4px`, margin: `4px`, lineHeight: `2`, wordBreak: `keep-all`, display: `inline-block`}} key={tag}>{tag}</span>): ''}
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
      rootEntryId
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