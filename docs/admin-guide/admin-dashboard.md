---
id: admin-dashboard
title: Admin Dashboard
sidebar_label: Admin Dashboard
sidebar_position: 1
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

## 1. Overview

The Admin Dashboard is the central hub for users with **Admin** privileges, allowing them to:
- Quickly access frequently used administrative tasks.
- Manage users, workspaces, AI assistants, APIs, models, and access rights.
- Monitor system activity and reports.

<AnnotatedImage 
  src="/img/ui/admin/Admin_Dashboard.png" 
  alt="Admin Dashboard Overview"
/>

---

## 2. Layout Structure

### 2.1. Quick Actions Section

Displays frequently used tasks for rapid access.

**Each item includes:**
- **Name**: The name of the task.
- **Short Description**: A brief explanation of the function.
- **Action Button**: Direct navigation button to the corresponding section.

### 2.2. Administration Sections

A list of the main administrative areas of the system.

**Each section includes:**
- **Name**: The name of the management area.
- **Short Description**: A brief description.
- **View Details**: Link to navigate to the detailed page of that section.

---

## 3. Top Right Information

- Displays the **Unit / Tenant Name** currently under administration.
- Helps Admins identify the correct environment they are managing.

---

## 4. Navigation Bar Structure

The navigation bar is categorized into clear functional groups:

### 4.1. General
- **Dashboard**: The main overview page.

### 4.2. User Management
- **User Management**: Manage individual user accounts.
- **Tenant Management**: Manage organizational units.

### 4.3. Reporting
- **Analytics**: System performance and usage analysis.
- **User Usage**: Individual user activity tracking.

### 4.4. AI Management
- **Assistant Management**: Configure global AI assistants.
- **Workspace Management**: oversee all workspaces.

### 4.5. API & Model Management
- **API Key Management**: Manage connections to LLM providers.
- **Models Management**: Configure available AI models.
- **Prompt Management**: Manage system-level prompts.

### 4.6. Governance
- **Role Model Configuration**: Define role structures.
- **Roles & Permissions**: Assign permissions to roles.
- **Activity Logs**: Audit system actions.

---

## 5. Notes

- Sections are grouped by **Administration – Operations – Governance**.
- The design is focused on **fast manipulation and centralized control** for Admins.
