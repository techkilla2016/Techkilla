import Header from '@/components/header'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineHorizontalRule } from 'react-icons/md'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'
const Home = () => {

    const media = [
        {
            link: 'https://www.instagram.com/techkillatechnologies/',
            icon: <BsInstagram />,
            id: 'insta',
            place: "Instagram"
        },
        {
            link: 'https://www.linkedin.com/company/techkilla/',
            icon: <FaLinkedinIn />,
            id: 'link',
            place: "Linkedin"
        },
        {
            link: 'https://www.youtube.com/@TechkillaTechnologies',
            icon: <BsYoutube />,
            id: 'yt',
            place: "YouTube"
        }
    ]
    return (
        <>
            <Head>
                <title>Thanks (:</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <Container >
                        <Row className='align-items-center thankInner'>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                <h1 data-aos="fade-up" data-aos-delay={0}>Thank You!</h1>
                                <div className="px-3">
                                    <p data-aos="fade-up" data-aos-delay={100}>
                                        One of our experts will be in touch with you soon.
                                    </p>
                                    <div data-aos="fade-up" data-aos-delay={400} >
                                        <Link href='/photo-ai' className='continue-link'>
                                            Continue Browsing <MdOutlineHorizontalRule /><FaArrowRight />
                                        </Link>
                                    </div>
                                    <div className="social-thanks pt-5">
                                        <h4 className='fw-bold' data-aos="fade-right" data-aos-delay={600} >Connect with Us</h4>
                                        <div className="d-flex">
                                            {
                                                media?.map((item, key) => {
                                                    return <Link href={item?.link} key={key} data-aos="fade-up" data-aos-delay={200 * (key + 1)} className="d-flex align-items-center">
                                                        <div className="icon mx-1 pb-1" id={item?.id}>
                                                            {item?.icon}
                                                        </div>
                                                        <div className="link">{item?.place}</div>
                                                    </Link>
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                <div className="thanksImg" data-aos="zoom-in-up" data-aos-delay={330} >
                                    <Image src="/photo-ai/thanks.png" width={300} height={300} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default Home