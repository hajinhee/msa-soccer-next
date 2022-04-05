import React, {useState} from "react"
import axios from "axios";

export default function SignUp(){
    const proxy = 'http://localhost:5000'
    const [inputs, Setinputs] = useState({})
    const {username, password, name, telphone} = inputs;
    
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        Setinputs({
            ...inputs, [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/api/user/signup', inputs)
        .then(res => {
            const signup = res.data
            document.getElementById('result-span').innerHTML = `  
            <h3>${signup.username}님 회원가입 되었습니다.</h3>     
            `
        })
        .catch(err => alert(err))
    }


    return (<>
        <form action="" onSubmit={handleSubmit}>
        <h1>회원가입폼</h1>
        <div>
            <label><b>사용자 ID</b></label>
            <input onChange={handleChange} type="text" name='username' /><br />
    
            <label htmlFor=""><b>비밀번호</b></label>
            <input onChange={handleChange} type="text" name='password'/><br />
            
            <label><b>이름</b></label>
            <input onChange={handleChange} type="text" name='name' /><br />
            
            <label><b>전화번호</b></label>
            <input onChange={handleChange} type="text" name='telphone' /><br />
            
            <button>전 송</button><br/>
        </div>
        <div>
        <span id='result-span'></span>
        </div>
        </form>
    </>)

}