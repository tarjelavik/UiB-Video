export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da57d8da0247a2126ba5730',
                  title: 'Sanity Studio',
                  name: 'UiB-Video-studio',
                  apiId: '1de044a9-6379-448f-bff8-49a7d36d77e1'
                },
                {
                  buildHookId: '5da57d8dd59727215465874c',
                  title: 'Portfolio Website',
                  name: 'UiB-Video',
                  apiId: '5fe48de1-bd3c-4c57-90eb-58d6c7df06e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarjelavik/UiB-Video',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://UiB-Video.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
