# Northstar Support Deflection MVP - Test Results

## Purpose

This document records the final testing results for the Northstar Retail Support Deflection MVP.

The MVP supports:

1. Order Status
2. Stock Availability

Testing covers the live frontend, n8n workflow, validation, error handling and end-to-end integration.

---

## Test Environment

- **Frontend:** GitHub Pages
- **Automation:** n8n
- **Request Method:** POST
- **Production Webhook:** `/webhook/northstar-support`
- **Supported Request Types:** `order` and `stock`

---

## Order Status Results

| Test ID | Test | Expected Result | Status |
|---|---|---|---|
| ORD-T01 | ORD001 | Processing order details displayed | PASS |
| ORD-T02 | ORD002 | Shipped order details displayed | PASS |
| ORD-T03 | ORD004 | Delivered order details displayed | PASS |
| ORD-T04 | ORD008 | Out for Delivery details displayed | PASS |
| ORD-T05 | ORD999 | Friendly order-not-found message | PASS |
| ORD-T06 | Blank Order ID | Validation message displayed | PASS |
| ORD-T07 | ord004 | ORD004 is accepted after normalisation | PASS |
| ORD-T08 | ORD004 response details | Product, status, tracking, delivery and fulfilment information displayed | PASS |

### Verified Order Results

The final QA pass confirmed that valid Order IDs return the correct customer-facing information through the complete frontend-to-n8n workflow.

Observed Order information includes:

- Order ID
- Product
- Current status
- Tracking number
- Expected delivery date or delivered date
- Fulfilment centre

The system also correctly handles:

- Blank Order IDs
- Unknown Order IDs
- Lowercase Order IDs such as `ord004`

---

## Stock Availability Results

| Test ID | Test | Expected Result | Status |
|---|---|---|---|
| STK-T01 | Blue T-Shirt, M | In Stock response displayed | PASS |
| STK-T02 | Blue T-Shirt, L | Out of Stock response displayed | PASS |
| STK-T03 | Running Shoes, 41 | In Stock response displayed | PASS |
| STK-T04 | Running Shoes, 42 | Out of Stock response displayed | PASS |
| STK-T05 | Denim Jacket, M | In Stock response displayed | PASS |
| STK-T06 | Unsupported combination | Friendly not-found response | PASS |
| STK-T07 | Missing product | Validation message displayed | PASS |
| STK-T08 | Missing size | Validation message displayed | PASS |

### Verified Stock Results

The final QA pass confirmed that supported product and size combinations return the correct Stock Availability result through the production n8n webhook.

Verified behaviour includes:

- In Stock responses
- Available quantity
- Store location where available
- Out of Stock responses
- Expected restock date
- Unsupported product/size handling
- Missing product validation
- Missing size validation

---

## Integration Results

| Test ID | Test | Expected Result | Status |
|---|---|---|---|
| INT-T01 | Order Status end-to-end | Order response reaches live frontend | PASS |
| INT-T02 | Stock Availability end-to-end | Stock response reaches live frontend | PASS |
| INT-T03 | Order routing | `order` request reaches Order Code | PASS |
| INT-T04 | Stock routing | `stock` request reaches Stock Code | PASS |
| INT-T05 | Production webhook | GitHub Pages communicates with n8n | PASS |
| INT-T06 | Respond to Webhook | Both supported branches return responses | PASS |

---

## Integration Issue Found During Testing

During integration testing, the Stock Availability branch initially reached the Stock Code node but was not connected to the `Respond to Webhook` node.

### Fix Applied

The Stock Code node was connected to `Respond to Webhook`.

The n8n workflow was then republished.

### Retest Result

After the fix:

- Order Status continued working.
- Stock Availability successfully returned a live response.
- The frontend displayed the returned Stock result correctly.

**Result: PASS**

---

## Frontend Validation Results

| Test ID | Test | Expected Result | Status |
|---|---|---|---|
| UI-T01 | Empty Order form | Friendly validation message | PASS |
| UI-T02 | Incomplete Stock form | Friendly validation message | PASS |
| UI-T03 | Sample Order buttons | Selected Order can be checked | PASS |
| UI-T04 | Product and size controls | Correct options can be selected | PASS |
| UI-T05 | Valid response display | Result appears clearly | PASS |
| UI-T06 | Status feedback styling | Customer can clearly identify result state | PASS |

---

## User Interface Observation

The final frontend provides:

- Separate Order Status and Stock Availability sections
- Sample Order buttons
- Product and size selection controls
- Customer-facing response boxes
- Status-aware visual feedback
- Responsive Order and Stock controls
- A clear self-service layout

---

## Final QA Status

Final QA was completed against the live GitHub Pages frontend and production n8n workflow.

The team verified:

- Valid Order Status requests
- Processing, shipped, out-for-delivery and delivered orders
- Lowercase Order ID normalisation
- Unknown Order IDs
- Blank Order validation
- In-stock product combinations
- Out-of-stock product combinations
- Unsupported Stock combinations
- Missing product and size validation
- Sample Order buttons
- Product and size controls
- End-to-end Order routing
- End-to-end Stock routing
- Customer-facing response display
- Frontend-to-n8n communication
- Both automation branches returning responses

Any issue identified during testing was corrected and retested before final submission.

---

## Overall Final Result

The Northstar Support Deflection MVP successfully passed end-to-end QA for both supported customer self-service categories:

- **Order Status**
- **Stock Availability**

The live GitHub Pages frontend communicates successfully with the production n8n webhook.

Order and Stock requests are routed correctly, valid requests return customer-facing results, and invalid or incomplete inputs are handled with clear messages.

**Final QA Result: PASS**

The MVP is ready for assignment submission and demonstration.
