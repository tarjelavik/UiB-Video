import React from "react"
import { graphql , Link} from "gatsby"
// import ReactYoutube from "react-youtube-lazy"

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
          {node.localThumbnail && node.localThumbnail.childImageSharp.fluid.src && (<div style={{alignSelf: `flex-start`, width: `40%`}}>
            <Link to={`/youtube/${node.videoId}`}><img style={{ width: `300px`}} src={node.localThumbnail.childImageSharp.fluid.src} alt={node.title} /></Link>
          </div>)}
          <div style={{ paddingLeft: `1em`, width: `60%`}}>
            <h2><Link to={`/youtube/${node.videoId}`}>{node.title}</Link></h2>
            <p>{node.description}</p>
            <ul>
                <li>Kanal: {node.channelTitle}</li>
                <li>{node.publishedAt}</li>
                <li>ID: <a href={`https://www.youtube.com/watch?v=${node.videoId}`}>{node.videoId}</a></li>
              </ul>
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
