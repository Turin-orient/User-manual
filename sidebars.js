/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        {
            type: 'category',
            label: '1. Introduction',
            items: [
                'introduction/index',
                'introduction/who-should-use',
                'introduction/key-features',
            ],
        },
        {
            type: 'category',
            label: '2. Getting Started',
            items: [
                'getting-started/accessing-neurond',
                'getting-started/logging-in',
                'getting-started/dashboard-overview',
                'getting-started/logging-out',
            ],
        },
        {
            type: 'category',
            label: '3. User Manual (User & Admin Guide)',
            items: [
                {
                    type: 'category',
                    label: 'User Guide',
                    items: [
                        'user-guide/using-chat-interface',
                        'user-guide/asking-questions',
                        'user-guide/uploading-documents',
                        'user-guide/knowledge-retrieval',
                        'user-guide/document-processing',
                        'user-guide/content-drafting',
                        'user-guide/conversation-history',
                        'user-guide/exporting-results',
                        'user-guide/common-errors',
                    ],
                },
                {
                    type: 'category',
                    label: 'Admin Guide',
                    items: [
                        'admin-guide/admin-dashboard',
                        'admin-guide/managing-users',
                        {
                            type: 'category',
                            label: 'Reporting',
                            items: [
                                'admin-guide/analytics',
                                'admin-guide/user-usage',
                            ],
                        },
                        'admin-guide/permissions-and-roles',
                        {
                            type: 'category',
                            label: 'API Key Management',
                            items: [
                                'admin-guide/api-keys-overview',
                                'admin-guide/adding-api-keys',
                                'admin-guide/updating-api-keys',
                                'admin-guide/rotating-api-keys',
                                'admin-guide/testing-api-connections',
                            ],
                        },
                        'admin-guide/environment-configuration',
                        'admin-guide/workspace-settings',
                        'admin-guide/usage-monitoring',
                        'admin-guide/system-health',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: '4. User Manual (UI Reference)',
            items: [
                'user-manual/login',
                'user-manual/workspace',
                'user-manual/prompt-gallery',
                'user-manual/collection',
                'user-manual/chat-ui',
                'user-manual/image-studio',
            ],
        },
        {
            type: 'category',
            label: '5. System Setup & Deployment',
            items: [
                'system-setup/overview',
                'system-setup/prerequisites',
                'system-setup/vercel-deployment',
                'system-setup/environment-variables',
                'system-setup/updating-deployment',
                'system-setup/rollback',
                'system-setup/deployment-troubleshooting',
            ],
        },
        {
            type: 'category',
            label: '6. Troubleshooting & FAQ',
            items: [
                'troubleshooting/common-issues',
                'troubleshooting/error-messages',
                'troubleshooting/performance-issues',
                'troubleshooting/authentication-issues',
                'troubleshooting/when-to-contact-support',
                'troubleshooting/faq',
            ],
        },
    ],
};

export default sidebars;
