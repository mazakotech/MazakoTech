"use client";
import React from "react";

import { useState } from "react";

import { Disclosure } from "@headlessui/react";

import Link from "next/link";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

import { LiaBarsSolid } from "react-icons/lia";
import Image from "next/image";
const Navbar = () => {
  const [sideopen, setSideopen] = useState(false);
  const Menu = [
    // {
    //   title: "Title1",
    //   icon: <GiHamburgerMenu className="w-6 h-6" />,
    //   submenu: [
    //     { title: "form", url: "/form" },
    //     { title: "Title1" },
    //     { title: "title1" },
    //   ],
    //   url: "/",
    // },

    {
      title: "Services",
      icon: "",
      url: "services",
      spacing: false,
      link: false,
    },
    {
      title: "Reach out to us",
      icon: "",
      url: "content",
      spacing: false,
      link: false,
    },
    {
      title: "Our Works",
      icon: "",
      url: "ourWork",
      spacing: false,
      link: false,
    },
  ];
  return (
    <div className="absolute">
      <button
        type="button"
        className=" fixed top-4 right-2  z-[99999]"
        onClick={() => {
          setSideopen(!sideopen);
        }}
      >
        {!sideopen ? (
          <LiaBarsSolid className={` text-3xl text-white`} />
        ) : (
          <GiTireIronCross className={` text-3xl `} />
        )}
      </button>
      <div
        className={`bg-white h-screen text-Dgray pt-10 px-2 z-[9999] fixed top-0 left-0  duration-500  ${
          !sideopen ? " w-full -translate-y-full" : " w-full translate-y-0"
        } shadow-lg`}
      >
        {/* <GiHamburgerMenu
          className={`h-6 w-6  text-3xl  absolute 
         right-2 top-9  cursor-pointer 
          ${!sideopen && "rotate-180"}`}
          onClick={() => {
            setSideopen(!sideopen);
          }}
        /> */}

        <div className={`d-flex`}>
          <Image
            alt="logo"
            src="mazakologo.png"
            className={`h-12 w-44  text-6xl bg-white  
          curor-pointer absolute top-4 float-left `}
          />
          {/* <h1
            className={`text-white origin-left ml-2 ${
              !sideopen && "scale-0"
            } duration-300 px-4`}
          >
            Mazako
          </h1> */}
        </div>
        <div className="mb-16"></div>
        <hr className="border-slate-600 m-2 pb-4" />
        <ul className="pt-2">
          {Menu.map((item, index) => {
            return (
              <li
                key={index}
                className={`text-Dgray text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md   ${
                  item.spacing ? "mt-9" : "mt-2"
                }`}
              >
                {item.submenu && (
                  <Disclosure>
                    {({ open }) => (
                      /* Use the `open` state to conditionally change the direction of an icon. */
                      <>
                        <div className="w-18 mx-auto">
                          <Disclosure.Button className="w-18 mx-auto text-md flex ">
                            <span className="pr-1">{item.icon}</span>

                            <span>
                              <span
                                className={`${
                                  !sideopen && "scale-0 mx-auto"
                                } flex gap-2`}
                              >
                                {item.title}{" "}
                                <GiHamburgerMenu
                                  className={` h-4 w-3 mt-1 ml-3 ${
                                    open
                                      ? " duration-500 rotate-180 transform"
                                      : ""
                                  }`}
                                />
                              </span>{" "}
                            </span>
                          </Disclosure.Button>
                          {item.submenu.map((subitem, index) => {
                            return (
                              <div key={index}>
                                <Link
                                  href={`/${subitem.url}`}
                                  className={`${
                                    !sideopen && "hidden"
                                  } w-6 my-2 mx-auto`}
                                >
                                  <Disclosure.Panel
                                    key={index}
                                    className={`${
                                      !sideopen && "hidden"
                                    } w-6 my-2 mx-auto`}
                                  >
                                    {subitem.title}
                                  </Disclosure.Panel>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </Disclosure>
                )}
                {!item.submenu &&
                  (item.link ? (
                    <>
                      {" "}
                      <Link
                        href={item.url2}
                        className={`${
                          !sideopen && "mx-auto"
                        } flex  w-18 mx-auto  gap-2`}
                      >
                        <span>{item.icon}</span>
                        <span
                          className={`${!sideopen && "hidden"} text-center`}
                        >
                          {item.title}
                        </span>
                      </Link>{" "}
                    </>
                  ) : (
                    <>
                      <a
                        href={`#${item.url}`}
                        className={`${
                          !sideopen && "mx-auto"
                        } flex duration-500 w-18 mx-auto  text-xl gap-2`}
                        onClick={() => {
                          setSideopen(!sideopen);
                        }}
                      >
                        <span className="">{item.icon}</span>
                        <span className={`${!sideopen && "hidden"} `}>
                          {item.title}
                        </span>
                      </a>
                    </>
                  ))}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
