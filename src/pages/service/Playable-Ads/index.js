import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import SingleCard from '@/components/ProjectSlider/singleCard'
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
                            <h2 className='text-center py-5'>Playable Ads</h2>
                            <Container>
                                <Row>

                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <div className="serviceContainer">
                                            <p>
                                                Playable ads are a type of interactive advertisement that give users the opportunity to try out a mobile app experience before they are required to download the full version of the app.It works on a “try-before-buy” concept.
                                            </p>
                                            <p>
                                                Additionally,playables are "A single ad unit that mixes interaction with gamification to facilitate full-funnel marketing brand communication (attention, education, and action)"
                                            </p>

                                            <h4>Who is leveraging playable ads?</h4>
                                            <h4>Benefits -</h4>
                                            <p>
                                                3x more conversion than conventional video ads, <br />
                                                Highest customer engagement, <br />
                                                70% Better memory recall rate, <br />
                                                Increased retention and decreased uninstalls, <br />
                                                Access to advanced analytics

                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} md={6} sm={12}>
                                        <Image src='/service/miro-service.gif' width={1920} height={1080} alt=' Access to advanced analytics' style={css} />
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
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PlayableAds