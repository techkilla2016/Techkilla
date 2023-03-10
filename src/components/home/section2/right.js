import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
import img1 from '../../../../public/01.png'
import img2 from '../../../../public/02.png'
const ColRight = () => {
    return (
        <div className='right-col'>
            <div className='colHeading'>Who We Are</div>
            <h3 className="section__title">
                Design, develop and execute!
                <span className="section__title-line"> We manage it all.</span>
            </h3>
            <p className='section_Para' style={{ padding: '40px 0px 30px' }}>
                Techkilla is a creative company specialising in using immersive solutions based on experiential technology to create a 360-degree omnidirectional viewpoint to catch user attention and convert it to user acquisition and user retention.
            </p>
            <p className='section_Para'>
                We address your issues to draw customers to your brand.
            </p>
            <Row>
                <Col lg={6} md={12} sm={12} >
                    <div className="sub_secction">
                        <div className="img_section">
                            <Image src={img1} alt="" height={90} />
                        </div>
                        <div className="para_section">
                            <div className="heading">Ideal Strategic</div>
                            <div className='para'>
                                With the aid of our knowledge, we carefully consider your question and provide you with a fitting response.
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} >
                    <div className="sub_secction">
                        <div className="img_section">
                            <Image src={img2} alt="" height={90} />
                        </div>
                        <div className="para_section">
                            <div className="heading">Best Performance</div>
                            <div className='para'>
                                We turn that tale into the best performance so that your audience will remember it forever.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="btnSection2">
                <Button target='/' title='Read more' />
                <Button target='https://calendly.com/techkilla/meeting' title='Book free demo' />
            </div>
        </div>
    )
}

export default ColRight