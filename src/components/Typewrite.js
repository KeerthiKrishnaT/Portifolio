import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Type() {
  return (
    <div>
      <Typewriter
        words={["Frontend Developer","MERN Stack developer","Backend develpoer"]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}/>
    </div>
  );
}

export default Type;
