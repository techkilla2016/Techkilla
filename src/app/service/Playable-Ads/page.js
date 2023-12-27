import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SingleCard from '@/components/Slider/singleCard'
import relatedProject from '@/data/service/Playable-Ads/relativedProject'
import PlayableAdsData from '@/data/service/Playable-Ads/PlayableAds'
import adsPart from '@/data/service/Playable-Ads/adsPart'
import benifit from '@/data/service/Playable-Ads/benifit'
import BenifitCard from '@/components/general/Benefits'
export const metadata = {
    title: 'Playable Ads',
    description: `Develop by Techkilla's Teams`,
}
const PlayableAds = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='product_landing' style={{ background: '#fff' }}>
                            <div className='product_landing_background'>
                                <div className='preloaderBack'>
                                    <Image src='/assets/banner/Playable-ads_01.png' alt='Physical Engagement' width={1920} height={1080} />
                                    <Image src='/assets/banner/Playable-ads.png' alt='Physical Engagement' width={1920} height={1080} />
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
                                                    <Image src='/assets/service/ad.png' alt='Physical Engagement' width={1080} height={1920} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 pt-4 ads_main_play">
                            <h2 className='text-center ads_heading'>What can you do with <br /> <span>Playable Ads?</span></h2>

                            {/*for  desktop  */}
                            <Container className='pt-5 desktop'>
                                <Row>
                                    {
                                        PlayableAdsData?.map((item, keys) => {
                                            return (
                                                <Col key={keys} xxl={6} xl={6} lg={6} sm={12} md={12} className='card-inner-padding d-flex justify-content-center'>
                                                    <div className="d-100  ads_container_one">
                                                        <div className="ads-card-back-container">
                                                            <Image src={item?.bg}  alt='techkilla, playable-ads' width={1920} height={1080} />
                                                        </div>
                                                        <div className="top_image">
                                                            <Image src={item?.img} alt='techkilla, playable-ads' width={1920} height={1080} />
                                                        </div>
                                                        <div className="ads_card_front_container">
                                                            <h3 className='ads-card-heading'>{item?.title}</h3>
                                                            <div className="para_container_aside">
                                                                <div className="side_image">
                                                                    {item?.icon}
                                                                </div>
                                                                <p className='card_para_ads'>{item?.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Container>

                            {/*for Mobile  */}
                            <Container className='mobile'>
                                <Row>
                                    {/* 1 */}
                                    <Col sm={12} xs={12}>
                                        <div className="ads-mobile_inner">
                                            <Row className='align-items-center'>
                                                {
                                                    PlayableAdsData?.map((item, keys) => {
                                                        return (
                                                            (keys % 2 == 1) ? <React.Fragment key={keys}>
                                                                <Col sm={3} xs={3} className='py-3'>
                                                                    <div className="ads-mobile_inner">
                                                                        <Image alt={item?.title} src={item?.img} width={1920} height={1080} />
                                                                    </div>
                                                                </Col>
                                                                <Col sm={9} xs={9} className='py-3'>
                                                                    <div className="ads-mobile_inner">
                                                                        <h3>{item?.title}</h3>
                                                                        <p> {item?.desc} </p>
                                                                    </div>
                                                                </Col>
                                                            </React.Fragment> : <React.Fragment key={keys}>
                                                                <Col sm={9} xs={9} className='py-3'>
                                                                    <div className="ads-mobile_inner">
                                                                        <h3>{item?.title}</h3>
                                                                        <p> {item?.desc} </p>
                                                                    </div>
                                                                </Col>
                                                                <Col sm={3} xs={3} className='py-3'>
                                                                    <div className="ads-mobile_inner">
                                                                        <Image alt={item?.title} src={item?.img} width={1920} height={1080} />
                                                                    </div>
                                                                </Col>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <h2 className='text-center pt-5 ads_heading mt-5'>Playable Ads are made up of <br /> <span>three parts</span> </h2>
                            <Container>
                                <Row>
                                    {
                                        adsPart?.map((item, keys) => {
                                            return (
                                                <Col xxl={4} xl={4} key={keys} lg={4} md={6} xs={12}>
                                                    <div className="ads-col-inner">
                                                        <Image src={item?.img} alt={item?.title} width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
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
                                            <Image src='/assets/service/ads-play.svg' alt='techkilla, Benefits for consumers' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>


                            {/* benifit */}
                            <Container>
                                <div className="serviceContainer pb-5">
                                    <h3 className='text-center benifit-head' >Benefits </h3>
                                    <div className='text-center benifit-para'>Why Playables?</div>
                                </div>
                                <Row className='justify-content-center'>
                                    {
                                        benifit?.map((item, keys) => {
                                            return (
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} key={keys} xm={12} className='mt-2'>
                                                    <BenifitCard payload={item} />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>

                            </Container>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={relatedProject} />
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
            </main >

        </>
    )
}

export default PlayableAds