import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";

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
          0: {
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          list?.map((item, index) => {
            return <SwiperSlide key={index}>
              <div className="swiperCart">
                <div className="backLyer">
                  <Image src={item.them} alt={item.title} width={1920} height={1080} />
                </div>
                <div className="lyear">
                  <Link href={`/${item.title}`}> {item.title}</Link>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div >
  );
}
