import React from "react";
import {Banner} from "../../assets/images";

function HomeIndex({ children }) {
  return (
    <div className=" h-[800px] sm:h-screen relative overflow-hidden sm:overflow-visible  ">
        
      <img src={Banner} className="object-cover w-full h-full" />
      <div className="absolute top-3 w-full">{children}</div>
    </div>
  );
}

export default HomeIndex;
