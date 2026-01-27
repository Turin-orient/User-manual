// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Neurond Assistant User Manual',
    tagline: 'Complete Guide for Business Users',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'neurond', // Usually your GitHub org/user name.
    projectName: 'neurond-assistant-docs', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/your-org/neurond-assistant-docs/tree/main/',
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
                title: 'Neurond Assistant',
                logo: {
                    alt: 'Neurond Assistant Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/logo-dark.svg', // Logo trắng cho dark mode
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'User Manual',
                    },
                    {
                        href: 'https://www.neurond.com',
                        label: 'Neurond AI',
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
                                to: '/docs/getting-started/accessing-neurond',
                            },
                            {
                                label: 'User Guide',
                                to: '/docs/user-guide/using-chat-interface',
                            },
                            {
                                label: 'Admin Guide',
                                to: '/docs/admin-guide/admin-dashboard',
                            },
                        ],
                    },
                    {
                        title: 'Support',
                        items: [
                            {
                                label: 'Troubleshooting',
                                to: '/docs/troubleshooting/common-issues',
                            },
                            {
                                label: 'FAQ',
                                to: '/docs/troubleshooting/faq',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Neurond AI Website',
                                href: 'https://www.neurond.com',
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
