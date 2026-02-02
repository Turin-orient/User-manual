# Neurond Assistant
## Roles & Permissions (RBAC) – Full Documentation

---

## 1. Overview

Neurond Assistant implements a **Role-Based Access Control (RBAC)** system to manage user access in a secure, scalable, and enterprise-ready manner.

### Core Concepts

- **User**: A human account that can log in to the system
- **Role**: A named collection of permissions
- **Permission**: An atomic rule that grants an action on a resource
- **Resource**: A system entity (User, Workspace, Model, etc.)

Relationship model:

```
User → Role → Permission → (Action + Resource)
```

---

## 2. Permission Model

Each permission follows a strict naming and behavior model:

```
<Action> + <Resource>
```

### Standard Actions

| Action | Description |
|------|------------|
| View | Read-only access |
| Create | Create new entities |
| Update | Modify existing entities |
| Soft Delete | Logical deletion (recoverable) |
| Hard Delete | Permanent deletion |
| Manage | Composite permission (full control) |

---

## 3. Smart Permission Logic

Neurond Assistant uses **permission dependency resolution**.

### Auto-Grant Rules

- Granting **Manage** automatically grants:
  - Create
  - Update
  - Soft Delete

- Granting all child permissions automatically results in **Manage** being enabled

### Characteristics

- Permissions can still be toggled individually
- Dependency resolution happens in real time
- Changes are staged until explicitly applied

---

## 4. Roles & Permissions UI Behavior

### Staged Changes Model

- Toggling a permission does **not** immediately persist changes
- All changes are staged until **Apply Changes** is clicked
- **Discard** reverts all pending changes

### Pending Changes Indicator

- Displays the number of un-applied permission changes
- Updates instantly when toggles are switched

### Permission Counter

- Each resource card shows `Enabled / Total` permissions
- Counter updates live based on toggle state and auto-grants

---

## 5. Resource-Level Permission Definitions

---

### 5.1 User

**Description:** Manages platform user accounts.

| Permission | Description |
|----------|------------|
| View Users | View user list and profile details |
| Create User | Create new user accounts |
| Update User | Edit user information |
| Soft Delete User | Deactivate users |
| Manage Users | Full user management |

---

### 5.2 Role

**Description:** Defines collections of permissions.

| Permission | Description |
|----------|------------|
| View Roles | View existing roles |
| Create Role | Create new roles |
| Update Role | Modify roles |
| Soft Delete Role | Disable roles |
| Manage Roles | Full role control |

---

### 5.3 Permission

**Description:** Controls permission definitions themselves.

| Permission | Description |
|----------|------------|
| View Permissions | View permission catalog |
| Create Permission | Define new permissions |
| Update Permission | Modify permissions |
| Soft Delete Permission | Disable permissions |
| Manage Permissions | Full permission system control |

---

### 5.4 Admin Panel

**Description:** Grants access to administrative UI.

| Permission | Description |
|----------|------------|
| View Admin Panel | Access admin interface |

---

### 5.5 Analytics

**Description:** Platform metrics and reporting.

| Permission | Description |
|----------|------------|
| View Analytics | View dashboards and reports |

---

### 5.6 User Usage

**Description:** Tracks usage and consumption.

| Permission | Description |
|----------|------------|
| View User Usage | View usage statistics |

---

### 5.7 Model

**Description:** AI / LLM models registered in the system.

| Permission | Description |
|----------|------------|
| View Models | View models |
| Create Model | Register models |
| Update Model | Modify model settings |
| Soft Delete Model | Disable models |
| Manage Models | Full model lifecycle |

---

### 5.8 Assistant

**Description:** AI Assistants (Agents).

| Permission | Description |
|----------|------------|
| View Assistants | View assistants |
| Create Assistant | Create assistants |
| Update Assistant | Edit assistants |
| Soft Delete Assistant | Disable assistants |
| Manage AI Agents | Full assistant control |

---

### 5.9 Assistant Knowledge

**Description:** Knowledge sources attached to assistants.

| Permission | Description |
|----------|------------|
| View Assistant Knowledge | View knowledge |
| Create Assistant Knowledge | Add knowledge |
| Update Assistant Knowledge | Edit knowledge |
| Hard Delete Assistant Knowledge | Permanently delete |
| Manage Assistant Knowledge | Full knowledge control |

---

### 5.10 Workspace

**Description:** Collaborative environments.

| Permission | Description |
|----------|------------|
| View Workspaces | View workspaces |
| Create Workspace | Create workspaces |
| Update Workspaces | Modify workspaces |
| Soft Delete Workspace | Disable workspaces |
| Share Workspace (Tenant-wide) | Share across tenant |
| Manage Workspaces | Full workspace admin |

---

### 5.11 Workspace Knowledge

**Description:** Shared knowledge across a workspace.

| Permission | Description |
|----------|------------|
| View Workspace Knowledge | View shared knowledge |
| Create Workspace Knowledge | Add knowledge |
| Update Workspace Knowledge | Edit knowledge |
| Hard Delete Workspace Knowledge | Permanent deletion |
| Manage Workspace Knowledge | Full control |

---

### 5.12 Model Access Limit

**Description:** Controls quotas and rate limits.

| Permission | Description |
|----------|------------|
| View Model Access Limit | View limits |
| Update Model Access Limit | Modify limits |

---

### 5.13 Branding

**Description:** Platform visual identity.

| Permission | Description |
|----------|------------|
| View Branding | View branding settings |
| Update Branding | Modify branding |

---

### 5.14 Activity Log

**Description:** System audit trail.

| Permission | Description |
|----------|------------|
| View Activity Log | View audit logs |

---

### 5.15 API Key Management

**Description:** Programmatic access credentials.

| Permission | Description |
|----------|------------|
| View API Keys | View keys |
| Create API Key | Generate keys |
| Update API Key | Rotate keys |
| Soft Delete API Key | Revoke keys |
| Manage API Keys | Full API key control |

---

### 5.16 Studio

**Description:** Assistant development environment.

| Permission | Description |
|----------|------------|
| View Studio | Access Studio |

---

### 5.17 Prompt Gallery

**Description:** Repository of reusable prompts.

| Permission | Description |
|----------|------------|
| View Prompts | View prompts |
| Create Prompt | Create prompts |
| Update Prompt | Edit prompts |
| Hard Delete Prompt | Permanently delete |
| Manage Prompts | Full prompt control |

---

## 6. Default Role Examples

| Role | Scope |
|----|-----|
| Super Admin | All permissions |
| System Admin | Users, Roles, Permissions, API Keys |
| Workspace Admin | Workspace & Knowledge |
| AI Engineer | Models, Assistants, Knowledge |
| Analyst | Analytics, Usage |
| End User | View Assistants, Studio |

---

## 7. Design Principles

- Least-privilege access
- Explicit confirmation for changes
- Full auditability
- Tenant-safe operations
- Enterprise compliance readiness

---

## 8. Summary

The Neurond Assistant Roles & Permissions system is a **staged, dependency-aware RBAC implementation** designed for secure enterprise-scale AI platforms.

