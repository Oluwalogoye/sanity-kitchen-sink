export default {
  widgets: [
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
                  buildHookId: '5ec1fc69ff645847b71953e9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d5hzqqdo',
                  apiId: 'bdf13fa2-7706-4362-921e-82824dfbf79c'
                },
                {
                  buildHookId: '5ec1fc6a123405402b02d3d5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ca5u8y8r',
                  apiId: '5e2f8a53-bc09-44ea-af8e-5874e41df9f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oluwalogoye/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ca5u8y8r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
