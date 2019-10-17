import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import style from "../components/general.module.css"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Oversikt over UiBs videoer</h1>
    <p>Målet er å samle sammen metadata og embedde video fra de eksterne tjenestene UiB benytter for distribusjon av video. Forhåpentligvis kan også regnearket med videoer også komme med her.</p>
    
    <Link to="/youtube">
      <div className={style.countCard} style={{ backgroundColor: `#7ec9c7` }}>
        <h2>Youtube</h2>
        <h3>{data.allYoutubeVideo.totalCount}</h3>
      </div>
    </Link>
    <Link to="/vimeo">
      <div className={style.countCard} style={{ backgroundColor: `#f39e5f` }}>
        <h2>Vimeo</h2>
        <h3>{data.allVimeoVideo.totalCount}</h3>
      </div>
    </Link>
    <Link to="/digitalisering">
      <div className={style.countCard} style={{ backgroundColor: `#eb91ba` }}>
        <h2>Mastertape</h2>
        <h3>{data.allVideoproduksjonDigitaliseringMastertapeCsv.totalCount}</h3>
      </div>
    </Link>
    <Link to="/digitalisering">
      <div className={style.countCard} style={{ backgroundColor: `#ec6915` }}>
        <h2>Tivoli</h2>
        <h3>{data.allVideoproduksjonDigitaliseringTivoliCsv.totalCount}</h3>
        </div>
    </Link>
  </Layout>
)

export const query = graphql`
  {
    allVideoproduksjonDigitaliseringTivoliCsv {
      totalCount
    }
    allVideoproduksjonDigitaliseringMastertapeCsv {
      totalCount
    }
    allVimeoVideo {
      totalCount
    }
    allYoutubeVideo {
      totalCount
    }
  }
`

export default IndexPage
