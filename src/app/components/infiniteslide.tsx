"use client";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiTailwindcss, SiCss3 } from "react-icons/si";
import React, { useState } from "react";

export default () => {
  const [first, setfirst] = useState(false);

  return (
    <div className="w-full  flex bg-black  my-auto">
      <div className="h-24 sm:h-56  flex flex-nowrap relative w-3/4 mx-auto overflow-hidden">
        <ul
          className={` w-[calc(250px*6)] ${
            first && "[animation-play-state:paused]"
          }  animate-scroll flex`}
          onMouseOver={() => {
            setfirst(true);
          }}
          onMouseLeave={() => {
            setfirst(false);
          }}
        >
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <FaReact className="mt-4 sm:mt-10  text-blue-700  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiJavascript className="mt-4 sm:mt-10 text-amber-300  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiHtml5 className="mt-4 sm:mt-10 text-amber-500  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <FaWordpress className="mt-4 sm:mt-10 text-gray-500  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiTailwindcss className="mt-4 sm:mt-10 text-blue-600  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiCss3 className="mt-4 sm:mt-10 text-blue-500  " />
          </li>
        </ul>

        <ul
          className={` w-[calc(250px*6)] ${
            first && "[animation-play-state:paused]"
          } animate-scroll  flex`}
          onMouseOver={() => {
            setfirst(true);
          }}
          onMouseLeave={() => {
            setfirst(false);
          }}
        >
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <FaReact className="mt-4 sm:mt-10  text-blue-700  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiJavascript className="mt-4 sm:mt-10 text-amber-300  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiHtml5 className="mt-4 sm:mt-10 text-amber-500  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <FaWordpress className="mt-4 sm:mt-10 text-gray-500  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiTailwindcss className="mt-4 sm:mt-10 text-blue-600  " />
          </li>
          <li className="w-[250px]  text-6xl  sm:text-9xl ">
            <SiCss3 className="mt-4 sm:mt-10 text-blue-500  " />
          </li>
        </ul>
      </div>
    </div>
  );
};
