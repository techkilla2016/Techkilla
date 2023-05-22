import Button from '@/components/button/Button'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import IntroVideo from '@/components/home/section2/introVideo'
import ColLeft from '@/components/home/section2/left'
import ColRight from '@/components/home/section2/right'
import PortfolioSection from '@/components/home/section4'
import WhatWeDo from '@/components/home/section5'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
  return (
    <>
      <Head>
        <title>Techkilla</title>
      </Head>
      <Header />
      <main>
        <div className="main">
          <div className='mainContainer'>
            <div className='Section2'>
              <Container>
                <Row>
                  <Col lg={6} md={12} sm={12} >
                    {/* <ColLeft /> */}
                    <IntroVideo />
                  </Col>
                  <Col lg={6} md={12} sm={12} >
                    <ColRight />
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
                        <div className='para pr-3'>
                          We construct the ideal play based on that tale to maximise your company's ROI.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="mt-5 d-flex justify-content-center flex-sm-row flex-column" >
                  <div className='m-3'>
                    <Button url='/about' title='Read more' />
                  </div>
                  <div className='m-3'>
                    <Button url='https://calendly.com/techkilla/meeting' target="_blank" title='Book free demo' />
                  </div>
                </div>
              </Container>
            </div>

            {/* // Section3 Service */}
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

            {/* // Section4 Service */}
            <div className="section4">
              <div className="section4Inner">
                <PortfolioSection work={work} lastLine="With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals." />
              </div>
            </div>

            {/* // Section4 Service */}
            {/* <div className="section4">
              <div className="section5Inner">
                <WhatWeDo />
              </div>
            </div> */}
            <Footer bg="#fafafa" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BaseUrl}/api/work/`)
  const data = await res.json()
  return ({
    props: {
      work: data?.data
    }
  })
}