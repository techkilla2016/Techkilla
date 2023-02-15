import Footer from '@/components/footer'
import Header from '@/components/header'
import ServiceCart from '@/components/service'

import React from 'react'


const Service = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="service">
                            <h3 className="section__title" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>Our Service</span>
                            </h3>
                            <ServiceCart />
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Service
