const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Rivals Workshop Community Library',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#534388'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'https://github.com/Qazzquimby/rivals_workshop_guide',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'main',
        editLinkText: 'Propose changes in github',
        lastUpdated: false,
        nav: [
            {
                text: 'Guide',
                link: '/workshop_guide/',
            }
        ],
        sidebar: [
            {
                title: 'Learning Path',
                path: '/workshop_guide/',
                collapsable: false,
                // sidebarDepth: 2,
                children: [
                    '/workshop_guide/attitude',
                    '/workshop_guide/process',
                    {
                        title: 'Design',
                        path: '/workshop_guide/design/',
                        children: [
                            '/workshop_guide/design/predesign',
                            '/workshop_guide/design/identity',
                            '/workshop_guide/design/visual_base',
                            '/workshop_guide/design/special',
                            '/workshop_guide/design/movement',
                            '/workshop_guide/design/normals',
                        ]
                    },

                    // '/workshop_guide/Animation.md',
                    // '/workshop_guide/index.md',
                    // '/workshop_guide/',
                    // 'attitude',
                    // '/design'
                ]
            }
        ]

    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        [
            'internal-link', {}
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'caninot',
                defaultTitle: 'Can I not?',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'quote',
                defaultTitle: '',
            },
        ],
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({breaks: true})
        }
    }
}
