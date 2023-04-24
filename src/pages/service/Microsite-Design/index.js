import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UseCase from '@/components/service/UseCase'
import GridSlider from '@/components/ProjectSlider/GridSlider'
import { SiShanghaimetro, SiGoogletagmanager } from 'react-icons/si'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { GiAwareness } from 'react-icons/gi'
import { IoPulseOutline } from 'react-icons/io5'
const usecase = [
    {
        img: '/service/product launch-01-01.png',
        title: 'Product launch'
    },
    {
        img: '/service/Targeting prospects-01-01.png',
        title: 'Targeting prospects'
    },
    {
        img: '/service/Geotargeting market-01-01.png',
        title: 'Geotargeting market'
    },
    {
        img: '/service/distinguishing the corporate-01-01.png',
        title: 'distinguishing the corporate brand'
    },
    {
        img: '/service/product launch-01-01.png',
        title: 'promoting events'
    },
    {
        img: '/service/product launch-01-01.png',
        title: 'Running a campaign'
    },
    {
        img: '/service/product launch-01-01.png',
        title: 'Hosting an event'
    },
    {
        img: '/service/product launch-01-01.png',
        title: 'Engaging with influencers'
    },
]
const list = [
    {
        title: "DOW packaging and supplies",
        them: "/service/microsite/DOW_packaging.png",
        url: 'https://youtube.com/shorts/pfJGe8uSg-E?feature=share'
    },
    {
        title: "NHRD QR verification and instant print",
        them: "/service/microsite/NHRD_QR_verification.png",
        url: 'https://youtu.be/pD1otredtSY'
    },
    {
        title: "HDFC Inquizitive family",
        them: "/service/microsite/HDFC_Inquizitive_family_show.png",
        url: 'https://www.instagram.com/p/CZ00ktCDQOW/'
    },
    {
        title: "HDFC Analytiq 1.0",
        them: "/service/microsite/HDFC_Analytiq_1.0.png",
        url: 'https://youtu.be/eP9v-MsFvVg'
    },
    {
        title: "HDFC Analytiq 2.0",
        them: "/service/microsite/HDFC_Analytiq_2.0.png",
        url: 'https://youtu.be/eP9v-MsFvVg'
    },
    {
        title: "Cipla Urology quiz game",
        them: "/service/microsite/Cipla_Urology_quiz_game.png",
        url: 'https://youtu.be/lUiW07szbnk'
    },
    {
        title: "Loreal dream length launch",
        them: "/service/microsite/Loreal_dreamlength_launch.png",
        url: '/'
    },
    {
        title: "Colgate - IPL",
        them: "/service/microsite/Colgate_IPL.png",
        url: 'https://youtu.be/9aSW2QLGkWU'
    },
    {
        title: "Concentrix got talent",
        them: "/service/microsite/Concentrix_got_talent.png",
        url: '/'
    },
    {
        title: "Nutella - Ramadan video quiz game",
        them: "/service/microsite/video_quize.png",
        url: '/'
    },
    {
        title: "Tata International E-Marathon",
        them: "/service/microsite/Tata_International_E-Marathon.png",
        url: 'https://youtu.be/X9ME8OJ_0CY'
    },
    {
        title: "Tuborg super over",
        them: "/service/microsite/Tuborg_super_over.png",
        url: '/'
    },
    {
        title: "Total energies virtual talent hunt show",
        them: "/service/microsite/Total_energies_virtual_talent_hunt_show.png",
        url: 'https://youtu.be/W477hmJwliE'
    },
    {
        title: "World cloud photobooth",
        them: "/service/microsite/World_cloud_photobooth.png",
        url: 'https://youtu.be/ygj8A3b6bCE'
    },
    {
        title: "TVS Motors digital tambola",
        them: "/service/microsite/TVS_Motors_digital_tambola.png",
        url: 'https://youtu.be/gENxYQYVB4Y'
    },
    {
        title: "Colgate swashbuckers day",
        them: "/service/microsite/Colgate_swashbuckers_day.png",
        url: 'https://youtu.be/y7NrjyCLD6g'
    },
    {
        title: "HDFC Analytiq 3.0",
        them: "/service/microsite/HDFC_Analytiq_3.0.png",
        url: 'https://youtu.be/eP9v-MsFvVg'
    },

    {
        title: "Total Oil - talent hun",
        them: "/service/microsite/Colgate_swashbuckers_day.png",
        url: 'https://youtu.be/W477hmJwliE'
    },
]

const MicrositeDesign = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>Microsite design</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='product_landing' style={{ background: '#fff' }}>
                        <div className='product_landing_background'>
                            <div className='preloaderBack'>
                                <Image src='/banner/microsite-design_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                <Image src='/banner/microsite-design.png' alt='Physical Engagement' width={1920} height={1080} />
                                <div className='preloaderBack-layer'>
                                </div>
                            </div>
                            <div className='product_intro'>
                                <Container>
                                    <Row>
                                        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                            <div className='product_main'>
                                                <h2>
                                                    Drive engagement with Microsite Designs
                                                </h2>
                                                <p>
                                                    A well-designed microsite can be an effective tool for driving engagement and achieving business goals. To achieve this, it's important to understand your target audience and what they are looking for.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                            <div className='product_main_icon'>
                                                <Image src='/micro.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='mainContainer'>
                        <div className="desc py-5">
                            {/* <h2 className='text-center py-5'></h2> */}
                            <h3 className="section__title my-5" style={{ color: " #000", padding: "30px 0px", textAlign: 'center' }}>
                                <span className='section__title-line-center'>What are microsites?</span>
                            </h3>
                            <Container>
                                <Row>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                A microsite is a website (or a single web page) that is dedicated to a single brand and is utilized by businesses in order to promote special events, products, or campaigns.
                                            </p>
                                            <p>
                                                Typically, they are websites that do not focus on application development. They would not have capabilities for eCommerce, which is something that most of Shopify's competitors provide, nor would they have a complex sales funnel.
                                            </p>
                                            <p>
                                                Instead, they are information-heavy websites with the goal of attracting the greatest number of users feasible. The material that can be found on their website (or websites) is almost always humorous and encourages users to participate. Because of this, their brand is better able to engage with users.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src='/service/miro-service.gif' alt='Benefits of launching your own microsite'
                                            width={1920} height={1080} style={css} />
                                    </Col>
                                </Row>
                            </Container>
                            <div className="use_case">
                                <div id="use_case">
                                    <Container>
                                        <div className='use_case_heading'>Use cases</div>
                                        <Row>
                                            {usecase.map((curItem, index) => <UseCase key={index} img={curItem.img} title={curItem.title} />)}
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                            <div className='BenefitsContainer'>
                                <Container>
                                    <div className="serviceContainer pb-5">
                                        <h3 className='text-center benifit-head pt-4' >Benefits </h3>
                                        <div className='text-center benifit-para'>Benefits of launching your own microsite</div>
                                    </div>
                                    <Row className='justify-content-center'>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                            <div className='benifit'>
                                                <div className='benifit-icon '>
                                                    <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                        <SiShanghaimetro />
                                                    </div>
                                                </div>
                                                <h5 className='head'>
                                                    Specifically aimed campaigns
                                                </h5>
                                                <p>
                                                    Targeted campaigns increase engagement, optimize budget, and drive conversions for brands.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                            <div className='benifit'>
                                                <div className='benifit-icon '>
                                                    <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                                        <MdOutlineProductionQuantityLimits />
                                                    </div>
                                                </div>
                                                <h5 className='head'>
                                                    The production of leads
                                                </h5>
                                                <p>
                                                    Lead production drives sales growth and enhances customer acquisition for businesses
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                            <div className='benifit'>
                                                <div className='benifit-icon '>
                                                    <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hotpink' }}>
                                                        <GiAwareness />
                                                    </div>
                                                </div>
                                                <h5 className='head'>
                                                    Awareness of the brand
                                                </h5>
                                                <p>
                                                    Brand awareness boosts recognition, credibility, and loyalty, driving business growth.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                            <div className='benifit'>
                                                <div className='benifit-icon '>
                                                    <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                        <IoPulseOutline />
                                                    </div>
                                                </div>
                                                <h5 className='head'>
                                                    SEO with virality potential for specialized keywords
                                                </h5>
                                                <p>
                                                    Specialized keyword SEO drives targeted traffic, enhances visibility, and boosts virality potential.
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                            <div className='benifit'>
                                                <div className='benifit-icon '>
                                                    <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                        <SiGoogletagmanager />
                                                    </div>
                                                </div>
                                                <h5 className='head'>
                                                    Easy to manage
                                                </h5>
                                                <p>
                                                    Easy management saves time and resources, increasing efficiency and productivity.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="Benefits">
                                </div>
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <GridSlider list={list} />
                                </div>
                            </Container>
                        </div>
                        <Footer bg="#fff" />
                    </div>
                </div>
            </main>
          
        </>
    )
}

export default MicrositeDesign