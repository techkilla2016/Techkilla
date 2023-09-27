import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";
const companyData = [
    '/photo-ai/logos/logos-01.png',
    '/photo-ai/logos/logos-02.png',
    '/photo-ai/logos/logos-03.png',
    '/photo-ai/logos/logos-04.png',
    '/photo-ai/logos/logos-05.png',
    '/photo-ai/logos/logos-06.png',
    '/photo-ai/logos/logos-07.png',
    '/photo-ai/logos/logos-08.png',
    '/photo-ai/logos/logos-09.png',
    '/photo-ai/logos/logos-10.png',
    '/photo-ai/logos/logos-11.png',
    '/photo-ai/logos/logos-12.png',
    '/photo-ai/logos/logos-13.png',
    '/photo-ai/logos/logos-14.png',
    '/photo-ai/logos/logos-15.png',
    '/photo-ai/logos/logos-16.png',
    '/photo-ai/logos/logos-17.png',
    '/photo-ai/logos/logos-18.png',
    '/photo-ai/logos/logos-19.png',
]
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
