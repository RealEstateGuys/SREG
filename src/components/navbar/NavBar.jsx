import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import SREGLogo from "../../assets/logo-black.png";
import FilterPanel from '../FilterPanel.js';

import "./Navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [alink, setALink] = useState("#fff");
  const [btnColor, setbtnColor] = useState("");
  const [btnBorderColor, setBtnBorderColor] = useState("2px solid");
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/listings") {
      setALink("#333");
      setbtnColor("#333");
      setBtnBorderColor("2px solid #333");
    }
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const returnHome = () => {
    window.location = "/";
  };

  const handleSignUp = () => {
    window.location = "https://spearrealestate.homes/signup";
  };

  const getStyle = (property) => ({
    color: property === "color" ? alink : btnColor,
    border: property === "border" ? btnBorderColor : null,
  });

  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  const handleFilter = (filters) => {
    setShowFilterPanel(false);
    console.log(filters);
    // Pass the filters to your main component or context to update the search results
  };

  return (
    <div className="navbar">
      <div className="container">
        <img
          alt="Spear-Real-Estate_logo"
          onClick={returnHome}
          src={SREGLogo}
          className="SREG-Logo"
        ></img>
        <div className="icon" onClick={handleClick}>
          {click ? <FaRegTimesCircle /> : <HiOutlineMenuAlt4 />}
        </div>
        <div className={click ? "menu-container active" : "menu-container"}>
          <ul className="nav-menu">
            <a className="aLinks" href="/listings" style={getStyle("color")}>
              Buy
            </a>
            <a className="aLinks" href="https://spearrealestate.homes/buyerss" style={getStyle("color")}>
              Invest
            </a>
            <a className="aLinks" href="https://spearrealestate.homes/investors" style={getStyle("color")}>
              Sell
            </a>
            <a className="aLinks" href="https://spearrealestate.homes/sellers" style={getStyle("color")}>
              Financing
            </a>
            <a className="aLinks" href="https://spearrealestate.homes/" style={getStyle("color")}>
              Agents
            </a>
            <a className="aLinks" href="https://spearrealestate.homes/blog" style={getStyle("color")}>
              Feed
            </a>
            <li>
              <button onClick={toggleFilterPanel}>Filters</button>
            </li>
          </ul>
          <button
            className="btn"
            style={getStyle("border")}
          >
            Log In
          </button>
          <button
            className="btn"
            style={getStyle("border")}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
      {showFilterPanel && <FilterPanel onFilter={handleFilter} />}
    </div>
  );
};

export default NavBar;
