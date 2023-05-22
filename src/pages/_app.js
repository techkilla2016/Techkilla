import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Move the dataLayer initialization here
    window.dataLayer = window.dataLayer || [];

    // Call the gtag function after initialization
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-1Q8D92YRHE');
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
