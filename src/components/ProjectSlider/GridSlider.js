// Import Swiper styles
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import YouTubePlayer from "../product/videoPlay";
SwiperCore.use([Grid, Pagination]);
function GridSlider({ list }) {
    const [isPlay, setIsPlay] = useState(false)
    const [curVideo, setCurVideo] = useState('')
    const handleClose = () => {
        setIsPlay(false)
    }
    return (
        <>
            <div className="gridSlider">
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Grid, Pagination, Autoplay, Navigation]}
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
                                        <button onClick={() => {
                                            if (item?.url !== '/') {
                                                setIsPlay(true)
                                                setCurVideo(item?.url)
                                            }
                                        }}>
                                            {item.title}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div >
            {
                isPlay && <YouTubePlayer url={curVideo} handleClose={handleClose} />
            }
        </>
    );
}
export default GridSlider;
