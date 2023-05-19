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
    gtag('config', 'G-TV1ZCTF238');
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TV1ZCTF238"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
