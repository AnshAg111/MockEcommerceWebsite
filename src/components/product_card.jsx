// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({id, title, image, price, rating}) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="product_rating">
          <p>{rating}</p>
        </div> */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      {/* <h3 className='product_info'>{product.name}</h3>
      <p className='product_price'>${product.price}</p> */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
