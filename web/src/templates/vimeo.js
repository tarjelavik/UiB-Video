import React from "react"
import Layout from "../components/layout"
import Vimeo from "@u-wave/react-vimeo";
import Moment from "react-moment"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <h1>{edge.node.title}</h1>
    <p><Moment format="DD MMMM YYYY">{edge.node.date}</Moment></p>
    <Vimeo
      video={edge.node.id}
      width="800"
    />
    <p>{edge.node.description}</p>
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