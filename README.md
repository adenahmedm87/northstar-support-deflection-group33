# Northstar Retail Support Deflection MVP

A 5-day industry-style MVP developed by **PentaCore — PLP Group 33** to reduce repetitive customer-support requests for Northstar Retail Co., a simulated e-commerce company.

## Project Overview

Northstar Retail receives a high volume of repetitive customer-support questions.

Our team built a self-service support system covering two ticket categories:

- Order Status
- Stock Availability

The goal is to allow customers to obtain useful answers without requiring a human support agent for every request.

---

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

Customers can select a product and size and receive:

- Stock status
- Available quantity
- Store location when available
- Expected restock date when unavailable

Examples:

- `Blue T-Shirt` + `M`
- `Blue T-Shirt` + `L`

---

## Invalid and Unsupported Requests

The system also handles common invalid inputs.

Examples:

- Blank order number → asks the customer to enter an order number
- Unknown order such as `ORD999` → returns an order-not-found message
- Missing product or size → asks for both values
- Unknown product/size combination → returns a clear not-found message

Returns & Refunds are outside the scope of this MVP.

---

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

---

## System Components

| Component | Responsibility |
|---|---|
| Frontend / UI | Customer-facing Order Status and Stock Availability forms |
| n8n Automation | Webhook, request routing and response logic |
| Data / Knowledge Base | Sample Order and Stock records |
| Integration / Validation | Connect frontend to n8n and handle invalid input |
| QA / Documentation | End-to-end testing, README, Go-Live Readiness and handover |
| Project Management | Issues, Project Board, collaboration tracking and sprint coordination |

---

## Technology

- HTML
- CSS
- JavaScript
- GitHub
- GitHub Pages
- n8n
- JSON sample data

---

## Live Demo

https://adenahmedm87.github.io/northstar-support-deflection-group33/

---

## Repository Structure

```text
.
├── README.md
├── CHARTER.md
├── GO-LIVE-READINESS.md
├── Northstar Support Deflection MVP.json
├── index.html
├── style.css
├── script.js
│
├── data/
│   ├── orders.json
│   └── stock.json
│
├── diagnostics/
│
├── docs/
│   ├── AUDIT-LOG.md
│   ├── DAY4-AUDIT-SNAPSHOT.md
│   ├── SCREENSHOT-EVIDENCE.md
│   ├── WEBHOOK-CONTRACT.md
│   ├── day4-repository-state.jpg
│   ├── day4-frontend-basic-code.jpg
│   ├── day4-webhook-placeholder.jpg
│   ├── day4-n8n-switch-testing.jpg
│   ├── live-frontend.png
│   ├── n8n-workflow.png
│   ├── order-status-success.png
│   ├── stock-in-stock.png
│   └── stock-out-of-stock.png
│
└── tests/
    ├── TEST-CASES.md
    └── TEST-RESULTS.md
| Test          | Input                 | Expected Behaviour                   |
| ------------- | --------------------- | ------------------------------------ |
| Valid Order   | ORD004                | Delivered order details              |
| Active Order  | ORD003                | Out for Delivery + Expected Delivery |
| Unknown Order | ORD999                | Order not found                      |
| Blank Order   | Empty                 | Validation message                   |
| In Stock      | Blue T-Shirt + M      | In Stock response with quantity      |
| Out of Stock  | Blue T-Shirt + L      | Out of Stock + restock date          |
| Unknown Stock | Unknown Product + XXL | Combination not found                |

Definition of Done

A feature is considered complete when:

It works from the live GitHub Pages site
It returns the expected customer response
Invalid inputs are handled
It has been tested
The related GitHub Issue is updated
The work is committed using a meaningful commit message
The Project Board status reflects the work completed
The change does not break previously working MVP features
Team Contributions
Alex Ndolo

Email: alexmumina611@gmail.com
GitHub: alexNdolo-dev
Role: Frontend / UI Development
Issues: 03, 04, 07, 08

Main contribution areas:

Main frontend page structure
Frontend styling and usability
Order Status interface
Stock Availability interface
Sample Order buttons
Product and size dropdown controls
Customer-facing visual feedback
Aden Ahmed Mohamed

Email: adenahmedm87@gmail.com
GitHub: adenahmedm87
Role: Team Lead / n8n Automation
Issues: 09, 10, 11

Main contribution areas:

Sprint coordination
n8n production webhook
Switch routing
Order Status automation
Stock Availability automation
Workflow testing
Integration troubleshooting
Final workflow publication
Olufunke Ajayi

Email: berachah.cms@gmail.com
GitHub: Mary-Sam
Role: Data / Knowledge Base
Issues: 05, 06

Main contribution areas:

Sample Order records
Sample Stock records
Product and size data
Quantity and availability data
Delivery and restock information
Data organisation
Ann Wambui

Email: annelsy98@gmail.com
GitHub: wamb-ui
Role: Integration / Validation
Issues: 12, 13

Main contribution areas:

Frontend-to-n8n integration
Production webhook connection
JavaScript event handling
Input validation
Friendly error handling
End-to-end integration retesting
Steve Mutuma

Email: stevemutuma254@gmail.com
GitHub: chiefmutuma
Role: QA / Documentation
Issues: 14, 15

Main contribution areas:

End-to-end QA
Valid and invalid request verification
Final documentation review
Go-live readiness support
Final sprint handover evidence
Collaboration and Audit Trail

The team used:

WhatsApp for communication and coordination
GitHub Issues for task ownership and progress tracking
GitHub Project Board for sprint status
GitHub commits for implementation evidence
Repository documentation for final audit and handover
n8n workflow export for automation evidence

The repository contains a multi-author history showing contributions from different team members.

Day 4 Audit

The Day 4 audit captured the project before final integration and polishing.

At that stage:

Data work was already available
n8n automation was still being tested
Frontend styling and usability were still being improved
Frontend-to-n8n integration was not yet final
Final QA and documentation were still pending

See:

docs/DAY4-AUDIT-SNAPSHOT.md

Project Evidence

The repository includes:

Team Charter
Public GitHub Project Board
Multi-author commit history
GitHub Issues and status tracking
Working GitHub Pages frontend
Sample Order and Stock datasets
Exported n8n workflow
Webhook contract
End-to-end QA evidence
Screenshot evidence
Day 4 Audit Snapshot
Go-Live Readiness Note
Final Audit Log
Known Limitations

This MVP uses simulated data and is not connected to Northstar Retail's real production systems.

A production version would require:

Real order-management integration
Real inventory integration
Customer authentication
Security and privacy controls
Production monitoring and logging
Secure credential management
Error monitoring and recovery procedures

See GO-LIVE-READINESS.md for the full handover assessment.

Final Submission Links
Live MVP

https://adenahmedm87.github.io/northstar-support-deflection-group33/

GitHub Repository

https://github.com/adenahmedm87/northstar-support-deflection-group33

GitHub Project Board

https://github.com/users/adenahmedm87/projects/1/views/1

Team Charter

CHARTER.md

Audit Log

docs/AUDIT-LOG.md

Day 4 Audit Snapshot

docs/DAY4-AUDIT-SNAPSHOT.md

Go-Live Readiness

GO-LIVE-READINESS.md

Testing Evidence

tests/TEST-RESULTS.md

Test Cases

tests/TEST-CASES.md

Screenshot Evidence

docs/SCREENSHOT-EVIDENCE.md

Webhook Contract

docs/WEBHOOK-CONTRACT.md

n8n Workflow Export

Northstar Support Deflection MVP.json

Final MVP Status

The MVP successfully supports two customer self-service categories:

Order Status
Stock Availability

Both flows operate end-to-end from the live GitHub Pages frontend through n8n and return customer-facing responses.

The project is ready for final assignment submission and handover
