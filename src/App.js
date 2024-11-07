// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
