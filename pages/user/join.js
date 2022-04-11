import React, {useState} from "react"
import axios from "axios";

export default function Join(){
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
        alert(`등록할 회원정보 : ${JSON.stringify(inputs)}`)
        axios.post(proxy+'/api/user/signup', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
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
            <input onChange={handleChange} type="text" name='telephone' /><br />
            
            <button>전 송</button><br/>
        </div>
        </form>
    </>)

}