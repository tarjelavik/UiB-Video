// const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
  {
    kaltura: allKaltura {
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
          thumbnailUrl
          dataUrl
          id
        }
      }
    }
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
    tivoli: allVideoproduksjonTivoliCsv {
      totalCount
      edges {
        node {
          id
          accesslevel
          tags
          archivedDate
          audioTechnician
          client
          description
          directorOfPhotography
          duration
          format
          identifier
          internalNote
          location
          mediaType
          person
          producer
          productionPeriod
          recordedDate
          rightsholder
          source
          title
        }
      }
    }
    mastertape: allVideoproduksjonMastertapeCsv {
      totalCount
      edges {
        node {
          accessLevel
          client
          description
          digitizedFromFormat
          duration
          generation
          id
          identifier
          internalNote
          mediaType
          person
          producer
          recordedDate
          rightsholder
          source
          title
        }
      }
    }
    sanityMovies: allSanityMovie {
      edges {
        node {
          title
          _rawOverview
          rightsholder {
            ... on SanityPerson {
              id
              name
            }
            ... on SanityOrganization {
              id
              name
            }
          }
          identifier
          id
          duration
          crewMembers {
            job
            person {
              name
            }
          }
          created
          employer {
            ... on SanityPerson {
              id
              name
            }
            ... on SanityOrganization {
              id
              name
            }
          }
        }
      }
      totalCount
    }
  }
  `)

  if (result.errors) throw result.errors

  const sanityMovies = (result.data.sanityMovies || {}).edges || []
  const youtube = (result.data.youtube || {}).edges || []
  const vimeo = (result.data.vimeo || {}).edges || []
  const tivoli = (result.data.tivoli || {}).edges || []
  const mastertape = (result.data.mastertape || {}).edges || []
  const kaltura = (result.data.kaltura || {}).edges || []

  sanityMovies
    .forEach(edge => {
      const id = edge.node.id
      // const slug = edge.node.slug.current
      const path = `/movies/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/sanityMovies.js'),
        context: {edge}
      })
    })

  youtube
    .forEach(edge => {
      const id = edge.node.videoId
      // const slug = edge.node.slug.current
      const path = `/youtube/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/youtube.js'),
        context: {edge}
      })
    })

  vimeo
    .forEach(edge => {
      const id = edge.node.id
      // const slug = edge.node.slug.current
      const path = `/vimeo/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/vimeo.js'),
        context: {edge}
      })
    })

  mastertape
    .forEach(edge => {
      const id = edge.node.id
      // const slug = edge.node.slug.current
      const path = `/mastertape/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/mastertape.js'),
        context: {edge}
      })
    })

  tivoli
    .forEach(edge => {
      const id = edge.node.id
      // const slug = edge.node.slug.current
      const path = `/tivoli/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/tivoli.js'),
        context: {edge}
      })
    })

  kaltura
    .forEach(edge => {
      const id = edge.node.rootEntryId
      // const slug = edge.node.slug.current
      const path = `/kaltura/${id}/`

      reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/kaltura.js'),
        context: {edge}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createProjectPages(graphql, actions, reporter)
}
