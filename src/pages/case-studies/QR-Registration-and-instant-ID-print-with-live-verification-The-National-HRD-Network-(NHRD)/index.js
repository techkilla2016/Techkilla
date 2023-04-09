import { ButtonLight } from '@/components/button/Button'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiBlockchaindotcom } from 'react-icons/si'
import Button from '../../../components/button/Button'
const funData = [
    {
        title: 'Form to sign up for an event or campaign',
        desc: `A personalized web-browser-based registration form that lets your 
        audience fill in their own information or that the promoter can fill in
        on their behalf at the time of registration`,
        img: '/assets/microsite/microsite-banner-02.png'
    },
    {
        title: 'Automatic database registration link emailing',
        desc: `If we already have the database our intelligent software 
        auto sends the registration form link to all the users via email.`,
        img: '/assets/microsite/microsite-banner-03.png'
    },
    {
        title: 'Unique QR code',
        desc: `After submitting the form, each attendee will receive a personalized 
        QR code through email to present at the event`,
        img: '/assets/microsite/microsite-banner-04.png'
    },
    {
        title: 'QR Scanner with auto-verification',
        desc: `A QR code scanner web application that is solely dedicated to 
        the purpose of scanning and verifying attendance at the moment 
        of entry for all of the participants`,
        img: '/assets/microsite/microsite-banner-05.png'
    },
    {
        title: 'Instant printout',
        desc: `Immediately following the verification or completion of the form, 
        a printout will be generated and can be distributed to participants.`,
        img: '/assets/microsite/microsite-banner-06.png'
    },
    {
        title: 'Backend Acknowledgement & Database',
        desc: `The backend server will record the person's name and entry time 
        and date on the server for future use.`,
        img: '/assets/microsite/microsite-banner-07.png'
    },
]
const benefits = [
    {
        img: '/assets/microsite/microsite-b-01.png',
        title: `Chaos-free Audience Management`
    },
    {
        img: '/assets/microsite/microsite-b-02.png',
        title: `Effortless`
    },
    {
        img: '/assets/microsite/microsite-b-03.png',
        title: `100% Backend Record`
    },
    {
        img: '/assets/microsite/microsite-b-04.png',
        title: `Integrity of the data`
    },
    {
        img: '/assets/microsite/microsite-b-05.png',
        title: `Auto-email`
    },
    {
        img: '/assets/microsite/microsite-b-06.png',
        title: `Time-saver`
    },
]

const userCase = [
    {
        icon: '/assets/microsite/user-case01.png',
        title: 'Pre event registration',
        desc: `Online forms are increasingly being used for pre-event registration, when attendees provide their contact information and indicate whether they want to attend the event virtually or in person. Techkilla allows you to give your form a look and feel that is consistent with your brand.`
    },

    {
        icon: '/assets/microsite/user-case02.png',
        title: 'On spot registration',
        desc: `On-the-spot registration is performed at any event that requests attendee 
        information and requires immediate identification. For instance, at the 
        registration counter at trade shows and fairs, attendees' personal data is 
        collected and an ID card is promptly printed`
    },

    {
        icon: '/assets/microsite/user-case03.png',
        title: 'Entry verification',
        desc: `The verification of registered users' entries plays a crucial part in crowd 
        control by allowing entrance only to confirmed attendance. Techkilla's 
        web-based scanner programme reads the QR code to verify the user's 
        identity.`
    },

    {
        icon: '/assets/microsite/user-case04.png',
        title: 'Audience management',
        desc: `When working with a large group of people, it might be difficult to 
        keep everyone under control. Our proprietary software streamlines
        the process of managing a large audience by handling tasks such
        as signup, automated emailing, QR code production, verification, 
        and database administration.`
    },

    {
        icon: '/assets/microsite/user-case05.webp',
        title: 'Student registration',
        desc: `It is during admissions, college festivals, and other cultural events that 
        the majority of students sign up to attend. Our AI technology is able to 
        allow the management to operate on registration and fast ID printing 
        within no time and seamlessly.`
    },
    {
        icon: '/assets/microsite/user-case06.webp',
        title: 'Goodies distribution and many more',
        desc: `Almost every event and freebie distribution includes the delivery of 
        goodies as a form of appreciation. Get the user database with the help 
        of our software and send out rewards to real people.`
    },
]

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

const expertise = [
    {
        img: '/assets/microsite/expertise_01.png',
        title: "Healthcare & Pharmacy"
    },
    {
        img: '/assets/microsite/expertise_02.png',
        title: "Automobile Industry"
    },
    {
        img: '/assets/microsite/expertise_03.png',
        title: "Travel & Tourism"
    },
    {
        img: '/assets/microsite/expertise_04.png',
        title: "Banking"
    },
    {
        img: '/assets/microsite/expertise_05.png',
        title: "Gaming Industry"
    },
    {
        img: '/assets/microsite/expertise_06.png',
        title: "E-Commerce & Retail"
    },
    {
        img: '/assets/microsite/expertise_07.png',
        title: "Education"
    },
    {
        img: '/assets/microsite/expertise_08.png',
        title: "Hotel & Restaurants"
    },
    {
        img: '/assets/microsite/expertise_09.png',
        title: "Media Event & Entertainment"
    },
    {
        img: '/assets/microsite/expertise_10.png',
        title: "Food & Beverages"
    },
]

const graphGrow = [
    {
        img: '/assets/microsite/graph_01.png',
        title: 'MORE ENGAGING',
        desc: `Experiential technology gives a user 3X more engagement than any TVc, video ads or billboards.`
    },
    {
        img: '/assets/microsite/graph_02.png',
        title: 'MORE MEMORABLE',
        desc: `participation in an activity & earning rewards gives a 70% better memory recall rate.`
    },
    {
        img: '/assets/microsite/graph_03.png',
        title: 'OF CONSUMER',
        desc: `One-third of shoppers concur that handling the product in person enhances the shopping experience.`
    },
    {
        img: '/assets/microsite/graph_03.png',
        title: 'MORE ACCESSIBLE',
        desc: `Using experiential technology, millions of people can interact both in person & online at once.`
    },
]

const choose_list = [
    {
        title: 'Cost-effective solutions',
        desc: `The business's ROI plan is transparent. As a result, 
        our pricing is reasonable and competitive.`,
        img: '/assets/microsite/choose_01.png'
    },
    {
        title: 'Customizable Unique Designs',
        desc: `We create entirely individualised business solutions 
        based on your requirements and utility`,
        img: '/assets/microsite/choose_02.png'
    },
    {
        title: 'Customer Support',
        desc: `Customer satisfaction is our top priority, and our 
        support staff is dedicated to providing the best service.`,
        img: '/assets/microsite/choose_03.png'
    },
    {
        title: 'Strong Expertise',
        desc: `Our tight-knit team of experts simplifies and accurately 
        solves complex problems for your idea.`,
        img: '/assets/microsite/choose_04.png'
    },
    {
        title: 'Free Consultation',
        desc: `Our strategy experts can help you find the best solutions 
        for your brand theme and campaign.`,
        img: '/assets/microsite/choose_05.png'
    },
]
const index = () => {
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
                                <Image src='/assets/microsite/micrositeHome.png' width={1920} height={1080} />
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
                                    <Image src='/assets/microsite/microsite.png' width={1920} height={1080} />
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
                                    funData?.map((item, index) => (
                                        <div className={index % 2 === 1 ? "microFun microFun1" : "microFun"} key={index}>
                                            <div className="microFun_contain">
                                                <h3 className="micro_title">
                                                    {item.title}
                                                </h3>
                                                <p className='micro_desc'>
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="microFun_img">
                                                <Image src={item.img} width={1920} height={1080} />
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
                                            userCase?.map((curCase, index) => {
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
                                <div className='bookDemo py-4 mt-4' style={{ borderRadius: '10px' }}>
                                    <Row className='d-flex flex-column align-items-center justify-content-center'>
                                        <Col xxl={9} lg={9} md={9} xs={9}>
                                            <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                                                <h2 className='h1 mb-3 text-center'>
                                                    Start with your customized microsite now.
                                                </h2>
                                                <Button target='https://calendly.com/techkilla/meeting' title='Book free demo' />
                                            </div>
                                        </Col>
                                    </Row>
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
                                    <Image src='/assets/microsite/microsite_02.png' width={1920} height={1080} />
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
                                            expertise?.map((item, index) => {
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
                                            <Image src='/assets/microsite/Brands.png' width={1920} height={1080} />
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
                                            <Image src='/assets/microsite/logo-02.png' width={1920} height={1080} />
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                                        <div className="imgfulScreen db-ful">
                                            <Image src='/assets/microsite/logo-01.png' width={1920} height={1080} />
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
