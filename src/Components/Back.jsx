import React from "react";
import Img from '../1Background.svg'
const Back = () => {
  return (
    <div className="fixed bg-black w-full h-full -z-10">
      <img src={Img} alt="/" className="w-full h-full object-cover fixed" />
    </div>
  );
};

export default Back;
