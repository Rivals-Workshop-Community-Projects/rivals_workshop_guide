const {description} = require('../../package')
const glob = require('glob');
const pathing = require('path');

const getChildren = function (root_path, relative_path) {
    // 'docs/assistant/function_library/attacks/*.md'
    const children = glob.sync(`${root_path}/${relative_path}/*.md`)
        .filter(path => {
            return pathing.basename(path) !== 'index.md'
        })
        .map(path => {
            // remove "parent_path" and ".md"
            path = path.slice(root_path.length + 1, -3)
            return path
        })
        .sort()
    console.log('children: ' + children)
    return children
};


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
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-EPVWBP6RYB'}],
        ['script', {}, `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EPVWBP6RYB');
      `],
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
            appId: 'EC0FR1RUSS',
            apiKey: 'aea82c5a88df28dbc55b424c3fef075d',
            indexName: 'rivalslib',
        },
        nav: [
            {
                text: 'Guide',
                link: '/workshop_guide/',
            },
            {
                text: 'Assistant',
                link: '/assistant/'
            },
            {
                text: 'Reference',
                link: 'https://rivalswsmanual.miraheze.org/wiki/Main_Page'
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
                        children: [
                            "/workshop_guide/quickstart/software_setup.md",
                            "/workshop_guide/quickstart/project_setup.md",
                            "/workshop_guide/quickstart/in_game_testing.md",
                            "/workshop_guide/quickstart/change_movement.md",
                            "/workshop_guide/quickstart/change_attack.md",
                            "/workshop_guide/quickstart/programming.md",
                            "/workshop_guide/quickstart/change_animation.md",
                        ]
                    },
                    // {
                    //     title: "The Journey (EARLY WIP)",
                    //     path: "/workshop_guide/process/",
                    //
                    //     children: [
                    //         '/workshop_guide/process/mindset',
                    //         '/workshop_guide/process/iteration',
                    //         '/workshop_guide/process/release',
                    //     ]
                    // },
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
                                    '/workshop_guide/programming/learning_path/vfx',
                                ]
                            },
                            {
                                title: 'Reference (EARLY WIP)',
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
                                    '/workshop_guide/programming/reference/common_errors',
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Art',
                        path: '/workshop_guide/art/',
                        children: [
                            '/workshop_guide/art/references',
                            '/workshop_guide/art/workflow',
                            '/workshop_guide/art/feedback',
                            '/workshop_guide/art/pixel_art_basics',
                            '/workshop_guide/art/proportion',
                            '/workshop_guide/art/form',
                            '/workshop_guide/art/lines',
                            '/workshop_guide/art/color',
                            '/workshop_guide/art/shading',
                            '/workshop_guide/art/simplification',
                            '/workshop_guide/art/pose',
                            '/workshop_guide/art/anticipation_action_recovery',
                            '/workshop_guide/art/advancing_frames',
                        ]
                    },
                ]
            },
            {
                title: 'Assistant',
                path: '/assistant/',
                children: [
                    '/assistant/installation_and_usage',
                    '/assistant/animation_handling',
                    {
                        title: 'Function Library',
                        path: '/assistant/function_library/',
                        children: [
                            {
                                title: 'Attacks',
                                path: '/assistant/function_library/attacks/',
                                children: getChildren('docs', '/assistant/function_library/attacks')
                            },
                            {
                                title: 'Drawing',
                                path: '/assistant/function_library/drawing/',
                                children: getChildren('docs', '/assistant/function_library/drawing')
                            },
                            {
                                title: 'Logging',
                                path: '/assistant/function_library/logging/',
                                children: getChildren('docs', '/assistant/function_library/logging')
                            },
                            {
                                title: 'Transitions',
                                path: '/assistant/function_library/transitions/',
                                children: getChildren('docs', '/assistant/function_library/transitions')
                            },
                        ],
                    },
                    '/assistant/asset_generation',
                    '/assistant/code_injection',
                    {
                        title: 'Warnings',
                        path:'/assistant/warnings/',
                        children: getChildren('docs', '/assistant/warnings')
                    },
                    '/assistant/changelog'
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
                type: 'warn',
                defaultTitle: 'Warning',
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
                type: 'sources',
                defaultTitle: 'Sources',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'construction',
                defaultTitle: 'Under Construction',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'danger',
                defaultTitle: 'Danger!',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'note',
                defaultTitle: '',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'see_also',
                defaultTitle: 'See Also',
            },
        ],
    ],
    markdown: {
        // extendMarkdown: md => {
        //     md.set({breaks: true})
        // }
    }
}
