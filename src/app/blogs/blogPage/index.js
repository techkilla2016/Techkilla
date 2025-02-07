import React from "react";
import Link from "next/link";
import "./blogPage.scss";
import Contact from "@/components/blogs/contactUs";
import Header from "../../../components/header";
import Image from "next/image";
import { blogPosts } from "@/data/blogs/index.js";
import BlogHeader from "@/components/blogs/blogHeader";

export default function BlogPage() {
  const generateSlug = (title) => {
    return title.split(/[:?]/)[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <>
      <div className="flex-col-center MainBlogPage">
        {/* <BlogHeader /> */}
        {/* <Header /> */}

        <div className="flex-col-center mainContainer">
          <h3 className={`flex-col-center mainHeading`}>
            Welcome to Our Blog Space
          </h3>
          <p className="shortDesc">
            Sharing stories and ideas that spark curiosity and drive
            conversations.
          </p>{" "}
          <div className="flex-col-center blogContainer">
            {/* First 5 blogs with alternating layout */}
            <div className="desktopType">
              {blogPosts
                .slice(0, 5)
                .reverse()
                .map((blog, index) => {
                  const slug = generateSlug(blog.title);
                  return (
                    <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                      <div
                        className={`flex-row-center blogItem ${
                          index % 2 === 0 ? "evenBlog" : "oddBlog"
                        }`}
                        style={{ cursor: "pointer" }}
                      >
                        {index % 2 === 0 ? (
                          <>
                            <Image
                              src={blog.thumbnailImage.src}
                              alt={blog.thumbnailImage.alt}
                              width={200}
                              height={150}
                              className="flex-row-center thumbnailImageType"
                            />
                            <div className={`flex-col-center textContainer`}>
                              <h2 className="blogTitle">{blog.title}</h2>
                              <p className="blogContent">{blog.content}</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`flex-col-center textContainer`}>
                              <h2 className="blogTitle">{blog.title}</h2>
                              <p className="blogContent">{blog.content}</p>
                            </div>
                            <Image
                              src={blog.thumbnailImage.src}
                              alt={blog.thumbnailImage.alt}
                              width={200}
                              height={150}
                              className="flex-row-center thumbnailImageType"
                            />
                          </>
                        )}
                      </div>
                    </Link>
                  );
                })}

              {/* Remaining blogs in card layout */}
              <div className={`flex-row-center cardContainer`}>
                {blogPosts
                  .slice(5)
                  .reverse()
                  .map((blog) => {
                    const slug = generateSlug(blog.title);
                    return (
                      <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                        <div
                          className={`flex-col-center cardItem`}
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={blog.thumbnailImage.src}
                            alt={blog.thumbnailImage.alt}
                            width={150}
                            height={100}
                            className="cardThumbnail"
                          />
                          <h3 className="cardTitle">{blog.title}</h3>
                          <p className="cardExcerpt">
                            {blog.content.substring(0, 100)}...
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="mobileType">
              {blogPosts
                .slice(0, 8)
                .reverse()
                .map((blog) => {
                  const slug = generateSlug(blog.title);
                  return (
                    <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                      <div className="cardItem" style={{ cursor: "pointer" }}>
                        <Image
                          src={blog.thumbnailImage.src}
                          alt={blog.thumbnailImage.alt}
                          width={150}
                          height={100}
                          className="cardThumbnail"
                        />
                        <h3 className="cardTitle">{blog.title}</h3>
                        <p className="cardExcerpt">
                          {blog.content.substring(0, 100)}...
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}
