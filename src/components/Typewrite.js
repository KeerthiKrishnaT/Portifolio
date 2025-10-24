import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Type() {
  return (
    <div>
      <Typewriter
        words={["MERN Stack Developer","Full Stack Developer","React Developer","Node.js Developer","MongoDB Expert"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}/>
    </div>
  );
}

export default Type;
