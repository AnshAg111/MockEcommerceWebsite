// src/components/Checkout.js
import React from 'react';
import Header from '../components/header';
import { useLocation, useNavigate } from 'react-router-dom';
import { processPayment } from '../api';
import './checkout.css'

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handlePayment = async () => {
    const result = await processPayment();
    if (result.success) navigate('/payment-success');
    else navigate('/payment-failure');
  };
  const items = [
    { id: 1, name: 'Product A', price: 10.0, quantity: 1 },
    { id: 2, name: 'Product B', price: 20.0, quantity: 1 },
  ];
  const shippingCost = 5.0;
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost;

  const handlePlaceOrder = () => {
    alert("Order placed!");
    // Place order logic
  };

  if (!product) return (
    <div className='checkout'>
    <div><Header /></div>
    <p>Cart is empty</p>
    </div>
  );

  return (
    <div className='checkout'>
      <div><Header /></div>
      <h2 className='checkout_title'>Checkout</h2>
      {/* <div className="checkout-container"> */}
      {/* Shipping Address */}
      <section className="checkout-section">
        <h2>Shipping Address</h2>
        <p>John Doe</p>
        <p>123 Main St</p>
        <p>Springfield, IL, 62701</p>
      </section>

      {/* Order Summary */}
      <section className="checkout-section">
        <h2>Order Summary</h2>
        {items.map((item) => (
          <div key={item.id} className="item-row">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="item-row">
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="item-row total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </section>

      {/* Payment Method */}
      <section className="checkout-section">
        <h2>Payment Method</h2>
        <div className="payment-options">
          <label>
            <input type="radio" name="payment" defaultChecked /> Credit Card
          </label>
          <label>
            <input type="radio" name="payment" /> PayPal
          </label>
        </div>
      </section>

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Checkout;
