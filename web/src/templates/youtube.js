import React from "react"
import Layout from "../components/layout"
import ReactYoutube from "react-youtube-lazy"
import Moment from "react-moment"

export default ({ pageContext: { edge } }) => (
  <Layout>
    <h1>{edge.node.title}</h1>
    <p><Moment format="DD MMMM YYYY" locale="no">{edge.node.publishedAt}</Moment></p>
    <ReactYoutube videoID={edge.node.videoId} width={800}/>
    <p>{edge.node.description}</p>
  </Layout>
)

/* 
    youtube: allYoutubeVideo {
      edges {
        node {
          videoId
          title
          publishedAt
          originalID
          localThumbnail {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          description
          channelTitle
          id
        }
      }
      totalCount
    }
     */