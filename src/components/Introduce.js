import React from "react";
import Tilt from "react-parallax-tilt";


function Introduce() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
     
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
         <p className="text-[#ad50eb]"> LET ME INTRODUCE MYSELF</p> 
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-semibold lg:text-lg">
            <p>
              I'm Keerthi Krishna T, a MERN Stack Developer from Kerala with
              expertise in React, Node.js, MongoDB, and Express.js. Currently working as a 
              MERN Stack Developer at Wyenfos Infotech Pvt Ltd, where I've developed 
              advanced billing and management systems with role-based access control, 
              real-time data updates using Socket.IO, and Firebase authentication. 
              With over 1 year of practical experience in building responsive user interfaces, 
              RESTful APIs, and implementing authentication and state management.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        <Tilt>
          <img src="colorful-illustration-female-programmer-working-b-removebg-preview.png" alt="developer" className="object-cover" />
        </Tilt>
      </div>
    </div>
  );
}

export default Introduce;
