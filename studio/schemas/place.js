import icon from 'react-icons/lib/md/place'

export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: ''
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      title: 'Geoposition',
      name: 'location',
      type: 'geopoint'
    }
  ],
  preview: {
    select: {title: 'name', media: 'image'}
  }
}
