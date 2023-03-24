import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { isEmpty } from "../components/utils/utils";
const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState({});
  const [destinations, setDestinations] = useState([]);

  

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setCurrentDestination(data.destinations[0]);
      });
 
  }, []);

  useEffect(() => {
    content();
  }, [currentDestination]);

  function select(text) {
    const selectedDestination = destinations.find(
      (destination) => destination.name === text.innerHTML
    );
    setCurrentDestination(selectedDestination);

    var siblings = (n) => [...n.parentElement.children].filter((c) => c !== n);

    var brothers_n_sisters = siblings(text);
    text.classList.replace("destination__select", "nav-text--active");
    brothers_n_sisters.forEach((e) =>
      e.classList.replace("nav-text--active", "destination__select")
    );
  }

  function content() {
    if (currentDestination?.images) {
      setPictureSrc(currentDestination.images.png);
      setName(currentDestination.name);
      setDescription(currentDestination.description);
      setDistance(currentDestination.distance);
      setTravel(currentDestination.travel);
    }
  }

  // Dans le corps de la fonction Destination
  const [pictureSrc, setPictureSrc] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    !isEmpty(pictureSrc[0]) && setLoading(false)
  },[pictureSrc])

  return (
    <div className="bg-destination ">
      <Navbar />
      <section>
          <div className="titleContent">
            <h4> <span className="number">01</span> PICK YOUR DESTINATION</h4>
          </div>
      <div className="container">
        <div className="containerAll centre">
          <div>
            {loading ?(
              <i className="fas fa-spinner fa-spin"></i>
            ):(
            <img
              id="picture"
              className="destination__content--planet"
              src={pictureSrc}
              alt=""
            />
            )}
          </div>
        </div>
        <div className="containerAll ">
          <nav className="navbar " id="navDestination">
            {destinations.map((destination) => (
              <h6
                key={destination.name}
                className={`nav-link nav-text ${
                  currentDestination.name === destination.name
                    ? "nav-text--active"
                    : "destination__select"
                }`}
                onClick={(e) => select(e.target)}
              >
                {destination.name}
              </h6>
            ))}
          </nav>

          <div className="tex_destination">
            <div id="name">
              <h3>{name}</h3>
            </div>
            <div className="descriptionP">
              <p id="description">{description}</p>
            </div>
            <div className="distanceTravel d-flex justify-content-between">
              <div>
                <p>AVG.DISTANCE</p>
                <div id="distance">{distance}</div>
              </div>
              <div>
               <p>EST.TRAVEL TIME</p>
              <div id="travel">{travel} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Destination;
