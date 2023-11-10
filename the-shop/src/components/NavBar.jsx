import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="">
            <Link to='/'>home</Link>
            <Link to='/products'>products</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>contact</Link>
        </nav>
    )
}