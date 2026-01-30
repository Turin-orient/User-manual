---
id: managing-users
title: User Management
sidebar_label: User Management
sidebar_position: 2
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';
import MouseTracker from '@site/src/components/MouseTracker';

# User Management Guide

This guide will help you manage all user accounts in your system. We have designed this "step-by-step" tutorial so that anyone, even without technical knowledge, can easily follow along.

---

## 1. Accessing User Management

To start managing users, you need to navigate to the correct screen.

1. **Step 1:** Look at the **Navigation Bar** on the left side of your screen.
2. **Step 2:** Find the section labeled **User Management**.
3. **Step 3:** Click on **User Management**.

<AnnotatedImage 
  src="/img/ui/admin/Admin_Dashboard.png" 
  alt="Navigation to User Management"
  annotations={[
    { type: 'border', x: '1.5%', y: '16.5%', width: '13%', height: '4%', color: 'blue', label: 'Click Here' },
    { type: 'cursor', x: '8%', y: '18%' }
  ]}
/>

---

## 2. Understanding the Interface

Once you are in, you will see the main **User Management Screen**. Let's get familiar with what you are seeing.

<AnnotatedImage 
  src="/img/ui/admin/user_management_overview.png" 
  alt="User Management Overview"
  annotations={[
    { type: 'border', x: '16%', y: '10%', width: '82%', height: '80%', color: 'blue', label: 'User List' }
  ]}
/>

- **User List (Center):** This is where all the accounts are shown.
- **Search Bar (Top Right):** Used to find a specific person.
- **Filter Options (Top Left):** Used to sort users by their status or role.

---

## 3. Monitoring User Status (Active vs. Inactive)

It is important to know who is currently using the system and who is not.

### 3.1. Viewing Active Users
"Active" users are those who can currently log in.
- **How to view:** Look for the **Status** column. Detailed green badges indicate valid accounts.

<AnnotatedImage 
  src="/img/ui/admin/user_list_active.png" 
  alt="Active Users"
  annotations={[
    { type: 'border', x: '68%', y: '16%', width: '15%', height: '55%', color: 'green', label: 'Active Status' },
    { type: 'cursor', x: '75%', y: '45%' }
  ]}
/>

### 3.2. Viewing Inactive Users
"Inactive" users are accounts that have been locked or haven't started yet.
- **How to view:** Look for the grey badges. These users cannot access the system.

<AnnotatedImage 
  src="/img/ui/admin/user_list_inactive.png" 
  alt="Inactive Users"
/>

---

## 4. Customizing Your View

You can choose what information to see on your screen.

1. **Step 1:** Click on the **"Visible Columns"** icon (usually looks like an eye or a list).
2. **Step 2:** A menu will appear. **Check** the boxes for information you want to see (like Name, Email).
3. **Step 3:** **Uncheck** boxes for information you want to hide to make the screen cleaner.

<AnnotatedImage 
  src="/img/ui/admin/user_display_options.png" 
  alt="Toggle Columns"
/>

---

## 5. Changing User Roles

Sometimes a user needs more permissions (e.g., promoting a Staff member to Manager).

1. **Step 1:** Find the user in the list.
2. **Step 2:** Click directly on their current role name (e.g., "User").
3. **Step 3:** A list of roles will pop up. Click on the new role you want to assign.
4. **Step 4:** The system saves automatically!

<AnnotatedImage 
  src="/img/ui/admin/user_change_role.png" 
  alt="Change Role Step"
  annotations={[
    { type: 'border', x: '65%', y: '40%', width: '15%', height: '15%', color: 'blue', label: 'Select Role' }
  ]}
/>

---

## 6. Managing User Details

To see more about a person or change their settings:

1. **Step 1:** Hover your mouse over the **Name** of the user.
2. **Step 2:** Click on their name.
3. **Step 3:** A detailed profile will open where you can edit specific information.

<AnnotatedImage 
  src="/img/ui/admin/user_click_name.png" 
  alt="Click Name"
  annotations={[
    { type: 'cursor', x: '15%', y: '50%' }
  ]}
/>

---

## 7. Filtering and Searching

If you have hundreds of users, don't scroll! Use these tools:

### 7.1. Finding by Role
**Goal:** Show only "Admins".
1. Click the **Role Filter**.
2. Select **"Admin"**.
3. The list surely updates to show only Admins.

### 7.2. Searching by Name
**Goal:** Find "John Doe".
1. Click into the **Search Bar**.
2. Type "John".
3. Press Enter or wait a moment.

<AnnotatedImage 
  src="/img/ui/admin/user_search.png" 
  alt="Search User"
  annotations={[
    { type: 'border', x: '70%', y: '10%', width: '25%', height: '8%', color: 'blue', label: 'Type Name Here' }
  ]}
/>

---

## 8. Creating a New User Account

Follow these exact steps to invite a new colleague.

### 8.1. Step-by-Step Creation

1.  **Click Create:** Find and click the **"Create Account"** button at the top right.
2.  **Fill Form:** A window appears. Type their **Email** and **Name**.
3.  **Assign Role:** Choose what they can do (e.g., "User").
4.  **Confirm:** Click **Save**.

<AnnotatedImage 
  src="/img/ui/admin/user_create_account.png" 
  alt="Create Account Form"
/>

### 8.2. What Happens Next? (Sample)
Here is an example of the successful creation notification and the email the user will receive.

<AnnotatedImage 
  src="/img/ui/admin/user_create_sample.png" 
  alt="Account Creation Sample"
/>

---

## 🔧 Developer Tool: Coordinate Finder

Use this interactive tool to find the exact **x%** and **y%** for your annotations. Hover over the image below!

<MouseTracker src="/img/ui/admin/user_list_active.png" />
