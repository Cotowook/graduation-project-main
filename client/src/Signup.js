import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { useState } from "react";
import { signup } from "./api";

export default function Signup() {
   const [formData, setFormData] = useState({
      username: "",
    password: "",
    email: "",
    address: "",
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
      await signup(formData);
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      alert(error.message);
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
      <h1>Sign up</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <label>User Name</label>
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
            type="text"
            name="address"
            value={formData.address}
            onChange={handleFormChange}
            required
          />
          <label>Address</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </div>
 </div>
);
}





