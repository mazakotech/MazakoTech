import React from "react";
import Image from "next/image";

const top = () => {
  return (
    <div className="h-full bg-black w-full absolute top-0 -z-10 ">
      <Image src="loading.gif" alt="" className="mx-auto" />
      <h4 className="text-white text-center text-6xl">Loading...</h4>
    </div>
  );
};

export default top;
