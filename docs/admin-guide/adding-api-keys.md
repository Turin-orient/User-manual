---
sidebar_position: 5
---

# Adding API Keys

## Purpose
Step-by-step guide to add API keys to Neurond Assistant.

## Who Can Perform This
✅ **System Administrators only**

---

## Before You Begin

**You need:**
- ✓ Valid API key from your provider (OpenAI, Azure, or Google)
- ✓ Admin access to Neurond Assistant
- ✓ Access to your deployment environment (or Vercel dashboard)

---

## Method 1: Add via Admin Interface (if available)

### Step 1: Navigate to API Settings
1. Log in as administrator
2. Go to Admin Dashboard
3. Click "API Configuration" or "Settings"

[Screenshot: API Configuration page]

### Step 2: Select Provider
1. Choose provider: OpenAI / Azure / Google
2. Click "Add API Key"

### Step 3: Enter API Details

**For OpenAI:**
- **API Key:** Paste your key (starts with `sk-`)
- **Organization ID:** (if applicable)

**For Azure OpenAI:**
- **API Key:** Your Azure key
- **Endpoint URL:** e.g., `https://yourname.openai.azure.com/`
- **Deployment Name:** Your GPT model deployment name
- **API Version:** e.g., `2024-02-01`

**For Google Gemini:**
- **API Key:** Your Gemini API key
- **Model:** Select Gemini model version

[Screenshot: API key entry form for each provider]

### Step 4: Save and Test
1. Click "Save"
2. Click "Test Connection"
3. Verify success message appears

---

## Method 2: Add via Environment Variables (Vercel)

**If Neurond Assistant is deployed on Vercel:**

### Step 1: Access Vercel Dashboard
1. Go to vercel.com
2. Log in to your account
3. Select your Neurond Assistant project

[Screenshot: Vercel dashboard]

### Step 2: Navigate to Environment Variables
1. Click "Settings" tab
2. Click "Environment Variables"

[Screenshot: Environment Variables section]

### Step 3: Add Variables

**For OpenAI:**
```
Name: OPENAI_API_KEY
Value: sk-your-key-here
```

**For Azure:**
```
Name: AZURE_OPENAI_API_KEY
Value: your-azure-key

Name: AZURE_OPENAI_ENDPOINT
Value: https://yourname.openai.azure.com/

Name: AZURE_OPENAI_DEPLOYMENT
Value: your-deployment-name
```

**For Google:**
```
Name: GOOGLE_API_KEY
Value: your-gemini-key
```

[Screenshot: Adding environment variable in Vercel]

### Step 4: Redeploy
1. After adding variables, click "Redeploy"
2. Wait for deployment to complete
3. Test Neurond Assistant to verify it works

---

## Verification

**How to verify API key is working:**

1. **Log in as regular user**
2. **Ask Neurond Assistant a question**
3. **Success:** NA responds normally
4. **Failure:** Error message appears

**If it fails:**
- Check key is correctly entered (no extra spaces)
- Verify key is active and valid
- Check usage limits on provider dashboard

See [Testing API Connections](testing-api-connections.md) for detailed testing.

---

## Security Best Practices

:::warning Keep Keys Secure
- ❌ Never share keys in Slack, email, or public channels
- ✅ Only store in secure environment variables
- ✅ Use separate keys for production vs testing
- ✅ Set up billing alerts on provider dashboard
:::

---

## Expected Result
✅ API key successfully added  
✅ Neurond Assistant can connect to AI provider  
✅ Users can use the chat interface without errors  

---

## Next Steps
- [Test API connection](testing-api-connections.md)
- [Update/rotate keys](updating-api-keys.md)
- [Monitor usage](usage-monitoring.md)
