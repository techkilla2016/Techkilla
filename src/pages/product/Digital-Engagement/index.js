import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'
const DigitalEngagement = () => {
    return (
        <>
            <Head>
                <title>Digital Engagement</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer my-5'>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}
export default DigitalEngagement
