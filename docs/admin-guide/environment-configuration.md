---
sidebar_position: 9
---

# Environment Configuration

Configure workspace and environment settings for Neurond Assistant.

## Purpose
Customize system behavior and settings for your organization.

## Who Can Perform This
✅ Administrators only

---

## Configuration Areas

### 1. General Settings
- **Application Name** - Display name for your instance
- **Company Logo** - Upload custom branding
- **Default Language** - English, Vietnamese, etc.
- **Time Zone** - For timestamps and scheduling

### 2. Security Settings
- **Session Timeout** - How long users stay logged in (default: 60 min)
- **Password Policy** - Complexity requirements (if using password auth)
- **2FA Enforcement** - Require two-factor authentication
- **IP Whitelist** - Restrict access to specific IP ranges (optional)

### 3. Feature Toggles
- **Document Upload** - Enable/disable file uploads
- **Export Functions** - Allow users to export results
- **Conversation History** - Enable history feature
- **Voice Input** - Enable microphone (if supported)

### 4. Usage Limits (if applicable)
- **Max File Size** - Per upload (default: 10-25 MB)
- **Max Messages** - Per day per user
- **Storage Quota** - For uploaded files

---

## How to Configure

### Via Admin Interface

1. Admin Dashboard → Settings
2. Navigate to relevant section
3. Modify values
4. Click "Save Changes"
5. Some changes may require restart/redeploy

[Screenshot: Settings configuration page]

---

### Via Environment Variables (Vercel)

Common environment variables:

```
# Application
APP_NAME=Neurond Assistant
DEFAULT_LANGUAGE=en

# Security
SESSION_TIMEOUT=3600
REQUIRE_2FA=false

# Features
ENABLE_FILE_UPLOAD=true
MAX_FILE_SIZE_MB=25

# Database (if applicable)
DATABASE_URL=your-database-connection-string
```

**To update:**
1. Vercel Dashboard → Settings → Environment Variables
2. Add or edit variables
3. Redeploy

---

## Best Practices

**Start conservative:**
- Lower session timeout for high-security environments
- Enable 2FA for admin accounts
- Set reasonable file size limits

**Monitor and adjust:**
- Review usage patterns
- Adjust limits based on actual use
- Get user feedback

**Document changes:**
- Keep record of configuration changes
- Note date and reason
- Helpful for troubleshooting

---

## Expected Result
✅ System configured to meet organizational needs  
✅ Security policies enforced  
✅ Features enabled/disabled appropriately  

---

## Next Steps
- [Workspace Settings](workspace-settings.md)
- [Usage Monitoring](usage-monitoring.md)
- [System Health](system-health.md)
