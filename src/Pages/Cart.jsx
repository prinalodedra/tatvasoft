import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Cart() {
    return (
        <>
            <Header />
            <h1>Cart</h1>
            <br />
            <Link to="./Login" className="link"> Login </Link>
            <br/>
            <Link to="/ProductList" className="link"> Product List </Link>
            <br/>
            <Footer />
        </>
    )

}

export default Cart;