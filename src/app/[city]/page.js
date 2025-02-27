"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header";
import Link from "next/link";
import Footer from "@/components/footer";
import Contact from "@/components/blogs/contactUs";
import "./city.scss";

const siteUrl = "https://www.techkilla.com";

const newLocal = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/blogs",
    languages: {
      "en-US": `/blogs/en-US`,
      "de-DE": `/blogs/de-DE`,
    },
  },
  title: "Techkilla Photo Booths in Mumbai – AI-Powered Experiences",
  description:
    "Elevate your event with Techkilla's AI photo booths in Mumbai,From AR effects to AI-generated videos, create shareable moments & boost brand engagement.",
  keywords:
    "AI Photo booth, face changer, photo manipulation, image creation, face swap tips, free face swap, face reimagine, face switch, photo face swap free, AI photo editor, best face swap AI, face replace AI, swap face online, face transformation, face editing tools, advanced AI tools, swap faces in photos, face swap tutorials, AI face changer free, creative image ideas, AI-powered face swap, realistic face swap, easy face swap, face swap online free, picture transformation, professional face swap AI, AI face editor, face swap software, face swap app tips, free AI image tools, online face editing, face swap technology, custom photo editor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    site_name: "Techkilla",
    title: "Techkilla Photo Booths in Mumbai – AI-Powered Experiences",
    description:
      "Elevate your event with Techkilla's AI photo booths in Mumbai,From AR effects to AI-generated videos, create shareable moments & boost brand engagement.",
    images: {
      url: "/og-images/blogs/blog-01-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AI-powered Photobooth preview image",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Techkilla",
    title: "Techkilla Photo Booths in Mumbai – AI-Powered Experiences",
    description:
      "Elevate your event with Techkilla's AI photo booths in Mumbai,From AR effects to AI-generated videos, create shareable moments & boost brand engagement.",
    images: {
      url: "/og-images/blogs/blog-01-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AI-powered photobooth preview image",
    },
  },
};
export const metadata = newLocal;
const CityPhotobooth = () => {
  const { city } = useParams();

  const validCityMatch = city.match(/^photo-booth-([a-zA-Z]+)-ai-interactive-experiences$/);
  const formattedCity = validCityMatch?.[1]
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (char) => char.toUpperCase());

  if (!validCityMatch) {
    return (
      <div className="flex-col-center City">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go to Home</Link>
      </div>
    );
  }

  
  const photobooth = [
    {
      img: "/location-photobooth/images-01.jpg",
      heading: "AI Photo Booth ",
      desc: "Step into the future with our AI-powered photo booth! Get real-time digital makeovers, artistic effects, and futuristic transformations that add excitement to your event. Guests can enjoy personalized AI filters, digital costumes, and age progression effects, creating highly shareable content that enhances engagement. Ideal for brand activations, corporate parties, and influencer events looking to make an impact. Guests can instantly change their appearance with celebrity lookalikes, anime transformations, or historical portraits, making it an exciting and unpredictable experience. AI-driven filters ensure crystal-clear, high-resolution images that are instantly shareable on social media, boosting brand reach and event recall.",
      link: "",
    },
    {
      img: "/location-photobooth/images-02.jpg",
      heading: "AI Prompt Photo Booth",
      desc: "Capture fun and unique moments with our AI-powered photobooth! Instantly transform your photos with creative filters, dynamic backgrounds, and personalized effects. Perfect for events, parties, or just having fun, our AI PhotoBooth makes every snapshot a work of art.",
      link: "",
    },
    {
      img: "/location-photobooth/images-06.jpg",
      heading: "AI Video Booth",
      desc: "Capture fun and unique moments with our AI-powered photobooth! Instantly transform your photos with creative filters, dynamic backgrounds, and personalized effects. Perfect for events, parties, or just having fun, our AI PhotoBooth makes every snapshot a work of art.",
      link: "",
    },
    {
      img: "/location-photobooth/images-04.jpg",
      heading: "AI Caricature Photo Booth",
      desc: "Capture fun and unique moments with our AI-powered photobooth! Instantly transform your photos with creative filters, dynamic backgrounds, and personalized effects. Perfect for events, parties, or just having fun, our AI PhotoBooth makes every snapshot a work of art.",
      link: "",
    },
    {
      img: "/location-photobooth/images-05.jpg",
      heading: "AR Photo Booth",
      desc: "Capture fun and unique moments with our AI-powered photobooth! Instantly transform your photos with creative filters, dynamic backgrounds, and personalized effects. Perfect for events, parties, or just having fun, our AI PhotoBooth makes every snapshot a work of art.",
      link: "",
    },
    {
      img: "/location-photobooth/images-03.jpg",
      heading: "AI Background Changer Photo Booth",
      desc: "Capture fun and unique moments with our AI-powered photobooth! Instantly transform your photos with creative filters, dynamic backgrounds, and personalized effects. Perfect for events, parties, or just having fun, our AI PhotoBooth makes every snapshot a work of art.",
      link: "",
    },
  ];

  return (
    <>
    <div className="flex-col-center City">
      <Header />
      <div className="flex-col-center firstPart">
        <h1 className="cityHeading">
        Techkilla Photo Booths in {formattedCity} – Elevate Your Event Experience with AI & Interactive Solutions!{" "}
        </h1>
        <p className="descriptionPart">
        Hosting an event in {formattedCity}? Techkilla offers a range of cutting-edge photo booths designed to engage guests, create shareable moments, and elevate brand activations. Whether it’s a corporate gathering, product launch, trade show, wedding, or social media campaign, our interactive booths are the perfect addition! With our AI-powered solutions, you can provide a truly immersive and unforgettable experience for your attendees, ensuring your brand stands out.
        </p>

        <Link href={"/contact"} className="contact-btn">
          Contact Us
        </Link>
      </div>
      <div className="flex-col-center secondPart">
        {/* <h2 className="head-booth">Our Photo Booth Options in {formattedCity}</h2> */}
        {photobooth.map((booth, index) => (
          <div
            key={index}
            className={`flex-row-center photoboothRow ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            {index % 2 === 0 ? (
              <>
              
                <div className="imageContainer">
                  <img
                  className="imgPart"
                    src={booth.img}
                    alt={booth.heading}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="flex-col-center textContainer">
                  <h3 className="boothHead">{booth.heading} in {formattedCity}</h3>
                  <p className="boothDesc">{booth.desc}</p>
                  <Link href={booth.link} className="watch-more-btn">
                    Watch Now
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex-row-center photoboothRow">
                <div className="flex-col-center textContainer">
                  <h3 className="boothHead">{booth.heading} in {formattedCity}</h3>
                  <p className="boothDesc">{booth.desc}</p>
                  <Link href={booth.link} className="watch-more-btn">
                    Watch Now
                  </Link>
                </div>
                <div className="imageContainer">
                  <img
                  className="imgPart"
                    src={booth.img}
                    alt={booth.heading}
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Contact /> 
    </div>
    
    <Footer />
    </>
  );
};

export default CityPhotobooth;
