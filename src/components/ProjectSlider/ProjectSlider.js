import React, { useRef, useState } from "react";
<<<<<<< HEAD
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import project from '@/Assets/service/Distinguishing The Corporate-01.png'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSlider({ list }) {
  return (
    <div className="project-slider">
=======
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
const list = ["DOW packaging and supplies",
  "NHRD QR verification and instant print",
  "HDFC Inquizitive family",
  "HDFC Analytiq 1.0",
  "HDFC Analytiq 2.",
  "HDFC Analytiq 3.",
  "Microsoft Hackathon",
  "Tata International E-Marathon",
  "Tuborg super over",
  "TVS Motors digital tambola",
  "Concentrix got talent",
  "Multitv Quiz Game",
  "Total energies virtual talent hunt show",
  "Nutella - Ramadan video quiz game",
  "Cipla cycle meet",
  "Colgate swashbuckers day",
  "World cloud photobooth",
  "Colgate - IPL",
  "Cera - Quiz game",
  "Cipla Urology quiz game",
  "Loreal dreamlength launch",
  "Total Oil - talent hun"]

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ProjectSlider() {
  return (

    <div className="project-slider">


>>>>>>> 187a4d6181c551b274dbe0f9df58daf6f22551ef
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
<<<<<<< HEAD
        slidesPerView={"auto"}
        Autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          list?.map((item) => {
            return <SwiperSlide>
              <div className="swiperCart">
                <div className="backLyer">
                  <Image src={project} />
                </div>
                <div className="lyear">
                  <Link href={`/${item}`}> {item}</Link>
                </div>
=======
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper" >
        {
          list.map((item) => {
            return <SwiperSlide>
              <div className="slideInner">
>>>>>>> 187a4d6181c551b274dbe0f9df58daf6f22551ef
              </div>
            </SwiperSlide>
          })
        }
<<<<<<< HEAD
=======

>>>>>>> 187a4d6181c551b274dbe0f9df58daf6f22551ef
      </Swiper>
    </div>
  );
}
