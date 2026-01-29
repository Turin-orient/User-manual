---
id: workspace
title: Workspace Creation Guide
sidebar_label: Workspace
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

Workspaces are the core of your productivity with Neurond Assistant. They serve as specialized environments where you can configure specific AI behaviors, models, and data sources. This guide walks you through every detail of the creation process.

## 1. Getting Started

When you first access the workspace list, it may be empty. This is your blank canvas for productivity.

![Initial Empty Workspace List](/img/ui/workspace/Work_spaces_UI_empty.png)

To initiate the creation of a new specialized AI environment, locate and click the creation trigger button.

To initiate the creation of a new specialized AI environment, locate and click the creation trigger button.

<AnnotatedImage 
  src="/img/ui/workspace/click_to_create_new_workspace.png" 
  alt="Create New Workspace Button"
  annotations={[
    { type: 'border', x: '4.5%', y: '7.5%', width: '36.5%', height: '14%', color: 'blue', label: 'New Workspace' },
    { type: 'cursor', x: '10%', y: '12%' }
  ]} 
/>

## 2. Choosing Your Configuration Strategy

Neurond Assistant provides two main paths to help you get started quickly or with full control.

<AnnotatedImage 
  src="/img/ui/workspace/Work_spaces_default_AI.png" 
  alt="Configuration Options Overview"
  annotations={[
    { type: 'border', x: '17.8%', y: '28.5%', width: '24.5%', height: '38.5%', color: 'blue', label: 'Use Template' },
    { type: 'border', x: '56.8%', y: '28.5%', width: '24.5%', height: '38.5%', color: 'blue', label: 'Custom Create' }
  ]} 
/>

### Option 1: Using Suggested Templates
For common roles and tasks, you can select from "Suggested" templates. These come pre-configured with optimized models and relevant capability settings.

### Option 2: Custom Creation (Self-Create)
Choose this if you need a unique setup. You will be prompted to define the workspace's purpose, knowledge base, and specific AI parameters.

---

## 3. Step-by-Step Workspace Setup

### Step A: Naming and Description
Give your workspace a clear, descriptive name. This is crucial for identifying your assistants when you have multiple environments.

![Defining Workspace Metadata](/img/ui/workspace/create_work_spce_ui.png)

### Step B: Selecting and Uploading Knowledge
A workspace is only as smart as the data you give it. You can select existing folders or upload new files to serve as the "Knowledge Base."

![Knowledge Base Selection Interface](/img/ui/workspace/Choose_knowlege_for_workspace.png)

**Monitoring Uploads:**
When you upload files, the system provides a real-time status indicator.

![Knowledge Upload in Progress](/img/ui/workspace/uploading_status.png)

Once the indexing is complete, you will see a success confirmation, indicating the knowledge is ready for use.

![Knowledge Upload Successful](/img/ui/workspace/display_upload_successfully.png)

### Step C: Configuring AI Intelligence
Select the underlying LLM (Large Language Model) and toggle specific capabilities. For example, you can enable web searching, advanced reasoning, or specific output formats.

![Model and Capability Configuration](/img/ui/workspace/Choose_model_and_capablilities.png)

---

## 4. Understanding Functionality: Assistant vs. Agent

The goal of your workspace determines whether it acts as a simple Assistant or a complex Agent.

### The Assistant Layout
Designed for conversational inquiry. It responds based on its provided knowledge.

### The Agent Layout
Designed for task execution. Agents can utilize tools to perform multi-step actions and proactive operations.

![Detailed Agent View](/img/ui/workspace/Cv_agent_workspace_default.png)

## 5. Post-Creation Management

Once successful, your workspace is added to your operational list.

![Successful Workspace Creation](/img/ui/workspace/After_create_space.png)

---
**Guides in this section:**
*   [Login Guide](./login)
*   [Chat Interface Guide](./chat-ui)
*   [Image Studio Guide](./image-studio)

