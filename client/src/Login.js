import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { login } from "./api";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

 const handleFormSubmit = async (e) => {
     e.preventDefault();
     try {
       const response = await login(formData);
       const token = response.data;
       localStorage.setItem('token', token);
       alert('로그인이 완료되었습니다.');
     } catch (error) {
       alert('로그인에 실패하였습니다.');
     }
   };
  return (
    <div>
      <Link to="/">
        <div className="banner">
          <img
            className="bannerLogo"
            src={logo}
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
      </Link>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="pass">Forgot password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}