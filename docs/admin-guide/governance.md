---
id: governance
title: Governance
sidebar_label: Governance
sidebar_position: 6
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# Governance

## Overview

The **Governance** module provides core administrative tools to:
- Control **Roles** and **Permissions**.
- Define **role models** applicable across the system.
- Track **Activity Logs** for auditing, security, and compliance.

Governance serves as the foundation for:
- System security.
- Clear authorization.
- Full traceability of critical changes.

---

## I. Role Model Configuration

### 1. Purpose

**Role Model Configuration** allows Admins to:
- Configure permission sets for each role.
- Apply consistent permissions across the system.
- Reduce risks associated with manual permission granting.

---

### 2. Default UI

When accessing **Role Model Configuration**, the system displays:
- A list of existing roles.
- The permission configuration interface per role.

<AnnotatedImage 
  src="/img/ui/governance/01_default_view.png" 
  alt="Role Model Configuration – Default View"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Default View' }
  ]}
/>

---

### 3. Select Role to Configure

#### 3.1. Choose Role

- Click on a **role** in the list.
- The selected role will display all corresponding permissions.

<AnnotatedImage 
  src="/img/ui/governance/02_select_role.png" 
  alt="Select Role to Configure"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Select Role' }
  ]}
/>

---

### 4. Permission Controls

After selecting a role, Admins can:
- **Enable All**: Turn on all permissions.
- **Disable All**: Turn off all permissions.
- Toggle individual permissions on/off.

<AnnotatedImage 
  src="/img/ui/governance/03_permission_controls.png" 
  alt="Enable All / Disable All Permissions"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Toggle Permissions' }
  ]}
/>

---

### 5. Save Changes

- After adjusting permissions.
- Click **Save Changes** to apply.

⚠️ **Enterprise Note:**
- Permission changes take effect immediately.
- May directly impact the access rights of active users.

<AnnotatedImage 
  src="/img/ui/governance/04_save_changes.png" 
  alt="Save Role Configuration"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Save Changes' }
  ]}
/>

---

## II. Roles and Permissions

### 1. Overview

**Roles and Permissions** allows Admins to:
- Manage role lifecycle.
- Create new roles.
- Clone roles.
- Delete unused roles.

---

### 2. Clone Role

#### 2.1. Purpose

Cloning a role helps:
- Create a new role based on an existing one.
- Save time on permission configuration.

#### 2.2. Action

- Click the **Clone Role** button.
- The system creates a new role with permissions identical to the original.

<AnnotatedImage 
  src="/img/ui/governance/05_clone_role.png" 
  alt="Clone Role Action"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Clone Role' }
  ]}
/>

---

### 3. Delete Role

#### 3.1. Action

- Click the **Trash button** to delete a role.

<AnnotatedImage 
  src="/img/ui/governance/06_delete_role_btn.png" 
  alt="Delete Role Button"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Delete Role' }
  ]}
/>

---

#### 3.2. Warning

⚠️ **Enterprise Warning:**
- Cannot delete roles currently assigned to users.
- Deleting a role may impact system authorization.

<AnnotatedImage 
  src="/img/ui/governance/07_delete_confirm.png" 
  alt="Delete Role Confirmation"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Confirm Delete' }
  ]}
/>

---

### 4. Add New Role

#### 4.1. Add Role Flow

- Click **Add Role**.
- Enter new role information.
- Configure permissions.
- Save the role.

<AnnotatedImage 
  src="/img/ui/governance/08_add_role.png" 
  alt="Add New Role Button"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Add Role' }
  ]}
/>

---

#### 4.2. After Add

- The new role appears in the list.
- Can continue detailed configuration in **Role Model Configuration**.

<AnnotatedImage 
  src="/img/ui/governance/01_default_view.png" 
  alt="New Role Created"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Role List Updated' }
  ]}
/>

---

## III. Activity Logs

### 1. Overview

**Activity Logs** record all critical system activities, including:
- Role changes.
- Permission updates.
- Other administrative actions.

Purpose:
- Audit.
- Security monitoring.
- Compliance & forensic analysis.

---

### 2. Activity Log Content

Activity Logs typically include:
- Timestamp.
- Actor (admin/user).
- Action performed.
- Target object.

<AnnotatedImage 
  src="/img/ui/governance/09_activity_logs.png" 
  alt="Activity Logs View"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'View Logs' }
  ]}
/>

---

### 3. Enterprise Usage

Activity Logs are used for:
- Compliance audits.
- Security incident investigations.
- Tracking system changes.

⚠️ **Best Practice:**
- Grant Activity Logs viewing rights only to high-level Admins.
- Do not allow editing or deletion of logs.

---

## Governance Best Practices (Enterprise)

- Always use **Role Model Configuration** instead of manual permission assignment.
- Clone roles to ensure consistency.
- Limit the number of unnecessary roles.
- Periodically review Activity Logs.
- Apply the **Least Privilege** principle.

---

## Summary

The Governance module ensures:
- Clear authorization.
- Transparent administration.
- A secure and fully auditable system.

This is a **mandatory** component in any AI/Enterprise Platform.
