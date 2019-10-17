import icon from 'react-icons/lib/md/videocam'

export default {
  name: 'tape',
  title: 'Tape/Carrier',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'identifier',
      title: 'ID',
      type: 'string'
    },
    {
      name: 'format',
      title: 'Format',
      type: 'reference',
      to: [
        {type: 'format'}
      ]
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string'
    },
    {
      name: 'carries',
      title: 'Contains title',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'movie'}
          ]
        }
      ]
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      identifier: 'identifier'
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: selection.identifier,
        media: selection.media
      }
    }
  }
}
