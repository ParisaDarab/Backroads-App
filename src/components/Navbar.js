import Logo from "../images/logo.svg";
import { IconLink, NavLink } from "../data/Links";

import React from "react";
import { NavMapLink, SocialMapLink } from "./map";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {NavLink.map((item) => {
            return <NavMapLink {...item} key={item.d} />;
          })}
        </ul>

        <ul className="nav-icons">
          {IconLink.map((item) => {
            return <SocialMapLink key={item.id} {...item} itemClass="nav-icon"/>;
          })}
        </ul>
      </div>
    </nav>
  );
};
