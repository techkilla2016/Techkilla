"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from "swiper";
import modalShow from '@/data/photo-ai/allModal'
export default function ModelSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}

                // modules={[Pagination]}
                className="mySwiper"
            >
                {
                    modalShow?.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className={`ai-model-box ${index % 2 == 0 ? 'top-100' : ''}`}>
                                <div className="img-ai-box-inner py-3" data-aos="fade-left" data-aos-delay={index * 100}>
                                    <img src={item?.img1} alt="" />
                                </div>
                                <div className="img-ai-box-inner py-3" data-aos="fade-up" data-aos-delay={index * 150}>
                                    <img src={item?.img2} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
