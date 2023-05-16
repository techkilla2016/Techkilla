import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-252119773-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'UA-252119773-1');
            `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
