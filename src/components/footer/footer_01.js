import React from 'react'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'
import { GiSmartphone } from 'react-icons/gi'
import { Col, Container } from 'react-bootstrap'
const Footer01 = ({ bg }) => {
    return (
        <footer>
            <div className="footer-01">
                <div className='main-footer-01 py-5'>
                    <Container>
                        <div className="row justify-content-evenly align-items-center">
                            <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                <div className="footer-logo">
                                    <Image src='/logo/logo-03.png' alt='Techkilla' width={50} height={50} />
                                </div>
                            </Col>
                            <Col xxl={9} xl={9} lg={9} md={9} sm={6} xs={12}>
                                <div className="">
                                    <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
                                        <div className="my-3">
                                            <div>Email :-</div>
                                            <div><HiOutlineMail /> Contact@techkilla.com</div>
                                        </div>
                                        <div className="py-3">
                                            <div>Phone :-</div>
                                            <div><GiSmartphone /> +91-7827362702</div>
                                        </div>
                                    </div>
                                    <p className='text-center mt-5'>Copyright © {new Date().getFullYear()} Techkilla Technologies Pvt. Ltd</p>
                                </div>
                            </Col>
                        </div>
                    </Container>

                </div>
            </div>
        </footer>
    )
}

export default Footer01
