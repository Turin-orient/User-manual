---
sidebar_position: 3
---

# What can Neurond Assistant do?

Neurond Assistant has a few "superpowers" that make your daily work much smoother. Think of it as a multi-tool for your office tasks.

Here are the three main things it's really good at:

---

## 🔍 1. Smart Searching (The "Library Expert")

Instead of searching for a specific file name, you can ask the assistant about the **meaning** of what you're looking for.

- **How it helps:** It searches through all company documents (PDFs, Word files, etc.) to find the exact answer for you.
- **Example:** You ask: "What should I do if my laptop breaks?" and the assistant finds the exact instruction in the "Office Safety" manual.

```mermaid
flowchart LR
    %% Style Definitions
    classDef query fill:#fff,stroke:#d9d9d9,stroke-dasharray: 5 5,color:#666
    classDef system fill:#7c3aed,stroke:#5b21b6,stroke-width:2px,rx:10,ry:10,color:#fff
    classDef db fill:#f5f3ff,stroke:#a78bfa,stroke-width:2px,color:#4c1d95
    classDef result fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,rx:10,ry:10,color:#15803d

    User(User Question):::query -->|Semantic Search| AI([<img src='/img/logo.svg' width='40'/>]):::system
    AI -->|Scans| Docs[(Company Docs)]:::db
    Docs -->|Extracts Info| AI
    AI -->|Delivers| Answer([Precise Answer]):::result
    
    linkStyle default stroke:#a78bfa,stroke-width:2px;
```


---

## ✍️ 2. Writing & Ideas Helper (The "Quick Writer")

Stuck on a blank page? The assistant can help you get started or clean up your writing.

```mermaid
flowchart TD
    %% Modern Chatbot Palette
    classDef root fill:#5b21b6,stroke:#4c1d95,stroke-width:2px,rx:20,ry:20,color:#fff
    classDef feature fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,rx:15,ry:15,color:#fff
    classDef item fill:#f5f3ff,stroke:#ddd6fe,stroke-width:1px,rx:5,ry:5,color:#4c1d95
    
    Root([<img src='/img/logo.svg' width='30'/> Writing Helper]):::root
    
    %% Branches
    Root --> Draft(Drafting):::feature
    Root --> Simp(Simplifying):::feature
    Root --> Trans(Translating):::feature
    
    %% Leaves
    Draft --> D1[Emails]:::item
    Draft --> D2[Reports]:::item
    
    Simp --> S1[Jargon -> Simple]:::item
    Simp --> S2[Long -> Short]:::item
    
    Trans --> T1[Multi-language Support]:::item
    
    linkStyle default stroke:#a78bfa,stroke-width:2px;
```


- **How it helps:**
  - **Drafting:** It can write emails, reports, or lists for you.
    :::note Example
    **You:** "Draft an email to the team about the project launch."
    **Assistant:** "Hi Team, I'm excited to announce that we are launching Project X today..."
    :::

  - **Simplifying:** It can take a very complex instruction and explain it like a story for a child.
    :::info
    **Complex:** "Utilize the authentication mechanism to valid credentials."
    **Simple:** "Log in with your password to prove it's you."
    :::

  - **Translating:** It can help you understand a document written in another language.
    :::tip
    **French:** "Bonjour, comment ça va?"
    **English:** "Hello, how are you?"
    :::

- **Example:** "Rewrite this email to sound more professional and friendly."

---

## 📄 3. Document Reader (The "Quick Scanner")

Don't have time to read a 100-page manual? Or need to get info from a photo of a receipt?

- **How it helps:**
  - **Summarizing:** It can read a long file and give you the 5 most important bullet points.
  - **Reading Photos:** You can upload a photo of a document or a whiteboard, and the assistant can read the text inside it.
- **Example:** "Give me a summary of this contract's main deadlines."

```mermaid
flowchart TD
    %% Style Definitions
    classDef input fill:#fff,stroke:#d9d9d9,stroke-dasharray: 5 5,color:#666
    classDef process fill:#7c3aed,stroke:#5b21b6,stroke-width:2px,rx:10,ry:10,color:#fff
    classDef output fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,rx:10,ry:10,color:#15803d

    Input(Upload File/Photo):::input -->|OCR & Analysis| Process([<img src='/img/logo.svg' width='40'/>]):::process
    Process -->|Extracts Data| Output([Summary & Key Points]):::output
    
    linkStyle default stroke:#a78bfa,stroke-width:2px;
```


---

## 🛡️ 4. Always Private & Safe

Everything you talk about with the assistant stays private within our company. It's much safer than using public tools on the internet.

---

**Excited to try it yourself?** Move on to the [Getting Started](../user-manual/login.md) section to learn how to log in for the first time!
