import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen]=useState(false)
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
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

  return (
     <div className="headerNav">


      <a id="link" href="#" ><span id="burger1" onClick={toggleMenu}></span></a>
  
      <div className="logo">
        <img src="./images/shared/logo.svg" alt="Logo" />
      </div>
      <div className="navbar__line"></div>
     
        <div className="text-navbar d-flex justify-content-end"id="menuContent">
          <div
            className={`navPrincipal ${
              activeIndex === 0 ? "navPrincipal-active" : ""
            }`}
          >
            <NavLink
              to="/"
              onClick={() =>{
                 setActiveIndex(0);
                 toggleMenu(); // masquer le menu sur mobile après avoir cliqué sur le lien
              }}
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
              onClick={() => {
                setActiveIndex(1);
                toggleMenu()
              }}
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
              onClick={() => {
                setActiveIndex(2);
                toggleMenu()}}
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
              onClick={() => {
                setActiveIndex(3);
              toggleMenu();
                
              }}
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
    
  
  );
};
export default Navbar;
