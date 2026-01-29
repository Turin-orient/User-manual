---
id: collection
title: Collection Management Guide
sidebar_label: Collection
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

Collections in Neurond Assistant serve as a structured library for your documents, images, and other resources. This guide walks you through every detail of managing your centralized knowledge base.

## 1. Navigating the Collection Library

The Collection UI provides a clear overview of all your data groups. If you haven't organized anything yet, you will see a clean, blank slate.

![Default Collection Dashboard](/img/ui/collection/Default_collection_ui.png)
![Blank Collection State](/img/ui/collection/blank_collection.png)

## 2. Creating a New Collection

To start organizing your data, click the **+ (Create New Collection)** button. This allows you to define a specific theme or project area for your files.

<AnnotatedImage 
  src="/img/ui/collection/click_to-create_new_collection.png" 
  alt="Create New Collection Button"
  annotations={[
    { type: 'circle', x: '50%', y: '50%', size: '90px', color: 'blue', label: 'New Collection' },
    { type: 'cursor', x: '52%', y: '52%' }
  ]} 
/>

## 3. Adding and Uploading Content

You can populate your collection by bringing in external files.

### Drag and Drop Support
The interface supports intuitive drag-and-drop actions. Simply drag files from your local computer directly into the collection area.

<AnnotatedImage 
  src="/img/ui/collection/Can-drag_files_to_collection.png" 
  alt="Drag and Drop Files"
  annotations={[
    { type: 'border', x: '26.6%', y: '10.8%', width: '60%', height: '67%', color: 'blue', label: 'Drag and Drop Area' }
  ]} 
/>

### Monitoring Progress
During the upload and indexing process, you can monitor the status in real-time. Wait for the green "Success" indicator to ensure your files are optimized for AI retrieval.

![Upload in Progress](/img/ui/collection/uploading_status.png)
![Upload Successful](/img/ui/collection/Upload_status_success.png)

## 4. Managing and Organizing Items

Once files are added, you can utilize the selection tools to perform batch actions.

*   **Individual Selection**: Click on single files to select them.
*   **Select All**: Use the "Select All" button to manage your entire collection at once.
*   **Clear Selection**: Quickly unselect all files to start fresh.

![Selecting Files](/img/ui/collection/select_file.png)
![Select All Action](/img/ui/collection/click_select_all_buton.png)
![Clear All Selection](/img/ui/collection/clear_all_to_unselect_files.png)

## 5. Direct Interactions: Chatting with Files

One of the most powerful features is the ability to chat directly with specific files in your collection. Click the "Chat with File" icon to initiate a contextual conversation based solely on that document.

![Chat with File Feature](/img/ui/collection/Can_chat_with_file.png)

## 6. Editing and Maintaining Collections

Keeping your metadata up to date is essential for organization.

### Modifying Collection Details
You can change the name, description, or tags of your collection at any time.

![Modify Collection Interface](/img/ui/collection/Modify_colleciton.png)
![Editing Collection Name](/img/ui/collection/Sample_update_collection.png)
![Successful Modification](/img/ui/collection/After_modify_collection.png)

### Deleting Collections
If a collection is no longer needed, you can permanently remove it by clicking the delete button.

![Delete Collection Button](/img/ui/collection/Click_delecte_collection_button.png)

---
**Guides in this section:**
*   [Login Guide](./login)
*   [Workspace Creation](./workspace)
*   [Prompt Gallery Guide](./prompt-gallery)
*   [Chat Interface Guide](./chat-ui)
*   [Image Studio Guide](./image-studio)

