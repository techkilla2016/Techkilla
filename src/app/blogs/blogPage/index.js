import React from "react";
import Link from "next/link";
import styles from "./blogPage.module.css";
import Image from "next/image";
import { blogPosts } from "@/data/blogs/index.js";
import BlogHeader from "@/components/blogs/blogHeader";

export default function BlogPage() {
  const generateSlug = (title) => {
    return title.split(/[:?]/)[0].trim().toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className={`flex-col-center ${styles.MainBlogPage}`}>
      <BlogHeader styles={styles} />
      <div className={`flex-col-center ${styles.mainContainer}`}>
        {/* <h3 className={`flex-col-center ${styles.mainHeading}`}>
        Welcome to Our Blog Space
      </h3>
      <p className={styles.shortDesc}>
        Sharing stories and ideas that spark curiosity and drive
        conversations.
      </p> */}
        <div className={`flex-col-center ${styles.blogContainer}`}>
          {/* First 5 blogs with alternating layout */}
          <div className={styles.desktopType}>
            {blogPosts
              .slice(0, 5)
              .reverse()
              .map((blog, index) => {
                const slug = generateSlug(blog.title);
                return (
                  <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                    <div
                      className={`flex-row-center ${styles.blogItem} ${
                        index % 2 === 0 ? styles.evenBlog : styles.oddBlog
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
                            className={`flex-row-center ${styles.thumbnailImage}`}
                          />
                          <div
                            className={`flex-col-center ${styles.textContainer}`}
                          >
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <p className={styles.blogContent}>{blog.content}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={`flex-col-center ${styles.textContainer}`}
                          >
                            <h2 className={styles.blogTitle}>{blog.title}</h2>
                            <p className={styles.blogContent}>{blog.content}</p>
                          </div>
                          <Image
                            src={blog.thumbnailImage.src}
                            alt={blog.thumbnailImage.alt}
                            width={200}
                            height={150}
                            className={`flex-row-center ${styles.thumbnailImage}`}
                          />
                        </>
                      )}
                    </div>
                  </Link>
                );
              })}

            {/* Remaining blogs in card layout */}
            <div className={`flex-row-center ${styles.cardContainer}`}>
              {blogPosts
                .slice(5)
                .reverse()
                .map((blog) => {
                  const slug = generateSlug(blog.title);
                  return (
                    <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                      <div
                        className={`flex-col-center ${styles.cardItem}`}
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          src={blog.thumbnailImage.src}
                          alt={blog.thumbnailImage.alt}
                          width={150}
                          height={100}
                          className={styles.cardThumbnail}
                        />
                        <h3 className={styles.cardTitle}>{blog.title}</h3>
                        <p className={styles.cardExcerpt}>
                          {blog.content.substring(0, 100)}...
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className={styles.mobileType}>
            {blogPosts
              .slice(0, 8)
              .reverse()
              .map((blog) => {
                const slug = generateSlug(blog.title);
                return (
                  <Link href={`/blogs/${slug}`} key={blog.id} passHref>
                    <div
                      className={styles.cardItem}
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src={blog.thumbnailImage.src}
                        alt={blog.thumbnailImage.alt}
                        width={150}
                        height={100}
                        className={styles.cardThumbnail}
                      />
                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                      <p className={styles.cardExcerpt}>
                        {blog.content.substring(0, 100)}...
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      <div className={`flex-row-center ${styles.contactMain}`}>
        {/* <p className={styles.contactUs}>Contact Us:</p> */}
        <p className={`${styles.fontContent} ${styles.queryMail}`}>
          Have any queries? Mail us at:{" "}
          <a
            href="mailto:support@snapshawt.com"
            className={styles.contactEmail}
          >
            support@snapshawt.com
          </a>
        </p>
      </div>
      <div className={`flex-row-center ${styles.leftFooterSecond}`}>
        <ul className={`flex-row-center ${styles.socialIconCon}`}>
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/profile.php?id=61557027670734&mibextid=ZbWKwL"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-02.png"}
                width={32} // specify appropriate width
                height={32} // specify appropriate height
                className={styles.socialIcon}
                alt="Facebook icon"
              />
            </li>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/snapshawt?utm_source=qr&igsh=dGtud3RlNjk5b3gz"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-04.png"}
                width={32}
                height={32}
                className={styles.socialIcon}
                alt="Instagram icon"
              />
            </li>
          </Link>

          {/* Twitter */}
          <Link
            href="https://x.com/snapshawtai?t=-7uhXGlTjRy-DucKKv5yZQ&s=09"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-03.png"}
                width={32}
                height={32}
                className={styles.socialIcon}
                alt="Twitter icon"
              />
            </li>
          </Link>

          {/* Pinterest */}
          <Link href="https://www.pinterest.com/snapshawt" target="_blank">
            <li>
              <Image
                src={"/blogs/Icon-01.png"}
                width={32}
                height={32}
                className={styles.socialIcon}
                alt="Pinterest icon"
              />
            </li>
          </Link>

          {/* Snapchat */}
          <Link
            href="https://www.snapchat.com/add/snapshawtai?share_id=j9j1NDafnyg&locale=en-IN"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-05.png"}
                width={32}
                height={32}
                className={styles.socialIcon}
                alt="Snapchat icon"
              />
            </li>
          </Link>

          <Link href="https://www.youtube.com/@Snapshawt_com" target="_blank">
            <li>
              <Image
                src={"/blogs/Icon-07.png"}
                width={32} // specify appropriate width
                height={32} // specify appropriate height
                className={styles.socialIcon}
                alt="YouTube icon"
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
