import 'bootstrap/dist/css/bootstrap.min.css'
import "react-phone-input-2/lib/style.css";
import 'aos/dist/aos.css';
import '@/styles/globals.css'
import '@/styles/photo-ai.scss'
import Head from 'next/head'
import { useEffect } from 'react';
import AOS from 'aos';
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-252119773-1" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-252119773-1', {
                page_path: window.location.pathname,
                });
                `,
          }}
        />

        {/* Other head elements */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PVH2G66V');
            `,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVH2G66V');</script>            
            `,
          }}
        ></div>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
