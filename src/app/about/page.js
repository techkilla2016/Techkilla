import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import PortfolioSection from '@/components/general/Portfolio'
import WhatWeDoData from '@/data/home/What-We-Do'
import work from '@/data/general/work'
import Service from '@/components/home/service'
import expertise from '@/data/about/expertise'
import graphGrow from '@/data/about/graphGrow'
import chooseList from '@/data/about/choose_list'
export const metadata = {
    title: 'About Us  | Techkilla',
    description: 'Develop by Techkilla Teams',
}
const About = () => {
    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        {/* hero section   */}
                        <div className='py-5 lightBG'>
                            <Container>
                                <Row>
                                    <Col lg={6} md={12} sm={12} className='px-4' style={{ background: "#fff" }}>
                                        <Image src='/assets/about/about.gif' alt='Techkilla' width={1920} height={1080} />
                                    </Col>
                                    <Col lg={6} md={12} sm={12} >
                                        <div className='right-col'>
                                            <div className='colHeading' data-aos="fade-up" data-aos-delay={200}>Who We Are</div>
                                            <h3 className="section__title" data-aos="fade-up" data-aos-delay={400}>
                                                Empowering brands through
                                                <span className="section__title-line"> digital creativity</span>
                                            </h3>
                                            <p className='section_Para pt-5 text-justify' data-aos="fade-up" data-aos-delay={600}>
                                                We are a dynamic team of professionals with a passion for delivering exceptional customer engagement solutions. We work closely with clients to create tailored solutions that address their unique challenges and help them achieve their business goals.
                                            </p>
                                            <p className='section_Para pb-4' data-aos="fade-up" data-aos-delay={800}>
                                                Our team is made up of experts from various backgrounds, including marketing, technology, and design. We are passionate about creating immersive experiences that captivate audiences and enhance customer engagement.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <h3 className="colHeading text-center pt-4 mt-4" data-aos="zoom-in-up" data-aos-delay={200}>
                                    We address your issues to draw customers to your brand.
                                </h3>
                                <Row className='mt-5'>
                                    {
                                        WhatWeDoData?.map((item, keys) => {
                                            return <Col xxl={4} xl={4} lg={4} md={12} sm={12} data-aos="fade-up" data-aos-delay="100" key={keys} >
                                                <div className='d-flex justify-content-start'>
                                                    <div className="img_section">
                                                        <div className='img'>
                                                            <Image src={item?.icon} alt={item?.alt} width={1920} height={1080} />
                                                        </div>
                                                    </div>
                                                    <div className="para_section">
                                                        <div className="heading">{item?.title}</div>
                                                        <div className='para'>
                                                            {item?.disc}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>


                        {/* service section  */}
                        <div className='pb-5' style={{ background: "#fff" }} >
                            <div className="micro_heading01" data-aos="zoom-in-down" data-aos-delay={100}>Our <span>Services</span></div>
                        </div>
                        <Service bg='/comman/tech.webp' />

                        {/* 10 */}
                        <div className="Expertise_container pt-5" >
                            <Container>
                                <div className="micro_heading01 pt-5" data-aos="zoom-in" data-aos-delay={100}>Our <span>Industry</span> Expertise</div>
                                <div className="qr_Expertise_container">
                                    <Row>
                                        {
                                            expertise?.map((item, index) => {
                                                return <Col key={index} xxl={3} xl={3} lg={3} md={4} sm={6} xm={12} data-aos="zoom-in-up" data-aos-delay={index * 100}>
                                                    <div className="qr_expertise">
                                                        <div className="qr_exp_img">
                                                            <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                        </div>
                                                        <div className="expertise_title" data-aos="fade-up" data-aos-delay={index * 100}>
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
                                    <h3 className='Expertise_para' data-aos="zoom-in-up" data-aos-delay={100}>Grow your reach with enhanced interactive engagements</h3>
                                    <Row>
                                        {
                                            graphGrow?.map((item, index) => {
                                                return <Col xxl={3} xl={3} lg={3} md={6} sm={6} xm={12} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                                    <div className="graph_container">
                                                        <div className="graph_img">
                                                            <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                        </div>
                                                        <h4 data-aos="fade-up" data-aos-delay={index * 100}>{item.title}</h4>
                                                        <p data-aos="fade-up" data-aos-delay={index * 150}>{item.desc}</p>
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
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} data-aos="zoom-in-right" data-aos-delay={100}>
                                        <div className="micro_heading01">
                                            We <span>Collaborate</span> with <span>Brands</span> and <span>Agencies!</span>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} data-aos="zoom-in-left" data-aos-delay={200}>
                                        <div className="imgfulScreen">
                                            <Image src='/assets/microsite/Brands.png' alt='we collaorate with brands and agencies' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* 12 */}
                        <div className="Expertise_container py-5">
                            <Container>
                                <Row className='align-items-center'>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} data-aos="zoom-out-right" data-aos-delay={100}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/assets/microsite/logo-02.png' alt={'Collaborate'} width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} data-aos="zoom-out-left" data-aos-delay={200}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/assets/microsite/logo-01.png' alt={'Collaborate'} width={1920} height={1080} />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="choose_container">
                                <Container>
                                    {
                                        chooseList?.map((item, index) => {
                                            return <Row className='align-items-center' key={index}>
                                                <Col xxl={9} xl={9} lg={9} md={9} sm={12} xm={12} data-aos="fade-up" data-aos-delay={index * 200} >
                                                    <div className="choose_list">
                                                        <h3 data-aos="fade-up" data-aos-delay={index * 100}><span></span> {item.title}</h3>
                                                        <p data-aos="fade-up" data-aos-delay={index * 200}>
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={3} lg={3} md={3} sm={12} xm={12} data-aos="zoom-in-up" data-aos-delay={index * 200} >
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
                            <div className="py-5">
                                <PortfolioSection work={work} lastLine="With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals." />
                            </div>
                        </div>


                        <Footer bg="#f5f5f4" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default About