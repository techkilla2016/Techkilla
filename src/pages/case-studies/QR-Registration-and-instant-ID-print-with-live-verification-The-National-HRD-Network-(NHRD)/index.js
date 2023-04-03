import { ButtonLight } from '@/components/button/Button'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiBlockchaindotcom } from 'react-icons/si'
const packagecart = [
    ' Personalized registration form',
    "Scanner application (Web based)",
    "Backend records",
    "Auto emailing",
    "Unique QR code for all the participants",
    "Unique QR code for all the participants",
    "Whitelisted URL (Optional)",
    "Add-on features with in microsite",
]

const graphGrow = [
    {
        img: '/assets/Microsite/graph_01.png',
        title: 'MORE ENGAGING',
        desc: `Experiential technology gives a user 3X more engagement than any TVc, video ads or billboards.`
    },
    {
        img: '/assets/Microsite/graph_02.png',
        title: 'MORE MEMORABLE',
        desc: `participation in an activity & earning rewards gives a 70% better memory recall rate.`
    },
    {
        img: '/assets/Microsite/graph_03.png',
        title: 'OF CONSUMER',
        desc: `One-third of shoppers concur that handling the product in person enhances the shopping experience.`
    },
    {
        img: '/assets/Microsite/graph_03.png',
        title: 'MORE ACCESSIBLE',
        desc: `Using experiential technology, millions of people can interact both in person & online at once.`
    },
]

const choose_list = [
    {
        title: 'Cost-effective solutions',
        desc: `The business's ROI plan is transparent. As a result, 
        our pricing is reasonable and competitive.`,
        img: '/assets/Microsite/choose_01.png'
    },
    {
        title: 'Customizable Unique Designs',
        desc: `We create entirely individualised business solutions 
        based on your requirements and utility`,
        img: '/assets/Microsite/choose_02.png'
    },
    {
        title: 'Customer Support',
        desc: `Customer satisfaction is our top priority, and our 
        support staff is dedicated to providing the best service.`,
        img: '/assets/Microsite/choose_03.png'
    },
    {
        title: 'Strong Expertise',
        desc: `Our tight-knit team of experts simplifies and accurately 
        solves complex problems for your idea.`,
        img: '/assets/Microsite/choose_04.png'
    },
    {
        title: 'Free Consultation',
        desc: `Our strategy experts can help you find the best solutions 
        for your brand theme and campaign.`,
        img: '/assets/Microsite/choose_05.png'
    },
]

const index = ({ user_case, How_does_it_function, benefits, our_industry_expertise }) => {
    return (
        <>
            <Head>
                <title> QR Registration and instant ID print with live verification - The National HRD Network </title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className="mainContainer">
                        <div className="microHome1">
                            <div className="pagebg">
                                <Image src='/assets/Microsite/micrositeHome.png' width={1920} height={1080} />
                            </div>
                            <div className="microHome">
                                <Container>
                                    <div className="microIntro">
                                        QR code registration & Auto verification
                                        software with Instant ID print
                                    </div>
                                </Container>
                                <div className="microBtnSection resbtn1">
                                    <ButtonLight target='https://calendly.com/techkilla/meeting' title='BOOK A FREE DEMO NOW' />
                                </div>
                                <div className="microBtnSection resbtn2">
                                    <ButtonLight target='https://calendly.com/techkilla/meeting' title='BOOK DEMO' />
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="microSection">
                            <h1 className="heading">
                                What is <span>QR Code</span> Registration?
                            </h1>
                            <Container>
                                <div className="microFulImg">
                                    <Image src='/assets/Microsite/microsite.png' width={1920} height={1080} />
                                </div>
                                <div className="microPara">
                                    QR code registration is a form of one-of-a-kind registration process that occurs
                                    when a wider audience must be managed in terms of attendance,verification,
                                    and backend entry count over time. It overcomes the difficulty of dealing with
                                    and maintaining manual records and also saves time & labor
                                </div>
                            </Container>
                        </div>

                        {/* 3 */}
                        <div className="microSection2">
                            <Container>
                                <div className="micro_heading01">How does it <span>function</span>? </div>
                                {
                                    How_does_it_function?.map((item, index) => (
                                        <div className={index % 2 === 1 ? "microFun microFun1" : "microFun"} key={index}>
                                            <div className="microFun_contain">
                                                <h3 className="micro_title">
                                                    {item?.title}
                                                </h3>
                                                <p className='micro_desc'>
                                                    {item?.desc}
                                                </p>
                                            </div>
                                            <div className="microFun_img">
                                                <Image src={item?.img} alt={item?.title} width={1920} height={1080} />
                                            </div>
                                        </div>
                                    ))
                                }

                            </Container>
                        </div>

                        {/* usecase 4  */}
                        <div className="micro_qr">
                            <h2 className="micro_heading01 mb-4">
                                Use <span>cases</span>
                            </h2>
                            <div className="qr-p">
                                <Container>
                                    <Row>
                                        {
                                            user_case?.map((curCase, index) => {
                                                // const Compo = 
                                                return (
                                                    <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                        <div className="col-qr">
                                                            <div className="qr-cases">
                                                                <h3 className="qr-cases-icon">
                                                                    <Image src={curCase.icon} width={1920} height={1080} />
                                                                </h3>
                                                                <div className="qr-title">
                                                                    {curCase?.title}
                                                                </div>
                                                                <div className="qr-desc">
                                                                    {curCase?.desc}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }

                                    </Row>
                                </Container>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="microSection2 my-4">
                            <div className="micro_heading01 BenefitsHeading">Benefits </div>
                            <Container className='pt-4'>
                                <Row>
                                    {
                                        benefits?.map((item, index) => (
                                            <Col key={index} xxl={3} xl={3} lg={3} md={4} sm={6} xm={12}>
                                                <div className="micro-b-cart">
                                                    <div className="micro-b-them">
                                                        <Image src={item.img} width={1920} height={1080} />
                                                    </div>
                                                    <p className="micro-b-title">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Container>
                        </div>

                        {/* 6 */}
                        <div className="micro_qr">
                            <Container>
                                <div className="micro_heading01" style={{ textAlign: 'left' }}>Case <span>studies</span> </div>
                                <div className="pointBox">
                                    <div className="count">
                                        1
                                    </div>
                                    <div className="point">
                                        <Link href='https://www.youtube.com/watch?v=pD1otredtSY&feature=youtu.be'> NHRD decode with future event</Link>
                                    </div>
                                </div>
                                <div className="pointBox">
                                    <div className="count">
                                        2
                                    </div>
                                    <div className="point">
                                        <Link href="https://youtube.com/shorts/pfJGe8uSg-E?feature=share">Microsoft Hackathon</Link>
                                    </div>
                                </div>
                                <div className="pointBox">
                                    <div className="count">
                                        3
                                    </div>
                                    <div className="point">
                                        <Link href='https://youtube.com/shorts/pfJGe8uSg-E?feature=share'>DOW packaging and supplies</Link>
                                    </div>
                                </div>
                            </Container>
                        </div>

                        {/* 7 */}
                        <div className="micro_qr">
                            <Container>
                                <div className="micro_heading01" style={{ textAlign: 'left' }}>Package <span>includes</span></div>
                                {
                                    packagecart?.map((item, index) => {
                                        return <div className="pointBox">
                                            <div className="count">
                                                {index + 1}
                                            </div>
                                            <div className="point">
                                                {item}
                                            </div>
                                        </div>
                                    })
                                }
                            </Container>
                        </div>

                        {/* 8 */}
                        <div className="Qr_cartSection">
                            <div className="micro_heading01">Cost </div>
                            <div className="qr-cost-cart">
                                <Container>
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                            <div className="cost-cart-box">
                                                <div className="cost_cart">
                                                    <div className="top">
                                                        <div className="service_type">
                                                            BASIC
                                                        </div>
                                                        <div className="price_section">
                                                            <div className="cart-btnBox">
                                                                <div className="price-label">
                                                                    ₹ 25000/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="facilitie">
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Registration page customization (only logo)
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Unique QR code</div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Upto 1k users</div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Scanner app</div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Auto emailing</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pay_section">
                                                        <div className="cart-btnBox">
                                                            <button className="price-label">
                                                                ORDER NOW
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                            <div className="cost-cart-box">
                                                <div className="cost_cart">
                                                    <div className="top">
                                                        <div className="service_type">
                                                            STANDARD
                                                        </div>
                                                        <div className="price_section">
                                                            <div className="cart-btnBox">
                                                                <div className="price-label">
                                                                    ₹ 35000/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="facilitie">
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Registration page customization
                                                                    (Background & Logo)
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Unique QR code
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Upto 1500 users
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Scanner app
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Auto emailing
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pay_section">
                                                        <div className="cart-btnBox">
                                                            <button className="price-label">
                                                                ORDER NOW
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>


                                        <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                                            <div className="cost-cart-box">
                                                <div className="cost_cart">
                                                    <div className="top">
                                                        <div className="service_type " style={{ color: '#fdb714' }}>
                                                            PREMIUM
                                                        </div>
                                                        <div className="price_section">
                                                            <div className="cart-btnBox">
                                                                <div className="price-label">
                                                                    ₹ 45000/-
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="facilitie">
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Registration page customization
                                                                    (Background & Logo)
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Unique Color QR code
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Upto 2k users
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Scanner app
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Auto Emailing
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Instant printing option
                                                                </div>
                                                            </div>
                                                            <div className="facilitie_option">
                                                                <div className="icon_fa">
                                                                    <SiBlockchaindotcom />
                                                                </div>
                                                                <div className="fa_text">
                                                                    Customized URL
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="pay_section">
                                                        <div className="cart-btnBox">
                                                            <button className="price-label">
                                                                ORDER NOW
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <Container>
                                <div className="qr_note">
                                    <span>Note-</span> Start with your customized microsite now. <Link href='https://calendly.com/techkilla/'>Book Demo</Link>
                                </div>
                            </Container>
                        </div>

                        {/* 9 */}
                        <div className="microSection" style={{ background: '#fff' }}>
                            <h2 className="heading">
                                Additional features
                            </h2>
                            <Container>
                                <div className="microFulImg">
                                    <Image src='/assets/Microsite/microsite_02.png' width={1920} height={1080} />
                                </div>
                                <div className="microPara">
                                    Your microsite can experience more features like Gaming engagement,
                                    digital photobooth interlinking, HR planned activities & many more use
                                    cases.We customize your microsite as per the storyline and new ideas.
                                </div>
                            </Container>
                        </div>

                        {/* 10 */}
                        <div className="Expertise_container" >
                            <Container>
                                <div className="micro_heading01">Our <span>Industry</span> Expertise</div>
                                <div className="qr_Expertise_container">
                                    <Row>
                                        {
                                            our_industry_expertise?.map((item, index) => {
                                                return <Col key={index} xxl={3} xl={3} lg={3} md={4} sm={6} xm={12}>
                                                    <div className="qr_expertise">
                                                        <div className="qr_exp_img">
                                                            <Image src={item.img} width={1920} height={1080} />
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
                                                            <Image src={item.img} width={1920} height={1080} />
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
                                            <Image src='/assets/Microsite/Brands.png' width={1920} height={1080} />
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
                                            <Image src='/assets/Microsite/logo-02.png' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/assets/Microsite/logo-01.png' width={1920} height={1080} />
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
                                                        <Image src={item.img} width={1920} height={1080} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        })
                                    }

                                </Container>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default index

export const getServerSideProps = async () => {
    // How_does_it_function
    const How_does_it_function = await fetch('http://localhost:3000/api/QR-Registration/How_does_it_function')
    const How_does_it_function_result = await How_does_it_function.json()

    // use case 
    const res = await fetch('http://localhost:3000/api/QR-Registration/user-case')
    const user_case_result = await res.json()

    // benefits
    const benefits_res = await fetch('http://localhost:3000/api/QR-Registration/benefits')
    const benefits_result = await benefits_res.json()

    // benefits
    const our_industry_expertise = await fetch('http://localhost:3000/api/QR-Registration/benefits')
    const our_industry_expertise_result = await our_industry_expertise.json()

    return {
        props: {
            How_does_it_function: How_does_it_function_result?.data,
            user_case: user_case_result?.data,
            benefits: benefits_result?.data,
            our_industry_expertise: our_industry_expertise_result?.data
        }
    }
}