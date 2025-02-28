"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import styles from "./swiper.scss";
import "./swiperOverwrite.css";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { blogPosts } from "../../../data/blogs/index";
import { generateSlug } from "../../../utils/blogSlug";

export default function BlogContent() {
  const swiperRef = useRef(null);

  return (
    <div className={`flex-row-center swiperMain`}>
      <Swiper
        ref={swiperRef}
        loop={true}
        // navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {blogPosts.slice(0, 8).map((blog, index) => (
          <SwiperSlide key={index}>
            <div className={`flex-col-center articleSection`}>
              <Link
                href={`/blogs/${generateSlug(blog.title)}`}
                className="articleImg"
              >
                {blog.thumbnailImage && blog.thumbnailImage.src && (
                  <Image
                    src={blog.thumbnailImage.src}
                    alt={blog.thumbnailImage.alt || blog.title}
                    width={300}
                    height={300}
                  />
                )}
              </Link>
              <Link
                href={`/blogs/${generateSlug(blog.title)}`}
                className={`flex-col-center linkWrapper`}
              >
                <p className={`flex-col-center headTitle`}>{blog.title}</p>
                <p className="excerptHead">
                  {blog.excerpt || `${blog.content.slice(0, 100)}...`}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
