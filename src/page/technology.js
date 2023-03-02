import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Technology = () => {
    const [currentTekno, setCurrentTekno] = useState({});
    const [tekno, setTekno] = useState([]);
    const [selectedTeknoIndex,setSelectedTeknoIndex]=useState(0);
  
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
      setSelectedTeknoIndex(teknoIndex);
    }
  
    return (
      <div className="bg-tekno">
        <Navbar />
        <div>
          <h4>03 space loach 101</h4>
        </div>
        <div className="container ">
          <div className="containerAll d-flex justify-content-center align-items-center">
            <div className="menu d-flex flex-column justify-content-center align-items-center">
              {tekno.map((t, index) => (
                <div key={index} className={ `butonCircle ${selectedTeknoIndex===index ? 'selectedTekno':''}`} onClick={() => handleTeknoChange(index)}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div>
              <h6>{currentTekno.name}</h6>
              <h3>{currentTekno.name}</h3>
              <p>{currentTekno.description}</p>
            </div>
          </div>
          <div className="containerAll d-flex justify-content-center align-items-center" >
            {/* <img src={currentTekno.images.portrait} alt={currentTekno.name} /> */}
            {currentTekno.images && <img src={currentTekno.images.portrait} alt={currentTekno.name} />}
          </div>
        </div>
      </div>
    );
  };
  
  export default Technology;