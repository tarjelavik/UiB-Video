import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const VimeoPage = ({ data }) => (
  <Layout>
    <SEO title="Vimeo" />
    <h1>UiBs videoer på Vimeo / {data.allVimeoVideo.totalCount}</h1>
    
    <div>
      {data.allVimeoVideo.nodes.map((node, index) => (
        <div style={{ width: `100%`, display: `flex`}} key={index}>
          <div>
            <img style={{ width: `400px`, maxHeight: `250px`}}  src={node.thumbnail.medium} alt={node.title} />
            <div>
              <ul>
                <li>Kanal: {node.user.name}</li>
                <li>{node.date}</li>
                <li>{node.duration} sek.</li>
                <li>ID: <a href={`https://vimeo.com/${node.id}`}>{node.id}</a></li>
              </ul>
            </div>
          </div>
          <div style={{ paddingLeft: `1em`}}>
            <h2><a href={`https://vimeo.com/${node.id}`}>{node.title}</a></h2>
            <p>{node.description}</p>
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