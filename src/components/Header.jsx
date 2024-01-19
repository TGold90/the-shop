import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className='site-header'>
            <span className="header-brand">the stuff place</span>
            <NavBar />

        </header>
    );
}