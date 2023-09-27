import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, } from "swiper";
const modalShow = [
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
    // 1 / 
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
        img2: '/photo-ai/model/Ai-photos-6.jpeg',
    },
    {
        img1: '/photo-ai/model/Ai-photos-7.png',
        img2: '/photo-ai/model/Ai-photos-8.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-9.png',
        img2: '/photo-ai/model/Ai-photos-10.jpg',
    },

    // 2 
    {
        img1: '/photo-ai/model/Ai-photos-2.png',
        img2: '/photo-ai/model/Ai-photos-1.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-4.png',
        img2: '/photo-ai/model/Ai-photos-3.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-6.jpeg',
        img2: '/photo-ai/model/Ai-photos-5.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-8.png',
        img2: '/photo-ai/model/Ai-photos-7.png',
    },
    {
        img1: '/photo-ai/model/Ai-photos-10.jpg',
        img2: '/photo-ai/model/Ai-photos-9.png',
    },
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
