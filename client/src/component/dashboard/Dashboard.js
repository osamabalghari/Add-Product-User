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
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

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



export default function Dashboard() {
    const [inputProduct, setInputProduct] = useState({ productname: "", genre: "", price: "", descrip: "" })
    const [image, setImage] = useState({})


    const addProduct = async (event) => {
        event.preventDefault();
        const formdata = new FormData()
        formdata.append("productName", inputProduct.productname)
        formdata.append("productGenre", inputProduct.genre)
        formdata.append("productPrice", inputProduct.price)
        formdata.append("descrip", inputProduct.descrip)
        formdata.append("avatar", image)

        const response = await fetch("http://localhost:3005/api/product/profile", {
            method: "POST",
            body: formdata
        })
        const json = await response.json()
        console.log(json);

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
                        <ProductionQuantityLimitsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Product
                    </Typography>
                    <Box component="form" noValidate onSubmit={addProduct} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="productname"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Add Product Name"
                                    autoFocus
                                    onChange={change}
                                    value={inputProduct.productname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Add Product Genre"
                                    name="genre"
                                    autoComplete="family-name"
                                    onChange={change}
                                    value={inputProduct.genre}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label=" Add Product Price"
                                    name="price"
                                    type="number"
                                    onChange={change}
                                    value={inputProduct.price}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="descrip"
                                    label=" Add a Product description"
                                    name="descrip"
                                    type="text"
                                    onChange={change}
                                    value={inputProduct.descrip}
                                />
                            </Grid>
                            <Grid action="/profile" method="post" enctype="multipart/form-data" xs={12} >
                                <TextField type="file" name="avatar" onChange={(e) => { setImage(e.target.files[0]) }} />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Product
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}