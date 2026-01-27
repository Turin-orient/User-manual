---
sidebar_position: 5
---

# Adding API Keys to Neurond Assistant

## Purpose

Add API keys from AI providers (OpenAI, Azure OpenAI, or Google Gemini) to enable Neurond Assistant to connect to AI services and process user requests.

**In simple terms:** API keys are like passwords that allow Neurond Assistant to use AI services to answer questions and process documents.

---

## When to Use This

**You need to add API keys when:**
- ✅ Setting up Neurond Assistant for the first time
- ✅ Switching to a different AI provider
- ✅ Your current API key has been compromised
- ✅ Upgrading to a different service tier

---

## Who Can Perform This

✅ **System Administrators only**

❌ Regular users cannot access API key settings

---

## Prerequisites

Before starting, make sure you have:
- [ ] Valid API key from your chosen provider (OpenAI/Azure/Google)
- [ ] Admin access to Neurond Assistant
- [ ] Admin access to Vercel (if using Vercel deployment)

:::tip Get Your API Key First
If you don't have an API key yet, see [API Keys Overview](api-keys-overview.md) for instructions on obtaining one from your provider.
:::

---

## Step-by-Step Instructions

### Step 1: Access Vercel Dashboard

**What to do:** Log in to Vercel and navigate to your Neurond Assistant project.

**macOS:**
![Access Vercel Dashboard - macOS](/screenshots/macos/api-keys-step1-vercel-dashboard.png)
*Screenshot: Vercel dashboard with projects list on macOS Safari/Chrome*

**Windows:**
![Access Vercel Dashboard - Windows](/screenshots/windows/api-keys-step1-vercel-dashboard.png)
*Screenshot: Vercel dashboard with projects list on Windows Edge/Chrome*

**Actions:**
1. Open browser and go to [vercel.com](https://vercel.com)
2. Click "Login" (top right)
3. Sign in with your account
4. You'll see your list of projects

---

### Step 2: Open Project Settings

**What to do:** Select your Neurond Assistant project and open Settings.

**macOS:**
![Open Settings - macOS](/screenshots/macos/api-keys-step2-open-settings.png)
*Screenshot: Project page with Settings tab highlighted on macOS*

**Windows:**
![Open Settings - Windows](/screenshots/windows/api-keys-step2-open-settings.png)
*Screenshot: Project page with Settings tab highlighted on Windows*

**Actions:**
1. Click on your `neurond-assistant` project name
2. Click the **"Settings"** tab at the top
3. You'll see the settings menu on the left

---

### Step 3: Navigate to Environment Variables

**What to do:** Access the Environment Variables section where API keys are stored.

**macOS:**
![Environment Variables Menu - macOS](/screenshots/macos/api-keys-step3-env-vars-menu.png)
*Screenshot: Settings sidebar with "Environment Variables" highlighted on macOS*

**Windows:**
![Environment Variables Menu - Windows](/screenshots/windows/api-keys-step3-env-vars-menu.png)
*Screenshot: Settings sidebar with "Environment Variables" highlighted on Windows*

**Actions:**
1. In the left sidebar, scroll down
2. Click **"Environment Variables"**
3. You'll see a list of existing variables (may be empty if first time)

---

### Step 4: Add New Environment Variable

**What to do:** Click the button to add a new environment variable for your API key.

**macOS:**
![Add Variable Button - macOS](/screenshots/macos/api-keys-step4-add-button.png)
*Screenshot: "Add New" or "Add Variable" button on macOS*

**Windows:**
![Add Variable Button - Windows](/screenshots/windows/api-keys-step4-add-button.png)
*Screenshot: "Add New" or "Add Variable" button on Windows*

**Actions:**
1. Look for **"Add New"** or **"New Variable"** button
2. Click it
3. A form will appear with fields: Name, Value, Environment

---

### Step 5: Enter API Key Details

**What to do:** Fill in the variable name and paste your API key.

**For OpenAI:**

**macOS:**
![OpenAI API Key Entry - macOS](/screenshots/macos/api-keys-step5-openai-entry.png)
*Screenshot: Form filled with OPENAI_API_KEY on macOS*

**Windows:**
![OpenAI API Key Entry - Windows](/screenshots/windows/api-keys-step5-openai-entry.png)
*Screenshot: Form filled with OPENAI_API_KEY on Windows*

**Fill in:**
- **Name:** `OPENAI_API_KEY`
- **Value:** `sk-proj-...` (your actual key from OpenAI)
- **Environment:** Select **all** (Production, Preview, Development)

---

**For Azure OpenAI:**

You need to add **4 variables**:

| Variable Name | Value Example |
|--------------|---------------|
| `AZURE_OPENAI_API_KEY` | Your Azure API key |
| `AZURE_OPENAI_ENDPOINT` | `https://yourname.openai.azure.com/` |
| `AZURE_OPENAI_DEPLOYMENT` | `gpt-4` (your deployment name) |
| `AZURE_OPENAI_API_VERSION` | `2024-02-01` |

**macOS:**
![Azure API Keys Entry - macOS](/screenshots/macos/api-keys-step5-azure-entry.png)
*Screenshot: Multiple Azure variables added on macOS*

**Windows:**
![Azure API Keys Entry - Windows](/screenshots/windows/api-keys-step5-azure-entry.png)
*Screenshot: Multiple Azure variables added on Windows*

:::important Azure Requires Multiple Variables
Unlike OpenAI, Azure needs 4 separate environment variables. Add them one by one using the same process.
:::

---

**For Google Gemini:**

**macOS:**
![Google API Key Entry - macOS](/screenshots/macos/api-keys-step5-google-entry.png)
*Screenshot: Form filled with GOOGLE_API_KEY on macOS*

**Windows:**
![Google API Key Entry - Windows](/screenshots/windows/api-keys-step5-google-entry.png)
*Screenshot: Form filled with GOOGLE_API_KEY on Windows*

**Fill in:**
- **Name:** `GOOGLE_API_KEY`
- **Value:** Your Gemini API key
- **Environment:** Select **all**

---

### Step 6: Save the Variable

**What to do:** Click Save to add the environment variable.

**macOS:**
![Save Variable - macOS](/screenshots/macos/api-keys-step6-save.png)
*Screenshot: Save button highlighted on macOS*

**Windows:**
![Save Variable - Windows](/screenshots/windows/api-keys-step6-save.png)
*Screenshot: Save button highlighted on Windows*

**Actions:**
1. Double-check the Name and Value are correct
2. Click **"Save"** or **"Add"** button
3. Variable appears in the list
4. You'll see a success message

:::warning Check for Typos
Make sure there are NO extra spaces before or after the API key when pasting. Extra spaces will cause authentication errors!
:::

---

### Step 7: Redeploy the Application

**What to do:** Trigger a redeployment so the new API key takes effect.

**macOS:**
![Redeploy - macOS](/screenshots/macos/api-keys-step7-redeploy.png)
*Screenshot: Redeploy button or automatic deployment trigger on macOS*

**Windows:**
![Redeploy - Windows](/screenshots/windows/api-keys-step7-redeploy.png)
*Screenshot: Redeploy button or automatic deployment trigger on Windows*

**Actions:**
1. Go to **"Deployments"** tab
2. Click **"..."** menu on the latest deployment
3. Select **"Redeploy"**
4. Confirm the redeployment
5. Wait 2-5 minutes for deployment to complete

**Alternative:** Some setups auto-redeploy when you save environment variables.

---

## Expected Result

After completing all steps successfully, you should see:

✅ **Environment variable saved**
- Variable appears in the Environment Variables list
- Shows correct Name and masked Value (••••••)

✅ **Deployment successful**
- Build completes without errors
- Deployment status shows "Ready"
- Green checkmark appears

✅ **API connection working**
- Users can log in to Neurond Assistant
- Chat interface responds to questions
- No "API connection failed" errors

---

## Verification Steps

**Test that the API key is working:**

1. **Visit your Neurond Assistant URL**
   - `https://your-project.vercel.app`

2. **Log in as a user**
   - Use test account or create one

3. **Send a test message**
   - Type: "Hello, are you working?"
   - Expected: NA responds normally

4. **Check for errors**
   - No error messages appear
   - Response is generated successfully

**If it works:** ✅ API key is configured correctly!

**If it fails:** See [Troubleshooting](#troubleshooting) below.

---

## Troubleshooting

### ❌ "Invalid API Key" Error

**Problem:** API key not recognized

**Solutions:**
1. ✓ Verify key is copied correctly (no extra spaces)
2. ✓ Check key is still active on provider dashboard
3. ✓ Ensure variable name matches exactly (case-sensitive):
   - `OPENAI_API_KEY` (not `openai_api_key`)
4. ✓ Regenerate key on provider side if needed
5. ✓ Update in Vercel and redeploy

---

### ❌ "Cannot Connect to AI Service" Error

**Problem:** Connection issue even with valid key

**Solutions:**
1. ✓ Check provider service status (OpenAI/Azure/Google)
2. ✓ For Azure: Verify endpoint URL format is correct
3. ✓ Ensure all required variables are added (especially Azure needs 4)
4. ✓ Try redeploying again

---

### ❌ Changes Not Taking Effect

**Problem:** Added key but still not working

**Solutions:**
1. ✓ **Did you redeploy?** Environment changes require redeployment
2. ✓ Wait for deployment to fully complete (5-10 minutes)
3. ✓ Clear browser cache and reload
4. ✓ Check deployment logs for errors

---

## Security Best Practices

:::danger Keep API Keys Secret
- ❌ **NEVER** share API keys publicly
- ❌ **NEVER** commit keys to Git repositories
- ❌ **NEVER** send keys via unencrypted email
- ✅ **ONLY** store in Vercel environment variables
- ✅ **Rotate keys** regularly (every 30-90 days)
:::

**Additional security tips:**
- Set up billing alerts on your AI provider dashboard
- Monitor usage for unusual spikes
- Use separate keys for production vs development
- Deactivate old keys immediately after rotating

---

## Common Questions

**Q: Can I use multiple AI providers at once?**
A: Typically no - you configure one provider at a time. Contact your technical team for multi-provider setups.

**Q: How do I know which provider I'm currently using?**
A: Check which environment variables are set (`OPENAI_API_KEY` or `AZURE_OPENAI_API_KEY` or `GOOGLE_API_KEY`).

**Q: Will users notice when I change API keys?**
A: No, if done correctly. During redeployment (2-5 min), there may be brief unavailability, but users won't see any differences after.

**Q: What if I accidentally expose my API key?**
A: **Immediately:**
1. Deactivate the compromised key on provider dashboard
2. Generate a new key
3. Update in Vercel
4. Check provider dashboard for unexpected usage

---

## Related Tasks

**Now that you've added API keys, you may want to:**

- **[Test API Connections](testing-api-connections.md)** - Verify everything works
- **[Rotate API Keys](rotating-api-keys.md)** - Schedule regular key rotation
- **[Monitor Usage](../admin-guide/usage-monitoring.md)** - Track API costs
- **[Update API Keys](updating-api-keys.md)** - Change keys when needed

---

## Additional Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Azure OpenAI Service Docs](https://learn.microsoft.com/azure/ai-services/openai/)
- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Vercel Environment Variables Guide](https://vercel.com/docs/projects/environment-variables)

---

**Need help?** Contact your IT support team or see [When to Contact Support](../troubleshooting/when-to-contact-support.md).
