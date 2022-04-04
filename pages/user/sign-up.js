import React, {useState} from "react";

export default function SignUp(){
const [id, setId] = useState('')
const [password, setPassword] = useState('')
const [result, setResult] = useState('')
                          
const SignUp = ()=>{
    let id = document.getElementById('id').value 
    console.log('id: ' +id)
    let password = document.getElementById('password').value 
    console.log('password: ' +password)
    setId(id)
    setPassword(password)
    setResult('아이디: ' +id+ ' 패스워드: ' +password)
    console.log('result: ' +result)
}
return <div><h1>회원가입</h1>
<form action="">
<label htmlFor=""><b>아이디</b></label><br/>
<input id="id" type=''/><br/>
<label htmlFor=""><b>패스워드</b></label><br/>
<input id="password" type=''/><br/>
<button onClick={()=>{login()}}>확인</button>
</form>
<div>{result}</div>
</div>
}