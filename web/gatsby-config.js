// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `UiB Video`,
    description: `Oversikt over UiB videoer publisert på YouTube og Vimeo.`,
    author: `@tarjelavik`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-kaltura',
      options: {
        token: process.env.GATSBY_KALTURA_TOKEN,
        userid: 'tarje.lavik@uib.no',
        partnerid: '355',
        pageSize: 1000,
        privileges: ''
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCsZUur3SucrmTiECYZvuLlw'],
        apiKey: process.env.GATSBY_YOUTUBE_TOKEN,
        maxVideos: 500 // Defaults to 50
      },
    },
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: process.env.GATSBY_VIMEO_CLIENTID,
        clientSecret: process.env.GATSBY_VIMEO_TOKEN,
        userID: 'uib',
        // searchQuery: 'INSERT_SEARCH_QUERY [OPTIONAL]',
        transformer (video) {
          // Transform the video data [OPTIONAL]
          // i.e. Add extra fields or alter existing field
          video.newField = 'value'
          return video
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ]
}
