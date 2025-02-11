"use client";
import "./blogs.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { blogPosts } from "../../../data/blogs/index.js";
import { generateSlug } from "../../../utils/blogSlug";
import icon from "../../../../public/blogs/Icon-10.png";

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
    <div className="flex-col-center BlogPage">
      <div className="flex-col-center textContainer">
        {/* <p className="txt2 blogText">RESOURCES</p> */}
        <h2 className="secondHead">
          Boost Your Brand Marketing & Customer Success Instantly with{" "}
          <span style={{ color: "#fad43a", fontWeight: "600" }}>
            AI, AR, VR,
          </span>{" "}
          and{" "}
          <span style={{ color: "#fad43a", fontWeight: "600" }}>
            Gamification
          </span>
        </h2>
        <p className="txt2 blogText">
          Discover how technology integration can transform your marketing
          campaigns, elevate customer engagement, and create memorable success
          stories and lasting interactions.
        </p>
      </div>
      <div className="flex-row-center blogContainer">
        {displayPosts.map((post, index) => (
          <div
            key={post.id}
            className={`flex-col-center singleBlogContainer ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <Link href={`/blogs/${generateSlug(post.title)}`}>
              <div className="flex-row-center upperPart">
                <Image
                  src={post.thumbnailImage.src}
                  alt={post.thumbnailImage.alt}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex-row-center lowerPart">
                <p className="textTitle">{getTitleBeforeSymbol(post.title)}</p>
                <div className="iconPart">
                  <Image src={icon} alt="Icon" width={24} height={24} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Button url={"/blogs"} title="Read More "></Button>
    </div>
  );
};

export default Blogs;
