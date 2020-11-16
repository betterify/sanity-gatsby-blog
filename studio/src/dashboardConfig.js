export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fb1f64a017a38008b0f2111',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vgjmpctq',
                  apiId: '8220cb8f-48e1-4974-9396-2aa441d6fbfb'
                },
                {
                  buildHookId: '5fb1f64a92ce9a008cdf8b4a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9wfbr2nv',
                  apiId: '8051772f-33f6-4e4e-870b-0fa65825dbc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/betterify/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9wfbr2nv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
