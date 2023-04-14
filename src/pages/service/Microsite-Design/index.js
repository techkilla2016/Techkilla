import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UseCase from '@/components/service/UseCase'
import Benefits from '@/components/service/Benefit'
import GridSlider from '@/components/ProjectSlider/GridSlider'
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
]
const list = [
    {
        title: "DOW packaging and supplies",
        them: "/service/microsite/DOW_packaging.png"
    },
    {
        title: "NHRD QR verification and instant print",
        them: "/service/microsite/NHRD_QR_verification.png"
    },
    {
        title: "HDFC Inquizitive family",
        them: "/service/microsite/HDFC_Inquizitive_family_show.png"
    },
    {
        title: "HDFC Analytiq 1.0",
        them: "/service/microsite/HDFC_Analytiq_1.0.png"
    },
    {
        title: "HDFC Analytiq 2.0",
        them: "/service/microsite/HDFC_Analytiq_2.0.png"
    },
    // {
    //     title: "HDFC Analytiq 3.0",
    //     them: "/service/microsite/HDFC_Analytiq_3.0.png"
    // },
    {
        title: "Cipla Urology quiz game",
        them: "/service/microsite/Cipla_Urology_quiz_game.png"
    },
    {
        title: "Loreal dreamlength launch",
        them: "/service/microsite/Loreal_dreamlength_launch.png"
    },
    {
        title: "Colgate - IPL",
        them: "/service/microsite/Colgate_IPL.png"
    },
    {
        title: "Concentrix got talent",
        them: "/service/microsite/Concentrix_got_talent.png"
    },

    {
        title: "Nutella - Ramadan video quiz game",
        them: "/service/microsite/video_quize.png"
    },
    {
        title: "Tata International E-Marathon",
        them: "/service/microsite/Tata_International_E-Marathon.png"
    },
    {
        title: "Tuborg super over",
        them: "/service/microsite/Tuborg_super_over.png"
    },
    {
        title: "Total energies virtual talent hunt show",
        them: "/service/microsite/Total_energies_virtual_talent_hunt_show.png"
    },
    {
        title: "World cloud photobooth",
        them: "/service/microsite/World_cloud_photobooth.png"
    },
    {
        title: "TVS Motors digital tambola",
        them: "/service/microsite/TVS_Motors_digital_tambola.png"
    },
    {
        title: "Colgate swashbuckers day",
        them: "/service/microsite/Colgate_swashbuckers_day.png"
    },
    // {
    //     title: "Multitv Quiz Game",
    //     them: "/service/microsite/Colgate_swashbuckers_day.png"
    // }, 
    // {
    //    "Microsoft Hackathon",
    //     them: "/service/microsite/Colgate_swashbuckers_day.png"
    // }, 
    // {
    //     "Cera - Quiz game",
    //     them: "/service/microsite/Colgate_swashbuckers_day.png"
    // }, 
    // {
    //     "Total Oil - talent hun",
    //     them: "/service/microsite/Colgate_swashbuckers_day.png"
    // },
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
                                <Image src='/banner/microsite-design.png' alt='Physical Engagement' width={1920} height={1080} />
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
                                                <Image src='/vrr.png' alt='Physical Engagement' width={1080} height={1920} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                    <div className='mainContainer'>
                        <div className="desc pb-5">
                            <h2 className='text-center py-5'>What are microsites?</h2>
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
                                <h4>Benefits of launching your own microsite</h4>
                                <div className="Benefits">
                                    <Benefits data={['Specifically aimed campaigns', 'The production of leads', 'Awareness of the brand', 'SEO with virality potential for specialized keywords', ' Easy to manage']} />
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
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default MicrositeDesign