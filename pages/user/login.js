import axios from 'axios';
import React,{useState} from 'react'
import {Layout} from '../common';

export default function Login(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({
            ...inputs, [name]: value
        }) 
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/user/signin', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))

    }

    return (<>
        <form action="" onSubmit={handleSubmit}>
        <h1>로그인폼</h1>
        <div>
        <label><b>Username</b></label>
        <input type="text" name='username' onChange={handleChange}/><br />

        <label htmlFor=""><b>Password</b></label>
        <input type="text" name='password' onChange={handleChange}/><br />

        <button onSubmit={handleSubmit}>Login</button><br />
        <label><input type="checkbox" />Remember me</label><br />
        </div>
        <div><button>Cancel</button><br />
        <span>Forgot <a>password?</a></span>
        </div>
        </form>
    </>
)}