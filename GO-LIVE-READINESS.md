# Northstar Support Deflection MVP - Go-Live Readiness Note

## Project

**Team:** PentaCore - PLP Group 33  
**Project:** Northstar Retail Support Deflection MVP  
**MVP Scope:** Order Status and Stock Availability  

---

## Current MVP Status

The Northstar Support Deflection MVP has reached a working demonstration state.

Both supported customer self-service flows operate from the live GitHub Pages frontend through the n8n automation workflow and return customer-facing responses.

The MVP is ready for demonstration, QA evidence review and assignment submission.

It is not intended for real production customer use because it currently operates using simulated data.

---

## What Works

### Order Status

Customers can enter a supported Order ID and receive:

- Product information
- Current order status
- Tracking number
- Expected delivery date or delivered date
- Fulfilment centre

The system also handles:

- Blank Order IDs
- Unknown Order IDs
- Friendly error messages

### Stock Availability

Customers can select a product and size and receive:

- Stock status
- Available quantity
- Store location when available
- Expected restock date when unavailable

The system also handles:

- Missing product or size
- Unknown product/size combinations
- Friendly customer-facing error messages

---

## End-to-End Workflow

The working MVP flow is:

Customer  
→ GitHub Pages Frontend  
→ JavaScript POST Request  
→ n8n Production Webhook  
→ Switch Routing  
→ Order Status or Stock Availability Logic  
→ Respond to Webhook  
→ Customer Result

Both supported flows have been tested through the live frontend.

---

## Validation and QA

The team tested:

- Valid Order Status requests
- Active and delivered orders
- Unknown Order IDs
- Blank Order input
- In-stock products
- Out-of-stock products
- Unknown product and size combinations
- Frontend-to-n8n integration
- Customer-facing response handling

Testing evidence is available in the repository under the `tests` and `docs` folders.

---

## Known Limitations

The current MVP has the following limitations:

- Uses fictional/sample Order and Stock data
- No customer authentication
- Not connected to Northstar Retail's real order database
- Not connected to a real inventory database
- No real courier tracking API
- No production monitoring or alerting
- No production security or privacy controls
- Designed for MVP demonstration rather than live customer deployment

Returns & Refunds and other customer-support categories are outside the current MVP scope.

---

## Requirements Before Real Production Use

Before this solution could be used with real Northstar Retail customers, Northstar would need to:

1. Connect the system to the real order-management API.
2. Connect the system to the real inventory API.
3. Replace sample records with live production data.
4. Add secure customer authentication.
5. Add privacy and access controls.
6. Protect production webhook and API credentials.
7. Add monitoring, logging and alerting.
8. Add production-grade error handling and recovery.
9. Perform security and privacy testing.
10. Complete user acceptance testing using real business scenarios.

---

## Go-Live Decision

### MVP Demonstration

**READY**

The current solution is ready for:

- Assignment submission
- Team demonstration
- End-to-end MVP review
- Testing evidence review

### Real Production Deployment

**NOT YET READY**

Production deployment should only take place after real system integration, authentication, security controls, monitoring and production testing are completed.

---

## Supporting Evidence

The repository contains:

- Team Charter
- GitHub Project Board
- Multi-author commit history
- GitHub Issues
- Day 4 Audit Snapshot
- Audit Log
- Test Cases
- Test Results
- Screenshot Evidence
- Webhook Contract
- Exported n8n Workflow
- Live GitHub Pages frontend

---

## Final Readiness Statement

PentaCore successfully delivered a working 5-day MVP covering Order Status and Stock Availability.

The system demonstrates that repetitive customer-support requests can be handled through a simple self-service frontend connected to an automated workflow.

The MVP is ready for demonstration and assignment submission, while the limitations and additional requirements for real production deployment are clearly documented.
