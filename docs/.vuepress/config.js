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
            }
        ],
        sidebar: [
            {
                title: 'Workshop Guide',
                path: '/workshop_guide/',
                collapsable: false,
                // sidebarDepth: 2,
                children: [
                    '/workshop_guide/mindset',
                    '/workshop_guide/journey',
                    '/workshop_guide/release',
                    {
                        title: 'By Subject',
                        path: '/workshop_guide/',
                        children: [
                            {
                                title: 'Programming',
                                path: '/workshop_guide/programming/',
                                children: [
                                    {
                                        title: 'Language Features',
                                        path: '/workshop_guide/programming/language/',
                                        children: [
                                            '/workshop_guide/programming/language/variables',
                                            '/workshop_guide/programming/language/data_types',
                                            '/workshop_guide/programming/language/functions',
                                            '/workshop_guide/programming/language/control_flow',
                                            '/workshop_guide/programming/language/data_structures',
                                            '/workshop_guide/programming/language/objects_and_instances',
                                            '/workshop_guide/programming/language/articles',

                                        ]
                                    },
                                    {
                                        title: 'Scripts',
                                        path: '/workshop_guide/programming/scripts/',
                                        children: [
                                            '/workshop_guide/programming/scripts/init_and_attack_scripts',
                                            '/workshop_guide/programming/scripts/event_scripts',
                                            '/workshop_guide/programming/scripts/animation_scripts',
                                            '/workshop_guide/programming/scripts/article_scripts',
                                            '/workshop_guide/programming/scripts/hitbox_scripts',
                                            '/workshop_guide/programming/scripts/ai_scripts',
                                        ]
                                    },
                                    '/workshop_guide/programming/best_practices',
                                    '/workshop_guide/programming/troubleshooting',
                                ]
                            },
                            {
                                title: 'Visuals',
                                children: [
                                    '/workshop_guide/design/visual_base',
                                    '/workshop_guide/implementation/visual_base',
                                ]
                            },
                            {
                                title: 'Movement',
                                children: [
                                    '/workshop_guide/design/movement',
                                    '/workshop_guide/implementation/movement',
                                ]
                            },
                            {
                                title: 'Normals',
                                children: [
                                    '/workshop_guide/design/normals',
                                    '/workshop_guide/implementation/normals',
                                ]
                            },
                            {
                                title: 'Gimmick and Specials',
                                children: [
                                    '/workshop_guide/design/special',
                                    '/workshop_guide/implementation/special',
                                ]
                            },
                        ]
                    }
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
