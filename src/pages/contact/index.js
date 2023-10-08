import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head';
import React from 'react'
import ContactFrom from '@/components/contect/ContactForm';
import ColLeft from '@/components/home/section2/left';
import axios from 'axios';

const Contact = ({ BaseUrl }) => {
    const send = async (contact) => {
        try {
            const reponce = await axios.post(`${BaseUrl}/contact`, contact)
            return true
        } catch (error) {
            return false;
        }
    };
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
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
                                    <ContactFrom send={send} bg="#f5f5f4" />
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

export const getServerSideProps = async () => {
    return {
        props: {
            // BaseUrl: process.env.BaseUrl
            BaseUrl: 'https://techkilla-server.vercel.app'
        }
    }
}