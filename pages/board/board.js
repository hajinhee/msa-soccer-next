import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTitle } from '../../redux/reducers/board.reducer'
import style from "board/styles/board-form.module.css";

export default function BoardForm(){       // JSON 은 모두 상태 데이터(디폴트는 변하는 것) 겉은 변하지 않는 제이슨, 안은 변하는 상태
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    return (<>  
        <form onSubmit={ e => {
            e.preventDefault()
            alert('value? ' +value)
            if(value) dispatch(addTitle({title: value}))

        }}>
        <h1>게시글 등록</h1>        
        <div className={style.container}>
            <div className={style.row}>  
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={e => {
                    e.preventDefault()
                    setValue(e.target.value)
                }}
                id="title" name="title" placeholder="글 제목 입력"/>
                </div>
            </div>
            {/**
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            */}
            <div className={style.row}>
                <input type="submit" value="Submit"/><br/> 
            </div>
        </div>
        </form>
    </>)
}