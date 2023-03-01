import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [activeNav,setActiveNav]=useState(0)
  const handlaChangeClick=(index)=>{
    console.log('test')
    setActiveNav(index);
  };
  useEffect(()=>{
  
  },[]);

  return (
    <div className="navbar d-flex align-items-center  " id="navbarHome">
      <div className="logo">
        <img src="./images/shared/logo.svg" />
      </div>
      <div className="navbar__line"></div>
      <div className="containerNav">
        <div className="text-navbar d-flex justify-content-end  ">
          <div className={`navPrincipal ${activeNav===0 && "navPrincipal-active"}`}
         >
            <NavLink to="/"   
            onClick={()=>handlaChangeClick(0)}>
              <p>00 HOME</p>
            </NavLink>
          </div >
          <div className={`navPrincipal ${activeNav===1 && "navPrincipal-active"}`}
         >
            <NavLink to="/destination"   
            onClick={()=>handlaChangeClick(1)}>
              <p>01 DESTINATION</p>
            </NavLink>
          </div>
          <div className={`navPrincipal ${activeNav===2 && "navPrincipal-active"}`}
          >
            <NavLink to="/equipe" 
             onClick={()=>handlaChangeClick(2)}>
              <p>02 CREW</p>
            </NavLink>
          </div>
          <div className={`navPrincipal ${activeNav===3 && "navPrincipal-active"}`}
   >
            <NavLink to="/technologie" 
            onClick={()=>handlaChangeClick(3)} >
              <p>03 TECHNOLOGY</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
