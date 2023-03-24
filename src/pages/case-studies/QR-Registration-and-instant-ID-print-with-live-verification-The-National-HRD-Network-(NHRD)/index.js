import { ButtonLight } from '@/components/button/Button'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SiBlockchaindotcom } from 'react-icons/si'
const funData = [
    {
        title: 'Form to sign up for an event or campaign',
        desc: `A personalized web-browser-based registration form that lets your 
        audience fill in their own information or that the promoter can fill in
        on their behalf at the time of registration`,
        img: '/assets/Microsite/microsite-banner-02.png'
    },
    {
        title: 'Automatic database registration link emailing',
        desc: `If we already have the database our intelligent software 
        auto sends the registration form link to all the users via email.`,
        img: '/assets/Microsite/microsite-banner-03.png'
    },
    {
        title: 'Unique QR code',
        desc: `After submitting the form, each attendee will receive a personalized 
        QR code through email to present at the event`,
        img: '/assets/Microsite/microsite-banner-04.png'
    },
    {
        title: 'QR Scanner with auto-verification',
        desc: `A QR code scanner web application that is solely dedicated to 
        the purpose of scanning and verifying attendance at the moment 
        of entry for all of the participants`,
        img: '/assets/Microsite/microsite-banner-05.png'
    },
    {
        title: 'Instant printout',
        desc: `Immediately following the verification or completion of the form, 
        a printout will be generated and can be distributed to participants.`,
        img: '/assets/Microsite/microsite-banner-06.png'
    },
    {
        title: 'Backend Acknowledgement & Database',
        desc: `The backend server will record the person's name and entry time 
        and date on the server for future use.`,
        img: '/assets/Microsite/microsite-banner-07.png'
    },
]
const benefits = [
    {
        img: '/assets/Microsite/microsite-b-01.png',
        title: `Chaos-free Audience Management`
    },
    {
        img: '/assets/Microsite/microsite-b-02.png',
        title: `Effortless`
    },
    {
        img: '/assets/Microsite/microsite-b-03.png',
        title: `100% Backend Record`
    },
    {
        img: '/assets/Microsite/microsite-b-04.png',
        title: `Integrity of the data`
    },
    {
        img: '/assets/Microsite/microsite-b-05.png',
        title: `Auto-email`
    },
    {
        img: '/assets/Microsite/microsite-b-06.png',
        title: `Time-saver`
    },
]

const userCase = [
    {
        icon: '/assets/Microsite/user-case01.png',
        title: 'Pre event registration',
        desc: `Online forms are increasingly being used for pre-event registration, when attendees provide their contact information and indicate whether they want to attend the event virtually or in person. Techkilla allows you to give your form a look and feel that is consistent with your brand.`
    },

    {
        icon: '/assets/Microsite/user-case02.png',
        title: 'On spot registration',
        desc: `On-the-spot registration is performed at any event that requests attendee 
        information and requires immediate identification. For instance, at the 
        registration counter at trade shows and fairs, attendees' personal data is 
        collected and an ID card is promptly printed`
    },

    {
        icon: '/assets/Microsite/user-case03.png',
        title: 'Entry verification',
        desc: `The verification of registered users' entries plays a crucial part in crowd 
        control by allowing entrance only to confirmed attendance. Techkilla's 
        web-based scanner programme reads the QR code to verify the user's 
        identity.`
    },

    {
        icon: '/assets/Microsite/user-case04.png',
        title: 'Audience management',
        desc: `When working with a large group of people, it might be difficult to 
        keep everyone under control. Our proprietary software streamlines
        the process of managing a large audience by handling tasks such
        as signup, automated emailing, QR code production, verification, 
        and database administration.`
    },

    {
        icon: '/assets/Microsite/user-case05.webp',
        title: 'Student registration',
        desc: `It is during admissions, college festivals, and other cultural events that 
        the majority of students sign up to attend. Our AI technology is able to 
        allow the management to operate on registration and fast ID printing 
        within no time and seamlessly.`
    },
    {
        icon: '/assets/Microsite/user-case06.webp',
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
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default index
