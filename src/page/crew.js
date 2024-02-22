import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState({});
  const [crew, setCrew] = useState([]);
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setCrew(data.crew);
        setCurrentCrew(data.crew[0]);
        setLoading(false);
      });
  }, []);

  const handleChangeCrew = (crewIndex) => {
    setCurrentCrew(crew[crewIndex]);
    setSelectedCrewIndex(crewIndex);
  };

  return (
    <div className="bg-crew bg">
      <div className="nav-crew">

      <Navbar />
      </div>
      <div className="section-crew">
      <div className="titleContent title-crew">
        <h4>
          {" "}
          <span className="number">02</span> MEET YOUR CREW
        </h4>
      </div>
      <div className="main-crew">
      <div className=" d-flex  containerCrew">
        <div className="containerAll centre responsive-content-text ">
          <div className=" texte-container  d-flex flex-column">
            <h4 className="number">{currentCrew.role}</h4>
            <h2 id="h2Crew">{currentCrew.name}</h2>
            <p>{currentCrew.bio}</p>
          </div>
          <div className="d-flex boutonDiv ">
            {crew.map((t, index) => (
              <div
                key={index}
                className={`bouton ${
                  selectedCrewIndex === index ? "selected" : ""
                }`}
                onClick={() => {
                  setCurrentCrew(crew[index]);
                  setSelectedCrewIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="containerAll  crewimg" id="containerAll">
          {loading ? (
            <div className="spinner">
              {" "}
              <h4>Loading...</h4>
            </div>
          ) : (
            <img className="img-crew  " src={currentCrew.images.png} alt={currentCrew.name} />
          )}
        </div>
      </div>

      </div>

      </div>
    </div>
  );
};

export default Crew;
