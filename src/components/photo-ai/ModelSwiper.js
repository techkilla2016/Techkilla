import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";
const modalShow = [
    [
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-3.png',
            img2: '/photo-ai/model/Ai-photos-4.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-7.png',
            img2: '/photo-ai/model/Ai-photos-8.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-9.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-11.png',
            img2: '/photo-ai/model/Ai-photos-12.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-13.png',
            img2: '/photo-ai/model/Ai-photos-14.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-3.png',
            img2: '/photo-ai/model/Ai-photos-4.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-7.png',
            img2: '/photo-ai/model/Ai-photos-8.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-9.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-11.png',
            img2: '/photo-ai/model/Ai-photos-12.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-13.png',
            img2: '/photo-ai/model/Ai-photos-14.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-2.png',
            img2: '/photo-ai/model/Ai-photos-3.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-4.png',
            img2: '/photo-ai/model/Ai-photos-7.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-8.png',
            img2: '/photo-ai/model/Ai-photos-9.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-10.png',
            img2: '/photo-ai/model/Ai-photos-11.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-12.png',
            img2: '/photo-ai/model/Ai-photos-13.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-8.png',
            img2: '/photo-ai/model/Ai-photos-7.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-12.png',
            img2: '/photo-ai/model/Ai-photos-3.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-3.png',
            img2: '/photo-ai/model/Ai-photos-4.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-7.png',
            img2: '/photo-ai/model/Ai-photos-8.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-9.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-11.png',
            img2: '/photo-ai/model/Ai-photos-12.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-13.png',
            img2: '/photo-ai/model/Ai-photos-14.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-3.png',
            img2: '/photo-ai/model/Ai-photos-4.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-7.png',
            img2: '/photo-ai/model/Ai-photos-8.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-9.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-11.png',
            img2: '/photo-ai/model/Ai-photos-12.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-13.png',
            img2: '/photo-ai/model/Ai-photos-14.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-2.png',
            img2: '/photo-ai/model/Ai-photos-3.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-4.png',
            img2: '/photo-ai/model/Ai-photos-7.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-8.png',
            img2: '/photo-ai/model/Ai-photos-9.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-10.png',
            img2: '/photo-ai/model/Ai-photos-11.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-12.png',
            img2: '/photo-ai/model/Ai-photos-13.png',
        },
    ],
    [
        {
            img1: '/photo-ai/model/Ai-photos-1.png',
            img2: '/photo-ai/model/Ai-photos-2.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-6.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-8.png',
            img2: '/photo-ai/model/Ai-photos-7.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-5.png',
            img2: '/photo-ai/model/Ai-photos-10.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-15.jp',
            img2: '/photo-ai/model/Ai-photos-16.png',
        },
        {
            img1: '/photo-ai/model/Ai-photos-12.png',
            img2: '/photo-ai/model/Ai-photos-3.png',
        },
    ],
]
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
                    delay: 4000,
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
                        slidesPerView: 4,
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
                    modalShow?.map((_, index) => {
                        return <SwiperSlide key={index}>
                            {
                                modalShow[index]?.map((item, key) => {
                                    return <div className={`ai-model-box mx-2`} key={key}>
                                        <div className="img-ai-box-inner p-2" data-aos="fade-left" data-aos-delay={key * 100}>
                                            <img src={item?.img1} alt="" />
                                        </div>
                                        <div className="img-ai-box-inner p-2" data-aos="fade-up" data-aos-delay={key * 150}>
                                            <img src={item?.img2} alt="" />
                                        </div>
                                    </div>
                                })
                            }
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
