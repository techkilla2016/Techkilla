import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import ContactFrom from './ContactForm';

const Contact = () => {
    const ASSETS_URL = "https://s3.eu-west-1.amazonaws.com/ensights.ai/assets";
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="contact container-fluid">
                            <div className="row">
                                <div className="col-lg-6  home-image px-0">
                                    <div className="hero ">
                                        <video autoPlay={true} playsInline loop={true} muted={true}>
                                            <source
                                                src={`${ASSETS_URL}/Hero_Desk_alpha.webm`}
                                                type="video/webm"
                                            />
                                            <source src="/Hero_Desk_alpha.mp4" type="video/mp4" />
                                        </video>
                                    </div>

                                </div>
                                <div className="col-lg-6 contact-form">
                                    <ContactFrom />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Contact
