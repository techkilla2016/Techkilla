"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonials.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = ({ cardData }) => {
  return (
    <>
      {/* for mobile devices */}
      <div className="swiperOne">
        <Swiper
          // navigation={false}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // navigation
          pagination={{ clickable: true }}
          style={{
            // "--swiper-navigation-color": "#888",
            "--swiper-pagination-color": "#888",
          }}
          className="mySwiper"
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                className={`${styles.slider2} slider-ai-box d-flex flex-column justify-content-center text-start`}
              >
                <div className={styles.profile}>
                  <div className={styles.personDetails}>
                    <h3 className="text-secondary">
                      <strong>{item?.name}</strong>
                    </h3>
                    <p className="text-secondary">
                      <strong> {item?.post}</strong> <br />
                      {item?.company}
                    </p>
                  </div>
                  <div className={styles.profileImage}>
                    <img src={item?.img} />
                  </div>
                </div>

                <p className={`${styles.description} text-secondary`}>
                  {item?.desc}
                </p>
                {/* <div className={styles.arrow}>
                  <FaArrowRight />
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* for tablet and pc devices */}
      <div className="swiperTwo">
        <Swiper
          // modules={[Virtual]}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={swiper => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          slidesPerView={1.6}
          spaceBetween={50}
          centeredSlides={true}
          className="mySwiper py-5"
          style={{
            "--swiper-navigation-color": "#888",
            "--swiper-pagination-color": "#888",
          }}
          /*  autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }} */
          // loop={true}
          // modules={[Autoplay]
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div
                className={`${styles.slider2} slider-ai-box d-flex flex-column justify-content-center text-start`}
              >
                {/* <p className="text-secondary py-4">
                  {index + 1}/{cardData?.length}
                </p> */}
                <div className={styles.profile}>
                  <div className={styles.personDetails}>
                    <h3 className="text-secondary">
                      <strong>{item?.name}</strong>
                    </h3>
                    <p className="text-secondary">
                      <strong> {item?.post}</strong> <br />
                      {item?.company}
                    </p>
                  </div>
                  <div className={styles.profileImage}>
                    <img src={item?.img} />
                  </div>
                </div>
                <p className={`${styles.description} text-secondary`}>
                  {item?.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
