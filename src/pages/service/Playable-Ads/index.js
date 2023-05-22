import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import SingleCard from '@/components/ProjectSlider/singleCard'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { MdVideoSettings, MdOutlineMemory, MdMobileFriendly } from 'react-icons/md'
import { RiInstallLine } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { GiGrowth } from 'react-icons/gi'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { VscGraphLine } from 'react-icons/vsc'

const related_project = [
    {
        title: "KuKu FM - Guess the personality puzzle",
        them: "/service/500x500/KuKu_FM_Guess_the_personality_uzzle.png",
        url: '/'
    },
    {
        title: "Microsoft - Pride month AR filter",
        them: "/service/500x500/Microsoft_Pride_month_AR_filte.png",
        url: 'https://youtu.be/AJSZIIxfYYY'
    },
    {
        title: "ITC Football header",
        them: "/service/500x500/ITC_Football_header.png",
        url: 'https://youtube.com/shorts/5JFvK6a15oI?feature=share'
    },
    {
        title: "ITC Football Bounce Roll",
        them: "/service/500x500/ITC_Football_Bounce_Roll.png",
        url: 'https://www.instagram.com/p/CmddNv-oDak/'
    },
    {
        title: "Fun wagerz - FIFA world cup",
        them: "/service/500x500/Fun_wagerz.png",
        url: 'https://www.instagram.com/reel/CmGRGWWj7wC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA'
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
                        <div className="pb-5 pt-4 ads_main_play">
                            <h2 className='text-center ads_heading'>What can you do with <br /> <span>Playable Ads?</span></h2>

                            {/* desktop  */}
                            <Container className='pt-5 desktop'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} sm={12} md={12} className='card-inner-padding d-flex justify-content-center'>
                                        <div className="d-100  ads_container_one">
                                            <div className="ads-card-back-container">
                                                <Image src='/service/ads-card-bg-light.png' width={1920} height={1080} />
                                            </div>
                                            <div className="top_image">
                                                <Image src='/service/Immersive-preview.png' width={1920} height={1080} />
                                            </div>
                                            <div className="ads_card_front_container">
                                                <h3 className='ads-card-heading'>Create an <span>Immersive Preview</span></h3>
                                                <div className="para_container_aside">
                                                    <div className="side_image">
                                                        <AiOutlineFileSearch />
                                                    </div>
                                                    <p className='card_para_ads'>Use a lead-in video in the <br />
                                                        news feed or stories to highlight <br />
                                                        your app or game and encourage <br />
                                                        players to download it</p>

                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} sm={12} md={12} className='card-inner-padding d-flex justify-content-center'>
                                        <div className="d-100  ads_container_one">
                                            <div className="ads-card-back-container">
                                                <Image src='/service/ads-card-bg-dark.png' width={1920} height={1080} />
                                            </div>
                                            <div className="top_image">
                                                <Image src='/service/Engaged-players.png' width={1920} height={1080} />
                                            </div>
                                            <div className="ads_card_front_container">
                                                <h3 className='ads-card-heading'>Find engaged  <span>players and customers</span></h3>
                                                <div className="para_container_aside">
                                                    <div className="side_image_dard">
                                                        <MdMobileFriendly />
                                                    </div>
                                                    <p className='card_para_ads'>
                                                        Drive more clients and gamers <br />
                                                        with higher intent to your app.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={6} xl={6} lg={6} sm={12} md={12} className='card-inner-padding d-flex justify-content-center'>
                                        <div className="d-100  ads_container_one">
                                            <div className="ads-card-back-container">
                                                <Image src='/service/ads-card-bg-light.png' width={1920} height={1080} />
                                            </div>
                                            <div className="top_image">
                                                <Image src='/service/Allow-People.png' width={1920} height={1080} />
                                            </div>
                                            <div className="ads_card_front_container">
                                                <h3 className='ads-card-heading'>Allow people to <span>test-drive your app</span></h3>
                                                <div className="para_container_aside">
                                                    <div className="side_image">
                                                        <IoIosPeople />
                                                    </div>
                                                    <p className='card_para_ads'>
                                                        Give people the option to view <br />
                                                        a preview of your app right from <br />
                                                        the ad before downloading it.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xxl={6} xl={6} lg={6} sm={12} md={12} className='card-inner-padding d-flex justify-content-center'>
                                        <div className="d-100  ads_container_one">
                                            <div className="ads-card-back-container">
                                                <Image src='/service/ads-card-bg-dark.png' width={1920} height={1080} />
                                            </div>
                                            <div className="top_image">
                                                <Image src='/service/Data-insights.png' width={1920} height={1080} />
                                            </div>
                                            <div className="ads_card_front_container">
                                                <h3 className='ads-card-heading'>Gain access to <span>valuable data insights</span>
                                                </h3>
                                                <div className="para_container_aside">
                                                    <div className="side_image_dard">
                                                        <VscGraphLine />
                                                    </div>
                                                    <p className='card_para_ads'>
                                                        Learn which user will interact with <br />
                                                        your ads and which CTA will lead <br />
                                                        to the most conversions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            {/* Mobile  */}
                            <Container className='mobile'>
                                <Row>
                                    {/* 1 */}
                                    <Col sm={12} xs={12}>
                                        <div className="ads-mobile_inner">
                                            <Row className='align-items-center'>
                                                <Col sm={3} xs={3}>
                                                    <div className="ads-mobile_inner">
                                                        <Image src='/service/Immersive-preview.png' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                                <Col sm={9} xs={9}>
                                                    <div className="ads-mobile_inner">
                                                        <h3>Create an <span>Immersive Preview</span></h3>
                                                        <p>
                                                            Use a lead-in video in the <br />
                                                            news feed or stories to highlight <br />
                                                            your app or game and encourage <br />
                                                            players to download it
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    {/* 2 */}
                                    <Col sm={12} xs={12} className='mt-5'>
                                        <div className="ads-mobile_inner">
                                            <Row className='align-items-center'>
                                                <Col sm={9} xs={9}>
                                                    <div className="ads-mobile_inner">
                                                        <h3>Find engaged  <span>players and customers</span></h3>
                                                        <p>
                                                            Drive more clients and gamers <br />
                                                            with higher intent to your app.
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col sm={3} xs={3}>
                                                    <div className="ads-mobile_inner">
                                                        <Image src='/service/Engaged-players.png' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    {/* 3 */}
                                    <Col sm={12} xs={12} className='mt-5'>
                                        <div className="ads-mobile_inner">
                                            <Row className='align-items-center'>
                                                <Col sm={3} xs={3}>
                                                    <div className="ads-mobile_inner">
                                                        <Image src='/service/Allow-People.png' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                                <Col sm={9} xs={9}>
                                                    <div className="ads-mobile_inner">
                                                        <h3>Allow people to <span>test-drive your app</span></h3>
                                                        <p>
                                                            Give people the option to view <br />
                                                            a preview of your app right from <br />
                                                            the ad before downloading it.
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    {/* 3 */}
                                    <Col sm={12} xs={12} className='mt-5'>
                                        <div className="ads-mobile_inner">
                                            <Row className='align-items-center'>
                                                <Col sm={9} xs={9}>
                                                    <div className="ads-mobile_inner">
                                                        <h3>Gain access to <span>valuable data insights</span></h3>
                                                        <p>
                                                            Learn which user will interact with <br />
                                                            your ads and which CTA will lead <br />
                                                            to the most conversions
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col sm={3} xs={3}>
                                                    <div className="ads-mobile_inner">
                                                        <Image src='/service/Data-insights.png' width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <h2 className='text-center pt-5 ads_heading mt-5'>Playable Ads are made up of <br /> <span>three parts</span> </h2>
                            <Container>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={6} xs={12}>
                                        <div className="ads-col-inner">
                                            <Image src='/service/phone_01.png' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} xs={12}>
                                        <div className="ads-col-inner">
                                            <Image src='/service/phone_02.png' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={6} xs={12}>
                                        <div className="ads-col-inner">
                                            <Image src='/service/phone_03.png' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className='py-5'>
                                <Row>
                                    <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12} className='d-flex align-items-center flex-column justify-content-center'>
                                        <div className="ads-col-inner">
                                            <h3 className='ads_Benefits_heading'> Benefits for <span>consumers</span></h3>
                                            <p className='ads_Benefits_para'>Playable is an effective ad unit for mobile <br />
                                                and one that connects with customers <br />
                                                because it blends gamification and <br />
                                                interactivity.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <div className="ads-col-inner p-2">
                                            <Image src='/service/ads-play.svg' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* <h2 className='text-center heading pt-5'>Playable Ads</h2> */}
                            <Container>
                                {/* <div className="serviceContainer p-0 ">
                                    <p className='text-center'>
                                        Playable ads are a type of interactive advertisement that give users the opportunity to try out a mobile app experience before they are required to download the full version of the app.It works on a “try-before-buy” concept.
                                    </p>
                                    <p className='text-center'>
                                        Additionally,playables are "A single ad unit that mixes interaction with gamification to facilitate full-funnel marketing brand communication (attention, education, and action)"
                                    </p>
                                </div> */}
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head' >Benefits </h3>
                                    <div className='text-center benifit-para'>Why Playables?</div>
                                </div>
                                <Row className='justify-content-center'>
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
                                                Playable ads increase engagement, conversion rates, and provide interactive user experiences.
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
                                                Playable ads allow users to interact and experience products, increasing conversion.
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
                                                70% better memory recall rate
                                            </h5>
                                            <p>
                                                Interactive playable ads create more memorable experiences, boosting recall rates.
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
                                                Playable ads keep users engaged and interested, leading to higher retention.
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
                                                Interactive playable ads accurately showcase products, reducing chances of uninstallation.
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
                                                Playable ads offer detailed insights and metrics for effective campaign optimization.
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
                        <Container>
                            <Row className="justify-content-center pb-4">
                                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                                    <div className="text-center py-5">
                                        playable ads are a powerful tool for digital advertisers looking to engage their audience in a fun and interactive way. By providing users with a unique and memorable experience, you can increase brand awareness, drive conversions, and gain valuable insights into user behavior. So why not try incorporating playable ads into your next digital ad campaign?
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer bg={'#fff'} />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PlayableAds