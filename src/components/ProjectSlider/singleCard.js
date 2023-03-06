import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";
import project from '@/Assets/service/Distinguishing The Corporate-01.png'

export default function SingleCard({ list }) {
  return (
    <div className="singleCard">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
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
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}
