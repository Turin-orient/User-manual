---
sidebar_position: 1
---

# Using the Chat Interface

The chat interface is the main way you interact with Neurond Assistant. This guide teaches you how to use it effectively.

## Purpose

Learn how to use the chat interface for asking questions, giving instructions, and getting results from Neurond Assistant.

## Who Can Use This

✅ **All users** can use the chat interface

---

## Chat Interface Basics

### What It Looks Like

The chat interface resembles familiar messaging apps like WhatsApp, Slack, or Microsoft Teams.

**Main elements:**
- 💬 **Conversation area** - Where messages appear
- ✍️ **Input box** - Where you type  
- ↗️ **Send button** - Submit your message
- 📎 **Attach button** - Upload files

[Screenshot: Chat interface with all elements labeled]

---

## Step-by-Step: Your First Chat

### 1. Locate the Input Box

**Where:** Bottom of the screen

**You'll see:** A text field that says "Type your message..." or "How can I help you?"

[Screenshot: Input box highlighted]

### 2. Type Your Question or Instruction

**Click inside the input box** and type naturally, as if talking to a colleague.

**Examples:**
```
What is our vacation policy?
```
```
Help me write an email to the HR department
```
```
Explain the expense reimbursement process
```

:::tip Write Naturally
Don't overthink it! Just type your question like you're asking a coworker. Neurond Assistant understands natural language.
:::

[Screenshot: Typing a question in the input box]

### 3. Send Your Message

**Two ways to send:**

**Method A:** Press **Enter** key on your keyboard

**Method B:** Click the **Send button** (↗️ or paper airplane icon)

:::note Multi-line Messages
Want to type multiple lines without sending? Press **Shift + Enter** to create a new line.
:::

[Screenshot: Send button highlighted]

### 4. Wait for Response

Neurond Assistant processes your request and responds within seconds.

**You'll see:**
- ⏳ "Typing..." indicator while NA is thinking
- 💬 Response appears in the conversation area
- ✅ Timestamp showing when response was sent

[Screenshot: NA typing indicator and then response appearing]

---

## Understanding Responses

### How NA Formats Answers

**Text Responses:**
- Clear, structured paragraphs
- Bullet points for lists
- Numbered steps for procedures
- **Bold** for emphasis

**Example:**
```
You: What is our travel policy?

NA: Based on the Employee Handbook (Section 5.2), 
here's our travel policy:

• Domestic Flights: Economy class for trips under 5 hours
• International Flights: Business class for trips over 8 hours
• Hotels: Maximum $150/night in standard cities
• Meals: $50/day allowance

For bookings, use the corporate travel portal...
```

[Screenshot: Formatted response with bullets and structure]

### Source Citations

NA often includes **sources** to show where information comes from:

```
Source: Employee Handbook 2025, Page 42
Source: IT Policy v3.1, Section 2.4
```

**Why this matters:** You can verify the information and check the original document if needed.

---

## Continuing a Conversation

### Context Awareness

Neurond Assistant **remembers** the conversation context, so you can ask follow-up questions naturally.

**Example dialogue:**
```
You: What is our vacation policy?

NA: [Explains vacation policy]

You: How do I request vacation days?

NA: [Explains request process, knowing you're asking about vacation]

You: And what if it's denied?

NA: [Explains appeal process, still contextually aware]
```

No need to repeat "vacation" every time - NA follows the conversation!

---

## Message Actions

### Actions You Can Take

Hover over any message (yours or NA's) to see action buttons:

**For NA's messages:**
- 📋 **Copy** - Copy the response text
- ♻️ **Regenerate** - Get a new response
- 👍👎 **Like/Dislike** - Provide feedback
- 📥 **Export** - Save as file

**For your messages:**
- ✏️ **Edit** - Modify your question
- 🗑️ **Delete** - Remove the message

[Screenshot: Message hover showing action buttons]

### Regenerate Response

**When to use:** If NA's answer isn't quite what you wanted.

**How:**
1. Hover over NA's message
2. Click ♻️ **Regenerate** button
3. NA will provide a new answer to the same question

**Tip:** You can regenerate multiple times to get different perspectives or phrasings.

---

## Advanced Chat Features

### Multi-Turn Conversations

**What it means:** Having an extended back-and-forth dialogue.

**Benefits:**
- Refine requests iteratively
- Ask clarifying questions
- Build on previous answers
- Explore topics in depth

**Example:**
```
You: Draft an email about project delays

NA: [Provides draft]

You: Make it more apologetic

NA: [Revises draft with apologetic tone]

You: Add a proposed new timeline

NA: [Adds timeline to the draft]
```

### Conversation Branching

**What it means:** Changing topics mid-conversation.

**How NA handles it:**
- Understands when you switch subjects
- Maintains separate context tracks
- Doesn't confuse old and new topics

**Example:**
```
You: What is the vacation policy?

NA: [Explains vacation]

You: Actually, I need help with something else. 
     How do I reset my password?

NA: [Switches to password topic, forgets vacation context]
```

---

## Best Practices for Chat

### ✅ DO:

**Be specific**
```
❌ Worse: "Tell me about policies"
✅ Better: "What is the remote work policy for full-time employees?"
```

**Ask one thing at a time**
```
❌ Worse: "Tell me about vacation, sick leave, travel, and expenses"
✅ Better: "What is our vacation policy?" 
          (then ask about sick leave in next message)
```

**Provide context when needed**
```
✅ Good: "I need to write an email to a customer about a 2-week delay 
          in shipping their order of 500 units. Keep it professional 
          but apologetic."
```

**Use follow-up questions**
```
✅ Good conversation flow:
You: "Summarize this report"
NA: [Provides summary]
You: "What were the top 3 risks mentioned?"
NA: [Extracts top risks]
```

### ❌ DON'T:

**Don't be vague**
```
❌ Bad: "Help"
❌ Bad: "I need info"
❌ Bad: "Documents"
```

**Don't assume NA knows things it wasn't told**
```
❌ Bad: "What did John say in yesterday's meeting?"
      (Unless meeting notes were uploaded to the system)
```

**Don't use abbreviations NA might not know**
```
⚠️ Be careful: Internal jargon or project codenames
✅ Better: Spell them out first, then use abbreviations
```

---

## Special Chat Commands

Some deployments support **slash commands** for quick actions:

### Common Commands (if available)

Type / (forward slash) to see available commands:

- `/new` - Start new conversation
- `/search` - Search knowledge base
- `/help` - Show help menu
- `/export` - Export conversation
- `/clear` - Clear current chat

**How to use:**
```
Type: /search employee handbook
```

[Screenshot: Slash command autocomplete menu]

:::info Check Your System
Slash commands may not be available in all deployments. Try typing `/` to see if they appear.
:::

---

## Handling Errors or Unexpected Responses

### NA Says "I Don't Know"

**When this happens:**
```
NA: "I don't find information about that in my knowledge base."
```

**What to do:**
1. ✓ **Rephrase** your question
2. ✓ **Be more specific** - add details
3. ✓ **Check spelling** of terms or names
4. ✓ **Ask a related question** to narrow down

**Example:**
```
❌ First attempt: "What is the TPS policy?"
   NA: "I don't have information about TPS."

✅ Better: "What is the policy for TPS reports mentioned in the 
           Project Management Guide?"
```

### Response is Too Long or Too Short

**Too long?**
- Ask: "Summarize your previous answer in 3 bullet points"

**Too short?**
- Ask: "Can you provide more detail about [specific part]?"

### Response is Off-Topic

**What happened:** NA misunderstood your question

**Solutions:**
1. Click ♻️ **Regenerate**
2. **Clarify** your question: "I meant [explanation]"
3. **Start over** with a more specific question

---

## Expected Result

After reading this guide and practicing, you should be able to:

✅ Type questions and instructions in the chat box  
✅ Send messages and receive responses  
✅ Understand NA's answers and source citations  
✅ Have multi-turn conversations with context  
✅ Use message actions (copy, regenerate, export)  
✅ Apply best practices for clear communication  

---

## Notes

:::tip Practice Makes Perfect
The more you chat with NA, the better you'll get at phrasing questions effectively. Don't worry about making mistakes - you can always rephrase or regenerate!
:::

:::info Conversation Privacy
Your conversations are private to you (unless your organization has admin oversight for compliance). Feel free to ask anything work-related.
:::

---

## Next Steps

Now that you know how to use the chat:

1. **[Asking Questions Effectively](asking-questions.md)** - Learn prompting techniques
2. **[Uploading Documents](uploading-documents.md)** - Add files to your chat
3. **[Knowledge Retrieval](knowledge-retrieval.md)** - Search company information

**Ready to practice?** Go ahead and start a chat - ask Neurond Assistant "What can you help me with?" and explore!

---

**Questions?** See [Common User Errors](common-errors.md) or [FAQ](../troubleshooting/faq.md).
