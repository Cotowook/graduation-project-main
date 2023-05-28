import React from "react";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import logo from "./img/logo.png";
import ImageSlider from "./ImageSlide";
import midBanner from "./img/banner.jpeg";
import about_hl from "./img/about_hl.png";
import logo_meaning from "./img/logo_meaning.jpeg";
import logo_meaning2 from "./img/logo_meaning2.jpeg";

export default function Header() {
  return (
    <div className="top_banner">
      <span className="banner">
        <Link to="/">
          <div>
            <img
              className="bannerLogo"
              src={logo}
              width="50px"
              height="50px"
              alt="logo"
            />
          </div>
        </Link>
        <div className="bannerBtns_left">
          <a
            className="bannerBtn"
            href="/Products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="bannerTitle"> PRODUCTS</span>
          </a>

          <a
            className="bannerBtn"
            href="/Community"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="bannerTitle"> COMMUNITY</span>
          </a>
          <a
            className="bannerBtn"
            style={{ textDecoration: "none", color: "black" }}
            href="/TodoList"
          >
            <span className="bannerTitle"> TO DO LIST</span>
          </a>
        </div>
        <div className="bannerBtns_right">
          <a
            className="bannerBtn"
            href="/Login"
            style={{ textDecoration: "none", color: "black" }}
          >
            <FiLogIn color="gray" />
            <span className="bannerTitle"> LOGIN</span>
          </a>

          <a
            className="bannerBtn"
            href="/Signup"
            style={{ textDecoration: "none", color: "black" }}
          >
            <BsFillPersonPlusFill color="gray" />
            <span className="bannerTitle"> SIGN UP</span>
          </a>
        </div>
      </span>
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <img className="logo_meaning" src={logo_meaning} alt="logo_meaning" />
        <img
          className="logo_meaning2"
          src={logo_meaning2}
          alt="logo_meaning2"
        />
      </div>
    </div>
  );
}
