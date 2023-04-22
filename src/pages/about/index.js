import Footer from '@/components/footer'
import Header from '@/components/header'
import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import PortfolioSection from '@/components/home/section4'
import Button from '@/components/button/Button'
import Card from '@/components/card'
const expertise = [
    {
        img: '/microsite/expertise_01.png',
        title: "Healthcare & Pharmacy"
    },
    {
        img: '/microsite/expertise_02.png',
        title: "Automobile Industry"
    },
    {
        img: '/microsite/expertise_03.png',
        title: "Travel & Tourism"
    },
    {
        img: '/microsite/expertise_04.png',
        title: "Banking"
    },
    {
        img: '/microsite/expertise_05.png',
        title: "Gaming Industry"
    },
    {
        img: '/microsite/expertise_06.png',
        title: "E-Commerce & Retail"
    },
    {
        img: '/microsite/expertise_07.png',
        title: "Education"
    },
    {
        img: '/microsite/expertise_08.png',
        title: "Hotel & Restaurants"
    },
    {
        img: '/microsite/expertise_09.png',
        title: "Media Event & Entertainment"
    },
    {
        img: '/microsite/expertise_10.png',
        title: "Food & Beverages"
    },
]

const graphGrow = [
    {
        img: '/microsite/graph_01.png',
        title: 'MORE ENGAGING',
        desc: `Experiential technology gives a user 3X more engagement than any TVc, video ads or billboards.`
    },
    {
        img: '/microsite/graph_02.png',
        title: 'MORE MEMORABLE',
        desc: `participation in an activity & earning rewards gives a 70% better memory recall rate.`
    },
    {
        img: '/microsite/graph_03.png',
        title: 'OF CONSUMER',
        desc: `One-third of shoppers concur that handling the product in person enhances the shopping experience.`
    },
    {
        img: '/microsite/graph_04.png',
        title: 'MORE ACCESSIBLE',
        desc: `Using experiential technology, millions of people can interact both in person & online at once.`
    },
]

const choose_list = [
    {
        title: 'Cost-effective solutions',
        desc: `The business's ROI plan is transparent. As a result, 
        our pricing is reasonable and competitive.`,
        img: '/microsite/choose_01.png'
    },
    {
        title: 'Customizable Unique Designs',
        desc: `We create entirely individualised business solutions 
        based on your requirements and utility`,
        img: '/microsite/choose_02.png'
    },
    {
        title: 'Customer Support',
        desc: `Customer satisfaction is our top priority, and our 
        support staff is dedicated to providing the best service.`,
        img: '/microsite/choose_03.png'
    },
    {
        title: 'Strong Expertise',
        desc: `Our tight-knit team of experts simplifies and accurately 
        solves complex problems for your idea.`,
        img: '/microsite/choose_04.png'
    },
    {
        title: 'Free Consultation',
        desc: `Our strategy experts can help you find the best solutions 
        for your brand theme and campaign.`,
        img: '/microsite/choose_05.png'
    },
]

const data = [
    {
        title: 'Microsite design',
        description: 'We create customised microsites for your occasions, unique needs, and interaction.',
        img: '/service/MD.webp',
        slag: '/service/Microsite-Design',
        color: '#fcfcfc',
    },
    {
        title: 'Virtual reality Solutions',
        description: 'specialised VR 360 solutions for gaming and audience engagement.',
        img: '/service/VR.webp',
        slag: '/service/VR-Solutions',
        color: '#7dbee91f',
    },
    {
        title: 'Playable Ads',
        description: 'Interactive gaming ads made just for app advertisers to let people try before they buy.',
        img: '/service/ADS.webp',
        slag: '/service/Playable-Ads',
        color: '#becedb4f',
    },
    {
        title: 'On-ground activations',
        description: 'We engage your audience in an intuitive way with fun experiential activities.',
        img: '/service/Game.webp',
        slag: '/service/On-ground-activations',
        color: '#fcfafe',
    },
]
const About = ({ work }) => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className='py-5 lightBG'>
                            <Container>
                                <Row>
                                    <Col lg={6} md={12} sm={12} className='px-4' style={{ background: "#fff" }} >
                                        <Image src='/about2.gif' width={1920} height={1080} />
                                    </Col>
                                    <Col lg={6} md={12} sm={12} >
                                        <ColRight about="Who We Are" />
                                    </Col>
                                </Row>
                                <h3 className="colHeading text-center pt-4 mt-4">
                                    We address your issues to draw customers to your brand.
                                </h3>
                                <Row className='mt-5'>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} >
                                        <div className='d-flex justify-content-start'>
                                            <div className="img_section">
                                                <div className='img'>
                                                    <Image src='/home/empathize.png' alt="Best Performance" width={1920} height={1080} />
                                                </div>
                                            </div>
                                            <div className="para_section">
                                                <div className="heading">Empathize</div>
                                                <div className='para'>
                                                    We carefully consider your problem statements and make the finest recommendation.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} >
                                        {/* <div className="sub_secction"> */}
                                        <div className='d-flex justify-content-start'>
                                            <div className="img_section">
                                                <div className='img'>
                                                    <Image src='/home/persnalize.png' alt="Ideal Strategic" width={1920} height={1080} />
                                                </div>
                                            </div>
                                            <div className="para_section">
                                                <div className="heading">Personalize</div>
                                                <div className='para'>
                                                    Utilise Our State-of-the-Art Technology Solutions to Meet Your Specific Needs
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} >
                                        <div className='d-flex justify-content-start'>
                                            <div className="img_section">
                                                <div className='img'>
                                                    <Image src='/home/best_performance.png' alt="Best Performance" width={1920} height={1080} />
                                                </div>
                                            </div>
                                            <div className="para_section">
                                                <div className="heading">Best Performance</div>
                                                <div className='para'>
                                                    We construct the ideal play based on that tale to maximise your company's ROI.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-5 d-flex justify-content-center flex-sm-row flex-column" >
                                    <div className='m-3'>
                                        <Button target='/' title='Read more' />
                                    </div>
                                    <div className='m-3'>
                                        <Button target='https://calendly.com/techkilla/meeting' title='Book free demo' />
                                    </div>
                                </div>
                            </Container>
                        </div>
                        <div className='pb-5' style={{ background: "#fff" }}>
                            <div className="micro_heading01" >Our <span>Services</span></div>
                        </div>
                        <div className="section3">
                            <div className="section3Inner">
                                {/* <ServiceSection /> */}
                                <Container>
                                    <Row>
                                        {
                                            data.map((curItem, index) => {
                                                return <Card {...curItem} key={index} />
                                            })
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        {/* 10 */}
                        <div className="Expertise_container pt-5" >
                            <Container>
                                <div className="micro_heading01 pt-5">Our <span>Industry</span> Expertise</div>
                                <div className="qr_Expertise_container">
                                    <Row>
                                        {
                                            expertise?.map((item, index) => {
                                                return <Col key={index} xxl={3} xl={3} lg={3} md={4} sm={6} xm={12}>
                                                    <div className="qr_expertise">
                                                        <div className="qr_exp_img">
                                                            <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                        </div>
                                                        <div className="expertise_title">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </Container>
                            <Container>
                                <div className="Expertise_graph">
                                    <h3 className='Expertise_para'>Grow your reach with enhanced interactive engagements</h3>
                                    <Row>
                                        {
                                            graphGrow?.map((item, index) => {
                                                return <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} key={index}>
                                                    <div className="graph_container">
                                                        <div className="graph_img">
                                                            <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                        </div>
                                                        <h4>{item.title}</h4>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </Col>
                                            })
                                        }
                                    </Row>
                                </div>
                            </Container>
                        </div>

                        {/* 11 */}
                        <div className="Expertise_container res-top" style={{ background: '#f5f5f4' }} >
                            <Container>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="micro_heading01">
                                            We <span>Collaborate</span> with <span>Brands</span> and <span>Agencies!</span>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="imgfulScreen">
                                            <Image src='/microsite/Brands.png' alt='we collaorate with brands and agencies' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* 12 */}
                        <div className="Expertise_container py-5">
                            <Container>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/microsite/logo-02.png' alt={'Collaborate'} width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/microsite/logo-01.png' alt={'Collaborate'} width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="choose_container">
                                <Container>
                                    {
                                        choose_list?.map((item, index) => {
                                            return <Row className='align-items-center'>
                                                <Col xxl={9} xl={9} lg={9} md={9} sm={12} xm={12} >
                                                    <div className="choose_list">
                                                        <h3><span></span> {item.title}</h3>
                                                        <p>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={3} md={3} sm={12} xm={12} >
                                                    <div className="imageSec">
                                                        <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        })
                                    }

                                </Container>
                            </div>
                        </div>



                        {/* section  */}
                        <div className="section4">
                            <div className="section4Inner">
                                <PortfolioSection work={work} lastLine="With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals." />
                            </div>
                        </div>


                        <Footer bg="#fafafa" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default About
export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BaseUrl}/api/work/`)
    const data = await res.json()
    return ({
        props: {
            work: data?.data
        }
    })
}