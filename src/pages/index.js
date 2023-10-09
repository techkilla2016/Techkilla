import Testimonials from '@/components/Testimonials'
import Button from '@/components/button/Button'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import IntroVideo from '@/components/home/section2/introVideo'
// import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import PortfolioSection from '@/components/home/section4'
// import WhatWeDo from '@/components/home/section5'
import Hero from '@/components/photo-ai/hero'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'

const Home = ({ work }) => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('/api/home/').then((responce) => {
  //     return responce.json()
  //   }).then((result) => {
  //     setData(result)
  //   })
  // }, [])
  const data = [
    {
      title: 'Microsite design',
      description: 'We create customised microsites for your occasions, unique needs, and interactions.',
      img: '/service/MD.webp',
      slag: '/service/Microsite-Design',
      color: '#fcfcfc',
    },
    {
      title: 'Virtual reality Solutions',
      description: 'specialised VR  and 360 solutions for gaming, 360 tour and audience engagement          \n',
      img: '/service/VR.webp',
      slag: '/service/VR-Solutions',
      color: '#7dbee91f',
    },
    {
      title: 'Playable Ads',
      description: 'Interactive gaming ads are made just for app advertisers to let people try before they buy.',
      img: '/service/ADS.webp',
      slag: '/service/Playable-Ads',
      color: '#becedb4f',
    },
    {
      title: 'On-ground activations',
      description: 'We engage your audience in an intuitive way with fun, experiential activities.',
      img: '/service/Game.webp',
      slag: '/service/On-ground-activations',
      color: '#fcfafe',
    },
  ]

  const cardData = [
    {
      name: 'Gurpreet Singh Saini',
      post: "Marketing Manager",
      company: "ITC Limited",
      desc: `Recently worked with Techkilla for sunfeast bounce & Aashirvaad Svasti lassi on AR filters. Their professionalism, creativity, and timely delivery were outstanding. They brought a new level of interactivity and engagement to our marketing campaigns, making them highly recommended for their innovative and effective services in the digital realm.`,
      img: '/photo-ai/Magical.jpg'
    },
    {
      name: 'Vyom Chaturvedi ',
      post: "Head Planning & Strategy",
      company: "Phoenix Live",
      desc: `It’s always been a great experience working with Yashi and team, they have always delivered on time and as per expectations. It’s been a pleasure working with them.`,
      img: '/photo-ai/Magical.jpg'
    },
    {
      name: 'Vikas Khanna ',
      post: "Director",
      company: "Stage Crew Eventzs",
      desc: `One of the best solution providers who ensure high audience engagement using customized tech.  I've worked with them on several occasions and everytime the experience has been extremely satisfying.  Wishing Team TechKilla the very best.`,
      img: '/photo-ai/Magical.jpg'
    },
    {
      name: 'Pratik Bhandari ',
      post: "Event Marketing & Consultant ",
      company: "Stage Crew Eventzs",
      desc: `I now know the team for over 4 years and i must admit they are one of the smoothest team to work with. They are always available, they will try to give solutions at best costs. Working with them doesnt feel like you are working with another company, they become part of your team and thats the best situation to be in. I can high recommend anyone to go ahead and work with them`,
      img: '/photo-ai/Magical.jpg'
    },
    {
      name: 'Gagan Rohtagi',
      post: "Associate Vice president,Client servicing",
      company: "Brand Width Events",
      desc: `Lovely working with them, very flexible approach and professionalism in execution`,
      img: '/photo-ai/Magical.jpg'
    },
  ]


  const [show, setShow] = useState(false)
  const [isMore, setIsMore] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000)
  }, [])
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <Head>
        <title>Techkilla</title>
      </Head>
      <Header />
      <main>
        <Modal show={show} onHide={handleClose} centered data-aos="zoom-in-down" data-aos-delay="0">
          <Modal.Body>
            <div className="wts-header">
              <div className="wts-profile-icon">
                <Image src='/robo.jpg' width={100} height={100} />
              </div>
              <div className="wts-profile-content">
                <div className="wts-name">
                  Techkilla
                </div>
                <div className="wts-headline">
                  Get your personalized microsite development
                  {
                    isMore ? <span onClick={() => setIsMore(false)}>
                      Interactive Playable Ads instead of simple video ads, VR Solutions and offline tech engagement
                    </span> : <span onClick={() => setIsMore(true)} className='wts-see'> ... see more</span>
                  }
                </div>
              </div>

              <button className='wts-close' onClick={handleClose}><AiOutlineCloseCircle /></button>
            </div>

            <div className="wts-body">
              <div className="wts-msg">
                <div className="wts-recive">
                  <strong>
                    Techkilla
                  </strong> <br /><br />
                  Hi! Welcome to Techkilla, <br />
                  How may we help you?
                </div>
              </div>
            </div>

            <div className="wts-footer">
              <Link href='http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks.' className='btn btn-success' target='_blank'>Start Chat</Link>
            </div>
          </Modal.Body>
        </Modal>
        {
          show ? '' : <Link className="whatsapp-btn" href='http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks.'>
            <BsWhatsapp />
          </Link>
        }

        <div className="main">
          <Hero isContinue={true} />

          <div className='Section2'>
            <Container>
              <Row>
                <Col lg={6} md={12} sm={12} >
                  <IntroVideo />
                </Col>
                <Col lg={6} md={12} sm={12} >
                  <ColRight />
                </Col>
              </Row>

              <h3 className="colHeading text-center pt-4 mt-4" data-aos="fade-up" data-aos-delay="0">
                We address your issues to draw customers to your brand.
              </h3>
              <Row className='mt-5'>
                <Col xxl={4} xl={4} lg={4} md={12} sm={12} data-aos="fade-up" data-aos-delay="100" >
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
                <Col xxl={4} xl={4} lg={4} md={12} sm={12} data-aos="fade-up" data-aos-delay="200">
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
                </Col>
                <Col xxl={4} xl={4} lg={4} md={12} sm={12} data-aos="fade-up" data-aos-delay="400">
                  <div className='d-flex justify-content-start'>
                    <div className="img_section">
                      <div className='img'>
                        <Image src='/home/best_performance.png' alt="Best Performance" width={1920} height={1080} />
                      </div>
                    </div>
                    <div className="para_section">
                      <div className="heading">Best Performance</div>
                      <div className='para pr-3'>
                        We construct the ideal play based on that tale to maximise your company's ROI.
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="mt-5 d-flex justify-content-center flex-sm-row flex-column" >
                <div className='m-3' data-aos="zoom-in-right" data-aos-delay="0">
                  <Button url='/about' title='Read more' />
                </div>
                <div className='m-3' data-aos="zoom-in-left" data-aos-delay="0">
                  <Button url='https://calendly.com/techkilla/meeting' target="_blank" title='Book free demo' />
                </div>
              </div>
            </Container>
          </div>


          {/* // Section3 Service */}
          <div className='pb-5' style={{ background: 'rgb(245 245 244)' }} >
            <div className="micro_heading01" data-aos="zoom-in-down" data-aos-delay={100}>Our <span>Services</span></div>
          </div>
          <div className="section3">
            <div className="section3Inner">
              {/* <ServiceSection /> */}
              <Container>
                <Row>
                  {
                    data.map((curItem, index) => {
                      return <Card {...curItem} delay={index} key={index} />
                    })
                  }
                </Row>
              </Container>
            </div>
          </div>

          <div className="microSection">
            <h1 className="section__title pb-5 text-center" data-aos="zoom-in-down" data-aos-delay="0">
              <span className='section__title-line-center'> <strong style={{
                color: '#fdb714'
              }}>Project X:</strong> The Ultimate Trendsetter</span>
            </h1>
            <h2 className="heading" style={{ fontSize: '40px' }} data-aos="zoom-in-up" data-aos-delay="0">
              <Link href='/QR-Registration/' style={{ color: '#fdb714' }} >QR Code</Link> Registration
            </h2>
            <Container>
              <div className="microFulImg" data-aos="zoom-in" data-aos-delay="200">
                <Image src='/microsite/microsite.png' alt='What is QR Code Registration?' width={1920} height={1080} />
              </div>
              <div className="microPara" data-aos="zoom-out" data-aos-delay="100">
                QR code registration is a form of one-of-a-kind registration process that occurs
                when a wider audience must be managed in terms of attendance,verification,
                and backend entry count over time. It overcomes the difficulty of dealing with
                and maintaining manual records and also saves time & labor
              </div>
              <div className="micro_heading01 my-5" data-aos="zoom-in" data-aos-delay="100">How does it <span>function</span>? </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <Link id="bottone1" href='/QR-Registration/' className='m-auto my-3'><strong>Read More...</strong></Link>
              </div>

            </Container>
          </div>

          {/* // Section4 Service */}
          <div className="section4">
            <div className="section4Inner">
              <PortfolioSection work={work} lastLine="With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals." />
            </div>
          </div>

          {/* Testimonials */}
          <Container fluid className="Testimonials py-5" style={{ background: "#fafafa" }}>
            <h2 className='text-secondary fw-bold text-center pt-5'>Testimonials</h2>
            <Testimonials cardData={cardData} />
          </Container>

          {/* // Section4 Service */}
          {/* <div className="section4">
              <div className="section5Inner">
                <WhatWeDo />
              </div>
            </div> */}

          {/* Testimonials */}
          <Footer bg="#fafafa" />
        </div>
      </main>

    </>
  )
}

export default Home
export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.BaseUrl}/api/work/`)
    const data = await res.json()
    return ({
      props: {
        work: data?.data
      }
    })
  } catch (error) {
    return ({
      props: {
        work: []
      }
    })
  }
}