import Header from '@/components/header'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@/components/footer'
import Benefits from '@/components/service/Benefit'
import SingleCard from '@/components/ProjectSlider/singleCard'
// const Related_projects = [
//     {
//         title: "Excitometer",
//         them: "/service/500x500/Excitometer.png"
//     },
//     {
//         title: "360* spin booth or photobooth",
//         them: "/service/500x500/spin_booth.png"
//     },
//     {
//         title: "Magazine Booth",
//         them: "/service/500x500/Magazine_Booth.png"
//     },
//     {
//         title: "Kinect games",
//         them: "/service/500x500/Kinect_games.png"
//     },
//     {
//         title: "AR Football",
//         them: "/service/500x500/AR_Football.png"
//     },
//     {
//         title: "VR Activities",
//         them: "/service/500x500/AR_Activities.png"
//     },
//     {
//         title: "Video feedback booth",
//         them: "/service/500x500/Video_fee_back_booth.png"
//     },
//     {
//         title: "Slingshot ",
//         them: "/service/500x500/Slingshot.png"
//     },
//     {
//         title: "Digital Photobooth",
//         them: "/service/500x500/Digital_Photobooth.png"
//     },
//     {
//         title: "Mosaic wall",
//         them: "/service/500x500/Mosaic_wall.png"
//     },
//     {
//         title: "Mosaic wall 2",
//         them: "/service/500x500/Mosaic_wall_2.png"
//     },
//     {
//         title: "Green screen or Croma photobooth",
//         them: "/service/500x500/Green_screen_or_Croma_photobooth.png"
//     },

// ]
const Ongroundactivations = ({ Related_projects }) => {
    return (
        <>
            <Head>
                <title>VR-Solutions</title>
            </Head>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer'>
                        <div className="serviceIntro">
                            <div className="backGround">
                                <Image src='/service/web banner_on ground activity 2.jpg' alt='On-ground activations' width={1920} height={1080} />
                            </div>
                            <div className="introSection">
                                <Container>
                                    <Row className='justify-content-center'>
                                        <Col xxl={10} lg={11} md={12} sm={12}>
                                            <h1 className="introDesc ">
                                                Experience the brand like never before with our innovative experiential marketing strategies.
                                            </h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='BenefitsContainer bgWhite'>
                            <h4>Benefits</h4>
                            <div className="Benefits">
                                <Benefits data={['Captures visitors attention quickly', 'Easy database collection', 'Lasting experience', 'Word of mouth promotion', 'Higher engagement', 'Better retention', 'Feedback collection', 'Instant conversion']} />
                            </div>
                        </div>
                        <div className="bgWhite">
                            <Container>
                                <div className="section">
                                    <div className='use_case_heading'>Related projects</div>
                                    <SingleCard list={Related_projects} />
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Ongroundactivations

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BaseUrl}/api/on-ground-activations/`)
    const data = await res.json()
    return ({
        props: {
            Related_projects: data?.data
        }
    })
}