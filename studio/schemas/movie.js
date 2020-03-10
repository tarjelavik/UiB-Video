import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'movie',
  title: 'Movie',
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
      name: 'source',
      title: 'Kilde',
      type: 'string'
    },
    {
      name: 'created',
      title: 'Date of creation',
      type: 'datetime'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string'
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{type: 'castMember'}]
    },
    {
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{type: 'crewMember'}]
    },
    {
      name: 'rightsholder',
      title: 'Rights holder',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'employer',
      title: 'Oppdragsgiver',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'audioTechnician',
      title: 'Lydteknikker',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'directorOfPhotography',
      title: 'Foto',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'producerOrDirector',
      title: 'Produsent/Regi',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'shownPerson',
      title: 'Vist person',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'person'},
            {type: 'organization'}
          ]
        }
      ]
    },
    {
      name: 'placeOfRecording',
      title: 'Opptakssted',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'place'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'created',
      media: 'poster',
      identifier: 'identifier'
    },
    prepare (selection) {
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
