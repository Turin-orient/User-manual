---
id: ai-management
title: AI Management
sidebar_label: AI Management
sidebar_position: 5
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

# AI Management

The **AI Management** module enables Admins to manage the entire AI lifecycle within the tenant, including:
- Assistant Management
- Workspace Management
- API Key Management
- Model Management
- Prompt Management

> **Note for Admin:** This guide contains detailed step-by-step visual instructions. Hover over any image to see exact click coordinates.

---

## I. Assistant Management

### 1. Overview

Assistant Management displays **all AI Assistants (services)** of the current tenant, along with short descriptions, allowing Admins to:
- View assistant status.
- Configure AI behavior.
- Manage files attached to the assistant.

### 2. Assistant List View

The Assistant List displays the following information:
- **Logo**
- **Name**
- **Status**
- **ID**
- **Position**
- **Created Day**

<AnnotatedImage 
  src="/img/ui/ai-management/01_assistant_list.png" 
  alt="Assistant List – Current Tenant"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Select an Assistant' }
  ]}
/>

---

### 3. Assistant Configuration

#### 3.1. Basic Configuration

Admins can edit:
- **Display Name**
- **Description**

<AnnotatedImage 
  src="/img/ui/ai-management/02_assistant_config.png" 
  alt="Assistant Basic Configuration"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Edit Basic Info' }
  ]}
/>

---

#### 3.2. Display Settings

Allows changing the display settings of the Assistant in the UI.

<AnnotatedImage 
  src="/img/ui/ai-management/03_display_settings.png" 
  alt="Assistant Display Settings"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Adjust Settings' }
  ]}
/>

---

### 4. System Prompt Configuration

#### 4.1. Enter System Prompt

Admin enters a **System Prompt** to define how the AI operates.

**Purpose**  
Define how the AI should behave, think, and respond.

#### 4.2. System Prompt Structure

It is recommended to divide the System Prompt into 5 parts:
1. **Role** – Who the AI is.
2. **Behavior** – How the AI should behave.
3. **Scope** – What the AI is allowed and not allowed to do.
4. **Style** – Tone and communication style.
5. **Rules** – Laws, constraints, and priority levels.

<AnnotatedImage 
  src="/img/ui/ai-management/04_system_prompt.png" 
  alt="System Prompt Input"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Input Prompt Here' }
  ]}
/>

---

### 5. Manage Files

#### 5.1. File Management Actions

Admins can:
- Upload files.
- Click to manage files.

<AnnotatedImage 
  src="/img/ui/ai-management/05_manage_file_btn.png" 
  alt="Manage File Button"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Click to Manage Files' }
  ]}
/>

---

#### 5.2. File List View

The list of uploaded files displays and allows:
- **View** file.
- **Delete** file.

<AnnotatedImage 
  src="/img/ui/ai-management/06_file_list.png" 
  alt="File List – View & Delete"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'View/Delete File' }
  ]}
/>

#### 5.3. Add File

Click to add a new file to the assistant.

<AnnotatedImage 
  src="/img/ui/ai-management/06b_add_file.png" 
  alt="Add File Dialog"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Click to Add File' }
  ]}
/>

---

## II. Workspace Management

The **Workspace Management** module allows administrators to oversee and manage all collaborative environments within the tenant.

### 1. Overview

Administrators can control visibility, sharing permissions, and the knowledge base of each workspace to ensure secure collaboration.

---



### 2. Workspace Management Interface

#### List View
The table displays all workspaces in the current tenant with details:
- **Workspace Name & Icon**
- **Owner Information**
- **Sharing Scope** (Private or shared with X users)
- **Creation Date**

#### Actions Menu
Click the context menu (**⋯**) on any workspace to:
* **Edit** - Modify name, description, or icons.
* **Share** - Manage who can access the workspace.
* **Delete** - Remove the workspace permanently.

<AnnotatedImage 
  src="/img/ui/ai-management/Workspace_management_list.png" 
  alt="Workspace List and Actions"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Manage Workspaces' }
  ]}
/>

---

### 3. Sharing Workspaces

#### 3.1. Sharing Workflow
1. Locate the target workspace in the list.
2. Select **Share** from the Actions menu.
3. Choose the sharing scope in the modal.

#### 3.2. Share Scope Options
Administrators can choose to share with:
- **Specific user**: Select individual users by searching their email.
- **Everyone in organization**: Grant access to all users within the tenant.

<AnnotatedImage 
  src="/img/ui/ai-management/Share_workspace_modal.png" 
  alt="Share Modal Options"
/>

#### 3.3. Adding Users
When sharing with specific users, use the search dialog to filter by email.

<AnnotatedImage 
  src="/img/ui/ai-management/Search_user_dialog.png" 
  alt="Search User by Email"
/>

---

### 4. Knowledge Base & Customization

#### 4.1. Knowledge Base Management
Administrators can manage the shared knowledge within each workspace:
- **Upload Documents**: PDF, Word, etc.
- **Organize**: Categorize by department or topic.
- **Auditing**: Review and update outdated content.

#### 4.2. Branding & Experience
Customize the workspace appearance for end-users:
- **Logos & Colors**: Set organizational visual identity.
- **Welcome Messages**: Define the initial greeting and AI instructions.

---

### 5. Best Practices & Rules

- **Principle of Least Privilege**: Share only with necessary users.
- **Ownership**: The original owner retains control; sharing does not transfer ownership.
- **Governance**: Periodically review shared workspaces in the Admin Panel to prevent unauthorized access.

---

## III. API Key Management

### 1. Overview

API Key Management allows managing API keys used to call AI services.

### 2. API Key Status

- Click the **Status button** to reveal the API key.
- Statuses: **Active** / **Inactive**.

**Active Status:**
<AnnotatedImage 
  src="/img/ui/ai-management/08_api_active.png" 
  alt="API Key Status – Active"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Active Key' }
  ]}
/>

**Inactive Status:**
<AnnotatedImage 
  src="/img/ui/ai-management/09_api_inactive.png" 
  alt="API Key Status – Inactive"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Inactive Key' }
  ]}
/>

---

### 3. Display by Provider

API Keys can be grouped and displayed by **Provider**.

<AnnotatedImage 
  src="/img/ui/ai-management/10_api_provider.png" 
  alt="API Key – Display by Provider"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Filter by Provider' }
  ]}
/>

---

## IV. Model Management

### 1. Overview

Model Management allows:
- Managing AI models.
- Deploying new models.
- Assigning roles and pricing.

### 2. Default Display

By default, it displays the list of models currently in use.

<AnnotatedImage 
  src="/img/ui/ai-management/11_model_default.png" 
  alt="Model Management – Default View"
  annotations={[
    { type: 'cursor', x: '94.1%', y: '99.4%', label: 'View Models' }
  ]}
/>

---

### 3. Filter & Display Options

Models can be displayed by **Provider**, **Model Type**, **Features**, or **Role**.

<AnnotatedImage 
  src="/img/ui/ai-management/12_model_filter.png" 
  alt="Model Filters"
  annotations={[
    { type: 'cursor', x: '22.8%', y: '20.2%', label: 'Apply Filters' }
  ]}
/>

---

### 4. Create New Model

#### 4.1. Add New Model

- Click **Add new model**.

<AnnotatedImage 
  src="/img/ui/ai-management/13_add_model.png" 
  alt="Add New Model Button"
  annotations={[
    { type: 'cursor', x: '90.7%', y: '13.8%', label: 'Click Add Model' }
  ]}
/>

- Fill in the new model details.

<AnnotatedImage 
  src="/img/ui/ai-management/13b_new_model_box.png" 
  alt="New Model Box"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Fill Model Details' }
  ]}
/>

#### 4.2. Choose Provider

Admin selects the **Provider** for the model.

<AnnotatedImage 
  src="/img/ui/ai-management/14_choose_provider.png" 
  alt="Choose Provider"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Select Provider' }
  ]}
/>

#### 4.3. Choose Model Type

Select the model type (e.g., Chat, Embedding, Image…).

<AnnotatedImage 
  src="/img/ui/ai-management/15_choose_type.png" 
  alt="Choose Model Type"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Select Type' }
  ]}
/>

#### 4.4. View Model Detail

- Click on a model.

<AnnotatedImage 
  src="/img/ui/ai-management/16_view_model.png" 
  alt="View Model on Provider"
  annotations={[
    { type: 'border', x: '50%', y: '50%', width: '20%', height: '10%', color: 'blue', label: 'Click to View Detail' }
  ]}
/>

#### 4.5. Role Configuration

- Assign **one or more roles** to the model.

<AnnotatedImage 
  src="/img/ui/ai-management/17b_role_configure.png" 
  alt="Set Role for Model"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Assign Roles' }
  ]}
/>

#### 4.6. Model Type & Prompt

- Select **Type**.
- Enter **Prompt for model**.

**Sample Prompt:**
"This model converts input text into high-dimensional numerical vectors (embeddings) that capture semantic meaning and contextual relationships. The embeddings enable efficient similarity search, clustering, retrieval, and downstream reasoning tasks."

<AnnotatedImage 
  src="/img/ui/ai-management/18_model_prompt.png" 
  alt="Model Type & Prompt"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Enter Model Prompt' }
  ]}
/>

### 5. Pricing & Management

#### 5.1. Pricing Settings

Admin can click the trash button to delete the pricing configuration.
<AnnotatedImage 
  src="/img/ui/ai-management/23_delete_model.png" 
  alt="Click Trash Button"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Click to Delete' }
  ]}
/>

Admin can choose the **Type** and use the **Up/Down buttons** to set the price.
<AnnotatedImage 
  src="/img/ui/ai-management/19_pricing_settings.png" 
  alt="Set Price"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Adjust Price' }
  ]}
/>

#### 5.2. Setting Price

Detailed view of price setting configuration.

<AnnotatedImage 
  src="/img/ui/ai-management/20_pricing_dialog.png" 
  alt="Setting Price"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Price Configuration' }
  ]}
/>

#### 5.3. Edit & Delete Models

Can edit or delete when clicking the **'...' (Menu)** button.

<AnnotatedImage 
  src="/img/ui/ai-management/21_model_menu.png" 
  alt="Click Menu"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Open Menu' }
  ]}
/>

If click **Edit**:

<AnnotatedImage 
  src="/img/ui/ai-management/22_edit_model.png" 
  alt="Edit Model Dialog"
  annotations={[
    { type: 'cursor', x: '50%', y: '50%', label: 'Edit Model' }
  ]}
/>

---

## V. Advanced Model Configuration

(Additional steps for detailed model setup and testing)

**Step 1:** Extended Configuration
<AnnotatedImage src="/img/ui/ai-management/19_extra_step_1.png" alt="Advanced Config 1" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 2:** Parameter Tuning
<AnnotatedImage src="/img/ui/ai-management/20_extra_step_2.png" alt="Advanced Config 2" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 3:** Validation
<AnnotatedImage src="/img/ui/ai-management/21_extra_step_3.png" alt="Advanced Config 3" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 4:** Deploy Confirmation
<AnnotatedImage src="/img/ui/ai-management/22_extra_step_4.png" alt="Advanced Config 4" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 5:** Post-Deployment Check
<AnnotatedImage src="/img/ui/ai-management/23_extra_step_5.png" alt="Advanced Config 5" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 6 - 8:** Additional Actions
<AnnotatedImage src="/img/ui/ai-management/24_extra_step_6.png" alt="Advanced Config 6" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />
<AnnotatedImage src="/img/ui/ai-management/25_extra_step_7.png" alt="Advanced Config 7" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />
<AnnotatedImage src="/img/ui/ai-management/26_extra_step_8.png" alt="Advanced Config 8" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

**Step 9 - 10:** Finalizing Setup
<AnnotatedImage src="/img/ui/ai-management/27_extra_step_9.png" alt="Advanced Config 9" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />
<AnnotatedImage src="/img/ui/ai-management/28_extra_step_10.png" alt="Advanced Config 10" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

---

## VI. Prompt Management

### 1. Overview
Manage all system prompts and templates.

<AnnotatedImage 
  src="/img/ui/ai-management/29_prompt_management_overview.png" 
  alt="Prompt Management Overview" 
  annotations={[{ type: 'cursor', x: '50%', y: '50%', label: 'Prompt Dashboard' }]}
/>

### 2. Prompt List
View the list of all available prompts.

<AnnotatedImage 
  src="/img/ui/ai-management/30_prompt_list.png" 
  alt="Prompt List" 
  annotations={[{ type: 'cursor', x: '50%', y: '50%', label: 'Select Prompt' }]}
/>

### 3. Create New Prompt
Interface to create a new prompt template.

<AnnotatedImage 
  src="/img/ui/ai-management/31_create_prompt.png" 
  alt="Create New Prompt" 
  annotations={[{ type: 'cursor', x: '50%', y: '50%', label: 'Create Prompt' }]}
/>

### 4. Prompt Details & Actions
View details, edit, or delete prompts.

<AnnotatedImage src="/img/ui/ai-management/32_prompt_details.png" alt="Prompt Details" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />
<AnnotatedImage src="/img/ui/ai-management/33_prompt_action.png" alt="Prompt Action" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />
<AnnotatedImage src="/img/ui/ai-management/34_prompt_delete.png" alt="Delete Prompt" annotations={[{ type: 'cursor', x: '50%', y: '50%' }]} />

### 5. Summary
Final overview of managed resources.

<AnnotatedImage 
  src="/img/ui/ai-management/35_final_overview.png" 
  alt="Final Overview" 
  annotations={[{ type: 'cursor', x: '50%', y: '50%' }]}
/>
