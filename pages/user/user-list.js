import React from "react";
import style from "user/style/user-list.module.css";

const Table = ({ columns, data }) => {
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.tr}> 
                {columns.map((column) => (
                    <th key={column.username} className={style.td}>{column}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                <tr className={style.tr}>
                    { data.length == 0 ? <td colSpan={4} className={style.td}>데이터가 없습니다.</td>
                    : <td colSpan={4} className={style.td}>데이터가 있습니다.</td>}
                </tr>
            </tbody>
        </table>
    );
}

export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const data = []
    return(<>
        <h1>사용자 목록</h1>
        {data.length !=0 && <h3> 회원수 : {data.length}명</h3>}
        <div className={style.td}>
        <Table columns={columns} colSpan={4} data={data}/>
        </div>
        </>)
}

