# Day 4 Audit Snapshot
## Northstar Support Deflection MVP — PentaCore — PLP Group 33

## Purpose

This snapshot records the state of the Northstar Support Deflection MVP during Day 4 of the 5-day sprint.

The purpose of the audit was to identify what had already been completed, what was still in progress, and what needed to be corrected before final delivery.

---

## Day 4 Project Status

By Day 4, the project had a working foundation but was not yet ready for final submission.

### Data / Knowledge Base

The sample data work assigned to the Data / Knowledge Base role had already been completed.

Order Status and Stock Availability test records were available for use by the workflow and frontend.

This allowed the team to continue testing the automation and customer-facing flows.

**Status:** Completed

---

### n8n Automation

The Team Lead / n8n Automation work was still being developed and tested.

The main automation components included:

- Production webhook
- Switch routing
- Order Status logic
- Stock Availability logic
- Respond to Webhook

The workflow was being tested to confirm that requests reached the correct branch and returned the expected result.

Some integration behaviour still required checking before the workflow could be considered final.

**Status:** In Progress / Testing

---

### Frontend / UI

The frontend structure was being developed, but the final styling and some customer-facing features were not yet complete.

At this stage:

- The page structure existed.
- The interface was still visually basic.
- Final styling had not yet been completed.
- Some usability features were still missing.
- Order and Stock controls still needed further refinement.

The team agreed that the frontend needed additional work before the final demo.

**Status:** In Progress

---

### Integration

The frontend and n8n workflow were not yet fully validated as a complete end-to-end customer flow.

The team still needed to confirm:

- Frontend requests reached the production webhook.
- Order requests were routed correctly.
- Stock requests were routed correctly.
- Both branches returned responses to the frontend.
- Invalid inputs produced clear customer messages.

**Status:** In Progress

---

## Day 4 Gaps Identified

The Day 4 review identified the following remaining work:

1. Complete frontend styling and improve usability.
2. Finish missing frontend controls and customer-facing features.
3. Continue testing the n8n Order and Stock branches.
4. Complete frontend-to-n8n integration.
5. Verify that both automation branches returned results correctly.
6. Add input validation and friendly error handling.
7. Perform final end-to-end QA.
8. Complete final documentation and go-live readiness evidence.

---

## Team Response

After identifying the gaps, the team reorganised the remaining work according to member responsibilities.

Frontend improvements continued under the Frontend / UI role.

Automation testing and workflow completion continued under the Team Lead / n8n Automation role.

Integration and validation followed once the main frontend and automation components were ready.

QA and documentation were scheduled for the final stage after end-to-end functionality was confirmed.

This allowed the team to focus on the most important remaining MVP requirements instead of adding unnecessary scope.

---

## Day 4 Audit Outcome

The Day 4 audit showed that the MVP had a working foundation but still required integration, styling, validation and final testing.

The audit helped the team identify the remaining blockers and organise the final work needed for Day 5 delivery.

**Day 4 Status:** Partially Complete — Final Integration and QA Required

---

## Day 4 Screenshot Evidence

The following screenshots were captured during development and show the MVP before final integration and polishing.

### Repository State

![Day 4 repository state](day4-evidence/day4-repository-state.jpg)

The repository was still evolving, with the main frontend and data files present but the final documentation and evidence package not yet complete.

### Frontend Still Under Development

![Day 4 frontend basic code](day4-evidence/day4-frontend-basic-code.jpg)

The earlier frontend structure was still basic and included features that were later adjusted as the MVP scope was refined.

### Frontend-to-n8n Integration Not Yet Final

![Day 4 webhook placeholder](day4-evidence/day4-webhook-placeholder.jpg)

At this stage, the frontend JavaScript still contained a placeholder for the n8n production webhook URL, showing that the final frontend-to-automation connection had not yet been completed.

### n8n Routing Under Testing

![Day 4 n8n Switch testing](day4-evidence/day4-n8n-switch-testing.jpg)

The n8n Switch routing configuration was still being tested. The screenshot shows the workflow before final request data and routing validation were complete.

---

## Evidence Sources

Day 4 progress can be traced through:

- GitHub commit history
- GitHub Issues
- GitHub Project Board
- Data files
- Frontend file history
- n8n workflow development and testing
- Team communication and task coordination

The final completed state is documented separately in the Go-Live Readiness Note, testing evidence and final audit log.
