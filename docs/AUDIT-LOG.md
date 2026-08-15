# Northstar Support Deflection MVP - Audit Log

## Project Information

- **Team:** PLP Group 33
- **Project:** Northstar Retail Support Deflection MVP
- **MVP Scope:** Order Status and Stock Availability
- **Frontend:** GitHub Pages
- **Automation:** n8n
- **Repository:** northstar-support-deflection-group33

---

## Team Contribution Summary

### Member 1 - Alex Ndolo
**Role:** Frontend / UI Development

**Issues Owned:**
- Issue 03 - Build Main Frontend Page Structure
- Issue 04 - Style and Improve Frontend Usability
- Issue 07 - Order Status Input Form
- Issue 08 - Stock Availability Input Form

**Main Contributions:**
- Built the customer-facing web interface.
- Created the Order Status section.
- Created the Stock Availability section.
- Added sample Order buttons.
- Added product and size dropdown controls.
- Improved styling, layout and usability.
- Added clear visual feedback for order and stock results.

**Evidence:** GitHub commits and Issue activity by Alex Ndolo.

---

### Member 2 - Aden Ahmed Mohamed
**Role:** Team Lead / n8n Automation

**Issues Owned:**
- Issue 09 - n8n Webhook and Switch
- Issue 10 - Order Automation
- Issue 11 - Stock Automation

**Main Contributions:**
- Created the n8n production webhook.
- Added routing using the Switch node.
- Built Order Status automation logic.
- Built Stock Availability automation logic.
- Connected automation responses to the frontend.
- Fixed the Stock branch connection to Respond to Webhook.
- Published and tested the working n8n workflow.
- Coordinated integration and sprint delivery.

**Evidence:** n8n workflow export, GitHub documentation and Issue activity.

---

### Member 3 - Mary Sam
**Role:** Data / Knowledge Base

**Issues Owned:**
- Issue 05 - Sample Order Data
- Issue 06 - Sample Stock Data

**Main Contributions:**
- Created and maintained sample Order records.
- Created and maintained sample Stock records.
- Added realistic product, order, quantity and availability data.
- Organised test data used by the MVP.

**Evidence:** GitHub commits to the `data` folder and Issue activity.

---

### Member 4 - Wamb-ui
**Role:** Integration / Validation

**Issues Owned:**
- Issue 12 - Connect Frontend to n8n
- Issue 13 - Input Validation and Error Handling

**Main Contributions:**
- Connected the frontend to the n8n production webhook.
- Updated frontend JavaScript integration.
- Added button event handling.
- Supported validation and friendly customer error messages.
- Retested the live Order and Stock workflows.

**Evidence:** GitHub commits to `script.js`, deployment activity and Issue activity.

---

### Member 5 - Chiefmutuma
**Role:** QA / Documentation

**Issues Owned:**
- Issue 14 - End-to-End QA and Bug Verification
- Issue 15 - README, Go-Live Readiness and Final Handover

**Main Contributions:**
- End-to-end testing of Order Status and Stock Availability.
- Verification of valid and invalid input behaviour.
- Final documentation review.
- Go-live readiness support.
- Final sprint handover evidence.

**Evidence:** GitHub testing/documentation commits and Issue activity.

---

## Key Integration Fix

During integration, the Stock Availability branch reached the Stock Code node but was not initially connected to the Respond to Webhook node.

The connection was corrected so both Order Status and Stock Availability return live responses to the frontend.

The workflow was republished after the fix and successfully retested.

---

## End-to-End Flow

### Order Status

Customer  
→ GitHub Pages frontend  
→ n8n Webhook  
→ Switch  
→ Order Code  
→ Respond to Webhook  
→ Customer result

### Stock Availability

Customer  
→ GitHub Pages frontend  
→ n8n Webhook  
→ Switch  
→ Stock Code  
→ Respond to Webhook  
→ Customer result

---

## Audit Evidence

The project audit trail is available through:

- GitHub commit history
- GitHub Issues
- GitHub Project Board
- Repository file history
- n8n workflow export
- README
- Team Charter
- Go-Live Readiness Note
- Testing documentation

---

## Final MVP Status

The MVP supports two customer self-service categories:

1. **Order Status**
2. **Stock Availability**

Both flows operate end-to-end from the live frontend through n8n and return customer-facing responses.

The MVP is ready for final QA, documentation review and assignment submission.
