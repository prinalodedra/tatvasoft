import React from "react";
import { Button  } from "@mui/material";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
    return (
        <>
            <Header />
            <br/>
            <br/>
            <br/>
            <h1 align=" center"> Login or Creat an account </h1>
            <div align= "center">   
            <div id="board" >
            
                <br/>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '62ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                <div>
                <h3 align = "left"> Presonal Information</h3>
                </div>
                    
                    <TextField
                    required
                    id="standard-required"
                    label="First Name"
                    defaultValue=""
                    variant="standard"
                    />
                    <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    defaultValue=""
                    variant="standard"
                    />
                    <div align="left">
                    <TextField
                    required
                    id="standard-required"
                    label="Email"
                    defaultValue="abc@gmail.com"
                    variant="standard"
                    />
                    </div>
                    
                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '62ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <div>
                        <h3 align = "left"> Login Information</h3>
                        </div>
                        <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        />
                        <TextField
                        id="filled-password-input"
                        label="Conform Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        />

                        </Box>
                </div>
                <br/>
                <div align= "left">
                        <Button variant="contained" id='submit'>Submit</Button>
                        </div>
                </Box>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;