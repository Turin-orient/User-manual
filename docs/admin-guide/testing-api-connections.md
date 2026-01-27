---
sidebar_position: 8
---

# Testing API Connections

Verify that API keys are working correctly.

## Purpose
Ensure Neurond Assistant can communicate with AI providers.

## Who Can Perform This
✅ Administrators only

---

## When to Test

- After adding new API key
- After updating/rotating key
- When users report errors
- During troubleshooting
- Regular maintenance checks

---

## Testing Methods

### Method 1: Built-in Test (if available)

**Steps:**
1. Admin Dashboard → API Configuration
2. Find your provider section
3. Click "Test Connection"
4. Wait for result

**Success:** ✅ "Connection successful"  
**Failure:** ❌ Error message with details

[Screenshot: Test connection button and success message]

---

### Method 2: Manual User Test

**Steps:**
1. Log in as a regular user (or test account)
2. Type a simple question: "Hello, can you hear me?"
3. Send message

**Success:** NA responds normally  
**Failure:** Error message appears

---

## Common Test Failures

### "Invalid API Key"
**Cause:** Key is incorrect or inactive  
**Fix:** Verify key is correctly copied, check provider dashboard

### "Quota Exceeded"
**Cause:** Usage limit reached  
**Fix:** Check provider billing, upgrade plan, or wait for reset

### "Connection Timeout"
**Cause:** Network or endpoint issue  
**Fix:** Check internet, verify endpoint URL (for Azure)

### "Unauthorized"
**Cause:** Permissions issue  
**Fix:** Verify key has correct permissions on provider side

---

## Provider-Specific Testing

### OpenAI
- Simple test: "What is 2+2?"
- Expected: Should calculate correctly

### Azure OpenAI
- Verify endpoint URL format: `https://[name].openai.azure.com/`
- Check deployment name matches

### Google Gemini
- Test with: "Tell me a short joke"
- Expected: Should respond creatively

---

## Expected Result
✅ Confirmation that API is connected  
✅ Error details if connection fails  
✅ Confidence system is operational  

---

## Next Steps
- [Monitor Usage](usage-monitoring.md)
- [Troubleshoot Issues](../troubleshooting/common-issues.md)
