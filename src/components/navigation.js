/* eslint-disable no-lone-blocks */
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
    <nav className="navSticky">
      <div className="container">
        <a href="#D">
          <img src="img/logo.png" alt="" />
        </a>

        <ul className={active}>
          <a href="#D" className="logo"></a>

          <li className="listLi">
            <a href="#D" className="linksNav">
              PRODUCTS
            </a>
          </li>
          <li className="listLi">
            <a href="#myskills" className="linksNav">
              SOLUTIONS
            </a>
          </li>
          <li className="listLi">
            <a href="#project" className="linksNav">
              SOLUTIONS
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              PRICING
            </a>
          </li>
          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              RESOURCES
            </a>
          </li>
          <li className="listLi">
            <a href="#registerNow" className="linksNav registerLink">
              REGISTER NOW
              <img
                src="img/arrow-down-left.png"
                className="arrow"
                alt="arrow"
              />
            </a>
          </li>
        </ul>

        <div></div>

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
