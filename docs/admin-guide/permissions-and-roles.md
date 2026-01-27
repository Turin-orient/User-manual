---
sidebar_position: 3
---

# Permissions and Roles

## Purpose
Understand and assign user roles with appropriate access levels.

## Who Can Perform This
✅ **System Administrators only**

---

## Available Roles

### Standard User
**Can:**
- ✅ Use chat interface
- ✅ Upload documents
- ✅ Access knowledge base
- ✅ Export results
- ✅ View own conversation history

**Cannot:**
- ❌ Manage other users
- ❌ Access admin panel
- ❌ Modify system settings
- ❌ View other users' data

###Administrator
**Can do everything Standard Users can, PLUS:**
- ✅ Add/edit/remove users
- ✅ Manage API keys
- ✅ Configure system settings
- ✅ View usage analytics
- ✅ Access audit logs
- ✅ System maintenance tasks

---

## Assigning Roles

**When creating user:**
1. Select role from dropdown during user creation
2. Options: "User" or "Administrator"

**For existing user:**
1. Go to User Management
2. Find user → Edit
3. Change "Role" field
4. Save
5. Changes take effect immediately

[Screenshot: Role selection dropdown]

---

## Best Practices

**Principle of Least Privilege:**
- Grant minimum access needed for job function
- Default to "User" role
- Only assign "Admin" when necessary

**Regular Review:**
- Audit user roles quarterly
- Remove admin access when no longer needed
- Check for inactive accounts

---

## Expected Result
✅ Users have appropriate access levels  
✅ No unauthorized access to admin functions  
✅ Clear separation of regular vs admin capabilities  

---

## Next Steps
- [API Key Management](api-keys-overview.md)
- [Usage Monitoring ](usage-monitoring.md)
