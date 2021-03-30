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
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        },
        nav: [
            {
                text: 'Guide',
                link: '/workshop_guide/',
            },
            {
                text: 'Assistant',
                link: '/assistant/'
            }
        ],
        sidebar: [
            {
                title: 'Workshop Guide',
                path: '/workshop_guide/',
                children: [
                    {
                        title: "Quickstart",
                        path: "/workshop_guide/quickstart/",
                    },
                    {
                        title: "The Journey",
                        path: "/workshop_guide/process/",

                        children: [
                            '/workshop_guide/process/mindset',
                            '/workshop_guide/process/iteration',
                            '/workshop_guide/process/release',
                        ]
                    },
                    {
                        title: 'Programming',
                        path: '/workshop_guide/programming/',
                        children: [
                            {
                                title: 'Language Learning Path',
                                path: '/workshop_guide/programming/learning_path/',
                                children: [
                                    '/workshop_guide/programming/learning_path/variables',
                                    '/workshop_guide/programming/learning_path/data_types',
                                    '/workshop_guide/programming/learning_path/conditionals',
                                    '/workshop_guide/programming/learning_path/functions',
                                    '/workshop_guide/programming/learning_path/debugging',
                                    '/workshop_guide/programming/learning_path/array',
                                    '/workshop_guide/programming/learning_path/objects_and_instances',
                                    '/workshop_guide/programming/learning_path/struct',
                                    '/workshop_guide/programming/learning_path/with',
                                    '/workshop_guide/programming/learning_path/articles',
                                    '/workshop_guide/programming/learning_path/best_practices',
                                ]
                            },
                            {
                                title: 'Reference',
                                path: '/workshop_guide/programming/reference/',
                                children: [
                                    {
                                        title: 'Scripts',
                                        path: '/workshop_guide/programming/reference/scripts/',
                                        children: [
                                            '/workshop_guide/programming/reference/scripts/init_and_attack_scripts',
                                            '/workshop_guide/programming/reference/scripts/event_scripts',
                                            '/workshop_guide/programming/reference/scripts/animation_scripts',
                                            '/workshop_guide/programming/reference/scripts/article_scripts',
                                            '/workshop_guide/programming/reference/scripts/hitbox_scripts',
                                            '/workshop_guide/programming/reference/scripts/ai_scripts',
                                        ]
                                    },
                                    '/workshop_guide/programming/reference/troubleshooting',
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Art',
                        path: '/workshop_guide/art/',
                        children: []
                    },
                ]
            },
            {
                title: 'Assistant',
                path: '/assistant/',
                children: []
            }
        ]

    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        'check-md',
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
        [
            'vuepress-plugin-container',
            {
                type: 'construction',
                defaultTitle: 'Under Construction',
            },
        ],
    ],
    markdown: {
        // extendMarkdown: md => {
        //     md.set({breaks: true})
        // }
    }
}
