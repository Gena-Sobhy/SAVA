import React from 'react'
import "./navbar.css"

import logo from "../assets/logo.png"
import searchIcon from "../assets/Search.png"
import cart from "../assets/cart.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav logo">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="navbar_links"> 
        <a href="#home">Home</a>
        <a href="#fashion">Fashion</a>
        <a href="#jewelry">Jewelry</a>
      </div>

      <div className="navbar_search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search..." /> 
      </div>

      <div className="navbar_account"> 
        <button>Login</button>
        <img src={cart} alt="cart" />
      </div>
    </div>
  )
}

export default Navbar