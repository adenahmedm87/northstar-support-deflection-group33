# Northstar Retail Support Deflection MVP

A 5-day industry-style MVP developed by PLP Group 33 to reduce repetitive customer-support requests for Northstar Retail Co., a simulated e-commerce company.

## Project Overview

Northstar Retail receives a high volume of repetitive customer-support questions.

Our team built a self-service support system covering two ticket categories:

- Order Status
- Stock Availability

The goal is to allow customers to obtain useful answers without requiring a human support agent for every request.

## MVP Scope

### 1. Order Status

Customers can enter an order number and receive information including:

- Product
- Current order status
- Tracking number
- Expected delivery date or delivered date
- Fulfilment centre

Example:

`ORD004`

### 2. Stock Availability

Customers can enter a product and size and receive:

- Stock status
- Available quantity
- Store location when available
- Expected restock date when unavailable

Examples:

- `Blue T-Shirt` + `M`
- `Blue T-Shirt` + `L`

## Invalid and Unsupported Requests

The system also handles common invalid inputs.

Examples:

- Blank order number → asks the customer to enter an order number
- Unknown order such as `ORD999` → returns an order-not-found message
- Missing product or size → asks for both values
- Unknown product/size combination → returns a clear not-found message

Returns & Refunds are outside the scope of this MVP.

## MVP Workflow

Customer  
↓  
GitHub Pages Frontend  
↓  
JavaScript POST Request  
↓  
n8n Production Webhook  
↓  
Switch Router  
↓  
Order Status Logic / Stock Availability Logic  
↓  
Respond to Webhook  
↓  
Customer Result

## System Components

| Component | Responsibility |
|---|---|
| Frontend / UI | Customer-facing Order and Stock forms |
| n8n Automation | Webhook, request routing and response logic |
| Data / Knowledge Base | Sample Order and Stock records |
| Integration / Validation | Connect frontend to n8n and handle invalid input |
| QA / Documentation | End-to-end testing, README, Go-Live Note and handover |
| Project Management | Issues, Project Board, collaboration tracking and final coordination |

## Technology

- HTML
- CSS
- JavaScript
- GitHub
- GitHub Pages
- n8n
- JSON sample data

## Live Demo

https://adenahmedm87.github.io/northstar-support-deflection-group33/

## Repository Structure

```text
.
├── README.md
├── CHARTER.md
├── GO-LIVE-READINESS.md
├── AUDIT-SNAPSHOT.md
├── Northstar Support Deflection MVP.json
├── index.html
├── style.css
├── script.js
├── data/
│   ├── orders.json
│   └── stock.json
└── diagnostics/

## Sample Test Cases

| Test | Input | Expected Behaviour |
|---|---|---|
| Valid Order | ORD004 | Delivered order details |
| Active Order | ORD003 | Out for Delivery + Expected Delivery |
| Unknown Order | ORD999 | Order not found |
| Blank Order | Empty | Validation message |
| In Stock | Blue T-Shirt + M | In Stock, quantity 12, Westlands Store |
| Out of Stock | Blue T-Shirt + L | Out of Stock + restock date |
| Unknown Stock | Unknown Product + XXL | Combination not found |

## Definition of Done

A feature is considered complete when:

- It works from the live GitHub Pages site
- It returns the expected customer response
- Invalid inputs are handled
- It has been tested
- The related GitHub Issue is updated
- The work is committed using a meaningful commit message
- The Project Board status reflects the work completed

## Team Contributions

- Alex Ndolo (GitHub: `alexNdolo-dev`) — Frontend/UI — Issues 03, 04, 07, 08
- Aden Ahmed (GitHub: `adenahmedm87`) — n8n Automation/Workflow + Manager — Issues 09, 10, 11
- Isolufunke Ajayi (GitHub: `Mary-Sam`) — Data/Knowledge Base — Issues 05, 06
- Ann (GitHub: `wamb-ui`) — Integration/Validation — Issues 12, 13
- Steve Mutuba (GitHub: `chiefmutuma`) — QA/Documentation — Issues 14, 15

## Project Evidence

The repository includes:

- Team Charter
- GitHub Project Board
- Multi-author commit history
- GitHub Issues and status tracking
- Working frontend
- Sample Order and Stock datasets
- Exported n8n workflow
- End-to-end QA evidence
- Day 4 Audit Snapshot
- Go-Live Readiness Note

## Known Limitations

This MVP uses simulated data and is not connected to Northstar's real production systems.

A production version would require:

- Real order-management integration
- Real inventory integration
- Customer authentication
- Security and privacy controls
- Production monitoring and logging

See `GO-LIVE-READINESS.md` for the full handover assessment.
