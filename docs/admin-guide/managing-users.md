---
id: managing-users
title: User Management
sidebar_label: User Management
sidebar_position: 2
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

## 1. Accessing User Management

Admins can access the **User Management** section via:
- The main **Navigation Bar**.
- The **Admin Dashboard** (through "Quick Actions" or "Administration Sections").

---

## 2. The User Management Interface

Upon accessing this section, the system displays a comprehensive list of users along with configuration options to customize the view.

<AnnotatedImage 
  src="/img/ui/admin/user_management_overview.png" 
  alt="User Management Interface"
/>

---

## 3. Customizing the Display

You can customize which columns are visible in the user table to focus on the information that matters most.

### 3.1. Toggle Columns
Admins can show or hide the following columns:
- **Name**
- **Email**
- **Status**
- **Role**

<AnnotatedImage 
  src="/img/ui/admin/user_display_options.png" 
  alt="Toggle Columns Option"
/>

---

## 4. Filtering Users

Efficiently locate specific user groups using the filtering tools.

### 4.1. Filter by Status
- Check the box to display **Active users**.
- Check the box to display **Inactive users**.
- Click **Clear Filter** to reset the view.

<AnnotatedImage 
  src="/img/ui/admin/user_filter_status.png" 
  alt="Filter by Status"
/>

### 4.2. Filter by Role
- Click on the **Role filter** dropdown.
- You can select **multiple roles** simultaneously.
- The system will indicate the number of users currently hidden by the active filter.

---

## 5. Search and Pagination

### 5.1. Pagination
Navigate through large lists of users:
- **< (Previous Page)**: Return to the previous page.
- **> (Next Page)**: Move to the next page.

### 5.2. Search Functionality
- Use the **Search Bar** to find specific users.
- Supports searching by **Name** or **Email**.

<AnnotatedImage 
  src="/img/ui/admin/user_search.png" 
  alt="Search Users"
/>

---

## 6. Creating a New User Account

### 6.1. Account Creation Flow
To onboard a new user:
1. Click the **Create Account** button.
2. Enter the new user's information.
3. Assign the appropriate **Role**.
4. Click **Save** to create the account.

### 6.2. Creation Form Example

<AnnotatedImage 
  src="/img/ui/admin/user_create_account.png" 
  alt="Create New Account Form"
/>

---

## 7. Operational Notes

- The User Management interface is optimized for handling **large numbers of users**.
- Combine **filters** and **search** for the fastest results.
- Designed to support **multi-tenant** environments effectively.
