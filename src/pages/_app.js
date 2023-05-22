import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date());
    gtag('config', 'G-1Q8D92YRHE');
  }, []);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1Q8D92YRHE"></script>
        {/* <!-- Google tag (gtag.js) --> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
