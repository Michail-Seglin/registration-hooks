import React from 'react';
import { Typography, TextField } from '@mui/material'
import style from './style.module.css'
import Button from '@mui/material/Button'
import { useState } from 'react'
const RegPage = () => {

    const [inp, setInp] = useState({ name: '', surname: '', email: '', pwd: '' });

    function changeInp(e) {
        const { name, value } = e.target;
        setInp({ ...inp, [name]: value });
    }

    async function show() {
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inp)

        })
        const json = await response.json();
        console.log(json);
    }

    return (
        <div className={style.wrapper} >
            <Typography variant="h3" component="h2">
                Registration
            </Typography>;

            <div>

            </div>
            <div>
                <TextField name='name' label="name" variant="standard" onChange={changeInp} />       </div>

            <div>
                <TextField name='surname' label="surname" variant="standard" onChange={changeInp} />       </div>

            <div>
                <TextField name='email' label="Email" variant="standard" onChange={changeInp} />       </div>
            <div>
                <TextField name='pwd' label="Password" variant="standard" onChange={changeInp} />
            </div>

            <Button variant='outlined' onClick={show}>SIGN UP</Button>
            <div className={style.exile}>
                <p>Already have an account</p>
                <Button variant='outlined' >SIGN UP</Button>
            </div>
        </div >
    )
}

export default RegPage