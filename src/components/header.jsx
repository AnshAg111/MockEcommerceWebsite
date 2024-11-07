// src/components/Header.js
import React from 'react';
import './header.css';
import {Link} from "react-router-dom"
// import SearchIcon from "@mui/icons-material/Search"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQp6JOwe7GRcDHKbZOWPUhXgxad21bhpyUFE9C8dnsVIVYSEi4uqv0jYhmniTIMhHprc&usqp=CAU" alt="" />
      </Link>
      
      {/* <img className="logo" src="logo.png" /> */}
      <div className='header_search'>
        {/* <input type="text" className='headerSearchInput'/> */}
        
      <input type="text" placeholder="Search for products" className="search-bar" />
      {/* <SearchIcon className='search_icon'/> */}
      <svg className='searchIcon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg>
      </div>
      {/* <div > */}

      {/* </div> */}
      <div className="header_nav">
        <span className='header_option' id="sign-in">Sign In</span>
        <Link to="/checkout">
        <div className="cart">
        <span className='header_option' id="cart-icon">🛒</span>
        <span className='header_option'>0</span>
        </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
