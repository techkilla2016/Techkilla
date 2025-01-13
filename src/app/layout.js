import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "react-phone-input-2/lib/style.css";
import "aos/dist/aos.css";
import "./style.scss";
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import App from "./app";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import Script from "next/script";

// const siteUrl = "https://techkilla.com/";

// export const metadata = {
//   metadataBase: new URL(siteUrl),
//   title: {
//     default: "Techkilla | Innovative Experiential Technology Solutions",
//     template: "%s | Innovative Experiential Technology Solutions",
//   },
//   description:
//     "Discover innovative solutions with Techkilla, specializing in VR, microsites, interactive ads, and more to enhance customer engagement and ROI.",
//   keywords:
//     "experiential technology, virtual reality solutions, microsite design, interactive ads, customer engagement, tech solutions, Techkilla, face swap, face change, reimagine, ai face swap, face swap ai, face swap free, face changer, photo face swap, swap face ai, picture face swap, ai change face, ai face swap free, free ai face swap, ai swap face, ai face changer, face swap ai free, swap face online free, best face swap, image face swap, free face swap ai, best ai face swap, ai face swap online free, ai swap, best face swap ai, face switch, change face ai, ai face swap photo, faceswap ai free, ai photo face swap, free photo face swap, photo face changer, switch faces in photo, professional face swap, face change ai, face replace ai, swap a face on a picture, face swap any picture, easy face swap, face ai swap, ai face swap picture, free ai faceswap, swap face from one photo to another, ai image face swap, face swap photo free, swap faces ai, face swap from one photo to another, face swap ai photo, free faceswap ai, face swap in photo, free swap face, face swap app, face swap online, face swap with ai, swap face ai free, face swap photo ai, ai face swap image, ai swap faces, swap picture, face swap an image, face swap face, photo face swap ai, ai swap face free, all face swap, swap face image, face interchange, face swap easy, ai photo swap, face swap with image, family photo face swap, best face swap app, pic swapping, face swap on a picture",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://techkilla.com",
//     site_name: "Techkilla",
//     title: "Techkilla | Innovative Experiential Technology Solutions",
//     description:
//       "Discover innovative solutions with Techkilla, specializing in VR, microsites, interactive ads, and more to enhance customer engagement and ROI.",
//     // image: "https://www.snapshawt.com/images/og-image.jpg",
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@Techkilla",
//     title: "Techkilla | Innovative Experiential Technology Solutions",
//     description:
//       "Discover innovative solutions with Techkilla, specializing in VR, microsites, interactive ads, and more to enhance customer engagement and ROI.",
//     // image: "https://www.snapshawt.com/images/twitter-image.jpg",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*  */}
      <body className={inter.className}>
        <App />
        {children}
        <Link
          className="whatsapp-btn"
          href="http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks."
        >
          <BsWhatsapp />
        </Link>
      </body>
    </html>
  );
}
