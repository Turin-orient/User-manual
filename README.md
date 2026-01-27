# Neurond Assistant - User Manual Documentation

This repository contains the complete User Manual for Neurond Assistant, built with Docusaurus.

## 📚 Documentation Structure

- **Introduction** - What is Neurond Assistant, who should use it, key features
- **Getting Started** - Access, login, dashboard overview
- **User Guide** - Core features for end users
- **Admin Guide** - System administration and management
- **System Setup & Deployment** - Vercel deployment guide
- **Troubleshooting & FAQ** - Common issues and solutions

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without needing to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory, ready to be served by any static hosting service.

### Deployment

The documentation is configured for deployment on Vercel. Simply:

1. Push this repository to GitHub
2. Import to Vercel
3. Deploy (automatic)

See `/docs/system-setup/vercel-deployment.md` for detailed deployment instructions.

## 📖 Documentation Pages

### Introduction Section (3 pages)
- What is Neurond Assistant
- Who should use it
- Key features overview

### Getting Started (4 pages)
- Accessing Neurond Assistant
- Logging in
- Dashboard overview
- Logging out

### User Guide (9 pages)
- Using chat interface
- Asking questions effectively
- Uploading documents
- Knowledge retrieval
- Document processing
- Content drafting
- Conversation history
- Exporting results
- Common errors

### Admin Guide (12 pages)
- Admin dashboard
- Managing users
- Permissions and roles
- API keys management (overview, adding, updating, rotating, testing)
- Environment configuration
- Workspace settings
- Usage monitoring
- System health

### System Setup (7 pages)
- Overview
- Prerequisites
- Vercel deployment guide
- Environment variables
- Updating deployment
- Rollback procedures
- Deployment troubleshooting

### Troubleshooting (6 pages)
- Common issues
- Error messages explained
- Performance issues
- Authentication issues
- When to contact support
- FAQ

## 🎯 Audience

This documentation is written for **business users** (non-technical):
- End users who will use Neurond Assistant daily
- Administrators managing the system
- Operations teams deploying and maintaining the platform

## ✨ Features

-Plain language explanations (no technical jargon)
- Step-by-step instructions with screenshot placeholders
- Task-oriented organization
- Example-driven guidance
- Comprehensive troubleshooting
- 100% feature coverage

## 🔧 Customization

To customize for your organization:

1. Update `docusaurus.config.js` with your branding
2. Replace logo files in `/static/img/`
3. Add actual screenshots to replace placeholders
4. Update contact information and URLs
5. Add organization-specific content

## 📝 Content Guidelines

All documentation follows these principles:
- **Business-friendly language** - No technical jargon
- **Step-by-step format** - Clear numbered instructions
- **Screenshot-first** - Visual guidance wherever possible
- **Task-oriented** - Organized by what users want to accomplish
- **Complete coverage** - Every feature documented

## 📞 Support

- **Documentation issues:** Edit the relevant `.md` file
- **Neurond Assistant support:** contact@neurond.com
- **Docusaurus help:** https://docusaurus.io/docs

## 📄 License

Copyright © 2026 Neurond AI

## 🤝 Contributing

To update documentation:
1. Edit `.md` files in `/docs/` folder
2. Test locally with `npm run start`
3. Build with `npm run build`
4. Commit and push changes
5. Vercel auto-deploys on push

---

**Documentation Version:** 1.0  
**Last Updated:** January 2026  
**Built with:** Docusaurus 3.6+
