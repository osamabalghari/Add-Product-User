import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import { Navigate } from 'react-router-dom';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();



export default function AdminSigIn() {
    const [inputProduct, setInputProduct] = useState({  email: "", password: "" })


    const obj = {
        email: inputProduct.email,
        password: inputProduct.password
    }
    const signIn = async (event) => {

        event.preventDefault();
        const response = await fetch("http://localhost:3005/api/user/signinadmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const json = await response.json()
        if (json.success) {
            Navigate("/admin")
        }

    }

    const change = (e) => {
        setInputProduct({ ...inputProduct, [e.target.name]: e.target.value })
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LoginIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Admin Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={signIn} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Add User Email"
                                    name="email"
                                    autoComplete="family-name"
                                    onChange={change}
                                    value={inputProduct.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label=" Assign a Password"
                                    name="password"
                                    type="password"
                                    onChange={change}
                                    value={inputProduct.password}
                                />
                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <div>
                        <Link href="/signup">Create Account as User?</Link>
                        {/* <Link href="/signin">Already Have a User Account?</Link> */}
                        </div>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}