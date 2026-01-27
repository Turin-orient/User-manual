---
sidebar_position: 2
---

# Error Messages Explained

Common error messages and what they mean in plain language.

## Purpose
Understand error messages and know how to fix them.

## Who Can Use This
✅ All users

---

## Authentication Errors

### "Invalid email or password"
**What it means:** Login credentials are incorrect

**Fix:**
- Check spelling and Caps Lock
- Use "Forgot Password" option
- Contact admin to reset

### "Account not found"
**What it means:** Email not registered in system

**Fix:**
- Verify you have an account
- Ask admin to create account
- Check if using correct email

### "Session expired"
**What it means:** Logged out due to inactivity

**Fix:**
- Log in again
- Normal security measure
- Your work was auto-saved

---

## API / Connection Errors

### "Failed to connect to AI service"
**What it means:** Cannot reach OpenAI/Azure/Google

**Fix (Users):**
- Wait a moment and try again
- Refresh page
- Contact admin if persists

**Fix (Admins):**
- Check API keys are valid
- Verify provider service status
- Test API connection

### "API quota exceeded"
**What it means:** Usage limit reached for the billing period

**Fix (Admins):**
- Check provider dashboard
- Upgrade plan or wait for reset
- Implement usage limits

### "Rate limit exceeded"
**What it means:** Too many requests in short time

**Fix:**
- Wait 1-2 minutes
- Retry request
- Spread out queries

---

## Upload Errors

### "File too large"
**What it means:** File exceeds size limit (usually 10-25MB)

**Fix:**
- Compress file
- Split into smaller files
- Convert to more compact format

### "Unsupported file type"
**What it means:** File format not accepted

**Fix:**
- Convert to PDF, Word, or Excel
- Check supported formats list
- Contact admin about format support

### "Upload failed"
**What it means:** Network or system issue

**Fix:**
- Check internet connection
- Try smaller file first
- Refresh and retry

---

## Processing Errors

### "Cannot process document"
**What it means:** Unable to read/extract from file

**Fix:**
- Check if PDF is text-based (not image scan)
- Remove password protection
- Try different file format
- Ensure file isn't corrupted

### "Processing timeout"
**What it means:** Document took too long to process

**Fix:**
- Try with smaller file
- Break into sections
- Retry later during off-peak

---

## Response Errors

### "I don't have information about that"
**What it means:** Topic not in knowledge base

**Fix:**
- Rephrase question
- Try different keywords
- Ask related question
- Contact admin about adding documents

### "Error generating response"
**What it means:** Technical issue creating answer

**Fix:**
- Regenerate response
- Rephrase question more simply
- Refresh page
- Report to admin if recurring

---

## Export Errors

### "Export failed"
**What it means:** Couldn't create download file

**Fix:**
- Try copy/paste instead
- Use different format
- Refresh and retry

### "Download blocked"
**What it means:** Browser or security settings blocking

**Fix:**
- Allow downloads in browser settings
- Check corporate firewall
- Try different browser

---

## System Errors

### "Service temporarily unavailable"
**What it means:** System maintenance or outage

**Fix:**
- Wait 5-10 minutes
- Check for maintenance announcement
- Contact IT if extended

### "Internal server error"
**What it means:** Backend system issue

**Fix:**
- Refresh page
- Try again in few minutes
- Report to admin with details

---

## Expected Result
✅ Understanding of what errors mean  
✅ Ability to fix common errors yourself  
✅ Knowledge of when to escalate  

---

## Next Steps
- [Common issues guide](common-issues.md)
- [Performance troubleshooting](performance-issues.md)
- [When to contact support](when-to-contact-support.md)
