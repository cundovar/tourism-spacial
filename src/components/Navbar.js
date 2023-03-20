import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/destination":
        setActiveIndex(1);
        break;
      case "/equipe":
        setActiveIndex(2);
        break;
      case "/technologie":
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(0);
    }
  }, [location.pathname]);

  return (
    <div className="navbar d-flex align-items-center" id="navbarHome">
      <div className="logo">
        <img src="./images/shared/logo.svg" alt="Logo" />
      </div>
      <div className="navbar__line"></div>
      <div className="containerNav">
        <div className="text-navbar d-flex justify-content-end">
          <div
            className={`navPrincipal ${
              activeIndex === 0 ? "navPrincipal-active" : ""
            }`}
          >
            <NavLink
              to="/"
              onClick={() => setActiveIndex(0)}
              activeClassName="navPrincipal-active"
              style={{ textDecoration: "none" }}
            >
              <p>
                {" "}
                <span className="number">00</span> HOME
              </p>
            </NavLink>
          </div>
          <div
            className={`navPrincipal ${
              activeIndex === 1 ? "navPrincipal-active" : ""
            }`}
          >
            <NavLink
              to="/destination"
              onClick={() => setActiveIndex(1)}
              activeClassName="navPrincipal-active"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="number">01</span> DESTINATION
              </p>
            </NavLink>
          </div>
          <div
            className={`navPrincipal ${
              activeIndex === 2 ? "navPrincipal-active" : ""
            }`}
          >
            <NavLink
              to="/equipe"
              onClick={() => setActiveIndex(2)}
              activeClassName="navPrincipal-active"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="number">02</span> CREW
              </p>
            </NavLink>
          </div>
          <div
            className={`navPrincipal ${
              activeIndex === 3 ? "navPrincipal-active" : ""
            }`}
          >
            <NavLink
              to="/technologie"
              onClick={() => setActiveIndex(3)}
              activeClassName="navPrincipal-active"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="number">03</span> TECHNOLOGY
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
