import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState({});
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setCrew(data.crew);
        setCurrentCrew(data.crew[0]);
      });
  }, []);

  const handleChangeCrew = (crewIndex) => {
    setCurrentCrew(crew[crewIndex]);
  };

  return (
    <div className="bg-crew">
      <Navbar />
      <div>
        <h4>02 MEET YOUR CREW</h4>
      </div>
      <div className="container d-flex centre">
        <div className="containerAll">
          <div className="d-flex flex-column">
            <h6>{currentCrew.role}</h6>
            <h1>{currentCrew.name}</h1>
            <p>{currentCrew.bio}</p>
          </div>
          <div className="d-flex">
            {crew.map((t, index) => (
              <div
                key={index}
                className="rounded-circle border border-white w-10 p-3"
                onClick={() => handleChangeCrew(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="containerAll"  id="containerAll">
         

            {currentCrew.images && <img src={currentCrew.images.png} alt={currentCrew.name}/>}
          
        </div>
      </div>
    </div>
  );
};

export default Crew;
