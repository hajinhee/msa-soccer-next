import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from '../../redux/reducers/todo.reducer'
export default function AddTodo() {
    const [value, setValue] = useState(''); //값이 하나면 JSON 사용하지 않음
    const dispatch = useDispatch()
  return (
     <div className="todoapp stack-large">
      <h1>일정등록</h1>
      <form onSubmit={ e => {
          e.preventDefault()
          alert('value ?' +value)
          if(value) dispatch(addTask({task: value}))
      }}>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={e => {
              e.preventDefault()
              setValue(e.target.value)
          }}
        />
        <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
    </div>
  );
}