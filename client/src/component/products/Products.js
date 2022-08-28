import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const response = await fetch("http://localhost:3005/api/product/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const json = await response.json()
            console.log(json);
            setData(json)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", gap: "3rem", flexWrap: "wrap", marginTop: "3rem" }}>
            {data.map((val) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(val.picture.data.data))
                )
                return <>
                    <Card sx={{}}>
                        <CardMedia
                            component="img"
                            height="340"
                            image={`data:image/jpg;base64,${base64String}`}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.productName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {val.descrip}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="body2" color="text.secondary">
                                Price  {val.productPrice}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {val.productGenre}
                            </Typography>
                        </CardActions>
                    </Card>

                </>
            })}
        </div>
    )
}

export default Products






















    ;


// {
//     data.map((value) => {
//
//         return (<>
//             <h1>{value.name}</h1>
//             <img src={`data:image/png;base64,${base64String}`} width="300" />
//         </>)
//     })
// }



