import React from "react";
import "./Home.css";

import logo from "../img/mainlogo.jpg";

import { Link, Route, Routes } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
function Home(props) {
  return (
    <div className="Home">
      <div className="c_header">
        <div className="c_left">
          <Link to="/">
            <img className="c_logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="c_center">
          <input className="c_input" placeholder="무엇이 궁금하세요?" />
          <button className="c_button">
            <FiSearch />
          </button>
        </div>
        <div className="c_right">
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            <div className="c_log">LOGIN</div>
          </Link>
          <Link to="/Signup" style={{ textDecoration: "none", color: "black" }}>
            <div className="c_log">SIGN UP</div>
          </Link>
        </div>
      </div>

      <div className="home_main">
        <div className="hmm">
          <div className="profile">프로필사진</div>
          <div className="hmm_id">아이디</div>
          <div>설정</div>
        </div>
        <div className="hml">
          <div>쓴 글</div>
          <div>todolist</div>
          <div>장바구니</div>
          <div>로그아웃하기</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
