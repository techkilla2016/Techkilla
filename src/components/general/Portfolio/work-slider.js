"use client"
import React, { useState } from 'react';
import YouTubePlayer from "@/components/Modal/video";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import ButtonSwap from '@/components/button/buttonSwap'
import Image from 'next/image';
export default function WorkSwiper({ work }) {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    const handleOpen = (payload) => {
        setIsPlay(true)
        if (payload === '/' || payload === '') {
            setCurVideo('https://www.youtube.com/watch?v=JxMa3t3XDts&t=4s')
        } else {
            setCurVideo(payload)
        }
    }
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}

                // modules={[Pagination]}
                className="mySwiper"
            >
                {
                    work?.map((item, index) => {
                        return <SwiperSlide key={index} className='my-5'>
                            <div className="work_card">
                                <div className="work_card_inner">
                                    <Image src={item?.thumbnail} alt={item?.Heading} width={1920} height={1080} />
                                </div>
                                <div className="work_card_layer">
                                    <div>
                                    </div>
                                    <div className="work_btn">
                                        <Image src={item?.logo} alt={item?.Heading} width={1920} height={1080} />
                                        <ButtonSwap title='Preview' clickHandel={handleOpen} url={item?.url} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            {isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />}
        </>
    );
}
