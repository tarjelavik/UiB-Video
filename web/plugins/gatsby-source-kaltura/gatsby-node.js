const kaltura = require('kaltura-client')

const config = new kaltura.Configuration()
const client = new kaltura.Client(config)

const type = kaltura.enums.SessionType.ADMIN
const expiry = 86400

config.serviceUrl = 'https://www.kaltura.com'

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}, pluginOptions) => {
  const {createNode} = actions
  // Create nodes here, generally by downloading data
  // from a remote API.
  let token = pluginOptions.token
  let userid = pluginOptions.userid
  let partnerid = pluginOptions.partnerid
  let pageSize = pluginOptions.pageSize
  let privileges = pluginOptions.privileges

  function getdata (req, result) {
    return new Promise((resolve, reject) => {
      kaltura.services.session.start(
        token,
        userid,
        type,
        partnerid,
        expiry,
        privileges)
        .completion((success, ks) => {
          if (!success) throw new Error(ks.message)
          client.setKs(ks)

          let filter = new kaltura.objects.MediaEntryFilter()
          let pager = new kaltura.objects.FilterPager()
          pager.pageSize = pageSize

          kaltura.services.media.listAction(filter, pager)
            .execute(client)
            .then(result => {
              resolve(result)
            })
        })
        .execute(client)
    })
  };

  let data = await getdata()

  // Process data into nodes.
  data.objects.forEach(item => {
    const nodeMetadata = {
      id: createNodeId(`kaltura-${item.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Kaltura',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item)
      }
    }

    const node = Object.assign({}, item, nodeMetadata)
    createNode(node)
  })
  // We're done, return.
}
