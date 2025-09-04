# people-lite (CAP + cds-mcp demo)

Minimal **CAP project** designed to demonstrate how to use [`@cap-js/mcp-server`](https://github.com/cap-js/mcp-server).  
It contains only **two entities** and **one action**:

- `City`  
- `Person` (with `city` association and `isContact` flag)  
- `markAsContact(person: UUID)` → sets a person as contact

---


## 🤖 AGENTS.md

This repo also includes AGENTS.md with MCP usage rules.
It ensures AI coding agents (Copilot/Claude/Cline, etc.) always use cds-mcp tools instead of raw file grepping

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
npm install
npm run build
npm run start


# Search CDS model definitions
npm run m:model -- "Person"

# Find which service publishes the entity
npm run m:model -- "PeopleService"

# Locate the custom action
npm run m:model -- "markAsContact action"

# Search CAP documentation semantically
npm run m:docs -- "CAP Node.js service action example" 2


people-lite/
├─ db/schema.cds              # Entities
├─ srv/people-service.cds     # Service + Action
├─ srv/people-service.js      # Action implementation
├─ package.json
├─ .cdsrc.json
├─ AGENTS.md
└─ README.md


