---
id: chat-ui
title: Chat Interface Guide
sidebar_label: Chat UI
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

The Chat Interface is your main workspace in Neurond Assistant. This guide helps you navigate the dashboard and use the chat features effectively.

## 1. A Tour of Your Dashboard

When you log in, you will see your digital office. Here is a quick tour of what is on the screen:

### 🧭 The Main Area (Center)
This is where the conversation happens!
- **The Chat Box:** At the bottom, type your questions here.
- **The Assistant's Answers:** Replies appear in the middle of the screen.

### 📜 The Conversation List (Left Side)
Your "filing cabinet" for past talks.
- **Your History:** Auto-saved conversations.
- **New Chat:** Click to start a fresh topic.
- **Search History:** Find old answers quickly.

### ⚙️ Your Workspaces (Groups)
Specialized "rooms" for specific jobs.
- **Folders:** View shared documents.
- **Switching Rooms:** Jump between project workspaces.

### 👤 Your Profile (Top Right)
- **Settings:** Change profile photo or toggle "Dark Mode".
- **Log Out:** Securely exit the application.

---


## 2. Interface Overview

Here is a visual breakdown of the default interface. It resembles familiar messaging apps like WhatsApp, Slack, or Microsoft Teams.

![Default Chat UI](/img/ui/chat/Default_chat_UI.png)

<AnnotatedImage 
  src="/img/user_guide/chat_basics.png" 
  alt="Chat Interface Basics"
  annotations={[
    { type: 'border', x: '23.1%', y: '1.1%', width: '60%', height: '70%', label: 'Where messages appear', color: 'blue' },
    { type: 'border', x: '28.5%', y: '84.2%', width: '45%', height: '15%', label: 'Where you type', color: 'green' },
    { type: 'circle', x: '31.6%', y: '82.3%', size: '29px' },
    { type: 'arrow', x: '30.6%', y: '80%', color: 'red', label: 'Upload photos and files' }
  ]} 
/>

**Main elements:**
- 💬 **Conversation area** - Where messages appear
- ✍️ **Input box** - Where you type  
- ↗️ **Send button** - Submit your message
- 📎 **Attach button** - Upload files

---

## 3. Starting a Conversation

### Step-by-Step: Your First Chat

1.  **Locate the Input Box**: Found at the bottom of the screen.
2.  **Type Your Question**: Click inside and type naturally (e.g., *"What is our vacation policy?"*).
3.  **Send Your Message**: Press **Enter** or click the **Send button** (↗️).
    - *Tip:* Press **Shift + Enter** for multi-line messages.
4.  **Wait for Response**: A ⏳ "Typing..." indicator will appear while the Assistant thinks.

<AnnotatedImage 
  src="/img/ui/chat/Sample_prompt.png" 
  alt="Sample Prompts"
  annotations={[
    { type: 'circle', x: '50%', y: '48%', size: '200px' },
    { type: 'cursor', x: '55%', y: '48%' }
  ]} 
/>

### Choosing a Model
Select different AI models depending on your needs.

<AnnotatedImage 
  src="/img/ui/chat/Choose_Model_chat.png" 
  alt="Choose Model"
  annotations={[
    { type: 'border', x: '63.3%', y: '49.8%', width: '15%', height: '40%', color: 'blue', label: 'Select AI Model' },
    { type: 'cursor', x: '78.3%', y: '59.8%' }
  ]} 
/>

### Using Voice Input
Click the microphone icon to speak your request.

<AnnotatedImage 
  src="/img/ui/chat/Use%20voice%20input.png" 
  alt="Use Voice Input"
  annotations={[
    { type: 'circle', x: '16.4%', y: '9.8%', size: '40px' },
    { type: 'cursor', x: '16.4%', y: '9.8%' }
  ]} 
/>
  
---

## 4. Monitoring and Management

### Conversation History
Access, manage, and continue your past conversations from the left sidebar.

![History](/img/ui/chat/History_chat.png)

#### Managing Conversations
- **Browse/Search:** Scroll or use the search box to find past keywords (e.g., "budget", "invoice").
- **Rename:** Hover over a conversation -> Click ⋯ -> **Rename**.
- **Delete:** Hover -> Click ⋯ -> **Delete**. *Caution: This is permanent.*
- **Continue Chatting:** Click any past chat to reopen it; the Assistant remembers the context.

### Checking Resource Usage (Tokens)
Hover over a message to see the token usage for that response.

![Token Usage](/img/ui/chat/Hover_to_watch_token_used.png)

---

## 5. Interacting with Responses

### Message Actions
Hover over any message (yours or the Assistant's) to see available actions:

- 📋 **Copy**: Copy the response text.
- ♻️ **Regenerate**: Get a new response if the first one wasn't perfect.
- 👍👎 **Rate**: Provide feedback on accuracy.
- 📥 **Export**: Save the response or full conversation as a file.
- ✏️ **Edit**: Modify your original question to get a better answer.

![Chat Output](/img/ui/chat/Output_chat.png)

### Context Awareness
Neurond Assistant **remembers** what you just talked about. You can ask follow-up questions naturally without repeating details (e.g., *"And what if it's denied?"* after asking about vacation policies).

---

## 6. Advanced Features

### Special Chat Commands
Type `/` (forward slash) in the input box to see available quick commands:
- `/new` - Start fresh.
- `/clear` - Clear current chat.

### Best Practices
- **Be Specific:** Instead of "policies", ask "What is the remote work policy?".
- **One at a time:** Ask one question per message for better accuracy.
- **Provide Context:** Mention specific file names or dates if relevant.

---

**Next:** [Image Studio Guide](./image-studio)
