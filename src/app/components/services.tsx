"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

const services = () => {
  return (
    <div className="font-sans leading-2" id="services">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper font-sans"
      >
        <SwiperSlide>
          <div className="relative group h-[380px] overflow-hidden mx-2 rounded-lg   ">
            <h2 className="text-black bg-red-600 font-bold  text-center py-2 text-2xl">
              Web Development
            </h2>
            <div className=" absolute top-0 p-3  opacity-0 group-hover:opacity-100 bg-black text-justify text-white duration-500 inset-0 ">
              Harness the power of modern web technologies with our exceptional
              web development services. Our skilled developers specialize in
              React, Tailwind CSS, Node.js, Express, and WordPress, ensuring
              that your website is not only visually stunning but also highly
              functional and user-friendly. From dynamic single-page
              applications to feature-rich e-commerce platforms, we build web
              solutions that resonate with your audience.
            </div>
            <div>
              <img src="wbdev.png" alt="" className=" shadow-white shadow-lg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group h-[380px] overflow-hidden mx-2 rounded-lg   ">
            <h2 className="text-black bg-red-600 font-bold  text-center py-2 text-2xl">
              Web Hosting & Domain
            </h2>
            <div className=" absolute top-0 p-3  opacity-0 group-hover:opacity-100 bg-black text-justify text-white duration-500 inset-0 ">
              Experience seamless performance with our reliable web hosting
              solutions. We ensure that your website is accessible, secure, and
              fast-loading, providing an optimal user experience. Secure your
              digital footprint with our domain registration services,
              establishing a unique and memorable online identity.
            </div>
            <div>
              <img
                src="hosting.png"
                alt=""
                className=" shadow-white shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="relative group h-[380px] overflow-hidden mx-2 rounded-lg ">
            <h2 className="text-black bg-red-600 font-bold  text-center py-2 text-2xl">
              Content Writing
            </h2>
            <div className=" absolute top-0 p-3  opacity-0 group-hover:opacity-100 bg-black text-white duration-500 inset-0 ">
              Words have the power to shape perceptions and drive action. Our
              skilled content writers craft compelling narratives that resonate
              with your target audience. Whether it's engaging blog posts,
              persuasive product descriptions, or informative website copy, we
              create content that sparks interest and fosters connections.
            </div>
            <div>
              <img src="cw.png" alt="" className="shadow-white shadow-lg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group h-[380px] overflow-hidden mx-2 rounded-lg ">
            <h2 className="text-black bg-red-600 font-bold  text-center py-2 text-2xl">
              Web Design
            </h2>
            <div className=" absolute top-0 p-3  opacity-0 group-hover:opacity-100 bg-black text-white duration-500 inset-0 ">
              Elevate your brand aesthetics with captivating web design that
              makes a lasting impression. Our designers are masters at combining
              aesthetics with usability, creating interfaces that are not only
              visually appealing but also intuitively navigable. Every pixel is
              meticulously placed to evoke the right emotions and encourage
              engagement.
            </div>
            <div>
              <img src="wbd.png" alt="" className="shadow-white shadow-lg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group h-[380px] overflow-hidden mx-2 rounded-lg  ">
            <h2 className="text-black bg-red-600 font-bold  text-center py-2 text-2xl">
              SEO
            </h2>
            <div className=" absolute top-0 p-3  opacity-0 group-hover:opacity-100 bg-black text-white duration-500 inset-0 ">
              Achieve prominence in the digital landscape with our strategic SEO
              services. We optimize your website's visibility, ensuring that it
              ranks high in search engine results. By fine-tuning keywords,
              enhancing on-page elements, and developing an authoritative
              backlink profile, we help your website attract organic traffic and
              reach its full potential.
            </div>
            <div>
              <img src="SEO.png" alt="" className="shadow-white shadow-lg" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default services;
