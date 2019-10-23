import React from "react"
import Layout from "../components/layout"
import Vimeo from "@u-wave/react-vimeo";
import Moment from "react-moment"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <h1>{edge.node.name}</h1>
    <p><Moment format="DD MMMM YYYY" unix>{edge.node.createdAt}</Moment></p>
    <p>{edge.node.description}</p>
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