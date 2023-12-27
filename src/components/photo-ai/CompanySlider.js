"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import companyData from '@/data/photo-ai/companies'
import { Autoplay, } from "swiper";

const CompanySlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={2}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 8,
                    spaceBetween: 50,
                },
            }}

            // modules={[Pagination]}
            className="mySwiper"
        >
            {
                companyData?.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className={`ai-model-box mx-2`} key={index}>
                            <img src={item} alt="" />
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default CompanySlider
