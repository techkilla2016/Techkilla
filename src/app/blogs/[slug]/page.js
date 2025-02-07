import Link from "next/link";
import "./singleBlogPage.scss";
import Image from "next/image";
import Header from "../../../components/header";
import Contact from "@/components/blogs/contactUs";
import BlogContent from "@/components/blogs/swiperCom";
import { blogPosts } from "../../../data/blogs/index.js";
import { generateSlug } from "../../../utils/blogSlug";
// import { allRoutes } from "@/data/allRoutes";
import BlogHeader from "@/components/blogs/blogHeader";

const siteUrl = process.env.SITE_URL;

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const post = blogPosts.find((blog) => generateSlug(blog.title) == slug);
//   if (!post) {
//     return {
//       title: "Blog Not Found",
//       description: "The blog you are looking for does not exist.",
//     };
//   }
//   return {
//     metadataBase: new URL(siteUrl),
//     alternates: {
//       canonical: `/blogs/${slug}`,
//       languages: {
//         "en-US": `/blogs/${slug}/en-US`,
//         "de-DE": `/blogs/${slug}/de-DE`,
//       },
//     },
//     title: post?.seo?.title,
//     description: post?.seo?.description,
//     keywords: post?.seo?.keywords,
//     openGraph: {
//       type: "website",
//       locate: "en_US",
//       site_name: "Snapshawt",
//       url: siteUrl,
//       title: post?.seo?.title,
//       description: post?.seo?.description,
//       images: {
//         url: post?.seo?.img,
//         width: 1200,
//         height: 630,
//         alt: post.seo.imgAlt,
//       },
//     },
//     twitter: {
//       card: "summary_large_image",
//       site: "@Snapshawt",
//       title: post?.seo?.title,
//       description: post?.seo?.description,
//       images: {
//         url: post?.seo?.img,
//         width: 1200,
//         height: 630,
//         alt: post.seo.imgAlt,
//       },
//     },
//   };
// }

const highlightWords = [
  {
    word: "AI Headshot Generator",
    url: "/blogs/transforming-your-professional-presence",
    target: "_self",
  },
  {
    word: "Snapshawt",
    url: "/",
    target: "_self",
  },
  {
    word: " professional Headshots",
    url: "/blogs/transforming-your-professional-presence",
    target: "_self",
  },
  {
    word: "greet friends and family",
    url: "/blogs/top-5-reasons-why-ai-face-swap-is-your-go-to-app-for-daily-greetings",
    target: "_self",
  },
  {
    word: "Halloween to Diwali",
    // url: `${allRoutes.faceSwap}`,
    target: "_self",
  },
  {
    word: "Face swap",
    // url: `${allRoutes.faceSwap}`,
    target: "_self",
  },
  {
    word: "personal brand",
    url: "/blogs/from-concept-to-creation",
    target: "_self",
  },
  {
    word: "traditional",
    url: "/blogs/snapshawt-for-families",
    target: "_self",
  },
  {
    word: "family reunion",
    url: "/blogs/snapshawt-for-families",
    target: "_self",
  },
  {
    word: "facebook",
    url: "https://www.facebook.com/profile.php?id=61557027670734&mibextid=ZbWKwL",
    target: "_blank",
  },
  {
    word: "twitter",
    url: "https://x.com/snapshawtai?t=-7uhXGlTjRy-DucKKv5yZQ&s=09",
    target: "_blank",
  },
  {
    word: "instagram",
    url: "https://www.instagram.com/snapshawt?utm_source=qr&igsh=dGtud3RlNjk5b3gz",
    target: "_blank",
  },
  {
    word: "linkedin",
    url: "https://www.linkedin.com/company/snapshawtai/posts/?feedView=all",
    target: "_blank",
  },
];
// console.log(highlightWords);
// Function to highlight text with given words and prevent highlighting the same word more than once
function highlightText(text, highlightWords, highlightedWordsSet) {
  if (!text || !Array.isArray(highlightWords)) return text;

  const regex = new RegExp(
    `\\b(${highlightWords.map((hw) => hw.word).join("|")})\\b`,
    "gi"
  );

  return text.split(regex).map((part, index) => {
    // Find the highlight word based on the current part of text
    const highlight = highlightWords.find(
      (hw) => hw.word.toLowerCase() === part.toLowerCase()
    );

    // If it's a highlight word and hasn't been highlighted yet, wrap it in a <Link>
    if (highlight && !highlightedWordsSet.has(highlight.word.toLowerCase())) {
      highlightedWordsSet.add(highlight.word.toLowerCase()); // Mark the word as highlighted
      return (
        <Link href={highlight.url} key={index} target={highlight.target}>
          <span style={{ color: "purple" }}>{part}</span>
        </Link>
      );
    }
    // Return the part without any highlighting if it is not a highlight word or has been highlighted already
    return part;
  });
}

// Exported function to generate static paths for each blog post
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: generateSlug(post.title),
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;

  // Find the post by slug (title)

  const post = blogPosts.find((blog) => generateSlug(blog.title) === slug);

  if (!post) {
    return (
      <div className="flex-col-center SingleBlogPage">
        <BlogHeader />
        <div className="flex-col-center topSection">
          <h2>Oops! Blog Not Found</h2>
          <p>
            The post you're looking for has either been deleted or never
            existed.
          </p>
        </div>
      </div>
    );
  }

  // Initialize an empty set for tracking highlighted words in this specific blog post
  const highlightedWordsSet = new Set();

  return (
    <div className="flex-col-center SingleBlogPage">
      <BlogHeader />

      <div className="flex-col-center topSection">
        <h1 className="titlehead">{post.title}</h1>

        <div className="flex-col-center commonContainer">
          {post.content &&
            (() => {
              const midIndex = Math.floor(post.content.length / 2);
              const splitIndex =
                post.content.lastIndexOf(".", midIndex) + 1 || midIndex;
              const firstPart = post.content.slice(0, splitIndex).trim();
              const secondPart = post.content.slice(splitIndex).trim();

              return (
                <>
                  <p className="fontContent belowText">
                    {highlightText(
                      firstPart,
                      highlightWords,
                      highlightedWordsSet
                    )}
                  </p>

                  {post.thumbnailImage && post.thumbnailImage.src && (
                    <div className="flex-row-center thumbnailImgType">
                      <Image
                        src={post.thumbnailImage.src}
                        alt={post.thumbnailImage.alt}
                        width={500}
                        height={500}
                      />
                    </div>
                  )}

                  <p className="fontContent belowText">
                    {highlightText(
                      secondPart,
                      highlightWords,
                      highlightedWordsSet
                    )}
                  </p>
                </>
              );
            })()}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-row-center middleSection">
        <div className="flex-col-center contentIndex">
          <h2 className="contentIndexTitle">Contents</h2>
          <ul className="flex-col-center quesHead">
            {post.additionalContents.map(
              (content, index) =>
                content.ques && (
                  <li key={index} className="contentItem">
                    <a
                      href={`#${content.ques.replace(/\s+/g, "_")}`}
                      className="link"
                    >
                      {content.ques}
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className="flex-col-center mainContainer">
          {/* Question array */}
          <div className="flex-col-center upperContainerPart">
            {post.additionalContents.map((content, index) => {
              return (
                <div
                  key={index}
                  id={content.ques.replace(/\s+/g, "_")}
                  className="flex-col-center blogSection"
                >
                  {/* Question heading */}
                  {content.hasOwnProperty("ques") && (
                    <p className="quesContent">{content.ques}</p>
                  )}

                  {/* Question image */}
                  {content.hasOwnProperty("img") && (
                    <div
                      className={`flex-row-center ${
                        content.img.imgSize === "bigHorizontal"
                          ? "bigHorizontal"
                          : content.img.imgSize === "smallHorizontal"
                          ? "smallHorizontal"
                          : "vertical"
                      } questionImg`}
                    >
                      <Image
                        src={content.img.src}
                        alt={content.img.alt}
                        width={500}
                        height={500}
                      />
                    </div>
                  )}

                  {/* question content */}
                  {content.con && Array.isArray(content.con) ? (
                    <ol className="flex-col-center listContent">
                      {content.con.map((item, index) => (
                        <li key={index}>
                          <ul className="flex-col-center singleListContainer">
                            <li className="list">
                              <strong className="fontContent headingStrong">
                                {item.heading}:
                              </strong>
                            </li>
                            <li className="fontContent">
                              {highlightText(
                                item.description,
                                highlightWords,
                                highlightedWordsSet
                              )}
                            </li>
                            <div>
                              {item.hasOwnProperty("img") && (
                                <Image
                                  src={item.img.src}
                                  alt={item.img.alt}
                                  className="contentImage"
                                  width={500}
                                  height={500}
                                />
                              )}
                            </div>
                          </ul>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    content.con && (
                      <p className="fontContent">
                        {highlightText(
                          content.con,
                          highlightWords,
                          highlightedWordsSet
                        )}
                      </p>
                    )
                  )}

                  {/* Question sub */}
                  {content.hasOwnProperty("sub") && (
                    <p className="fontContent">
                      {highlightText(
                        content.sub,
                        highlightWords,
                        highlightedWordsSet
                      )}
                    </p>
                  )}

                  {/* Question additional part */}
                  {content.hasOwnProperty("add") && (
                    <p className="fontContent">
                      {highlightText(
                        content.add,
                        highlightWords,
                        highlightedWordsSet
                      )}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {post.hasOwnProperty("conclusion") && (
            <div className="flex-col-center conclusion">
              {post.conclusion.hasOwnProperty("head") && (
                <p className="quesConcl">
                  {highlightText(
                    post.conclusion.head,
                    highlightWords,
                    highlightedWordsSet
                  )}
                </p>
              )}
              {post.conclusion.hasOwnProperty("img") && (
                <Image
                  src={post.conclusion.img.src}
                  alt={post.conclusion.img.alt}
                  className={
                    post.conclusion.img.imgSize
                      ? post.conclusion.img.imgSize
                      : "square"
                  }
                  width={400}
                  height={400}
                />
              )}
              {post.conclusion.hasOwnProperty("conclusion") && (
                <p className="fontContent">
                  {highlightText(
                    post.conclusion.conclusion,
                    highlightWords,
                    highlightedWordsSet
                  )}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex-col-center leftFooterSecond">
          <ul className="flex-col-center socialIconCon">
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
                  className="socialIcon"
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
                  className="socialIcon"
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
                  className="socialIcon"
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
                  className="socialIcon"
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
                  className="socialIcon"
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
                  className="socialIcon"
                  alt="YouTube icon"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Contact />
      <div className="flex-col-center sliderWrapper">
        <p className="blogHead">Related Blogs</p>

        <BlogContent />
      </div>
    </div>
  );
}
