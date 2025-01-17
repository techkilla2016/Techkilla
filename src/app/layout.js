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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
