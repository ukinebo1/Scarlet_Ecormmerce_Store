import React from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>
            <Link to="/">The Scarlet Store</Link>
        </div>
        <div>
            <NavLink to="/" style={({isActive}) => ({color: isActive ? "#D95F27" : "#000"})}>Home</NavLink>
            <NavLink to="/product" style={({isActive}) => ({color: isActive ? "#D95F27" : "#000"})}>Products</NavLink>
            <NavLink to="/" style={({isActive}) => ({color: isActive ? "#D95F27" : "#000"})}>Contact us</NavLink>
        <img />
        </div>
        <div></div>
    </div>
  )
}

export default Navbar