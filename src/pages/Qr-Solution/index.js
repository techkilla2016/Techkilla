import React, { useEffect, useState } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import QrForm from '@/components/contect/FormQR'
import Image from 'next/image'
import Footer01 from '@/components/footer/footer_01'
import { HiOutlineMail } from 'react-icons/hi'
import { GiSmartphone } from 'react-icons/gi'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
const funData = [
    {
        title: 'Form to sign up for an event or campaign',
        desc: `A personalized web-browser-based registration form that lets your 
        audience fill in their own information or that the promoter can fill in
        on their behalf at the time of registration`,
        img: '/microsite/microsite-banner-02.png'
    },
    {
        title: 'Automatic database registration link emailing',
        desc: `If we already have the database our intelligent software 
        auto sends the registration form link to all the users via email.`,
        img: '/microsite/microsite-banner-03.png'
    },
    {
        title: 'Unique QR code',
        desc: `After submitting the form, each attendee will receive a personalized 
        QR code through email to present at the event`,
        img: '/microsite/microsite-banner-04.png'
    },
    {
        title: 'QR Scanner with auto-verification',
        desc: `A QR code scanner web application that is solely dedicated to 
        the purpose of scanning and verifying attendance at the moment 
        of entry for all of the participants`,
        img: '/microsite/microsite-banner-05.png'
    },
    {
        title: 'Instant printout',
        desc: `Immediately following the verification or completion of the form, 
        a printout will be generated and can be distributed to participants.`,
        img: '/microsite/microsite-banner-06.png'
    },
    {
        title: 'Backend Acknowledgement & Database',
        desc: `The backend server will record the person's name and entry time 
        and date on the server for future use.`,
        img: '/microsite/microsite-banner-07.png'
    },
]
const benefits = [
    {
        img: '/microsite/microsite-b-01.png',
        title: `Chaos-free Audience Management`
    },
    {
        img: '/microsite/microsite-b-02.png',
        title: `Effortless`
    },
    {
        img: '/microsite/microsite-b-03.png',
        title: `100% Backend Record`
    },
    {
        img: '/microsite/microsite-b-04.png',
        title: `Integrity of the data`
    },
    {
        img: '/microsite/microsite-b-05.png',
        title: `Auto-email`
    },
    {
        img: '/microsite/microsite-b-06.png',
        title: `Time-saver`
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

const App = () => {

    const router = useRouter()
    const { utm_campaign, utm_medium, utm_source } = router?.query
    const send = async (contact) => {
        try {
            const reponce = await axios.post(`https://techkilla-server.vercel.app/qr-solution`, { ...contact, utm_campaign, utm_medium, utm_source })
            router.push('/thanks');
            return false
        } catch (error) {
            return false;
        }
    };

    const [wWidth, setWWidth] = useState(0)
    useEffect(() => {
        setWWidth(window.innerWidth / 2.6)
    })

    return (
        <>
            <div className="main" id='demo'>

                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PVH2G66V"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>

                <div className='row align-items-center py-1 px-3 qr-header'>
                    <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}>
                        <div className="qr-logo">
                            <Image src="/logo/logo.png" width={70} height={70} />
                        </div>
                    </Col>
                    <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
                        <div className="d-flex justify-content-end flex-wrap">
                            <div className='text-dark context-id ' >
                                <strong><HiOutlineMail /></strong> Contact@techkilla.com
                            </div>
                            <div className='text-dark context-id' id='context-id'>
                                <strong><GiSmartphone /></strong> +91-7827362702
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="mainContainer">
                    <div className="contact container-fluid">
                        <div className="row">
                            <div className="col-lg-6 px-0">
                                <div className="hero">
                                    <Image src="/hero.png" alt="" width={1920} height={1080} />
                                </div>
                            </div>
                            <div className="col-lg-6 contact-form">
                                <QrForm send={send} />
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="microSection">
                        <h1 className="heading">
                            What is <span>QR Code</span> Registration?
                        </h1>
                        <Container>
                            <div className="microFulImg d-flex justify-content-center">
                                <iframe
                                    width="80%"
                                    style={{ borderRadius: '10px', height: `${wWidth}px` }}
                                    src="https://www.youtube.com/embed/fugeiotXyUk"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                            </div>
                        </Container>
                    </div>

                    {/* 3 */}
                    <div className="microSection2">
                        <Container>

                            <div className="d-flex justify-content-center">
                                <Link className="mb-5" href="#demo" style={{
                                    fontSize: 20,
                                    background: '#fdb714',
                                    padding: "10px 20px",
                                    borderRadius: 10,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>Request a Free Demo </Link>
                            </div>
                            <div className="micro_heading01 mb-5">How does it <span>function</span>? </div>
                            <Row>
                                {
                                    funData?.map((item, index) => (
                                        <Col xxl={6} className='my-4'>
                                            {/* <div className={index % 2 === 1 ? "microFun d-flex align-items-start microFun1" : " d-flex align-items-startmicroFun"} key={index}> */}
                                            {index == 2 || index == 3 ? <div className="d-flex align-items-start" key={index}>

                                                <div className="microFun_img1">
                                                    <Image src={item.img} alt='How does it function' width={1920} height={1080} />
                                                </div>
                                                <div className="microFun_contain px-3">
                                                    <h3 className="micro_titl">
                                                        {item.title}
                                                    </h3>
                                                    <p className='micro_des'>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div> : <div className="d-flex align-items-start" key={index}>
                                                <div className="microFun_contain">
                                                    <h3 className="micro_titl">
                                                        {item.title}
                                                    </h3>
                                                    <p className='micro_des'>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                                <div className="microFun_img1">
                                                    <Image src={item.img} alt='How does it function' width={1920} height={1080} />
                                                </div>
                                            </div>

                                            }

                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>

                    {/* usecase 4  */}


                    {/* 5 */}
                    <div className="microSection2 mb-4">
                        <div className="micro_heading01 BenefitsHeading">Benefits </div>
                        <Container className='pt-2'>
                            <Row className='justify-content-center'>
                                {
                                    benefits?.map((item, index) => (
                                        <Col key={index} xxl={2} xl={2} lg={2} md={4} sm={6} xs={12}>
                                            <div className="micro-b-cart">
                                                <div className="micro-b-them">
                                                    <Image src={item.img} alt={item.title} width={1920} height={1080} />
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
                        <div className="d-flex justify-content-center">
                            <Link className="mb-5" href="#demo" style={{
                                fontSize: 20,
                                background: '#fdb714',
                                padding: "10px 20px",
                                borderRadius: 10,
                                color: '#000',
                                fontWeight: 'bold'
                            }}>Enquire Now</Link>
                        </div>
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
                    <div className="Expertise_container pt-5">
                        <Container>
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className='micro_heading01 text-center'>
                                    <span className='text-center fw-bold'> WHY CHOOSE US ?</span>
                                </h1>
                                {/* <div className="imgfulScreen db-ful" style={{
                                    width: '100px'
                                }}>
                                    <Image src='/microsite/logo-01.png' alt={'Collaborate'} width={1920} height={1080} />
                                </div> */}
                            </div>
                            {/* <Row className='align-items-center justify-content-center'>
                                <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                                    <div className="imgfulScreen db-ful">
                                        <Image src='/microsite/logo-02.png' alt={'Collaborate'} width={1920} height={1080} />
                                    </div>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                                   
                                </Col>
                            </Row> */}
                        </Container>
                        <div className="choose_container">
                            <Container>
                                <Row className='align-items-center'>
                                    {
                                        choose_list?.map((item, index) => {
                                            return <Col xxl={6} lg={6} md={12} sm={12} xs={12}>
                                                <Row>
                                                    <Col xxl={8} xl={8} lg={8} md={8} sm={8} xm={8} xs={8} >
                                                        <div className="choose_lit">
                                                            <h3><span></span> {item.title}</h3>
                                                            <p>
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={4} xl={4} lg={4} md={4} sm={4} xm={4} xs={4} >
                                                        <div className="imageSe">
                                                            <Image src={item.img} alt={item.title} width={1920} height={1080} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        })
                                    }
                                </Row>

                            </Container>
                        </div>
                    </div>
                </div>
            </div>
            <Footer01 />
        </>
    )
}

export default App