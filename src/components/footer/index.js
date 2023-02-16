import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GrSend, GrLinkedinOption } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="padding_4x">
            <div className="flex">
                <section className="flex-content padding_1x">
                    <h3>Top Products</h3>
                    <Link href="/">Managed Website</Link>
                    <Link href="/">Manage Reputation</Link>
                    <Link href="/">Power Tools</Link>
                    <Link href="/">Marketing Service</Link>
                </section>

                <section className="flex-content padding_1x">
                    <h3>    About Company</h3>
                    <Link href="/">Services</Link>
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
                    <Link href="https://www.linkedin.com/company/techkilla"><GrLinkedinOption /></Link>
                </section>
            </div>
        </footer>
    )
}

export default Footer