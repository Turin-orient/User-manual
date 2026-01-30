---
id: analytics
title: Reporting – Analytics Tab
sidebar_label: Analytics
sidebar_position: 3
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

## 1. Overview

The Analytics Tab is a key part of the **Reporting** module, allowing Admins to:
- Track AI usage over time.
- Analyze model, token, and request costs.
- Monitor trends in conversations, users, and tasks.
- Control Image Studio expenses.

---

## 2. Access Analytics Tab

### Navigation Path
1. Click **Reporting** on the Navigation Bar.
2. Click **Analytics**.

The system will display the analytics dashboard for the current tenant.

<AnnotatedImage 
  src="/img/ui/admin/Admin_Dashboard.png" 
  alt="Accessing Analytics"
  annotations={[
    { type: 'border', x: '1.5%', y: '25%', width: '13%', height: '4%', color: 'blue', label: '1. Click Reporting' },
    { type: 'border', x: '1.5%', y: '29%', width: '13%', height: '4%', color: 'blue', label: '2. Click Analytics' }
  ]}
/>

---

## 3. Analytics Structure

The Analytics Tab is divided into the following main areas:
1. Calendar
2. Overview
3. Cost Analytics
4. Conversation Trend
5. User Analytics
6. Usage Trends
7. Image Studio

---

## 4. Calendar

### 4.1. Purpose
The Calendar is used to select the **data analysis date** for the entire Analytics dashboard.

### 4.2. Default View – Current Date
- By default, it displays **data for the current day**.
- All charts and metrics below will **synchronize to this date**.

<AnnotatedImage 
  src="/img/ui/reporting/calendar_current.png" 
  alt="Calendar – Current Date"
/>

### 4.3. Select Another Date
- Click on the Calendar.
- Select **any past date**.
- The Analytics dashboard automatically updates to reflect the selected date.

<AnnotatedImage 
  src="/img/ui/reporting/calendar_select.png" 
  alt="Calendar – Another Date Selected"
/>

---

## 5. Overview

### 5.1. Description
The Overview section provides a **quick snapshot** of:
- Total Usage
- Total Requests
- Total Tokens
- Total Cost

This helps Admins quickly grasp the system status for the selected day.

<AnnotatedImage 
  src="/img/ui/reporting/overview.png" 
  alt="Overview Section"
/>

---

## 6. Cost Analytics

### 6.1. Description
Cost Analytics displays **AI model usage costs** by day.
- Cost allocation by model.
- Analysis of the tenant's total cost.

<AnnotatedImage 
  src="/img/ui/reporting/cost_analytics_chart.png" 
  alt="Cost Analytics Chart"
/>

### 6.2. Hover Interaction – Total Model Cost
- Hover over the chart to view:
  - Model Name.
  - **Total cost** of that model.
  - Detailed cost at specific times.

<AnnotatedImage 
  src="/img/ui/reporting/cost_hover_model.png" 
  alt="Hover – Total Cost of Model"
/>

---

## 7. Conversation Trend

### 7.1. Description
Conversation Trend shows:
- The number of conversations over time.
- Trends in AI usage increase/decrease.

<AnnotatedImage 
  src="/img/ui/reporting/conversation_trend.png" 
  alt="Conversation Trend Chart"
/>

### 7.2. Hover – Conversation Detail
- Hover over any point on the chart to view:
  - Time point.
  - Number of conversations.

<AnnotatedImage 
  src="/img/ui/reporting/conversation_hover_detail.png" 
  alt="Hover – Conversation Detail"
/>

### 7.3. Hover – Task Detail
- Hover to view:
  - **Tasks used within conversations**.
  - Task classification by request type.

<AnnotatedImage 
  src="/img/ui/reporting/conversation_hover_task.png" 
  alt="Hover – Task Distribution"
/>

---

## 8. User Analytics

### 8.1. Description
User Analytics analyzes **usage behavior per user**.

<AnnotatedImage 
  src="/img/ui/reporting/user_analytics.png" 
  alt="User Analytics Chart"
/>

### 8.2. Hover – Token Usage per User
- Hover over a user to view:
  - **Exact token usage** of that user.

<AnnotatedImage 
  src="/img/ui/reporting/user_hover_token.png" 
  alt="Hover – Exact Token of User"
/>

### 8.3. Hover – Request Count per User
- Hover to view:
  - **Exact number of requests**.
  - The frequency of AI usage by the user.

<AnnotatedImage 
  src="/img/ui/reporting/user_hover_request.png" 
  alt="Hover – Exact Requests of User"
/>

---

## 9. Usage Trends

### 9.1. Description
Usage Trends shows **usage distribution by model and task**.

<AnnotatedImage 
  src="/img/ui/reporting/usage_trends.png" 
  alt="Usage Trends Chart"
/>

### 9.2. Hover – Model Request Distribution
- Hover to view:
  - Request distribution by model.
  - Usage ratio of each model.

<AnnotatedImage 
  src="/img/ui/reporting/usage_hover_model.png" 
  alt="Hover – Model Request Distribution"
/>

### 9.3. Hover – Task Request Distribution
- Hover to view:
  - Request distribution by task.
  - Which tasks are used the most.

<AnnotatedImage 
  src="/img/ui/reporting/usage_hover_task.png" 
  alt="Hover – Task Request Distribution"
/>

---

## 10. Image Studio

### 10.1. Description
Image Studio analytics tracks **costs and the quantity of images generated**.

<AnnotatedImage 
  src="/img/ui/reporting/image_studio_analytics.png" 
  alt="Image Studio Analytics"
/>

### 10.2. Hover – Image Generation Cost
- Hover to view:
  - **Image generation cost**.
  - Cost per generation.

<AnnotatedImage 
  src="/img/ui/reporting/image_hover_cost.png" 
  alt="Hover – Image Generation Cost"
/>

### 10.3. Hover – Total Cost of Generated Images
- Hover to view:
  - **Total cost of all generated images**.
  - Useful for controlling Image AI expenses.

<AnnotatedImage 
  src="/img/ui/reporting/image_hover_total.png" 
  alt="Hover – Total Image Cost"
/>

---

## 11. Notes

- All charts are **synchronized with the Calendar**.
- Hovering is the primary mechanism to view **detailed data**.
- Analytics supports:
  - Cost control.
  - User behavior analysis.
  - AI usage optimization.
