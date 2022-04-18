import React, { useEffect } from 'react';
import tableStyles from './common/styles/table.module.css'
import axios from "axios";
export default function Home() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/now").then((res) => {
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
    });
  },[]);
  return (
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th><h2>HOME</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr >
        <td>
            <div id="timeZone"></div></td>
        </tr>
    </tbody>
  </table>
  )
}