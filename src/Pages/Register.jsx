import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Button  } from "@mui/material";

function Register() {
    return (
        <>
            <Header />
            <h1>Register Component</h1>

            <Link to="./Login" className="link"> Login </Link>
            <br/>
            <Link to="/ProductList" className="link"> Product List </Link>
            <br/>
            <Link to="/Cart" className="link"> Cart </Link>
            <br/>

            <Button variant="contained">Submit</Button>
            <Footer />
        </>
    )
}

export default Register;