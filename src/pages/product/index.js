import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
const Product = () => {
    return (
        <>
            <Head>
                <title>Our Product</title>
                <script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-252119773-1" />
                <script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}D
 gtag('js', new Date());
 gtag('config', 'UA-252119773-1', {
 page_path: window.location.pathname,
 });
`,
                    }}
                />
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing'>

                    </div>
                    <div className='product-container'>
                        <Container>
                            lksdhf
                        </Container>
                    </div>
                    <div className='mainContainer my-5'>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}
export default Product
