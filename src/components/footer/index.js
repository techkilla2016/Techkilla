import React from 'react'
import { GrSend, GrLinkedinOption } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import Button from '../button/Button'
import { BsWhatsapp } from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io'
import { ImFacebook } from 'react-icons/im'
import ChatBoat from './ChatBoat'
const Footer = ({ bg }) => {
    return (
        <footer>
                <ChatBoat/> 
            <div className='aside_social'>
                <div className='link_box'>
                    <Link href='http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I am looking for some Tech Engagement solutions- could you help me with the process and any additional details I need to know?' className='link' target='_blank'>
                        <span className='icon' id="wapp"><BsWhatsapp /></span>
                    </Link>
                </div>
                <div className='link_box'>
                    <Link href='https://www.instagram.com/techkillatechnologies/' className='link' target='_blank'>
                        <span className='icon' id="insta"><IoLogoInstagram /></span>
                    </Link>
                </div>
                <div className='link_box'>
                    <Link href='https://www.facebook.com/techkilla2015' target='_blank' className='link'>
                        <span className='icon' id="face"><ImFacebook /></span>
                    </Link>
                </div>
                <div className='link_box'>
                    <Link href='https://twitter.com/techkilla15' className='link' target='_blank'>
                        <span className='icon' id="twt"><AiOutlineTwitter /></span>
                    </Link>
                </div>
            </div>
            <div className="footer" style={{ background: bg }}>
                <div className='bookdemo-footer'>
                    <div className='bookDemo'>
                        <Row>
                            <Col xxl={4} lg={4} md={4} xs={12}>
                                <div className='logo_outer'>
                                    <Link href='/' className='demo_logo'>
                                        <Image src='/logo/logo.png' alt='Techkilla' width={1920} height={1080} />
                                    </Link>
                                </div>
                            </Col>
                            <Col xxl={8} lg={8} md={8} xs={12}>
                                <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                                    <h2 className='demoText'>
                                        Schedule Free Demo
                                    </h2>
                                    <Button url='https://calendly.com/techkilla/meeting' target="_blank" title='Book free demo' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='main-footer'>
                    <div className='padding_4x'>
                        <div className="flex">
                            <section className="flex-content padding_1x">
                                <h3>Top Products</h3>
                                <Link href="/case-studies/QR-Registration-and-instant-ID-print-with-live-verification-The-National-HRD-Network-(NHRD)">QR Registration</Link>
                                <Link href="https://www.instagram.com/p/CjPoSz7DaSw"> 360° Spin Booth</Link>
                                <Link href="/case-studies/Excitometer-Tetra-Pak">Excitometer-Tetra Pak</Link>
                                <Link href="https://youtu.be/znj9F9XeF3U">Cricket Game</Link>
                            </section>

                            <section className="flex-content padding_1x">
                                <h3>    About Company</h3>
                                <Link href="/service">Services</Link>
                                <Link href="/">Portfolio</Link>
                                <Link href="/case-studies">Case Studies</Link>
                                <Link href="/">About Us</Link>
                            </section>


                            <section className="flex-content padding_1x">
                                <h3>Legal</h3>
                                <Link href="/">Privacy Policy</Link>
                                <Link href="/">Terms and Conditions</Link>
                                <Link href="/">Return and Exchange Policy</Link>
                            </section>
                            <section className="flex-content padding_1x">
                                <h3>Newsletter</h3>
                                <p>You can trust us. we only send promo offers,</p>
                                <fieldset className="fixed_flex">
                                    <input type="email" name="newsletter" placeholder="Your Email Address" />
                                    <button className="btn btn_2"><GrSend /></button>
                                </fieldset>
                            </section>
                        </div>
                        <div className="flex">
                            <section className="flex-content padding_1x">
                                <p>Copyright © 2022 Techkilla Technologies Pvt. Ltd</p>
                            </section>
                            <section className="flex-content padding_1x">
                                <Link href="https://www.facebook.com/techkilla2015/" target={'_blank'}><FaFacebookF /></Link>
                                <Link href="https://twitter.com/techkilla15?s=08" target={'_blank'}><AiOutlineTwitter /></Link>
                                <Link href="https://www.instagram.com/techkillatechnologies/?igshid=1j33p32nqf62k" target={'_blank'}><BsInstagram /></Link>
                                <Link href="https://www.linkedin.com/company/techkilla" target="_blank"><GrLinkedinOption /></Link>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
