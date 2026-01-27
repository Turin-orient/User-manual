---
sidebar_position: 6
---

# Updating API Keys

Update existing API keys when credentials change.

##  Purpose
Replace or update API keys without disrupting service.

## Who Can Perform This
✅ Administrators only

---

## When to Update

- Provider changed your key
- Switching to different AI service
- Upgrading to different tier/plan
- After security incident

---

## Steps to Update

### Via Admin Interface

1. Go to Admin → API Configuration
2. Find the provider section
3. Click "Edit" or "Update"
4. Enter new API key
5. Click "Save"
6. Click "Test Connection"
7. Verify success

---

### Via Vercel (Environment Variables)

1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Find the key variable (e.g., `OPENAI_API_KEY`)
4. Click "Edit"
5. Replace with new value
6. Save
7. Redeploy project

---

## Expected Result
✅ New key active  
✅ Neurond Assistant works without interruption  
✅ Old key can be deactivated on provider side  

---

## Next Steps
- [Rotate API Keys (scheduled)](rotating-api-keys.md)
- [Test Connections](testing-api-connections.md)
