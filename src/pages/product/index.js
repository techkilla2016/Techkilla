import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'
const Product = () => {
    return (
        <>
            <Head>
                <title>Our Product</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="intro-Section">
                        <div className="introWraper">
                        </div>
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
