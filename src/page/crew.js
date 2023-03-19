import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState({});
  const [crew, setCrew] = useState([]);
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);

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
      setSelectedCrewIndex(crewIndex);
  };

  return (
    <div className="bg-crew">
      <Navbar />
      <div>
        <h4>02 MEET YOUR CREW</h4>
      </div>
      <div className="container d-flex  containerCrew">
        <div className="containerAll centre">
          <div className=" texte-container d-flex flex-column">
            <h4>{currentCrew.role}</h4>
            <h2>{currentCrew.name}</h2>
            <p>{currentCrew.bio}</p>
          </div>
        <div className="d-flex boutonDiv">
          {crew.map((t, index) => (
            <div
              key={index}
              className={`bouton ${selectedCrewIndex === index ? 'selected' : ''}`}
              onClick={() =>  {setCurrentCrew(crew[index]);
                setSelectedCrewIndex(index);}}
            >
            
            </div>
          ))}
        </div>
        </div>


        <div className="containerAll" id="containerAll">
          {currentCrew.images && (
            <img src={currentCrew.images.png} alt={currentCrew.name} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Crew;
