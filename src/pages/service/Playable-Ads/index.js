import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import SingleCard from '@/components/ProjectSlider/singleCard'
import { HiOutlineBriefcase, HiOutlineUserGroup } from 'react-icons/hi'
import { MdVideoSettings, MdOutlineMemory } from 'react-icons/md'
import { RiInstallLine } from 'react-icons/ri'

import { TbDeviceAnalytics } from 'react-icons/tb'
import { GiGrowth } from 'react-icons/gi'
const related_project = [
    {
        title: "KuKu FM - Guess the personality puzzle",
        them: "/service/500x500/KuKu_FM_Guess_the_personality_uzzle.png"
    },
    {
        title: "Microsoft - Pride month AR filter",
        them: "/service/500x500/Microsoft_Pride_month_AR_filte.png"
    },
    {
        title: "ITC Football header",
        them: "/service/500x500/ITC_Football_header.png"
    },
    {
        title: "ITC Football Bounce Roll",
        them: "/service/500x500/ITC_Football_Bounce_Roll.png"
    },
    {
        title: "Fun wagerz - FIFA world cup",
        them: "/service/500x500/Fun_wagerz.png"
    },
]
const PlayableAds = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>Playable Ads</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='product_landing' style={{ background: '#fff' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/banner/Playable-ads_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/banner/Playable-ads.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <div className='preloaderBack-layer'>
                                    </div>
                                </div>
                                <div className='product_intro'>
                                    <Container>
                                        <Row>
                                            <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                                                <div className='product_main'>
                                                    <h2>
                                                        interactive Playable-Ads today!
                                                    </h2>
                                                    <p>
                                                        Step into the game and experience the fun with our interactive Playable-Ads today! Our Playable-Ads allow users to engage with your brand in a fun and memorable way.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                                                <div className='product_main_icon'>
                                                    <Image src='/ad.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>

                        <div className="desc pb-5">
                            <h2 className='text-center py-5 mt-4'>Playable Ads</h2>
                            <Container>
                                <div className="serviceContainer ">
                                    <p className='text-center'>
                                        Playable ads are a type of interactive advertisement that give users the opportunity to try out a mobile app experience before they are required to download the full version of the app.It works on a “try-before-buy” concept.
                                    </p>
                                    <p className='text-center'>
                                        Additionally,playables are "A single ad unit that mixes interaction with gamification to facilitate full-funnel marketing brand communication (attention, education, and action)"
                                    </p>
                                </div>
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head pt-4' >Benefits </h3>
                                    <div className='text-center benifit-para'>Who is leveraging playable ads?</div>
                                </div>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(29.72deg 97.27% 56.86%)' }}>
                                                    <MdVideoSettings />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                conventional video ads,
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads
                                                3x more conversion than conventional video ads
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: '#4783c8' }}>
                                                    <HiOutlineUserGroup />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Highest customer engagement
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads,
                                                3x more conversion than conventional video ads,
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hotpink' }}>
                                                    <MdOutlineMemory />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                70% Better memory recall rate
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads,
                                                3x more conversion than conventional video ads,
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                    <GiGrowth />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Increased retention
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads,
                                                3x more conversion than conventional video ads,
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(185.13deg 91.57% 32.55%)' }}>
                                                    <RiInstallLine />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                decreased uninstalls
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads,
                                                3x more conversion than conventional video ads,
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xm={12} className='mt-2'>
                                        <div className='benifit'>
                                            <div className='benifit-icon '>
                                                <div className='icon-inner d-flex align-items-center justify-content-center' style={{ color: 'hsl(34.1deg 100% 72.75%)' }}>
                                                    <TbDeviceAnalytics />
                                                </div>
                                            </div>
                                            <h5 className='head'>
                                                Access to advanced analytics
                                            </h5>
                                            <p>
                                                3x more conversion than conventional video ads,
                                                3x more conversion than conventional video ads,
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                            </Container>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={related_project} />
                                </div>
                            </Container>
                        </div>
                        <Footer bg={'#fff'} />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PlayableAds