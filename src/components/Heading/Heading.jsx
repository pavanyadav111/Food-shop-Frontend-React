import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto ">
      <h2 className="text-zinc-800 md:text-5xl text-[2.5rem] font-bold ">
        <span className="text-orange-500">{props.highlight} </span> {props.heading}
       
      </h2>
      <div className="w-35 h-1 bg-orange-300  mt-6 ml-auto md:mt-6"></div>
    </div>
  );
};

export default Heading;
