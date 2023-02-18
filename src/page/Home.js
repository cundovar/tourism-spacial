import React from "react";
import Navbar from "../components/Navbar";

const Home=()=>{
    return(
        <div className="bg-home d-flex justify-content-center">
            <Navbar/>
            <div className="row container ">
               <div className="home-container">
                <div className="texte-home">
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
               <div className="explore-container d-flex justify-content-center align-items-end ">
                <div className="explore rounded-circle  d-flex align-items-center justify-content-center " id="explore">
                <h3>

                    explore
                </h3>
                    
                </div>

               </div>
            </div>
        </div>
    )
}
export default Home