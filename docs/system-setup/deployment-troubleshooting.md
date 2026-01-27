---
sidebar_position: 7
---

# Deployment Troubleshooting

Common deployment issues and their solutions.

## Purpose
Resolve deployment problems quickly.

## Who Should Use This
✅ System Administrators experiencing deployment issues

---

## Build Failures

### Error: "Build failed - npm install failed"

**Cause:** Dependency installation issues

**Solutions:**
1. Check `package.json` for errors
2. Verify Node.js version compatibility
3. Clear Vercel build cache: Settings → Clear Cache
4. Redeploy

---

### Error: "Environment variable not found"

**Cause:** Missing required environment variables

**Solutions:**
1. Check all required variables are added
2. Verify variable names match exactly (case-sensitive)
3. Ensure variables are set for "Production"environment
4. Redeploy after adding variables

---

## Runtime Errors

### Error: "API key invalid"

**Cause:** Incorrect or expired API key

**Solutions:**
1. Verify API key in provider dashboard (OpenAI/Azure/Google)
2. Check for extra spaces when copying key
3. Regenerate key if needed
4. Update environment variable
5. Redeploy

---

### Error: "Cannot connect to AI provider"

**Cause:** Network or configuration issue

**Solutions:**
1. Test API key directly on provider website
2. For Azure: Verify endpoint URL format
3. Check provider service status
4. Review firewall/network settings

---

## Deployment Issues

### "Deployment takes too long / times out"

**Causes:** Large build, network issues

**Solutions:**
1. Check build logs for where it's stuck
2. Optimize dependencies if too large
3. Try redeploying
4. Contact Vercel support if persists

---

### "404 - Page not found" after deployment

**Causes:** Routing issues, build output incorrect

**Solutions:**
1. Verify output directory is correct
2. Check framework preset is correct
3. Review build logs for errors
4. Ensure all pages built successfully

---

## SSL/HTTPS Issues

### "SSL certificate error"

**Cause:** DNS not configured or propagating

**Solutions:**
1. Wait for DNS propagation (up to 48 hours)
2. Verify DNS records match Vercel's requirements
3. Check domain ownership verified in Vercel
4. Try clearing browser cache

---

## Where to Get Help

**Vercel logs:**
- Project → Deployments → Click deployment → View logs

**Vercel support:**
- vercel.com/support
- Community: github.com/vercel/vercel/discussions

**Neurond AI support:**
- contact@neurond.com

---

## Expected Result
✅ Deployment issues identified and resolved  
✅ Application running smoothly  
✅ Understanding of common problems  

---

## Next Steps
- [Monitor system health](../admin-guide/system-health.md)
- [Review troubleshooting FAQ](../troubleshooting/faq.md)
