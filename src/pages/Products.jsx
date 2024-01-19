import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import Footer from "../components/Footer";

export default function Products() {

    const [category, setCategory] = useState()
    return (
        <>
            <Header />
            <h2>All Products</h2>
            <ProductCard />
            <h3>Related Products</h3>
            <ProductCarousel />
            <Footer />
        </>
    )
}