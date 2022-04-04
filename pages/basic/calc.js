import axios from "axios";
import React,{useState} from "react"

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, opcode, num2} = inputs;
    const [result, setResult] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>${calc.num1} ${calc.opcode} ${calc.num2} = ${calc.calc}</h3>`
        })
        .catch(err => alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit}>
            <h1>계산기</h1>
            <div>
                <label htmlFor=""><b>첫 번째 숫자</b></label><br/>
                <input name="num1" type="int" onChange={handleChange}/><br/>
                <label htmlFor=""><b>연산자</b></label><br/>
                <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
                </select><br/>
                <label htmlFor=""><b>두 번째 숫자</b></label><br/>
                <input name="num2" type="int" onChange={handleChange}/><br/>
                <input type='submit' value="계산하기"/><br/>
            </div>       
        </form>
        <div> 결과: <span id='result-span'></span></div>
        </div>   
    )}