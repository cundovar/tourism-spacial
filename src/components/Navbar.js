import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar d-flex align-items-center justify-content-center " id="navbarHome">
      <div className="logo">
        <img src="./images/shared/logo.svg" />
      </div>

      <div className="text-navbar d-flex  ">
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
  );
};
export default Navbar;
