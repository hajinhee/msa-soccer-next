import React, {useState} from "react";
import axios from 'axios';

export default function Bmi(){   // 함수
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value  //조직화된 데이터
        })

        
    }
    const handleSubmit = e => {             // handleClick => 상수 
        e.preventDefault()
        axios.post(proxy+'/basic/bmi', inputs)
        .then(res => {
            alert(`결과 : ${JSON.stringify(res.data)}`)
        })
        .catch(err => alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit}>
            <h1>BMI</h1>
            <div>
                <label htmlFor=""><b>이름</b></label><br/>
                <input type='text' name='name' onChange={handleChange}/><br/>
                <label htmlFor=""><b>키</b></label><br/>
                <input type='text' name='height' onChange={handleChange}/><br/>
                <label htmlFor=""><b>몸무게</b></label><br/>
                <input type='text' name='weight' onChange={handleChange}/><br/>
                <input type='submit' value="BMI 체크"/><br/>
            </div>
        </form>
        </div>)
} 