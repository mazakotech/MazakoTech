"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <section className="bg-[rgba(255,255,255,.5)] mx-auto" id="ourWork">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper font-sans"
        >
          <SwiperSlide>
            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <Link href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Coming Soon..
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Work in progress
                </p>
                <Link
                  href="#"
                  className="shadow bg-black border-2 border-white focus:shadow-outline focus:outline-none hover:border-red-600 hover:text-white  text-red-600 font-bold py-2 px-4 rounded-lg lg:ml-4"
                >
                  Stay Tuned
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <Link href="https://www.siliguritrustfoundation.in/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Trust Foundtion
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-full">
                  A page we built in order to to get in touch with a trust.
                </p>
                <Link
                  href="https://www.siliguritrustfoundation.in/"
                  className="shadow bg-black border-2 border-white focus:shadow-outline focus:outline-none hover:border-red-600 hover:text-white   text-red-600 font-bold py-2 px-4 mx-auto rounded-lg lg:ml-4"
                >
                  Visit
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <Link href="/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Coming Soon...
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Work In Progress
                </p>
                <Link
                  href="/"
                  className="shadow bg-black border-2 border-white focus:shadow-outline focus:outline-none hover:border-red-600 hover:text-white   text-red-600 font-bold py-2 px-4 rounded-lg lg:ml-4"
                >
                  Stay Tuned
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
