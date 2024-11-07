// src/components/Homepage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/product_card';
import Footer from '../components/footer';
// import './HomePage.css';
import axios from 'axios';

function Homepage() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch products from a backend API or mock data
  //   axios.get('https://api.example.com/products').then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);
  return (
    <div className="home">
      <div><Header /></div>
      <div><HeroBanner /></div>
      <section className="product-section">
        {/* <h2>Popular Items</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
        {/* <ProductCard image="https://m.media-amazon.com/images/I/81mrMggUQnS._AC_SY200_.jpg"  */}
        {/* name="bottle" price="30"/> */}
        <div className="home_row">
          <ProductCard id="1234234" title="The bottle set"
          price={19.99}
          image="https://m.media-amazon.com/images/I/81mrMggUQnS._AC_SY200_.jpg"
          rating={5}/>
          <ProductCard id="1234234" title="The bedsheet set"
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg"
          rating={5}/>
        </div>
        <div className="home_row">
        <ProductCard id="1234234" title="Refrigerators"
          price={119.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
          rating={5}/>
        <ProductCard id="1234234" title="Washing machine"
          price={199.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
          rating={5}/>
        </div>
        <div className="home_row">
        <ProductCard id="1234234" title="Women's clothing"
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
          rating={5}/>
        <ProductCard id="1234234" title="Watches"
          price={19.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
          rating={5}/>
        </div> 
      </section>
      <Footer />
    </div>
    // <div>
    //   <h1>Welcome to Our Store</h1>
    //   <Link to="/products">Shop Now</Link>
    // </div>
  );
}

export default Homepage;
