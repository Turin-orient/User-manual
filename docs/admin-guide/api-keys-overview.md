---
sidebar_position: 4
---

# API Keys Overview

## Purpose
Understand what API keys are and why they're needed for Neurond Assistant.

## Who Can Perform This
✅ **System Administrators only**

---

## What Are API Keys?

**Plain Language:** API keys are like secure passwords that allow Neurond Assistant to connect to AI services (OpenAI, Azure, or Google) to power the conversational intelligence.

**Why needed:**
- NA uses AI language models from providers (OpenAI, Azure, Google)
- API keys authenticate and authorize these connections
- They also track usage for billing

---

## Supported AI Providers

### OpenAI
- Service: GPT-4, GPT-3.5
- Used for: General conversation, content generation
- Get keys from: platform.openai.com

### Azure OpenAI Service
- Service: Azure-hosted GPT models
- Used for: Enterprise deployments with Azure
- Get keys from: Azure Portal

### Google (Gemini)
- Service: Gemini API
- Used for: Google AI models
- Get keys from: Google AI Studio

---

## API Key Components

**Typical API key looks like:**
```
sk-proj-abc123def456ghi789...
```

**What you need (varies by provider):**
- **API Key** (always required)
- **Endpoint URL** (for Azure)
- **Deployment Name** (for Azure)
- **Organization ID** (for some OpenAI setups)

---

## Security Importance

:::danger Critical Security
API keys are **highly sensitive**:
- ❌ Never share publicly
- ❌ Never commit to code repositories
- ❌ Never send via unencrypted email
- ✅ Store in secure environment variables
- ✅ Rotate regularly (monthly recommended)
:::

---

## Key Management Tasks

**As an admin, you'll need to:**
1. **Add keys** when setting up Neurond Assistant
2. **Update keys** when they change
3. **Rotate keys** regularly for security
4. **Test connections** to ensure they work
5. **Monitor usage** to avoid quota limits

**See detailed guides:**
- [Adding API Keys](adding-api-keys.md)
- [Updating API Keys](updating-api-keys.md)
- [Rotating API Keys](rotating-api-keys.md)
- [Testing API Connections](testing-api-connections.md)

---

## Expected Result
✅ Understanding of what API keys are  
✅ Knowledge of which providers are supported  
✅ Awareness of security best practices  

---

## Next Steps
- [Add your first API key](adding-api-keys.md)
- [Test API connection](testing-api-connections.md)
