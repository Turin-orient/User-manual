// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'User Manual - Neurond Assistant',
    tagline: 'Complete Guide for Business Users',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://usermanual-ten.vercel.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Turin-orient', // Usually your GitHub org/user name.
    projectName: 'User-manual', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    markdown: {
        format: 'mdx',
        mermaid: true,
        mdx1Compat: {
            comments: true,
            admonitions: true,
            headingIds: true,
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/Turin-orient/User-manual/tree/main/',
                },
                blog: false, // Disable blog functionality
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'User Manual',
                logo: {
                    alt: 'Neurond Assistant Logo',
                    src: 'img/neruond_logo.png',
                },
                items: [
                    {
                        href: 'https://assistant.neurond.com/',
                        label: 'Neurond Assistant',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Getting Started',
                                to: '/getting-started/accessing-neurond',
                            },
                            {
                                label: 'User Guide',
                                to: '/user-guide/using-chat-interface',
                            },
                            {
                                label: 'Admin Guide',
                                to: '/admin-guide/admin-dashboard',
                            },
                        ],
                    },
                    {
                        title: 'Support',
                        items: [
                            {
                                label: 'Troubleshooting',
                                to: '/troubleshooting/common-issues',
                            },
                            {
                                label: 'FAQ',
                                to: '/troubleshooting/faq',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Neurond Assistant App',
                                href: 'https://assistant.neurond.com/',
                            },
                            {
                                label: 'Contact Support',
                                href: 'mailto:contact@neurond.com',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Neurond AI. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
