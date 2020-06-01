export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ed542c658c052dd0dc1606f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-studio-u43ph83q',
                  apiId: 'c3b27881-6767-4e1f-98fe-c339d6520d6d'
                },
                {
                  buildHookId: '5ed542c602b1495990b588b9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-web-x6wu4o8n',
                  apiId: 'c94d8b68-3ab1-4e72-8a24-c2ad986e954e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LauraAnnabel89/sanity-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-web-x6wu4o8n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
