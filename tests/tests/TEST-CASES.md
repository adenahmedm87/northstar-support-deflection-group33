# Northstar Support Deflection MVP - Test Cases

## Purpose

This document defines the test cases used to verify the Northstar Retail Support Deflection MVP.

The MVP supports two customer self-service categories:

1. Order Status
2. Stock Availability

Testing covers valid requests, invalid requests, missing input, unsupported data and end-to-end integration.

---

## Order Status Test Cases

| Test ID | Test Scenario | Test Input | Expected Result |
|---|---|---|---|
| ORD-T01 | Valid processing order | ORD001 | Order details are displayed and status shows Processing |
| ORD-T02 | Valid shipped order | ORD002 | Order details are displayed and status shows Shipped |
| ORD-T03 | Valid delivered order | ORD004 | Order details are displayed and status shows Delivered |
| ORD-T04 | Valid out-for-delivery order | ORD008 | Order details are displayed and status shows Out for Delivery |
| ORD-T05 | Unknown order number | ORD999 | Friendly Order not found message is displayed |
| ORD-T06 | Blank order number | Empty input | User is asked to enter an order number |
| ORD-T07 | Lowercase order number | ord004 | Request is accepted and ORD004 information is returned |
| ORD-T08 | Order response details | ORD004 | Product, status, tracking, delivery information and fulfilment centre are returned |

---

## Stock Availability Test Cases

| Test ID | Test Scenario | Test Input | Expected Result |
|---|---|---|---|
| STK-T01 | Product and size in stock | Blue T-Shirt, M | Result shows In Stock |
| STK-T02 | Product and size out of stock | Blue T-Shirt, L | Result shows Out of Stock |
| STK-T03 | Running Shoes available size | Running Shoes, 41 | Result shows In Stock |
| STK-T04 | Running Shoes unavailable size | Running Shoes, 42 | Result shows Out of Stock |
| STK-T05 | Denim Jacket available size | Denim Jacket, M | Result shows In Stock |
| STK-T06 | Unknown product or size combination | Unsupported product/size | Friendly not-found response is displayed |
| STK-T07 | Missing product | Product left blank | User is asked to provide the required Stock information |
| STK-T08 | Missing size | Size left blank | User is asked to provide the required Stock information |

---

## Frontend Validation Test Cases

| Test ID | Test Scenario | Action | Expected Result |
|---|---|---|---|
| UI-T01 | Empty Order Status form | Click Check Order without entering an Order ID | Validation message is shown instead of sending a confusing request |
| UI-T02 | Empty Stock form | Click Check Stock without completing the required selections | Validation message is shown |
| UI-T03 | Sample Order button | Click one of the sample Order IDs | Selected Order ID can be checked successfully |
| UI-T04 | Product selection | Select a Stock product | Relevant size options are available |
| UI-T05 | Result feedback | Submit a valid request | Customer-facing result is displayed clearly on the page |
| UI-T06 | Error feedback | Submit invalid information | Friendly error feedback is displayed clearly |

---

## Integration Test Cases

| Test ID | Test Scenario | Expected Flow | Expected Result |
|---|---|---|---|
| INT-T01 | Order Status end-to-end | Frontend → Webhook → Switch → Order Code → Respond to Webhook | Order response reaches the live frontend |
| INT-T02 | Stock Availability end-to-end | Frontend → Webhook → Switch → Stock Code → Respond to Webhook | Stock response reaches the live frontend |
| INT-T03 | Order route selection | Request type = order | Switch sends request to the Order branch |
| INT-T04 | Stock route selection | Request type = stock | Switch sends request to the Stock branch |
| INT-T05 | Production webhook connection | Submit request from GitHub Pages | Frontend successfully communicates with the production n8n webhook |
| INT-T06 | Respond to Webhook connection | Submit both supported request types | Both Order and Stock branches return responses to the customer |

---

## Error and Reliability Test Cases

| Test ID | Test Scenario | Expected Result |
|---|---|---|
| ERR-T01 | Invalid Order ID | System does not invent an order and returns a friendly not-found message |
| ERR-T02 | Invalid Stock combination | System does not invent availability and returns a friendly response |
| ERR-T03 | Missing required input | Request is stopped or handled with a clear validation message |
| ERR-T04 | Temporary workflow/service failure | Frontend displays a service-unavailable message instead of failing silently |
| ERR-T05 | Repeated valid request | Same input returns a consistent result |
| ERR-T06 | Switching between Order and Stock checks | Both tools continue working independently |

---

## Test Data Used

### Sample Orders

The MVP uses sample Order IDs from:

- ORD001
- ORD002
- ORD003
- ORD004
- ORD005
- ORD006
- ORD007
- ORD008
- ORD009
- ORD010

### Sample Products

The MVP uses:

- Blue T-Shirt
- Black Hoodie
- Running Shoes
- Denim Jacket

Available sizes depend on the selected product.

---

## Pass Criteria

A test passes when:

- the correct workflow branch is used,
- the expected customer-facing response is returned,
- invalid or missing input is handled clearly,
- no unsupported Order or Stock information is invented,
- and the frontend remains usable after the request.

---

## MVP Acceptance Criteria

The MVP is considered functional when:

1. A customer can check a valid Order Status.
2. A customer can check Stock Availability.
3. Unknown Order IDs are handled safely.
4. Invalid or missing Stock information is handled safely.
5. Both request types work from the live GitHub Pages frontend.
6. Both request types successfully pass through n8n.
7. Responses are returned to the frontend through Respond to Webhook.
8. Customer-facing errors are understandable and do not expose technical details.
