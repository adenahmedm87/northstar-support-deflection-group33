const WEBHOOK_URL = "PASTE_N8N_PRODUCTION_WEBHOOK_URL_HERE";

async function sendRequest(payload, resultId) {
  const result = document.getElementById(resultId);
  result.textContent = "Checking...";
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    result.textContent = data.message || "No response received.";
  } catch (error) {
    result.textContent = "Service unavailable. Please try again.";
  }
}

function checkOrder() {
  const orderId = document.getElementById("orderId").value.trim();
  sendRequest({type:"order", orderId}, "orderResult");
}

function checkStock() {
  const product = document.getElementById("product").value.trim();
  const size = document.getElementById("size").value.trim();
  sendRequest({type:"stock", product, size}, "stockResult");
}

function checkReturn() {
  const question = document.getElementById("returnReason").value;
  sendRequest({type:"return", question}, "returnResult");
}