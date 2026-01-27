---
sidebar_position: 4
---

# Environment Variables

Understanding and managing environment variables for Neurond Assistant.

## Purpose
Learn what environment variables are needed and how to manage them.

## Who Should Read This
✅ System Administrators managing deployment

---

## What Are Environment Variables?

**In plain language:**
Environment variables are secure configuration settings that your application needs to run, like API keys, database connections, and feature toggles.

**Why use them:**
- ✅ Keep secrets secure (not in code)
- ✅ Different settings for development vs production
- ✅ Easy to update without changing code

---

## Required Variables

### For OpenAI
```
OPENAI_API_KEY=sk-your-key-here
```

### For Azure OpenAI
```
AZURE_OPENAI_API_KEY=your-azure-key
AZURE_OPENAI_ENDPOINT=https://yourname.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT=gpt-4
AZURE_OPENAI_API_VERSION=2024-02-01
```

### For Google Gemini
```
GOOGLE_API_KEY=your-gemini-key
```

---

## Optional Variables

### Application Settings
```
NEXT_PUBLIC_APP_NAME=Neurond Assistant
DEFAULT_LANGUAGE=en
SESSION_TIMEOUT=3600
```

### Database (if used)
```
DATABASE_URL=postgresql://user:pass@host:5432/dbname
```

### Authentication
```
NEXTAUTH_SECRET=random-secure-string-here
NEXTAUTH_URL=https://your-domain.com
```

---

## Managing Variables in Vercel

**Add/Edit:**
1. Vercel Dashboard → Project
2. Settings → Environment Variables
3. Add or edit variables
4. Redeploy for changes to take effect

**Best practices:**
- Use "Production" environment for live site
- Use "Development" for testing
- Never expose secrets in logs

---

## Expected Result
✅ All required variables configured  
✅ Application runs without errors  
✅ Secrets kept secure  

---

## Next Steps
- [Update deployment](updating-deployment.md)
- [Troubleshoot issues](deployment-troubleshooting.md)
