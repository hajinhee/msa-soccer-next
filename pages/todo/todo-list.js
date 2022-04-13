import React, { useEffect, useState } from "react";
import tableStyles from "todo/styles/todo-list.module.css";

const Table = ({columns, colspan, data}) => {
     return (
     <table className={tableStyles.table}>
          <thead>
               <tr className={tableStyles.tr}  >
               {columns.map((column) => (
                    <th key={column} className={tableStyles.td}>{column}</th>
                    ))}
               </tr>
          </thead>
          <tbody>
          { data.length == 0  ?<tr className={tableStyles.tr}>
                                      <td colSpan={colspan} className={tableStyles.td}>일정이 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr className={tableStyles.tr}  key={user.task} >
                  <td className={tableStyles.td}>{user.task}</td>
                </tr>
            ))}
          </tbody>
     </table>     
)}

export default function TodoList(){
     const columns = ["Task"];
     const [data, setData] = useState([])

     return (<><h1>스케줄 목록</h1>
     <div className={tableStyles.td}>
     <Table columns={columns} colspan={4} data={data}/>
     </div>
     </>)
}