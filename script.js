const WEBHOOK_URL =
  "https://adenahmed970.app.n8n.cloud/webhook/northstar-support";

function setSelected(selector, selectedElement) {
  document.querySelectorAll(selector).forEach(item => {
    item.classList.toggle("selected", item === selectedElement);
  });
}

function applyResultStyle(message, element) {
  const text = message.toLowerCase();
  // IMPORTANT: check "out of stock" before "in stock"
  // because "out of stock" must not be coloured as success.
  if (
    text.includes("out of stock") ||
    text.includes("not found") ||
    text.includes("please enter") ||
    text.includes("service unavailable") ||
    text.includes("combination not found")
  ) {
    element.className = "result-box result-error";
  } else if (
    text.includes("delivered") ||
    text.includes("in stock")
  ) {
    element.className = "result-box result-success";
  } else if (
    text.includes("shipped") ||
    text.includes("out for delivery")
  ) {
    element.className = "result-box result-info";
  } else if (
    text.includes("processing")
  ) {
    element.className = "result-box result-warning";
  } else {
    element.className = "result-box result-info";
  }
}

async function sendRequest(payload, resultId) {
  const result = document.getElementById(resultId);
  result.className = "result-box result-info";
  result.textContent = "Checking...";
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    const message = data.message || "No response received.";
    result.textContent = message;
    applyResultStyle(message, result);
  } catch (error) {
    const message = "Service unavailable. Please try again.";
    result.textContent = message;
    applyResultStyle(message, result);
  }
}

document.getElementById("orderBtn").addEventListener("click", () => {
  const orderId =
    document.getElementById("orderId").value.trim();
  const result =
    document.getElementById("orderResult");
  if (!orderId) {
    const message = "Please enter an order number.";
    result.textContent = message;
    applyResultStyle(message, result);
    return;
  }
  sendRequest(
    { type: "order", orderId },
    "orderResult"
  );
});

document.getElementById("stockBtn").addEventListener("click", () => {
  const product =
    document.getElementById("product").value.trim();
  const size =
    document.getElementById("size").value.trim();
  const result =
    document.getElementById("stockResult");
  if (!product || !size) {
    const message = "Please enter both product and size.";
    result.textContent = message;
    applyResultStyle(message, result);
    return;
  }
  sendRequest(
    { type: "stock", product, size },
    "stockResult"
  );
});

// Sample order buttons: fill the order input only.
// User still presses Check Order.
document.querySelectorAll(".order-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.getElementById("orderId").value =
      chip.dataset.order;
    setSelected(".order-chip", chip);
  });
});

// Stock section: Size dropdown options depend on the selected Product.
const sizeOptions = {
  "Blue T-Shirt": ["S", "M", "L"],
  "Black Hoodie": ["M", "L"],
  "Running Shoes": ["40", "41", "42"],
  "Denim Jacket": ["M", "L"]
};

const productSelect = document.getElementById("product");
const sizeSelect = document.getElementById("size");

productSelect.addEventListener("change", () => {
  const product = productSelect.value;
  sizeSelect.innerHTML = '<option value="">Select size</option>';
  if (!product || !sizeOptions[product]) {
    sizeSelect.disabled = true;
    return;
  }
  sizeOptions[product].forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });
  sizeSelect.disabled = false;
});
