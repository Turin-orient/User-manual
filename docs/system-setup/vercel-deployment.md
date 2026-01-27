---
sidebar_position: 3
---

# Vercel Deployment Guide

Complete step-by-step guide to deploy Neurond Assistant on Vercel.

## Purpose

Deploy Neurond Assistant to production environment using Vercel.

## Who Should Perform This

✅ System Administrators with completed [Prerequisites](prerequisites.md)

---

## Overview

**What you'll do:**
1. Push code to Git repository
2. Import project to Vercel
3. Configure environment variables
4. Deploy application
5. Verify deployment success

**Time required:** 30-45 minutes

---

## Step 1: Prepare Git Repository

### 1.1 Create New Repository

**On GitHub:**
1. Log in to github.com
2. Click "+" → "New repository"
3. Name: `neurond-assistant` (or your choice)
4. Set to Private (recommended)
5. Click "Create repository"

[Screenshot: GitHub new repository screen]

### 1.2 Push Code to Repository

**If you have code locally:**

```bash
# Navigate to your project folder
cd path/to/neurond-assistant

# Initialize git (if not already)
git init

# Add remote repository
git remote add origin https://github.com/yourusername/neurond-assistant.git

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

[Screenshot: Code pushed to GitHub repository]

---

## Step 2: Connect Vercel to Git

### 2.1 Import Project to Vercel

1. **Go to vercel.com** and log in
2. **Click "Add New Project"**
3. **Select "Import Git Repository"**

[Screenshot: Vercel dashboard with "Add New Project" button]

### 2.2 Authorize Vercel

1. Choose your Git provider (GitHub/GitLab/Bitbucket)
2. Click "Continue with GitHub" (or your provider)
3. Authorize Vercel to access your repositories
4. Select which repositories to allow (choose your `neurond-assistant` repo)

[Screenshot: GitHub authorization for Vercel]

### 2.3 Import Repository

1. Find `neurond-assistant` in the list
2. Click "Import"
3. Vercel detects project settings automatically

[Screenshot: Import repository screen on Vercel]

---

## Step 3: Configure Project Settings

### 3.1 Project Configuration

**Framework Preset:**
- Vercel usually auto-detects (Next.js, React, etc.)
- Leave as detected unless you need to change

**Root Directory:**
- Leave as `.` (root) unless code is in subdirectory

**Build Command:**
- Usually: `npm run build` or auto-detected
- Don't change unless instructed

**Output Directory:**
- Usually: `.next`, `build`, or `dist`
- Auto-detected for most frameworks

[Screenshot: Project configuration screen]

---

## Step 4: Add Environment Variables

**This is the most important step!**

### 4.1 Click "Environment Variables"

In the import screen, expandthe "Environment Variables" section.

[Screenshot: Environment Variables section expanded]

### 4.2 Add Required Variables

**For OpenAI:**

**Variable 1:**
- Name: `OPENAI_API_KEY`
- Value: `sk-your-actual-key-here`
- Environment: All (Production, Preview, Development)

[Screenshot: Adding OPENAI_API_KEY variable]

**For Azure OpenAI:**

**Variable 1:**
- Name: `AZURE_OPENAI_API_KEY`
- Value: Your Azure key

**Variable 2:**
- Name: `AZURE_OPENAI_ENDPOINT`
- Value: `https://yourname.openai.azure.com/`

**Variable 3:**
- Name: `AZURE_OPENAI_DEPLOYMENT`
- Value: Your deployment name (e.g., `gpt-4`)

**Variable 4:**
- Name: `AZURE_OPENAI_API_VERSION`
- Value: `2024-02-01` (or latest version)

**For Google Gemini:**

**Variable 1:**
- Name: `GOOGLE_API_KEY`
- Value: Your Gemini API key

### 4.3 Additional Variables (if needed)

**Database (if applicable):**
- Name: `DATABASE_URL`
- Value: Your database connection string

**Authentication (if applicable):**
- Name: `NEXTAUTH_SECRET`
- Value: Random secure string

**App Configuration:**
- Name: `NEXT_PUBLIC_APP_NAME`
- Value: `Neurond Assistant` (or your branding)

:::warning Security
Never share or expose your API keys! They should only be in Vercel's secure environment variables.
:::

---

## Step 5: Deploy Application

### 5.1 Start Deployment

1. After adding all environment variables
2. Click "Deploy" button
3. Vercel begins building your application

[Screenshot: Deploy button clicked, build starting]

### 5.2 Wait for Build

**What happens:**
- Vercel installs dependencies (~2-3 min)
- Builds the application (~3-5 min)
- Deploys to CDN (~1 min)

**Total time:** 5-10 minutes

**You'll see:**
- Build logs scrolling
- Progress indicators
- Build steps completing

[Screenshot: Build logs showing progress]

### 5.3 Deployment Success

**When complete:**
- ✅ "Deployment completed" message
- 🎉 Confetti animation
- Public URL displayed

**Your URL:** `https://neurond-assistant-xxxxx.vercel.app`

[Screenshot: Successful deployment screen with URL]

---

## Step 6: Verify Deployment

### 6.1 Visit Your Application

1. Click the deployment URL
2. Or click "Visit" button
3. Your Neurond Assistant loads!

[Screenshot: Neurond Assistant login page live]

### 6.2 Test Functionality

**Test these:**
- [ ] Page loads without errors
- [ ] Login screen appears
- [ ] Can create account or log in
- [ ] Chat interface loads
- [ ] Can send a message
- [ ] Receive response from AI

**Test message:** "Hello, are you working?"

**Expected:** NA responds normally

---

## Step 7: Configure Custom Domain (Optional)

### 7.1 Add Domain in Vercel

1. Go to Project Settings → Domains
2. Click "Add"
3. Enter your domain: `assistant.yourcompany.com`
4. Click "Add"

[Screenshot: Add domain screen in Vercel]

### 7.2 Configure DNS

**Vercel provides DNS records:**
- Type: `CNAME`
- Name: `assistant` (or your subdomain)
- Value: `cname.vercel-dns.com`

**In your domain provider (GoDaddy, Cloudflare, etc.):**
1. Log in to DNS management
2. Add CNAME record with values from Vercel
3. Save

**Propagation time:** 5 minutes to 48 hours (usually 30 min)

[Screenshot: DNS configuration example]

### 7.3 Verify Custom Domain

1. Wait for DNS propagation
2. Visit `https://assistant.yourcompany.com`
3. Should load Neurond Assistant
4. SSL certificate automatically configured

---

## Expected Result

✅ Neurond Assistant deployed and accessible  
✅ Public URL working  
✅ Chat functionality operational  
✅ (Optional) Custom domain configured  
✅ SSL/HTTPS automatically enabled  

---

## Post-Deployment Checklist

- [ ] Save deployment URL
- [ ] Test with multiple users
- [ ] Configure admin accounts
- [ ] Add company knowledge base documents
- [ ] Inform users that NA is ready
- [ ] Set up monitoring/analytics

---

## Automatic Redeployment

**Benefit of Vercel:**
- Any changes pushed to your Git repository
- Trigger automatic redeployment
- No manual intervention needed!

**How it works:**
1. You push code changes to GitHub
2. Vercel detects the push
3. Automatically rebuilds and redeploys
4. Takes  5-10 minutes

---

## Notes

:::tip Production URL
The random Vercel URL is your permanent deployment link. Custom domain is optional but recommended for professional use.
:::

:::info Rollback Available
Vercel keeps all deployment history. You can roll back to any previous version instantly from the dashboard.
:::

---

## Next Steps

- [Configure environment variables](environment-variables.md)
- [Update and redeploy](updating-deployment.md)
- [Troubleshooting deployment issues](deployment-troubleshooting.md)

---

**Deployment successful?** 🎉 Congratulations! Your Neurond Assistant is now live.

**Need help?** See [Deployment Troubleshooting](deployment-troubleshooting.md).
