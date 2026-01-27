---
sidebar_position: 6
---

# Rollback Procedures

How to rollback to a previous version if something goes wrong.

## Purpose
Quickly restore a working version after a problematic deployment.

## Who Can Perform This
✅ System Administrators

---

## When to Rollback

**Consider rollback if:**
- New deployment has critical errors
- Users cannot access the system
- API connections fail
- Performance severely degraded
- Data corruption suspected

---

## Vercel Instant Rollback

**Vercel keeps all deployment history**

### Steps:
1. **Go to Deployments tab** in Vercel Dashboard
2. **Find previous working deployment**
3. **Click "..." menu** on that deployment
4. **Select "Promote to Production"**
5. **Confirm rollback**

**Time to rollback:** Instant (< 1 minute)

[Screenshot: Rollback/Promote option in Vercel]

---

## Verify Rollback Success

**After rollback:**
1. Visit your application URL
2. Test functionality
3. Verify issue is resolved
4. Inform users system is restored

---

## Investigating the Issue

**After rolling back:**
1. Review deployment logs of failed version
2. Check what changed
3. Identify root cause
4. Fix issue before redeploying

---

## Expected Result
✅ System restored to working state  
✅ Users can access application  
✅ Minimal downtime  

---

## Next Steps
- [Review deployment logs](deployment-troubleshooting.md)
- [Fix issues before redeploying](updating-deployment.md)
