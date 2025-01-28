import React from "react";
import AnimatedCursor from "react-animated-cursor";
function AnimeCursor() {
  return (
    <div>
      <AnimatedCursor
         innerSize={8} 
         outerSize={24} 
         color="255, 99, 71" 
         outerAlpha={0.3}
         outerScale={2} 
      />
    </div>
  );
}

export default AnimeCursor;
