# MCP Usage Rules for this CAP Project (people-lite)

To ensure AI coding agents (Copilot, Claude, Cline, etc.) use the MCP server correctly in this repo,  
the following rules must always be followed:

---

## 📌 Model Searches
- Always use **`cds-mcp search_model`** to locate:
  - Entities (e.g., `Person`, `City`)
  - Services (e.g., `PeopleService`)
  - Actions (e.g., `markAsContact`)
  - Associations, annotations, and HTTP endpoints
- Do **NOT** grep `.cds` files directly unless `cds-mcp` returns no result.

---

## 📌 Documentation Searches
- Always use **`cds-mcp search_docs`** when:
  - Implementing CAP APIs in JavaScript
  - Modifying `.cds` models
  - Unsure about CAP features (Draft, Actions, Authorization, etc.)
- Cite the relevant documentation chunks returned by the tool.

---

## 📌 Agent Behavior
- Before suggesting or generating any code, first run the relevant MCP tool.
- When explaining changes, **always reference the MCP tool outputs**.
- If MCP tools return nothing, only then fall back to reading `.cds` source files directly.

---

## ✅ Examples
- *Good:* “Used `cds-mcp search_model` to confirm that `Person` entity is published by `PeopleService` at `/PeopleService/Persons`.”  
- *Bad:* “I looked at `srv/people-service.cds` manually to guess the endpoints.”

---

## 🎯 Goal
These rules guarantee:
- Accurate and up-to-date understanding of the CAP model
- Reliable references to CAP documentation
- Consistent and explainable agent outputs
