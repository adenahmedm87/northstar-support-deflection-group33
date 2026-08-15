# Northstar Support Deflection MVP - Test Results

## Purpose

This document records testing results for the Northstar Retail Support Deflection MVP.

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
| ORD-T01 | ORD001 | Processing order details displayed | Pending Final QA |
| ORD-T02 | ORD002 | Shipped order details displayed | Pending Final QA |
| ORD-T03 | ORD004 | Delivered order details displayed | PASS |
| ORD-T04 | ORD008 | Out for Delivery details displayed | Pending Final QA |
| ORD-T05 | ORD999 | Friendly order-not-found message | Pending Final QA |
| ORD-T06 | Blank Order ID | Validation message displayed | Pending Final QA |
| ORD-T07 | ord004 | ORD004 is accepted after normalisation | Pending Final QA |
| ORD-T08 | ORD004 response details | Product, status, tracking, delivery and fulfilment information displayed | PASS |

### Verified Order Result

A live Order Status test using `ORD004` successfully returned the order information through the complete frontend-to-n8n workflow.

Observed information included:

- Order ID
- Product
- Delivered status
- Tracking number
- Delivery information
- Fulfilment centre

---

## Stock Availability Results

| Test ID | Test | Expected Result | Status |
|---|---|---|---|
| STK-T01 | Blue T-Shirt, M | In Stock response displayed | PASS |
| STK-T02 | Blue T-Shirt, L | Out of Stock response displayed | Pending Final QA |
| STK-T03 | Running Shoes, 41 | In Stock response displayed | Pending Final QA |
| STK-T04 | Running Shoes, 42 | Out of Stock response displayed | Pending Final QA |
| STK-T05 | Denim Jacket, M | In Stock response displayed | Pending Final QA |
| STK-T06 | Unsupported combination | Friendly not-found response | Pending Final QA |
| STK-T07 | Missing product | Validation message displayed | Pending Final QA |
| STK-T08 | Missing size | Validation message displayed | Pending Final QA |

### Verified Stock Result

A live Stock Availability test using:

- Product: `Blue T-Shirt`
- Size: `M`

successfully returned an `In Stock` response through the production n8n webhook.

This confirmed that the Stock branch was connected correctly to `Respond to Webhook`.

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
| UI-T01 | Empty Order form | Friendly validation message | Pending Final QA |
| UI-T02 | Incomplete Stock form | Friendly validation message | Pending Final QA |
| UI-T03 | Sample Order buttons | Selected Order can be checked | Pending Final QA |
| UI-T04 | Product and size controls | Correct options can be selected | PASS |
| UI-T05 | Valid response display | Result appears clearly | PASS |
| UI-T06 | Status feedback styling | Customer can clearly identify result state | PASS |

---

## User Interface Observation

The final frontend provides:

- separate Order Status and Stock Availability sections,
- sample Order buttons,
- product and size selection controls,
- customer-facing response boxes,
- status-aware visual feedback,
- responsive Order and Stock controls,
- and a clear self-service layout.

---

## Final QA Remaining

The QA owner should complete the rows marked `Pending Final QA` before final submission.

For each pending test:

1. Open the live GitHub Pages site.
2. Run the stated input.
3. Confirm the observed result.
4. Change `Pending Final QA` to `PASS` if correct.
5. Record any failure before making a fix.
6. Retest after any fix.

---

## Overall Current Result

The core MVP has been demonstrated successfully end-to-end for both required support categories:

- **Order Status**
- **Stock Availability**

The production frontend and n8n workflow communicate successfully, and both supported request types can return customer-facing responses.

Final edge-case and validation checks should be completed during the final QA pass before submission.
