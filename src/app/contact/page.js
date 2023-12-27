import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import ContactFrom from '@/components/contect/ContactForm';
import ColLeft from '@/components/contect/slide';
export const metadata = {
    title: 'Contact Us  | Techkilla',
    description: 'Develop by Mukesh Singh',
}
const Contact = () => {
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
                                        <ColLeft />
                                    </div>
                                </div>
                                <div className="col-lg-6 contact-form" style={{ background: "#f5f5f4" }}>
                                    <ContactFrom bg="#f5f5f4" />
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