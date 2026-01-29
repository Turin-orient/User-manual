---
id: chat-ui
title: Chat Interface Guide
sidebar_label: Chat UI
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

The Chat Interface is where you interact directly with Neurond Assistant to ask questions, analyze documents, and perform various tasks.

## 1. Interface Overview

When you start a new conversation, you'll see a clean and intuitive default interface.

![Default Chat UI](/img/ui/chat/Default_chat_UI.png)

## 2. Starting a Conversation

### Entering Requests
Type your question or request into the chat box at the bottom. You can use available suggestions to get started quickly.

<AnnotatedImage 
  src="/img/ui/chat/Sample_prompt.png" 
  alt="Sample Prompts"
  annotations={[
    { type: 'circle', x: '50%', y: '48%', size: '200px' },
    { type: 'cursor', x: '55%', y: '48%' }
  ]} 
/>

### Choosing a Model
You can select different AI models depending on your needs (e.g., a fast model for simple questions or a smart model for complex analysis).

<AnnotatedImage 
  src="/img/ui/chat/Choose_Model_chat.png" 
  alt="Choose Model"
  annotations={[
    { type: 'border', x: '63.3%', y: '49.8%', width: '15%', height: '40%', color: 'blue', label: 'Select AI Model' },
    { type: 'cursor', x: '78.3%', y: '59.8%' }
  ]} 
/>

### Using Voice Input
If you prefer not to type, you can click the microphone icon to use the voice input feature.

<AnnotatedImage 
  src="/img/ui/chat/Use%20voice%20input.png" 
  alt="Use Voice Input"
  annotations={[
    { type: 'circle', x: '16.4%', y: '9.8%', size: '40px' },
    { type: 'cursor', x: '16.4%', y: '9.8%' }
  ]} 
/>
  
## 3. Monitoring and Management

### Conversation History
All your conversations are saved in the left sidebar, allowing you to revisit them at any time.

![History](/img/ui/chat/History_chat.png)

### Checking Resource Usage (Tokens)
You can hover over a message to see the number of tokens used for that response, helping you manage your usage quota effectively.

![Token Usage](/img/ui/chat/Hover_to_watch_token_used.png)

## 4. Interacting with Responses
You can copy, rate (Like/Dislike), or ask the Assistant to rewrite the response if you're not satisfied.

![Chat Output](/img/ui/chat/Output_chat.png)

---
**Next:** [Image Studio Guide](./image-studio)

