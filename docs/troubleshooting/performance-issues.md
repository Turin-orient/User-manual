---
sidebar_position: 3
---

# Performance Issues

Troubleshoot slow response times and performance problems.

## Purpose
Improve Neurond Assistant performance and responsiveness.

## Who Can Use This
✅ All users  
✅ Administrators

---

## For Users

### Slow Page Loading

**Possible causes:**
- Slow internet connection
- Browser overloaded with tabs
- Cache needs clearing

**Solutions:**
1. Test internet speed
2. Close unused browser tabs
3. Clear browser cache
4. Try during off-peak hours
5. Use wired connection vs WiFi

### Long Wait for Responses

**Possible causes:**
- Complex query
- High system load
- API provider slow
- Large document processing

**Solutions:**
1. Simplify question
2. Break into smaller queries
3. Wait during peak times (lunch, morning)
4. Try smaller documents

### Upload Takes Forever

**Solutions:**
1. Check file size (compress if large)
2. Test internet upload speed
3. Try smaller file first
4. Use wired connection

---

## For Administrators

### High Response Times

**Check:**
- [ ] API provider dashboard - any issues?
- [ ] Vercel analytics - build time normal?
- [ ] Check active users - spike in usage?
- [ ] Review error logs

**Solutions:**
- Scale up API tier/plan
- Implement caching (if available)
- Optimize knowledge base
- Distribute load (usage limits)

### Deployment Slow

**Solutions:**
- Check Vercel status page
- Review build logs for bottlenecks
- Optimize dependencies
- Clear build cache

---

## Browser-Specific Issues

### Chrome/Edge
- Clear cache: Ctrl+Shift+Delete
- Disable extensions temporarily
- Try incognito mode

### Firefox
- Clear cache: Ctrl+Shift+Delete
- Check for browser updates
- Disable add-ons

### Safari
- Clear cache: Cmd+Option+E
- Check for macOS/iOS updates
- Try private browsing

---

## Network Optimization

**For best performance:**
- Wired ethernet > WiFi
- Close bandwidth-heavy apps
- Check corporate network not throttling
- Use during off-peak hours

---

## Expected Result
✅ Improved response times  
✅ Faster uploads and processing  
✅ Better user experience  

---

## Next Steps
- [System health monitoring](../admin-guide/system-health.md)
- [Common issues](common-issues.md)
