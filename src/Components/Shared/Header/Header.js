import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../contexts/StyleContext";
import logo from '../../../assets/images/logo.png'
import { Link } from "react-router-dom";
function Header() {
  const { isDark } = useContext(StyleContext);
  return (
    <Headroom>
      <header className={!isDark ? "dark-menu header" : "header"}>
        <a href="#home" className="logo ml-3">
          <Link to="/home"><img src={logo} alt="logo" /></Link>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={!isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={!isDark ? "dark-menu menu" : "menu"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
