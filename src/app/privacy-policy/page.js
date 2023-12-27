import Footer from '@/components/footer'
import Header from '@/components/header'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
export const metadata = {
    title: 'privacy-policy | Techkilla',
    description: 'Technologies Pvt. Ltd. Privacy Policy',
}
const Home = () => {

    return (
        <>
            <Header />
            <main>
                <div className="main">
                    <div className='mainContainer' style={{ background: '#fafafa' }}>
                        <Container className='py-5'>
                            <h2><strong>Techkilla </strong> Technologies Pvt. Ltd. Privacy Policy</h2>
                            <p className='pb-4'>
                                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.<strong>Techkilla </strong>.com (the “Site”).
                            </p>

                            <h4> PERSONAL INFORMATION WE COLLECT</h4>

                            <p>
                                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                            </p>

                            <h4 className='mt-5'>
                                We collect Device Information using the following technologies:
                            </h4>

                            <ul>
                                <li>
                                    <strong>“Cookies”</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier.
                                </li>
                                <li>
                                    <strong>“Log files”</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                                </li>
                                <li>
                                    <strong>“Web beacons,” “tags,”</strong> and <strong>“pixels”</strong> are electronic files used to record information about how you browse the Site.
                                </li>
                            </ul>


                            <p className='py-2'>
                                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information  email address, and phone number.  We refer to this information as “Order Information.”
                            </p>


                            <p>
                                When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
                            </p>

                            <h4 className='mt-5'>
                                HOW DO WE USE YOUR PERSONAL INFORMATION?
                            </h4>

                            <p>
                                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
                            </p>

                            <h5>
                                Communicate with you
                            </h5>
                            <p>
                                Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                            </p>
                            <p>
                                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                            </p>

                            <h5 className='mt-5'>
                                You can opt out of targeted advertising by:
                            </h5>
                            INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED. <br />
                            COMMON LINKS INCLUDE: <br /><br />
                            FACEBOOK - <Link href="https://www.facebook.com/settings/?tab=ads" target='blank'>https://www.facebook.com/settings/?tab=ads</Link> <br />
                            GOOGLE -  <Link href="https://www.google.com/settings/ads/anonymous" target='blank'>https://www.google.com/settings/ads/anonymous</Link> <br />
                            BING - <Link href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target='blank'>https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</Link>
                            <br />
                            <p>
                                Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  <Link href='http://optout.aboutads.info/.' target='blank'>http://optout.aboutads.info/.</Link>
                            </p>

                            <h4>
                                DO NOT TRACK
                            </h4>
                            <p>
                                Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                            </p>

                            <h4>
                                YOUR RIGHTS
                            </h4>
                            <p>
                                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                                Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
                            </p>


                            <h4>
                                DATA RETENTION
                            </h4>
                            <p>
                                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                            </p>
                            <h5>
                                CHANGES
                            </h5>
                            <p>
                                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                            </p>
                            <h5>
                                CONTACT US
                            </h5>
                            <p>
                                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <strong>contact@techkilla.com</strong> or by mail using the details provided below:
                            </p>

                            <p>
                                <strong>
                                    B-12, agrasen plaza, mahavir enclave, New Delhi, DL, 110045, India
                                </strong>
                            </p>
                        </Container>
                        <Footer bg="#fafafa" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home