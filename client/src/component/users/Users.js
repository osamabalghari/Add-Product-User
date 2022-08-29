import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./user.css"

const Users = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const response = await fetch("http://localhost:3005/api/user/getalluser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const json = await response.json()
            console.log(json.user);
            setData(json.user)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='card'>

            {data.map((val) => {
                return <Card sx={{ maxWidth: 645 }} className='cart'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {val.name}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={val.name}
                        subheader={val.email}
                    />

                </Card>
            })}

        </div>
    )
}

export default Users


































