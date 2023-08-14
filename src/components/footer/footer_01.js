import React from 'react'
import { GrSend, GrLinkedinOption } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineMail } from 'react-icons/hi'
import { GiSmartphone } from 'react-icons/gi'
const Footer01 = ({ bg }) => {
    return (
        <footer>
            <div className="footer-01">
                <div className='main-footer-01 py-5'>
                    <div className=''>
                        <div className="flex">
                            <section className="flex-content padding_1x">
                                <h3>About Company</h3>
                                <div className="footer-logo">
                                    <Image src='/logo/logo-03.png' width={50} height={50} />
                                </div>
                            </section>

                            <section className="flex-content padding_1x">
                                <h3>Contact Us</h3>
                                <div className="my-3">
                                    <div>Email :-</div>
                                    <div><HiOutlineMail /> example@gmail.com</div>
                                </div>

                                <div className="py-3">
                                    <div>Phone :-</div>
                                    <div><GiSmartphone /> +91 8909213245</div>
                                </div>
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
                                <Link href="https://www.facebook.com/techkilla2015/" target={'_blank'}><FaFacebookF /></Link>
                                <Link href="https://twitter.com/techkilla15?s=08" target={'_blank'}><AiOutlineTwitter /></Link>
                                <Link href="https://www.instagram.com/techkillatechnologies/?igshid=1j33p32nqf62k" target={'_blank'}><BsInstagram /></Link>
                                <Link href="https://www.linkedin.com/company/techkilla" target="_blank"><GrLinkedinOption /></Link>
                            </section>
                        </div>
                    </div>
                    <p className='text-center'>Copyright © {new Date().getFullYear()} Techkilla Technologies Pvt. Ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer01
