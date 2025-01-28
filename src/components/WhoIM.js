import React from "react";
function WhoIM() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      <img
        src="colorful-illustration-female-programmer-working-b-removebg-preview.png"
        alt=""
        className="h-full w-full object-cover opacity-30 absolute bottom-0 z-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 font-bold">
          <p className="text-[#8e36c9]"> Know Who I'M</p>
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-4/5">
          <span className="flex flex-col gap-3 text-white items-start  text-base justify-center font-thin lg:text-lg">
            <p className="text-start mt-3 mx-auto md:mx-0">
            My name is Keerthi Krishna T, and I’m from Kerala. I am a computer science graduate with a strong interest in web development. I previously worked as a MERN Stack Developer intern at CB Tech, where I gained hands-on experience building full-stack applications. I have also completed a 6-month internship course in MERN stack development, which helped me deepen my technical skills.

            <h2 style={{ fontWeight: 'bold',color:"#8e36c9" }}>Skills and Interests</h2>
I am proficient in JavaScript, React, Node.js, MongoDB, and Express.js, and I enjoy working on both front-end and back-end development. I’m passionate about learning new technologies and staying updated in the tech field.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center z-20">
        <img
          src="about.png"
          alt=""
          className="lg:p-10 object-cover lg:w-3/4 w-full"
        />
      </div>
    </div>
  );
}

export default WhoIM;
