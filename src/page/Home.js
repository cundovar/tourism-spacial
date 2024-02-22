import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./t.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <div className="bg-home bg ">
      <Navbar />
        <section>
      <div className="  containerHome ">
        <div className="containerAll " id="home">
          <div className="texte-home ">
            <div className="titleContent">
              <h4>So, you want to travel to</h4>
            </div>
            <div className="titreHome">
              <h1 >SPACE</h1>
            </div>
            <div className="textHome">
              <p className="text-center">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience! Explore
              </p>
            </div>
          </div>
        </div>
        <div className="containerAll" id="expore">
          <div className="explore2 d-flex align-items-center justify-content-center">
            <div
              className="explore rounded-circle  d-flex align-items-center justify-content-center "
              id="explore"
            >
              <h3 id="textExplore">explore</h3>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>

  );
};

export default Home;
