import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '125'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '485'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '61a'),
            routes: [
              {
                path: '/admin-guide/adding-api-keys',
                component: ComponentCreator('/admin-guide/adding-api-keys', '5ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/adding-api-keys-NEW-FORMAT',
                component: ComponentCreator('/admin-guide/adding-api-keys-NEW-FORMAT', '9ee'),
                exact: true
              },
              {
                path: '/admin-guide/admin-dashboard',
                component: ComponentCreator('/admin-guide/admin-dashboard', 'e91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/api-keys-overview',
                component: ComponentCreator('/admin-guide/api-keys-overview', 'd65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/environment-configuration',
                component: ComponentCreator('/admin-guide/environment-configuration', '23a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/managing-users',
                component: ComponentCreator('/admin-guide/managing-users', '3a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/permissions-and-roles',
                component: ComponentCreator('/admin-guide/permissions-and-roles', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/rotating-api-keys',
                component: ComponentCreator('/admin-guide/rotating-api-keys', '0f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/system-health',
                component: ComponentCreator('/admin-guide/system-health', '141'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/testing-api-connections',
                component: ComponentCreator('/admin-guide/testing-api-connections', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/updating-api-keys',
                component: ComponentCreator('/admin-guide/updating-api-keys', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/usage-monitoring',
                component: ComponentCreator('/admin-guide/usage-monitoring', '48e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/admin-guide/workspace-settings',
                component: ComponentCreator('/admin-guide/workspace-settings', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/accessing-neurond',
                component: ComponentCreator('/getting-started/accessing-neurond', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/dashboard-overview',
                component: ComponentCreator('/getting-started/dashboard-overview', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/logging-in',
                component: ComponentCreator('/getting-started/logging-in', '1a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/logging-out',
                component: ComponentCreator('/getting-started/logging-out', 'c5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/',
                component: ComponentCreator('/introduction/', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/key-features',
                component: ComponentCreator('/introduction/key-features', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/who-should-use',
                component: ComponentCreator('/introduction/who-should-use', 'ad2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/deployment-troubleshooting',
                component: ComponentCreator('/system-setup/deployment-troubleshooting', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/environment-variables',
                component: ComponentCreator('/system-setup/environment-variables', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/overview',
                component: ComponentCreator('/system-setup/overview', '10e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/prerequisites',
                component: ComponentCreator('/system-setup/prerequisites', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/rollback',
                component: ComponentCreator('/system-setup/rollback', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/updating-deployment',
                component: ComponentCreator('/system-setup/updating-deployment', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/system-setup/vercel-deployment',
                component: ComponentCreator('/system-setup/vercel-deployment', '4d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/authentication-issues',
                component: ComponentCreator('/troubleshooting/authentication-issues', '3ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/common-issues',
                component: ComponentCreator('/troubleshooting/common-issues', 'f6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/error-messages',
                component: ComponentCreator('/troubleshooting/error-messages', '9ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/faq',
                component: ComponentCreator('/troubleshooting/faq', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/performance-issues',
                component: ComponentCreator('/troubleshooting/performance-issues', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting/when-to-contact-support',
                component: ComponentCreator('/troubleshooting/when-to-contact-support', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/asking-questions',
                component: ComponentCreator('/user-guide/asking-questions', '823'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/common-errors',
                component: ComponentCreator('/user-guide/common-errors', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/content-drafting',
                component: ComponentCreator('/user-guide/content-drafting', '882'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/conversation-history',
                component: ComponentCreator('/user-guide/conversation-history', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/document-processing',
                component: ComponentCreator('/user-guide/document-processing', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/exporting-results',
                component: ComponentCreator('/user-guide/exporting-results', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/knowledge-retrieval',
                component: ComponentCreator('/user-guide/knowledge-retrieval', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/uploading-documents',
                component: ComponentCreator('/user-guide/uploading-documents', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-guide/using-chat-interface',
                component: ComponentCreator('/user-guide/using-chat-interface', '91a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/chat-ui',
                component: ComponentCreator('/user-manual/chat-ui', '295'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/collection',
                component: ComponentCreator('/user-manual/collection', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/image-studio',
                component: ComponentCreator('/user-manual/image-studio', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/login',
                component: ComponentCreator('/user-manual/login', 'bfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/prompt-gallery',
                component: ComponentCreator('/user-manual/prompt-gallery', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user-manual/workspace',
                component: ComponentCreator('/user-manual/workspace', '3be'),
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
