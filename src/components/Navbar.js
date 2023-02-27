import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar d-flex align-items-center  " id="navbarHome">
      <div className="logo">
        <img src="./images/shared/logo.svg" />
      </div>
      <div className="navbar__line"></div>
      <div className="containerNav">
        <div className="text-navbar d-flex justify-content-end  ">
          <div>
            <NavLink to="/">
              <p>00 HOME</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/destination">
              <p>01 DESTINATION</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/equipe">
              <p>02 CREW</p>
            </NavLink>
          </div>
          <div>
            <NavLink to="/technologie">
              <p>03 TECHNOLOGY</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
