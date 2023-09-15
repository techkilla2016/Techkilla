import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { SiTailwindcss } from 'react-icons/si'
import { FaTeamspeak } from 'react-icons/fa'
import { IoMdTrendingUp } from 'react-icons/io'
import { MdDone } from 'react-icons/md'
import Hero from '@/components/photo-ai/hero';
const PhotoAI = () => {
    const aiList = [
        "No Need for Staffing",
        "Ready for iPad Use",
        "Accessible on Mobile Devices with Ease",
        "User-Friendly and Intuitive",
        "Instant Sharing via QR Code, Email, or Drive",
        "Compatible with On-Site Printing"
    ]
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <Hero isContinue={false} />

                        {/* section 2  */}
                        <Container className='photo-ai-company py-5'>
                            <Row>
                                <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                    <div className='inner d-flex flex-column align-items-center'>
                                        <div className="icon">
                                            <SiTailwindcss />
                                        </div>
                                        <h5 className="head text-center">
                                            Artistry Tailored Just for You
                                        </h5>
                                        <p className='text-center'>
                                            Personalized creative work with a unique touch, carefully crafted to suit individual preferences and needs.
                                        </p>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                    <div className='inner d-flex flex-column align-items-center'>
                                        <div className="icon">
                                            <FaTeamspeak />
                                        </div>
                                        <h5 className="head text-center">
                                            Immersive Interaction at its Peak
                                        </h5>
                                        <p className='text-center'>
                                            An engaging experience that deeply involves participants, reaching the zenith of immersive engagement.
                                        </p>
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                    <div className='inner d-flex flex-column align-items-center'>
                                        <div className="icon">
                                            <IoMdTrendingUp />
                                        </div>
                                        <h5 className="head text-center">
                                            Embracing the Pinnacle of Current Style
                                        </h5>
                                        <p className='text-center'>
                                            "Adopting the industry's latest and most fashionable trends to deliver remarkable outcomes."
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='py-4'>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_01.svg' alt="" />
                                </Col>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_02.svg' alt="" />
                                </Col>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_03.svg' alt="" />
                                </Col>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_04.svg' alt="" />
                                </Col>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_05.svg' alt="" />
                                </Col>
                                <Col xxl={2} xl={2} lg={2} md={3} sm={4} xs={6} className='p-5'>
                                    <img src='/photo-ai/company_01.svg' alt="" />
                                </Col>
                            </Row>
                        </Container>


                        {/* section 3 */}
                        <div className='What-ai py-5'>
                            <Container >
                                <Row className='justify-content-evenly'>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <h2 className='py-3'>What Exactly Is an AI-Enhanced Photo Booth?</h2>
                                        <p>
                                            At the heart of our cutting-edge photo booth platform, AI Photoshots, lies the infusion of state-of-the-art generative AI technology, ensuring the creation of truly exceptional results.
                                        </p>
                                        <p>
                                            With this integration, you have the power to harness customized AI prompts to morph user photographs into enchanting, themed masterpieces. Our proprietary implementation goes a step further, allowing you to not only craft distinct styles but also dictate unique poses, introduce specific characters or objects.
                                        </p>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                        <Row>
                                            <Col xxl={6} lg={6} md={6} sm={6} xs={6} className='py-3'>
                                                <div className="img-ai-box">
                                                    <div className="imgBox">
                                                        <img src='/photo-ai/2nd-page/1.png' alt="" />
                                                    </div>
                                                    <div className="count-ai" id='count1'>1</div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} lg={6} md={6} sm={6} xs={6} className='py-3'>
                                                <div className="img-ai-box">
                                                    <div className="imgBox">
                                                        <img src='/photo-ai/2nd-page/2.png' alt="" />
                                                    </div>
                                                    <div className="count-ai" id='count2'>2</div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} lg={6} md={6} sm={6} xs={6} className='py-3'>
                                                <div className="img-ai-box">
                                                    <div className="imgBox">
                                                        <img src='/photo-ai/2nd-page/3.png' alt="" />
                                                    </div>
                                                    <div className="count-ai" id='count3'>3</div>
                                                </div>
                                            </Col>
                                            <Col xxl={6} lg={6} md={6} sm={6} xs={6} className='py-3'>
                                                <div className="img-ai-box">
                                                    <div className="imgBox">
                                                        <img src='/photo-ai/2nd-page/4.png' alt="" />
                                                    </div>
                                                    <div className="count-ai" id='count4'>4</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* section 4 */}
                        <div className="ai-model-container py-5">
                            <div className="ai-model-inner  py-5 d-flex align-items-start">
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-1.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-2.png" alt="" />
                                    </div>
                                </div>
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-3.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-4.png" alt="" />
                                    </div>
                                </div>
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-5.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-6.png" alt="" />
                                    </div>
                                </div>
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-7.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-8.png" alt="" />
                                    </div>
                                </div>
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-2.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-3.png" alt="" />
                                    </div>
                                </div>
                                <div className="ai-model-box mx-2">
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-7.png" alt="" />
                                    </div>
                                    <div className="img-ai-box-inner p-2">
                                        <img src="/photo-ai/model/Ai-photos-4.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* section 5 */}
                        <Container className='py-5 ai-list-container'>
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <h2> Your Event Engagement Solution for In-Person, Hybrid, and Virtual Gatherings</h2>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    {
                                        aiList?.map((item, keys) => {
                                            return <div key={keys} className="list-ai py-1 d-flex align-items-center">
                                                <div className="icon-done"><MdDone /></div>
                                                <div className="ai-title">{item}</div>
                                            </div>
                                        })
                                    }

                                </Col>
                            </Row>
                        </Container>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default PhotoAI