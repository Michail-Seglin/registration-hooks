import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
function LoginPage() {

    const [inp, setInp] = useState({ email: '', pwd: '' });

    function changeInp(e) {
        const {name, value} = e.target;
        setInp({ ...inp, [name]: value })
    }

    function show() {
        console.log(inp);
    }
    return (
        <div>
            <p>Hello</p>
            <div className={style.form}>
                <div><TextField name='email' label="email" variant="standard" onChange={changeInp} />       </div>
                <div><TextField name='pwd' label="pwd" variant="standard" onChange={changeInp} />       </div>
            </div>
            <Button variant='outlined' onClick={show}>SIGN UP</Button>
        </div>
    )
}

export default LoginPage