import React from "react";
import Img from '../assets/1Background.svg'
const Back = () => {
  return (
    <div className=" -z-10 fixed w-full h-full">
      <img src={Img} alt="/" className="w-full h-full object-cover" />
    </div>
  );
};

export default Back;
