// src/components/HeroBanner.js
import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img className='banner_image' src="https://www.shutterstock.com/image-vector/3d-yellow-great-discount-sale-260nw-2056851839.jpg" alt="" />
      <div className="banner-text">
        <h1>Shop the Latest Deals</h1>
        <p>Grab the best deals on your favorite products!</p>
      </div>
    </section>
  );
};

export default HeroBanner;
