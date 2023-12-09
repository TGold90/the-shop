import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="nav-container">
            <nav className="product-nav">
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>All Products</NavLink></li>
                    {/* <li><NavLink to='/about'>ABOUT</NavLink></li> */}
                    {/* <li><NavLink to='/contact'>CONTACT</NavLink></li> */}
                </ul>
            </nav>
            <nav className="business-nav">
                <ul>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Log In</li>
                </ul>
            </nav>
        </div>
    )
    return
}