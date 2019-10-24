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
    tivoli: allVideoproduksjonDigitaliseringTivoliCsv {
      totalCount
      edges {
        node {
          Arkivert
          Arkivert_Billy
          Emne
          Format
          Foto
          Innhold
          Lengde
          Lyd
          Oppdragsgiver
          Opptaksted
          Personer
          Prod_dato
          Produsent_Regi
          Programtittel
          Ref
          Rettigheter
          id
        }
      }
    }
    mastertape:allVideoproduksjonDigitaliseringMastertapeCsv {
      totalCount
      edges {
        node {
          Dato
          Format
          Generasjon
          Innhold
          Merknader
          Oppdragsgiver
          Personer
          Produsent
          Programtittel
          Rettigheter
          Tape_nr
          Tid
          id
        }
      }
    }
    sanity: allSanityMovie {
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
          client {
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

  const sanity = (result.data.sanity || {}).edges || []
  const youtube = (result.data.youtube || {}).edges || []
  const vimeo = (result.data.vimeo || {}).edges || []
  const tivoli = (result.data.tivoli || {}).edges || []
  const mastertape = (result.data.mastertape || {}).edges || []
  const kaltura = (result.data.kaltura || {}).edges || []

  sanity
    .forEach(edge => {
      const id = edge.node.id
      // const slug = edge.node.slug.current
      const path = `/sanity/${id}/`

      // reporter.info(`Creating project page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/sanity.js'),
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
