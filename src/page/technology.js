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
      <div className="bg-tekno  bg">
        <Navbar />
        <div className="d-flex border all-tekno">
          <div className="section-vide"></div>
        <div className="section-tekno">
        <div className="titleContent">
          <h4><span className="number"> 03 </span>SPACE LOACH 101</h4>
        </div>
        <div className="total-section-tekno">
        <div className="section-vide2"></div>
        <div className="container containerTekno ">
          <div className="containerAll d-flex justify-content-center border align-items-center">
            <div className="menu border d-flex flex-column justify-content-center align-items-center">
              {tekno.map((t, index) => (
                <div key={index} className={ `butonCircle ${selectedTeknoIndex===index ? 'selectedTekno':''}`} onClick={() => handleTeknoChange(index)}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="teknoText border">
              <h5 className="number"> the technology...</h5>
              <h3>{currentTekno.name}</h3>
              <p className="desc-tekno">{currentTekno.description}</p>
            </div>
          </div>
          <div className="containerAll d-flex justify-content-end border align-items-end" >
            {/* <img src={currentTekno.images.portrait} alt={currentTekno.name} /> */}
            {currentTekno.images && <img src={currentTekno.images.portrait} alt={currentTekno.name} />}
          </div>
        </div>

        </div>
        </div>
        </div>

          
      </div>
    );
  };
  
  export default Technology;