/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("nav-links");
  const [toggleIcon, setToggleIcon] = useState("burger");

  const showNav = () => {
    active === "nav-links"
      ? setActive("navlinks nav-active")
      : setActive("nav-links");

    // Toggle

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  };
  return (
    <nav>
      <div className="container">
        <a href="#D">
          <img  alt="" />
        </a>

        <ul className={active}>
          <a href="#D" className="logo"></a>

          <li className="listLi">
            <a href="#D" className="linksNav">
              How it Works
            </a>
          </li>
          <li className="listLi">
            <a href="#myskills" className="linksNav">
              Features
            </a>
          </li>
          <li className="listLi">
            <a href="#project" className="linksNav">
              Pricing
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              Help
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              Blog
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              Log In
            </a>
          </li>
          <li className="listli">
            <a className="btn">
              Sign Up <img alt="logo" />
            </a>
          </li>
        </ul>

        <div className={toggleIcon} onClick={showNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
