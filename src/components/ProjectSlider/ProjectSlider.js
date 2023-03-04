import React, { useRef, useState } from "react";
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


      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
              </div>
            </SwiperSlide>
          })
        }

      </Swiper>
    </div>
  );
}
