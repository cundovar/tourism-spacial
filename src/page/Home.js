import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./t.css";
import { NavLink } from "react-router-dom";

const Home=()=>{
    const [clickedIndex, setClickedIndex] = useState(0);

    const handleClick = (index) => {
      setClickedIndex(index);
    };
      
    return(
        <div className="bg-home ">
            <Navbar/>
            <div className=" container ">
               <div className="containerAll ">
                <div className="texte-home centre">
                    <div>
                        <h5>So, you want to travel to</h5>
                    </div>
                    <div>
                        <h1>SPACE</h1>
                    </div>
                    <div>
                          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
                    </div>
                </div>

               </div>
               <div className="explore-container d-flex justify-content-center align-items-center ">
                <div className="explore rounded-circle  d-flex align-items-center justify-content-center " id="explore">
                <h3>

                    explore
                </h3>
                <div>
    </div>
                    
                </div>
    

               </div>
            </div>

            <div>
      <div
        className={`div ${clickedIndex === 0 ? 'click' : ''}`}
        onClick={() => handleClick(0)}
      />
      <div
        className={`div ${clickedIndex === 1 ? 'click' : ''}`}
        onClick={() => handleClick(1)}
      />
      <div
        className={`div ${clickedIndex === 2 ? 'click' : ''}`}
        onClick={() => handleClick(2)}
      />
      <div
        className={`div ${clickedIndex === 3 ? 'click' : ''}`}
        onClick={() => handleClick(3)}
      />
      <div
        className={`div ${clickedIndex === 4 ? 'click' : ''}`}
        onClick={() => handleClick(4)}
      />
    </div>


    <div className="navbar d-flex align-items-center  " id="navbarHome">
      <div className="logo">
        <img src="./images/shared/logo.svg" />
      </div>
      <div className="navbar__line"></div>
      <div className="containerNav">
        <div className="text-navbar d-flex justify-content-end  ">
          <div className={`navPrincipal ${clickedIndex===0 ? "navPrincipal-active" :''}`}
         >
            <NavLink to=""   
            onClick={()=>handleClick (0)}>
              <p>00 HOME</p>
            </NavLink>
          </div >
          <div className={`navPrincipal ${clickedIndex===1 ? "navPrincipal-active" : ''}`}
         >
            <NavLink to="/destination"   
            onClick={()=>handleClick (1)}>
              <p>01 DESTINATION</p>
            </NavLink>
          </div>
          <div className={`navPrincipal ${clickedIndex===2 ? "navPrincipal-active" :''}`}
          >
            <NavLink to="" 
             onClick={()=>handleClick (2)}>
              <p>02 CREW</p>
            </NavLink>
          </div>
          <div className={`navPrincipal ${clickedIndex===3 ? "navPrincipal-active" :''}`}
   >
            <NavLink to="" 
            onClick={()=>handleClick (3)} >
              <p>03 TECHNOLOGY</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  

        </div>
    )}

export default Home