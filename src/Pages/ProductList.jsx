import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function ProductList() {
    return (
        <>
            <Header />
            <h1>Product List</h1>
            <Link to="./Login" className="link"> Login </Link>
            <br/>
            <Link to="/Register" className="link"> Register </Link>
            <br/>
            <Link to="/Cart" className="link"> Cart </Link>
            <Footer />
        </>
    )
}

export default ProductList;