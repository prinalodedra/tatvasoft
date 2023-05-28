/*
import {
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Searchbar from "../Component/Searchbar";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../service/auth.service";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .min(5, "Password must be 5 charaters at minimum")
      .required("Password is  Required"),
  });

  const onSubmit = (values) => {
    // alert(JSON.stringify(values));
    authService
      .login(values)
      .then((res) => {
        delete res._id;
        delete res.__v;
        setTimeout(() => {
          toast.success("successfully logged in");
        }, 3000);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const breadcrumbs = [
    <Link to={"/"} underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Typography key="2" color={{ color: "#f14d54" }}>
      Login
    </Typography>,
  ];
  return (
    <div className="flex-1 ">
      <ToastContainer />
      <Header />
      <Searchbar />
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
              <Typography
              variant="h4"
              sx={{
                display: "flex",
                marginTop: "50px",
                alignItems: "center",
                justifyContent: "center",
                  }}
                >
                Login or Create an Account
                </Typography>
                <div className="flex items-center justify-center m-6">
                  <div className="border-t-2 border-[#f14d54] w-32"></div>
                </div>
                <div id="board2">
                  <div id = "board3">
                  <div className="grid grid-cols-2 gap-36 mt-12 ">
                    <div className="ml-40">
                    <Typography variant="h6">New Customer</Typography>
                    <Divider
                      sx={{
                          marginTop: "20px",
                          }}
                    />
                    <Typography variant="body2" sx={{ marginTop: "20px" }}>
                       Reagine
                        Registeration is free and easy.
                    </Typography>

                        <ul >
                          <li>Faster Checkout</li>
                          <li>Save Multiple shipping addresses</li>
                          <li>View and track orders and more</li>
                        </ul>
                        <Button
                          variant="contained"
                          sx={{
                            color: "white",
                            backgroundColor: "#f14d54",
                            "&:hover": {
                              backgroundColor: "#f14d54", // Change the hover background color
                            },
                            textTransform: "capitalize",
                            marginTop: "165px",
                          }}
                          onClick={() => {
                            navigate("/register");
                          }}
                        >
                          Create an Account
                        </Button>
                      </div>
                      </div>

        </div>
      
        <div id = "board4" >
          <>
          <Typography variant="h6">Ragistered Customers</Typography>
          </>
          <Divider
            sx={{
              marginTop: "0px",
              marginRight: "160px",
              marginBottom: "10px"
            }}
          />
          <Typography variant="body2" sx={{ marginTop: "0px" }}>
            Please enter the following information to create your account
            If you have account with us,please log in.
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="">
                <FormControl fullWidth sx={{ marginTop: "20px" }}>
                  <label>Email Address*</label>
                  <TextField
                    size="small"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    sx={{ width: "357px" }}
                  />
                  <div className="text-red-600">
                    {errors.email && touched.email && errors.email}
                  </div>
                </FormControl>
                <FormControl fullWidth sx={{ marginTop: "40px" }}>
                  <label>Password*</label>
                  <TextField
                    type="password"
                    name="password"
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    sx={{ width: "357px" }}
                  />
                  <div className="text-red-600">
                    {errors.password && touched.password && errors.password}
                  </div>
                </FormControl>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    color: "white",
                    backgroundColor: "#f14d54",
                    "&:hover": {
                      backgroundColor: "#f14d54", // Change the hover background color
                    },
                    marginTop: "60px",
                  }}
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;*/

import React from "react";
import * as yup from "yup";
import {
  Button,
  Grid,
  TextField,
  Breadcrumbs,
  
  Typography,
  
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import authService from "../service/auth.service";
import Header from "../Component/Header";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Footer from "../Component/Footer";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      
      authService.login(values).then((res) => {
        navigate("/productList");
        toast.success("sucessfully Login");
      });
    },
  });
  return (
    <div>
      <Header />
      <br />

      <Breadcrumbs
        separator=">"
        aria-label="breadcrump"
        className="breadcrump-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50",
          fontSize: 18,
        }}
      >
        <Link
          color="inherit"
          href="/"
          title="Home"
          style={{ textDecoration: "none", fontSize: 18 }}
        >
          Home
        </Link>
        <Typography color="#f14d53" style={{ fontSize: 18 }}>
          Create an Account
        </Typography>
      </Breadcrumbs>
      <form onSubmit={formik.handleSubmit}>
        <h1 align="center" style={{ marginBottom: 25, marginTop: 50 ,}}>
          Login or Create an account
        </h1>
        <Grid container spacing={2} style={{ justifyContent: "center",marginBottom:80 }}>
          <Grid item xs={5}>
            <h6 style={{ fontSize: 25, color: "#414141", fontWeight: "bold" }}>
              New Customer
            </h6>
            <hr style={{ marginInlineEnd: 20 }} />
            <h5 >Register is free and easy</h5>
            <ul style={{fontSize:20,color:'#212121',paddingInline:16}}>
              <li style={{paddingBottom:10}}>Faster Checkpoint</li>
              <li style={{paddingBottom:10}}>Save multiple shopping addresses</li>
              <li style={{paddingBottom:10}}>View and Trace order and more</li>
            </ul>
            <Button color="primary" variant="contained"  style={{  backgroundColor: '#f14d53', marginTop:138,width:220}}><Link to="/register" style={{textDecoration:'none',color:'white'}}>
           
           Create an Account
           </Link>
         </Button>
          </Grid>
          <Grid item xs={5}>
            <h6 style={{ fontSize: 25, color: "#414141", paddingTop: 0 }}>
              Register Customers 
            </h6>
            <hr />
            <h5 >If you have account with us,Please login</h5>
            <Typography variant="body1" gutterBottom >
              Email *
            </Typography>
            <TextField
              style={{
                height: 50,
                width: 600,
                // marginInline: 30,
                // marginTop: 20,
              }}
              fullWidth
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <Typography variant="body1" gutterBottom style={{marginTop:40}}>
              Password *
            </Typography>
            <TextField
              style={{
                height: 50,
                width: 600,
                // marginInline: 30,
                // marginTop: 20,
              }}
              fullWidth
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br />
            
           
          <Button color="primary" variant="contained"  type="submit" style={{  backgroundColor: '#f14d53',color:'white', marginTop:60}}>
          
           
           Login
           
          </Button>
        
          </Grid>
        </Grid>
      </form>
      <Footer />
    </div>
  );
}

export default Login;