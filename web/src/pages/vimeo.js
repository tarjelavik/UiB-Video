import React from "react"
import { graphql, Link } from "gatsby"
import Moment from "react-moment"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const VimeoPage = ({ data }) => (
  <Layout>
    <SEO title="Vimeo" />
    <h1>UiBs videoer på Vimeo / {data.allVimeoVideo.totalCount}</h1>
    
    <div style={{ display: `flex`, flexDirection: `column`}}>
      {data.allVimeoVideo.nodes.map((node, index) => (
        <div style={{ paddingBottom: `1em`, width: `100%`, display: `flex`, alignItems: `flex-start`}} key={index}>
          <div style={{alignSelf: `flex-start`, width: `40%`}}>
            <Link to={`/vimeo/${node.id}`}><img style={{ width: `100%`, maxHeight: `250px`}}  src={node.thumbnail.medium} alt={node.title} /></Link>
          </div>
          <div style={{ paddingLeft: `1em`, width: `60%`}}>
            <h2><Link to={`/vimeo/${node.id}`}>{node.title}</Link></h2>
            <p>{node.description}</p>
            <ul>
                <li>Kanal: {node.user.name}</li>
                <li><Moment format="DD.MM.YYYY">{node.date}</Moment></li>
                <li>{node.duration} sek.</li>
                <li>ID: <a href={`https://vimeo.com/${node.id}`}>{node.id}</a></li>
              </ul>
          </div>
        </div>
      ))}
    </div>
    
  </Layout>
)

export default VimeoPage

export const data = graphql`
{
  allVimeoVideo(sort: {fields: date, order: DESC}) {
    totalCount
    nodes {
      user {
        name
        url
      }
      url
      title
      description
      date
      thumbnail {
        medium
      }
      iframe
      id
      duration
    }
  }
}`