"use client";
import styles from "./blogs.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogPosts } from "../../../data/blogs/index.js";
import { generateSlug } from "../../../utils/blogSlug";

// import { allRoutes } from "@/data/allRoutes";

// split titile to show on ui
const getTitleBeforeSymbol = (title) => {
  if (!title) return "";
  const splitTitle = title.split(/[:?]/);
  return splitTitle[0] + (title.includes("?") ? "?" : "");
};

const Blogs = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blogs");
  };
  const displayPosts = blogPosts.slice(0, 3);
  return (
    <div className={`flex-col-center ${styles.BlogPage}`}>
      <div className={`flex-col-center ${styles.textContainer}`}>
        <p className={`txt2 ${styles.blogText}`}>RESOURCES</p>
        <h2 className={styles.secondHead}>
          Boost Your Personal Brand Instantly with{" "}
          <span style={{ color: "#7a21bb" }}>Snapshawt's AI </span>Solutions
        </h2>
        <p className={`txt2 ${styles.blogText}`}>
          Learn about AI face swap, why AI matters, and key things to avoid when
          using AI—explore the full guide now!
        </p>
      </div>
      <div className={`flex-row-center ${styles.blogContainer}`}>
        {displayPosts.map((post, index) => (
          <div
            key={post.id}
            className={`flex-col-center ${styles.singleBlogContainer} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
          >
            <Link href={`/blogs/${generateSlug(post.title)}`}>
              <div className={`flex-row-center ${styles.upperPart}`}>
                <Image
                  src={post.thumbnailImage.src}
                  alt={post.thumbnailImage.alt}
                  width={100}
                  height={100}
                />
              </div>
              <div className={`flex-row-center ${styles.lowerPart}`}>
                <p className={styles.textTitle}>
                  {getTitleBeforeSymbol(post.title)}
                </p>
                <div className={styles.iconPart}>
                  <Image
                    src="/blogs/icon.png"
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Link
        href={"/blogs"}
        className={`flex-row-center ${styles.moreContainer}`}
      >
        <button className={`btn2 ${styles.btn}`}>Read More {">"}</button>
      </Link>
    </div>
  );
};

export default Blogs;
