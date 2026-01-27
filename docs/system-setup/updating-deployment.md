---
sidebar_position: 5
---

# Updating and Redeploying

How to update Neurond Assistant and redeploy changes.

## Purpose
Deploy updates, new features, or configuration changes.

## Who Can Perform This
✅ System Administrators

---

## Automatic Redeployment (Git-based)

**How it works:**
1. Push code changes to your Git repository
2. Vercel automatically detects changes
3. Rebuilds and redeploys automatically
4. Takes 5-10 minutes

**No manual action needed!**

---

## Manual Redeployment

**When to use:**
- After changing environment variables
- To force rebuild
- For troubleshooting

**Steps:**
1. Vercel Dashboard → Your Project
2. Deployments tab
3. Click "..." on latest deployment
4. Select "Redeploy"
5. Confirm

[Screenshot: Redeploy option in Vercel]

---

## Updating Environment Variables

**Steps:**
1. Settings → Environment Variables
2. Edit variable value
3. Save
4. **Important:** Click "Redeploy" for changes to apply

**Changes take effect:** After redeploy completes

---

## Testing Updates

**Before announcing to users:**
1. Deploy to preview environment first (if available)
2. Test functionality thoroughly
3. Verify API connections work
4. Check for errors
5. Then promote to production

---

## Expected Result
✅ Changes deployed successfully  
✅ Application updated with new code/config  
✅ No disruption to users  

---

## Next Steps
- [Rollback if needed](rollback.md)
- [Troubleshoot deployment issues](deployment-troubleshooting.md)
