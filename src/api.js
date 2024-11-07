export async function fetchProducts() {
    const response = await fetch('/api/products'); // Set up JSON Server with /api/products
    return response.json();
  }
  
  export async function fetchProductById(id) {
    const response = await fetch(`/api/products/${id}`);
    return response.json();
  }
  
  export async function processPayment() {
    // Randomly simulate success or failure
    const isSuccess = Math.random() > 0.5;
    return { success: isSuccess };
  }
  