---
id: user-usage
title: Reporting – User Usage
sidebar_label: User Usage
sidebar_position: 4
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

## 1. Overview

User Usage is a component of the **Reporting** module, allowing Admins to:
- Monitor **AI usage per user**.
- Control **token usage**.
- Analyze usage behavior over time.
- Export data for auditing or reporting.

---

## 2. Access User Usage

### Navigation Path
1. Click **Reporting** on the Navigation Bar.
2. Click **User Usage**.

The system displays the dashboard analyzing usage by user.

---

## 3. User Usage Structure

The User Usage screen includes the following main components:
1. Short Description
2. Search Bar
3. Calendar View
4. Usage Table
5. Export to CSV

---

## 4. Short Description

### 4.1. Purpose

The short description provides an overview of:
- The purpose of User Usage.
- The type of data being statistically analyzed (token usage per user).

<AnnotatedImage 
  src="/img/ui/user-usage/01_short_description.png" 
  alt="User Usage – Short Description"
/>

---

## 5. Search User

### 5.1. Search Bar

- Enter **user name or email** into the Search Bar.
- The system automatically filters the list of matching users.

<AnnotatedImage 
  src="/img/ui/user-usage/02_search_user.png" 
  alt="Search User by Name or Email"
/>

---

## 6. Calendar View

### 6.1. Description

Calendar View allows Admins to:
- Select a **date or time range**.
- Analyze usage for a specific timeline.

<AnnotatedImage 
  src="/img/ui/user-usage/03_calendar_view.png" 
  alt="Calendar View – User Usage"
/>

---

### 6.2. Date Selection Behavior

- By default, it displays data for the **current day**.
- When choosing another date:
  - The entire User Usage table is updated accordingly.

<AnnotatedImage 
  src="/img/ui/user-usage/04_calendar_selected.png" 
  alt="Calendar – Date Selected"
/>

---

## 7. Usage Table

### 7.1. Description

The User Usage table displays:
- User name / email.
- Total number of requests.
- Total tokens used.
- Usage time duration.

<AnnotatedImage 
  src="/img/ui/user-usage/05_usage_table.png" 
  alt="User Usage Table"
/>

---

## 8. Export User Usage Data

### 8.1. Export to CSV

- Click the **Export to CSV** button.
- The system exports **user token usage data** for the selected date.

<AnnotatedImage 
  src="/img/ui/user-usage/06_export_button.png" 
  alt="Export to CSV Button"
  annotations={[
    { type: 'border', x: '89.4%', y: '13.9%', width: '9%', height: '70%', color: 'blue', label: 'Click to Export' }
  ]}
/>

---

### 8.2. Export Output

The CSV output file includes:
- User identifier.
- Token usage.
- Request count.
- Timestamp.

<AnnotatedImage 
  src="/img/ui/user-usage/07_csv_output.png" 
  alt="CSV Export Output"
/>

---

## 9. Notes

- User Usage serves for:
  - Cost auditing.
  - User behavior analysis.
  - AI budget control.
- Combine **Search + Calendar + Export** for quick data retrieval.
- Suitable for **enterprise & multi-user** environments.
