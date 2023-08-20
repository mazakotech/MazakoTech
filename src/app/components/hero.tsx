import React from "react";

const hero = () => {
  return (
    <div className="relative flex content-center items-center justify-center bg-mazako  mt-8 bg-top bg-contain md:bg-contain lg:bg-auto  sm:h-[450px] md:h-[500px] h-[300px] bg-no-repeat">
      <div className="container relative mx-auto">
        <h1 className=" text-stone-100 font-sans font-bold  absolute top-12 cs:top-20 md:top-28 left-10 text-xl md:text-3xl lg:left-96 sm:text-2xl sm:left-60 pr-2  lg:text-5xl">
          Your <em className="text-red-600">Gateway</em> to innovative{" "}
          <em className="text-red-600"> Web Solutions</em>.
        </h1>
      </div>
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute  overflow-hidden h-16">
        <svg
          className="absolute bottom-0 overflow-hidden"
          viewBox="0 0 2560 100"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default hero;
