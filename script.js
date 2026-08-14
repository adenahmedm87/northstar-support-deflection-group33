const WEBHOOK_URL = "https://adenahmed970.app.n8n.cloud/webhook/northstar-support";

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

document.getElementById("orderBtn").addEventListener("click", () => {
  const orderId = document.getElementById("orderId").value.trim();
  const result = document.getElementById("orderResult");

  if (!orderId){
    result.textContent = "Please enter an order number.";
    return; 
  }
  sendRequest({ type: "order", orderId }, "orderResult");
});

document.getElementById("stockBtn").addEventListener("click", () => {
  const product = document.getElementById("product").value.trim();
  const size = document.getElementById("size").value.trim();
  const result =document.getElementById("stockResult");

  if (!product || !size){
    result.textContent = "Please enter both product and size.";
    return;
  }
  sendRequest({ type: "stock", product, size }, "stockResult");
});


