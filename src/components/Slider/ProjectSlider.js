import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project from '@/service/Distinguishing The Corporate-01.png'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSlider({ list }) {
  return (
    <div className="project-slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          list?.map((item, index) => {
            return <SwiperSlide key={index}>
              <div className="swiperCart">
                <div className="backLyer">
                  <Image src={project} alt={item} />
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
