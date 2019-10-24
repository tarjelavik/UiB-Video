# gatsby-source-kaltura

GATSBY_KALTURA_TOKEN

```json
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-kaltura',
      options: {
        token: process.env.GATSBY_KALTURA_TOKEN,
        userid: 'example@example.com',
        partnerid: '0000000'
      }
    }
  ]
}
```