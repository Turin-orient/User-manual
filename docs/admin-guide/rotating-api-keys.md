---
sidebar_position: 7
---

# Rotating API Keys

Regularly rotate API keys as a security best practice.

## Purpose
Maintain security by periodically changing API credentials.

## Who Can Perform This
✅ Administrators only

---

## Why Rotate Keys?

**Security benefits:**
- ✅ Limits exposure if key is compromised
- ✅ Industry best practice
- ✅ Compliance requirement for some organizations
- ✅ Reduces long-term risk

**Recommended schedule:** Every 30-90 days

---

## Rotation Process

### Step 1: Generate New Key
1. Go to your AI provider dashboard (OpenAI, Azure, or Google)
2. Create a new API key
3. Copy the new key (you'll need it in Step 3)
4. **Don't delete the old key yet**

### Step 2: Add New Key to Neurond Assistant
1. Follow steps in [Adding API Keys](adding-api-keys.md)
2. Update environment variable with new key
3. Redeploy (if using Vercel)
4. Test that NA works with new key

### Step 3: Deactivate Old Key
1. Once new key is verified working
2. Return to provider dashboard
3. Delete or deactivate old key

:::warning Zero-Downtime Rotation
Always add and test the new key BEFORE removing the old one to avoid service interruption.
:::

---

## Rotation Checklist

- [ ] Generate new key from provider
- [ ] Update in Neurond Assistant
- [ ] Redeploy application
- [ ] Test functionality
- [ ] Verify users can chat normally
- [ ] Delete old key from provider
- [ ] Document rotation date
- [ ] Schedule next rotation

---

## Expected Result
✅ New API key active  
✅ No service disruption  
✅ Old key deactivated  
✅ Improved security posture  

---

## Next Steps
- [Test API Connections](testing-api-connections.md)
- [Monitor Usage](usage-monitoring.md)
