import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'
const PhysicalEngagement = () => {
    return (
        <>
            <Head>
                <title>Physical Engagement</title>
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
export default PhysicalEngagement
