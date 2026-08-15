# Northstar Support Deflection MVP - Screenshot Evidence

## Purpose

This file records visual evidence that the Northstar Retail Support Deflection MVP is working end-to-end.

The screenshots stored in this folder should show the live frontend, working Order Status responses, working Stock Availability responses and the n8n workflow.

---

## Screenshot 1 - Live Frontend

**Suggested filename:** `live-frontend.png`

This screenshot should show the published GitHub Pages interface.

It should clearly show:

- Northstar Self-Service Support heading
- Order Status section
- Stock Availability section
- sample Order buttons
- product and size controls
- the final page styling

---

## Screenshot 2 - Successful Order Status Check

**Suggested filename:** `order-status-success.png`

Use a known valid Order ID such as:

`ORD004`

The screenshot should show the returned Order details, including:

- Order ID
- Product
- Status
- Tracking number
- Delivery information
- Fulfilment Centre

This proves the Order Status flow is working from the frontend through n8n.

---

## Screenshot 3 - Successful Stock Availability Check

**Suggested filename:** `stock-in-stock.png`

Suggested test:

- Product: Blue T-Shirt
- Size: M

The screenshot should show an `In Stock` result.

This proves the Stock Availability flow is working from the frontend through n8n.

---

## Screenshot 4 - Out of Stock Result

**Suggested filename:** `stock-out-of-stock.png`

Suggested test:

- Product: Blue T-Shirt
- Size: L

The screenshot should show:

- Out of Stock status
- quantity information if displayed
- restock information if displayed
- clear status-aware styling

---

## Screenshot 5 - n8n Workflow

**Suggested filename:** `n8n-workflow.png`

The screenshot should show the final n8n workflow, including:

- Webhook
- Switch
- Order Code
- Stock Code
- Respond to Webhook
- both Order and Stock connections

This provides visual evidence of the automation architecture.

---

## Screenshot 6 - Validation or Error Handling

**Suggested filename:** `validation-error.png`

This screenshot can show one example such as:

- blank Order ID
- unknown Order ID
- incomplete Stock selection
- unknown product and size combination

The result should show a friendly customer-facing message.

---

## Evidence Summary

Together, these screenshots demonstrate:

1. The frontend is published and accessible.
2. Order Status works end-to-end.
3. Stock Availability works end-to-end.
4. n8n correctly routes both supported request types.
5. Both branches return responses to the frontend.
6. Validation and error handling are visible to the customer.

---

## Final Evidence Folder

Recommended structure:

```text
docs/
├── AUDIT-LOG.md
├── WEBHOOK-CONTRACT.md
├── SCREENSHOT-EVIDENCE.md
├── live-frontend.png
├── order-status-success.png
├── stock-in-stock.png
├── stock-out-of-stock.png
├── n8n-workflow.png
└── validation-error.png
