import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Technology = () => {
    const [currentTekno, setCurrentTekno] = useState({});
    const [tekno, setTekno] = useState([]);
  
    useEffect(() => {
      fetch('data.json')
        .then(response => response.json())
        .then(data => {
          setTekno(data.technology);
          setCurrentTekno(data.technology[0]);
        });
    }, []);
  
    const handleTeknoChange = (teknoIndex) => {
      setCurrentTekno(tekno[teknoIndex]);
    }
  
    return (
      <div className="bg-tekno">
        <Navbar />
        <div>
          <h4>03 space loach 101</h4>
        </div>
        <div className="container ">
          <div className="containerAll d-flex centre">
            <div className="menu d-flex flex-column">
              {tekno.map((t, index) => (
                <div key={index} className="rounded-circle border border-white w-50 p-3" onClick={() => handleTeknoChange(index)}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div>
              <h6>{currentTekno.name}</h6>
              <h1>{currentTekno.name}</h1>
              <p>{currentTekno.description}</p>
            </div>
          </div>
          <div className="containerAll" id="containerImgTekno">
            {/* <img src={currentTekno.images.portrait} alt={currentTekno.name} /> */}
            {currentTekno.images && <img src={currentTekno.images.portrait} alt={currentTekno.name} />}
          </div>
        </div>
      </div>
    );
  };
  
  export default Technology;