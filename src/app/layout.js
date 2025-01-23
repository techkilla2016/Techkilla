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
import { Providers } from "./redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TMCF5D4L');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMCF5D4L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Providers>
          <App />
          {children}
          <Link
            className="whatsapp-btn"
            href="http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks."
          >
            <BsWhatsapp />
          </Link>
        </Providers>
      </body>
    </html>
  );
}
