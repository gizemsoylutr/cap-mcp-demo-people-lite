# people-lite (CAP + cds-mcp demo)

Minimal **CAP project** designed to demonstrate how to use [`@cap-js/mcp-server`](https://github.com/cap-js/mcp-server).  
It contains only **two entities** and **one action**:

- `City`  
- `Person` (with `city` association and `isContact` flag)  
- `markAsContact(person: UUID)` → sets a person as contact

---

## 🤖 MCP & AGENTS.md

This repo includes an **AGENTS.md** file with MCP usage rules.  
It ensures AI coding agents (Copilot/Claude/Cline, etc.) always use `cds-mcp` tools instead of raw file grepping.  

Key rules:
- Always run `cds-mcp search_model` to locate entities, services, actions, or endpoints.  
- Always run `cds-mcp search_docs` before suggesting CAP APIs or changing CDS models.  
- Avoid guessing file paths or API usage without MCP output.  

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
npm install
npm run build
npm run start
```
This will start the CAP server at http://localhost:4004

## 🛠 Using MCP Tools

From the project root you can run:

# Search CDS model definitions
```bash
npm run m:model -- "Person"
```
# Find which service publishes the entity
```bash
npm run m:model -- "PeopleService"
```
# Locate the custom action
```bash
npm run m:model -- "markAsContact action"
```

# Search CAP documentation semantically
```bash
npm run m:docs -- "CAP Node.js service action example" 2
```

## 📂 Project Structure

people-lite/
├─ db/schema.cds              # Entities
├─ srv/people-service.cds     # Service + Action
├─ srv/people-service.js      # Action implementation
├─ package.json
├─ .cdsrc.json
├─ AGENTS.md
└─ README.md

## 💡 Notes/Tricks

 -Running cds-mcp without subcommands will wait silently (not an error).

 -If run in the wrong folder you may see:
 “Couldn’t find a CDS model for ‘undefined’” → switch to project root.

 -On PowerShell, always use double quotes (" ") for search_docs.

 -For quick experiments, add shortcuts in package.json scripts (already included here as m:model and m:docs).


 ## 📊 MCP vs Non-MCP Comparison

As part of this demo, I compared GitHub Copilot’s answers **with and without** the MCP server enabled.  
The goal was to test if answers are grounded in the actual CAP model and official CAP docs.

### 🔹 Prompt P1 – Model Discovery
**Prompt:**
In this workspace, locate the Person entity and show:
(a) which service publishes it,
(b) the HTTP endpoints,
(c) the defining file path.


**Result without MCP (hallucination):**
- Service guessed incorrectly  
- Endpoint guessed: `/PeopleService/resetEmail` (not real)

**Result with MCP (grounded):**
- Service: `PeopleService`  
- Entity file: `db/schema.cds`  
- Projection file: `srv/people-service.cds`  
- Correct endpoint: `/PeopleService/Persons`

![alt text](./prompts/prompt1-without%20MCP.png)
![alt_text](./prompts/prompt1-with%20MCP.png)
---

### 🔹 Prompt P2 – Documentation Reference
**Prompt:**
Before finalizing, search CAP documentation for "service action implementation in Node.js"
and cite the relevant steps you used.

**Result without MCP (generic):**
- Only a simple snippet was shown (`this.on('myCustomAction', …)`)  
- No deeper explanation of CAP best practices  

**Result with MCP (grounded in docs):**
- Copilot first called `cds-mcp search_docs`  
- Brought in the official CAP docs with step-by-step guidance:  
  1. Define the action in CDS  
  2. Implement the handler in Node.js with `this.on(...)`  
  3. Access parameters via `req.data`  
  4. Return result or use `req.error` for validation  
- Then applied these steps to the custom `resetEmail` action

![alt_text](./prompts/prompt2-without%20MCP%20.png)
![alt_text](./prompts/prompt2-with%20MCP.png)
---

### 📌 Conclusion
- **MCP OFF:** Copilot guessed endpoints, provided shallow documentation references.  
- **MCP ON:** Copilot grounded its answer in **actual project metadata** and **official CAP documentation**, producing correct file paths, endpoints, and best practice code.  

This demonstrates how MCP improves accuracy, reliability, and developer confidence.