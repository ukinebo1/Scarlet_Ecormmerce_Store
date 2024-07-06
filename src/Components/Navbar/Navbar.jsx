import React, { useState } from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu] =useState("Home")
  return (
    <div className='navbar'>
            <Link to="/" className='logo'>The Scarlet Store</Link>
        <div className='navbar-menu'>
          <Link to="/"
          onClick={()=>setMenu("Home")}
          className={menu ==="Home"? "active" : ""}>Home</Link>
            <Link to="/products"
            onClick={()=>setMenu("Products")}
            className={menu ==="Products" ? "active": ""}>Products</Link>
            <Link to=""
            onClick={()=>setMenu("Contact us")}
            className={menu ==="Contact us" ? "active" : ""}>Contact us</Link>
           <Link to="/cart"
           onClick={()=>setMenu(<img src={assets.antdesign_shopping_cart} alt="" />)}
           className={menu === <img src={assets.antdesign_shopping_cart} alt="" /> ? "active" : ""}><img src={assets.antdesign_shopping_cart} alt="" /></Link> 
        </div>
        <div className='navbar-right'>
          <Link to=""><img src={assets.bx_bx} alt="" /></Link>
          <Link to=""><img src={assets.phone} alt="" /></Link>
        </div>
    </div>
  )
}

export default Navbar