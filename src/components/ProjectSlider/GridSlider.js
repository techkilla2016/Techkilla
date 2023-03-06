// Import Swiper styles
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import project from '&/Assets/playable.jpg'
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
SwiperCore.use([Grid, Pagination]);
function GridSlider({ list }) {
    return (
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
                    list?.map((item) => {
                        return <SwiperSlide>
                            <div className="swiperCart">
                                <div className="backLyer">
                                    <Image src={project} />
                                </div>
                                <div className="lyear">
                                    <Link href={`/${item}`}> {item}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div >
    );
}
export default GridSlider;
