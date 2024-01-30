"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./GeneralTestimoials.module.css";

const Testimonials = ({ cardData }) => {
  return (
    <>
      {/* for mobile devices */}
      <div className="swiperOne">
        <Swiper navigation={false} className="mySwiper">
          {cardData.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {/* <div className="slider-ai-box d-flex flex-column justify-content-center text-start">
                <p className="text-secondary py-4">
                  {index + 1}/{cardData?.length}
                </p>
                <p className="text-secondary">{item?.desc}</p>
                <h3 className="text-secondary">
                  <strong>{item?.name}</strong>
                </h3>
                <p className="text-secondary">
                  <strong> {item?.post}</strong> <br />
                  {item?.company}
                </p>
              </div> */}
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* for tablet and pc devices */}
      <div className="swiperTwo">
        <Swiper
          // modules={[Virtual]}
          slidesPerView={1.6}
          spaceBetween={50}
          centeredSlides={true}
          className="mySwiper py-5"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          // modules={[Autoplay]}
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
