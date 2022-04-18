import React,{useState} from 'react'
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "../common/styles/table.module.css"
import MenuItem from '@mui/material/MenuItem';

export default function Nav(){
  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]
  const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/modify","/user/withdraw","user/list"]
  const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  const todoUrls = ["/todo/add","/todo/list","/todo/modify","/todo/remove"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const gameUrls = ["/game/add","/game/list","/game/modify","/game/remove"]
  const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  const teamUrls = ["/team/add","/team/list","/team/modify","/team/remove"]
  const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  const boardUrls = ["/board/add","/board/list","/board/modify","/board/remove"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  
  return (
    <table className={tableStyles.table}>
      <tr>
      <td><SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}/>
        <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
        <SubMenu title={"투두"} urls={todoUrls} subTitles={todoSubTitle}/>
        <SubMenu title={"게임"} urls={gameUrls} subTitles={gameSubTitle}/>
        <SubMenu title={"팀"} urls={teamUrls} subTitles={teamSubTitle}/>
        <SubMenu title={"게시판"} urls={boardUrls} subTitles={boardSubTitle}/>
        </td>
      </tr>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose}><Link href={url} key={i}>{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu></>
}
      