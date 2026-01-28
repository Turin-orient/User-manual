import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'adc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '62f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fba'),
            routes: [
              {
                path: '/docs/admin-guide/adding-api-keys',
                component: ComponentCreator('/docs/admin-guide/adding-api-keys', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/adding-api-keys-NEW-FORMAT',
                component: ComponentCreator('/docs/admin-guide/adding-api-keys-NEW-FORMAT', 'd31'),
                exact: true
              },
              {
                path: '/docs/admin-guide/admin-dashboard',
                component: ComponentCreator('/docs/admin-guide/admin-dashboard', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/api-keys-overview',
                component: ComponentCreator('/docs/admin-guide/api-keys-overview', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/environment-configuration',
                component: ComponentCreator('/docs/admin-guide/environment-configuration', '9cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/managing-users',
                component: ComponentCreator('/docs/admin-guide/managing-users', '2e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/permissions-and-roles',
                component: ComponentCreator('/docs/admin-guide/permissions-and-roles', '1e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/rotating-api-keys',
                component: ComponentCreator('/docs/admin-guide/rotating-api-keys', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/system-health',
                component: ComponentCreator('/docs/admin-guide/system-health', '31c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/testing-api-connections',
                component: ComponentCreator('/docs/admin-guide/testing-api-connections', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/updating-api-keys',
                component: ComponentCreator('/docs/admin-guide/updating-api-keys', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/usage-monitoring',
                component: ComponentCreator('/docs/admin-guide/usage-monitoring', '1a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/admin-guide/workspace-settings',
                component: ComponentCreator('/docs/admin-guide/workspace-settings', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/accessing-neurond',
                component: ComponentCreator('/docs/getting-started/accessing-neurond', '6d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/dashboard-overview',
                component: ComponentCreator('/docs/getting-started/dashboard-overview', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/logging-in',
                component: ComponentCreator('/docs/getting-started/logging-in', '0b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/logging-out',
                component: ComponentCreator('/docs/getting-started/logging-out', 'b4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/',
                component: ComponentCreator('/docs/introduction/', 'aeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/key-features',
                component: ComponentCreator('/docs/introduction/key-features', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/who-should-use',
                component: ComponentCreator('/docs/introduction/who-should-use', '169'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/deployment-troubleshooting',
                component: ComponentCreator('/docs/system-setup/deployment-troubleshooting', 'b78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/environment-variables',
                component: ComponentCreator('/docs/system-setup/environment-variables', '6c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/overview',
                component: ComponentCreator('/docs/system-setup/overview', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/prerequisites',
                component: ComponentCreator('/docs/system-setup/prerequisites', 'da5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/rollback',
                component: ComponentCreator('/docs/system-setup/rollback', '22d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/updating-deployment',
                component: ComponentCreator('/docs/system-setup/updating-deployment', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/system-setup/vercel-deployment',
                component: ComponentCreator('/docs/system-setup/vercel-deployment', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/authentication-issues',
                component: ComponentCreator('/docs/troubleshooting/authentication-issues', '7cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/common-issues',
                component: ComponentCreator('/docs/troubleshooting/common-issues', '944'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/error-messages',
                component: ComponentCreator('/docs/troubleshooting/error-messages', '003'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/faq',
                component: ComponentCreator('/docs/troubleshooting/faq', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/performance-issues',
                component: ComponentCreator('/docs/troubleshooting/performance-issues', 'ce4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/troubleshooting/when-to-contact-support',
                component: ComponentCreator('/docs/troubleshooting/when-to-contact-support', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/asking-questions',
                component: ComponentCreator('/docs/user-guide/asking-questions', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/common-errors',
                component: ComponentCreator('/docs/user-guide/common-errors', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/content-drafting',
                component: ComponentCreator('/docs/user-guide/content-drafting', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/conversation-history',
                component: ComponentCreator('/docs/user-guide/conversation-history', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/document-processing',
                component: ComponentCreator('/docs/user-guide/document-processing', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/exporting-results',
                component: ComponentCreator('/docs/user-guide/exporting-results', '6b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/knowledge-retrieval',
                component: ComponentCreator('/docs/user-guide/knowledge-retrieval', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/uploading-documents',
                component: ComponentCreator('/docs/user-guide/uploading-documents', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-guide/using-chat-interface',
                component: ComponentCreator('/docs/user-guide/using-chat-interface', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/chat-ui',
                component: ComponentCreator('/docs/user-manual/chat-ui', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/collection',
                component: ComponentCreator('/docs/user-manual/collection', '848'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/image-studio',
                component: ComponentCreator('/docs/user-manual/image-studio', '630'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/login',
                component: ComponentCreator('/docs/user-manual/login', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/prompt-gallery',
                component: ComponentCreator('/docs/user-manual/prompt-gallery', '57f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-manual/workspace',
                component: ComponentCreator('/docs/user-manual/workspace', '228'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
