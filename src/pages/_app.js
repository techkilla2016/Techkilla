import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import { useRouter } from 'next/router';

function Page({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();
    // Track pageview on route change
    const handleRouteChange = (url) => {
      logPageView();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  <Head>
    <title>Techkilla</title>
  </Head>

  return <Component {...pageProps} />;
}

export default Page;
