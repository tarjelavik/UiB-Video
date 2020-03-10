import React from "react"
import Layout from "../components/layout"
import Moment from "react-moment"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <h1>{edge.node.name}</h1>
    <iframe type="text/javascript" src={edge.node.dataUrl}
      style={{width: `640px`, height: `360px`}} allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0">
    </iframe>
    <p><Moment format="DD MMMM YYYY" unix>{edge.node.createdAt}</Moment></p>
    <p>{edge.node.description}</p>
    {edge.node.tags ? edge.node.tags.split(', ').map((tag) => <span style={{border: `solid 1px black`, borderRadius: `4px`, padding: `0 4px`, margin: `4px`, lineHeight: `2`, wordBreak: `keep-all`, display: `inline-block`}} key={tag}>{tag}</span>): ''}
  </Layout>
)

/* 
    kaltura: allKaltura(sort: {fields: rootEntryId}) {
      totalCount
      edges {
        node {
          tags
          rootEntryId
          name
          duration
          categories
          createdAt
          description
          id
        }
      }
    }
*/