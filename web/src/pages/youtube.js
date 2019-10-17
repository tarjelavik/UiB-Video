import React from "react"
import { graphql } from "gatsby"
import ReactYoutube from "react-youtube-lazy"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const YouTubePage = ({ data }) => (
  <Layout>
    <SEO title="Youtube" />
    <h1>UiBs videoer på YouTube / {data.allYoutubeVideo.totalCount}</h1>
    
    <div style={{ display: `flex`, flexDirection: `column`}}>
      {data.allYoutubeVideo.nodes.map((node, index) => (
        <div style={{ paddingBottom: `1em`, width: `100%`, display: `flex`, alignItems: `flex-start`}} key={index}>
          <div style={{alignSelf: `flex-start`}}>
            <ReactYoutube videoID={node.videoId} width={400} height={250} lazyLoad="true"/>
            <div>
              <ul>
                <li>Kanal: {node.channelTitle}</li>
                <li>{node.publishedAt}</li>
                <li>ID: <a href={`https://www.youtube.com/watch?v=${node.videoId}`}>{node.videoId}</a></li>
              </ul>
            </div>
          </div>
          {/* <img style={{ width: `300px`}} src={node.localThumbnail.childImageSharp.fluid.src} alt={node.title} /> */}
          <div style={{ paddingLeft: `1em`}}>
            <h2><a href={`https://www.youtube.com/watch?v=${node.videoId}`}>{node.title}</a></h2>
            <p>{node.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default YouTubePage

export const data = graphql`
{
  allYoutubeVideo(sort: {fields: publishedAt, order: DESC}) {
    totalCount
    nodes {
      channelTitle
      id
      title
      videoId
      localThumbnail {
        childImageSharp {
          fluid {
            src
            srcSet
          }
        }
      }
      # originalID
      description
      publishedAt(formatString: "DD.MM.YYYY")
    }
  }
}`