import React from 'react'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'
import { GiSmartphone } from 'react-icons/gi'
import { Col, Container } from 'react-bootstrap'
import Link from 'next/link'
const Footer01 = ({ bg }) => {
    return (
        <footer>
            <div className="footer-01">
                <div className='main-footer-01 py-5'>
                    <Container>
                        <div className="row justify-content-evenly align-items-center">
                            <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} className='d-flex align-items-center'>
                                <div className="footer-logo">
                                    <Image src='/logo/logo-03.png' width={50} height={50} />
                                </div>
                                <Link className="" href="#demo" style={{
                                    fontSize: 20,
                                    background: '#fdb714',
                                    padding: "10px 20px",
                                    borderRadius: 10,
                                    color: '#000',
                                    fontWeight: 'bold'
                                }}>Get a Quote</Link>
                            </Col>
                            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
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
