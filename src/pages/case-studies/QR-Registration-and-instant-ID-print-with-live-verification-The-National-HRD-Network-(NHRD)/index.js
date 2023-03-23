import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title> QR Registration and instant ID print with live verification - The National HRD Network </title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">
                        <>
                            {/* code is here  */}
                        </>
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default index
