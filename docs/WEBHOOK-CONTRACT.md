# Northstar Support Deflection MVP - Webhook Contract


## Purpose


This document defines how the Northstar frontend communicates with the n8n automation workflow.


The MVP supports two request types:


1. Order Status
2. Stock Availability


---


## Production Webhook


**Method:** POST


**Production URL:**


https://adenahmed970.app.n8n.cloud/webhook/northstar-support


**Content Type:**


application/json


---


## Order Status Request


The frontend sends an Order Status request in this format:


```json
{
  "type": "order",
  "orderId": "ORD004"
}
Fields
type - identifies the request as an Order Status request.
orderId - the customer order number.
Example Valid Request
{
  "type": "order",
  "orderId": "ORD004"
}
Example Successful Response
{
  "message": "Order ORD004\nProduct: Blue T-Shirt\nStatus: Delivered\nTracking: TRK004\nDelivered On: 13 Aug 2026\nFulfilment Centre: Nairobi Central Hub"
}
Blank Order Response
{
  "message": "Please enter an order number."
}
Unknown Order Response
{
  "message": "Order not found. Please check the order number."
}
Stock Availability Request

The frontend sends a Stock Availability request in this format:

{
  "type": "stock",
  "product": "Blue T-Shirt",
  "size": "M"
}
Fields
type - identifies the request as a Stock Availability request.
product - product selected by the customer.
size - selected product size.
Example Valid Request
{
  "type": "stock",
  "product": "Blue T-Shirt",
  "size": "M"
}
Example Successful Response

The n8n workflow returns a JSON object containing a customer-facing message.

Example:

{
  "message": "Blue T-Shirt, size M: In Stock"
}
Missing Input Response
{
  "message": "Please enter both product and size."
}
Unknown Product or Size

The workflow returns a friendly message when the selected product and size combination cannot be found.

Routing Logic

The n8n Switch node reads:

body.type

The supported routes are:

order → Order Status logic
stock → Stock Availability logic
End-to-End Order Flow
Customer
   ↓
GitHub Pages Frontend
   ↓
POST Request
   ↓
n8n Webhook
   ↓
Switch
   ↓
Order Code
   ↓
Respond to Webhook
   ↓
Frontend Result
End-to-End Stock Flow
Customer
   ↓
GitHub Pages Frontend
   ↓
POST Request
   ↓
n8n Webhook
   ↓
Switch
   ↓
Stock Code
   ↓
Respond to Webhook
   ↓
Frontend Result
Frontend Integration

The frontend uses JavaScript fetch() to send JSON requests to the production n8n webhook.

The frontend expects the response to contain:

{
  "message": "Customer-facing response"
}

The value of message is then displayed on the page.

Validation

The frontend and workflow include validation to prevent confusing responses.

Examples include:

Empty Order ID
Unknown Order ID
Missing product
Missing size
Unknown product and size combination
Temporary service failure
Integration Principle

The frontend is responsible for collecting customer input and displaying responses.

n8n is responsible for:

receiving requests
identifying the request type
routing the request
checking Order or Stock data
returning a structured response

This separation keeps the MVP simple, testable and easy to demonstrate.
