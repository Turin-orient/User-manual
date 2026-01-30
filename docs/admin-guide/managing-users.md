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

## 3. Monitoring User Status

The system provides clear visual indicators for user account status, helping admins quickly identify active and inactive members.

### 3.1. Active Users
Users who are currently enabled in the system are listed with an **Active** status. To view only these users, select the "Active users" checkbox in the filter.

<AnnotatedImage 
  src="/img/ui/admin/user_list_active.png" 
  alt="List of Active Users"
/>

### 3.2. Inactive Users
Users who have been deactivated or haven't activated their accounts are shown as **Inactive**. This view is useful for auditing unused accounts.

<AnnotatedImage 
  src="/img/ui/admin/user_list_inactive.png" 
  alt="List of Inactive Users"
/>

---

## 4. Customizing the Display

You can customize which columns are visible in the user table to focus on the information that matters most.

### 4.1. Toggle Columns
Admins can show or hide the following columns:
- **Name**: Full name of the user.
- **Email**: Contact email address.
- **Status**: Current account state (Active/Inactive).
- **Role**: Assigned system role (e.g., Admin, User).

<AnnotatedImage 
  src="/img/ui/admin/user_display_options.png" 
  alt="Toggle Columns Option"
/>

---

## 5. Managing Roles and Permissions

Role management is critical for security and access control.

### 5.1. Changing User Roles
To change a user's role:
1. Locate the user in the list.
2. Click on their current **Role** in the Role column.
3. Select the new role from the dropdown menu (e.g., changing from *User* to *Admin*).
4. The system will update the permissions immediately.

<AnnotatedImage 
  src="/img/ui/admin/user_change_role.png" 
  alt="Changing User Role"
/>

---

## 6. Detailed User Actions

Admins can perform specific actions on individual user accounts.

### 6.1. Viewing and Editing User Details
To view full details or edit specific attributes of a user, click directly on the **User Name**. This will open the detailed profile view where you can update information or settings specific to that user.

<AnnotatedImage 
  src="/img/ui/admin/user_click_name.png" 
  alt="Click Name to Edit"
  annotations={[
    { type: 'cursor', x: '15%', y: '50%' }
  ]}
/>

### 6.2. Changing User Status (Deactivate/Activate)
To quickly change a user's access status:
1. Locate the **Status** column for the target user.
2. Click the status toggle button.
3. Confirm the action to Deactivate (lock) or Activate (unlock) the account.

<AnnotatedImage 
  src="/img/ui/admin/user_filter_status.png" 
  alt="Status Toggle Interaction"
/>

---

## 7. Filtering and Search

Efficiently locate specific user groups using the filtering tools.

### 7.1. Advanced Filtering through Roles
- Click on the **Role filter** dropdown.
- You can select **multiple roles** simultaneously (e.g., view both Admins and Managers).
- The tag counter will indicate how many roles are currently applied to the filter.

### 7.2. Search Functionality
- Use the **Search Bar** to find specific users.
- Supports searching by **Name** or **Email**.

<AnnotatedImage 
  src="/img/ui/admin/user_search.png" 
  alt="Search Users"
/>

---

## 8. Creating a New User Account

### 8.1. Account Creation Flow
To onboard a new user:
1. Click the **Create Account** button.
2. Enter the new user's information (Name, Email).
3. Assign the appropriate **Role**.
4. Click **Save** to create the account. An invitation email will be sent to the user.

<AnnotatedImage 
  src="/img/ui/admin/user_create_account.png" 
  alt="Create New Account Form"
/>

---

## 9. Operational Notes

- **Audit Regularly**: Use the "Inactive Users" filter periodically to clean up unused accounts.
- **Role Security**: Only assign "Admin" roles to trusted personnel. Use the Role filter to double-check who has administrative privileges.
- **Bulk Management**: The interface is optimized for high-volume paging, ensuring performance even with thousands of users.
