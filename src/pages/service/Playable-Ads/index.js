import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bg from '&/Assets/service/web banner_playable ads.jpg'
import serive from '../../../../public/Assets/service/miro-service.gif'
import Footer from '@/components/footer'
import SingleCard from '@/components/ProjectSlider/singleCard'
const related_project = [
    {
        title: "KuKu FM - Guess the personality puzzle",
        them: "/Assets/service/500x500/KuKu_FM_Guess_the_personality_uzzle.png"
    },
    {
        title: "Microsoft - Pride month AR filter",
        them: "/Assets/service/500x500/Microsoft_Pride_month_AR_filte.png"
    },
    {
        title: "ITC Football header",
        them: "/Assets/service/500x500/ITC_Football_header.png"
    },
    {
        title: "ITC Football Bounce Roll",
        them: "/Assets/service/500x500/ITC_Football_Bounce_Roll.png"
    },
    {
        title: "Fun wagerz - FIFA world cup",
        them: "/Assets/service/500x500/Fun_wagerz.png"
    },
]
const PlayableAds = () => {
    const css = { maxWidth: '100%', height: 'auto' }
    return (
        <>
            <Head>
                <title>VR-Solutions</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src={bg} />
                            </div>
                            <div className="introSection">
                                <h1>Playable Ads</h1>
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <div className="introDesc ">
                                                Step into the game and experience the fun with our interactive Playable-Ads today!
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
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
                                        <Image src={serive} style={css} />
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