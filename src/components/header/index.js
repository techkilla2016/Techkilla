import React, { useState, useEffect } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import Button from '../button/Button'
const Header = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        windowSize.width > 966 ? setIsMobile(true) : setIsMobile(false)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [curChild, setCurChild] = useState([])
    const [isChild, setIsChild] = useState(false)
    const childHandal = (payload) => {
        setIsChild(true)
        setCurChild(payload)
    }
    const [show, setShow] = useState(false)
    if (windowSize.width > 966) {
        return (
            <nav>
                <div className="navbar">
                    <Link href='/' className="logo">
                        <Image src='/logo/logo.png' alt='teckkilla' width={80} height={80} />
                    </Link>
                    <div className="nav">
                        <Link className='navlink' href='/'>Home</Link>
                        <Link className='navlink' href='/about'>About</Link>
                        <div className='navlink'>
                            <Link className='nav_child' href='/service'>Service</Link>
                            <div className='drop_down'>
                                <Link className='nav_child_drop' href='/service/Microsite-Design'>Microsite design</Link>
                                <Link className='nav_child_drop' href='/service/VR-Solutions'>Virtual reality Solutions</Link>
                                <Link className='nav_child_drop' href='/service/Playable-Ads'>Playable Ads</Link>
                                <Link className='nav_child_drop' href='/service/On-ground-activations'>On-ground activations</Link>
                            </div>
                        </div>
                        <div className='navlink'>
                            <Link className='nav_child' href='/product'>Products</Link>
                            <div className='drop_down'>
                                <Link className='nav_child_drop' href='/product/Digital-Engagement'>Digital Engagement</Link>
                                <Link className='nav_child_drop' href='/product/Physical-Engagement'>Physical Engagement</Link>
                            </div>
                        </div>
                        <Link className='navlink' href="/case-studies">Case Studies</Link>
                        <button className='navlink' onClick={() => setShow(true)}> Careers</button>
                    </div >
                </div >
                <div className="navButton">
                    <Link href='https://calendly.com/techkilla/meeting' target='_blank'>
                        <button>Book A Demo</button>
                    </Link>
                    <Link href='/contact' >
                        <button>Contact Us</button>
                    </Link >
                </div >
                <Modal size="xl" centered show={show} onHide={() => setShow(false)}>
                    <Modal.Header className='mb-4' closeButton>
                        <Modal.Title>Careers Form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className='px-5 pb-4'>
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Phone Number*</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label>Opportunity Looking For*    </Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Form.Group className="my-3 mb-4 pb-4" controlId="formGridAddress2">
                                <Form.Label>How did you hear about us?</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <button onClick={() => {
                                setShow(false)
                            }}>
                                <Button target='' title='Send Massage'></Button>
                            </button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </nav >
        )
    } else {
        return <>
            <nav>
                <div className="navbar">
                    <Link href='/' className="logo">
                        <Image src='/logo/logo.png' width={60} height={60} />
                    </Link>
                </div>
                <div className='toggle-secction'>
                    <button className='toggle' onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <IoCloseSharp /> : <CgMenuRightAlt />}
                        <span id='toggle'></span>
                    </button>
                </div>
                {
                    <div className={isMobile ? "active mobile-container" : "mobile-container "} id='hideMobileNave'>
                        <div className={isMobile ? "mobile-nav active" : "mobile-nav"}>
                            <div className='mobileMenuContaienr'>
                                <div className='listMenu' onClick={() => setIsMobile(false)}>
                                    <Link href='/'>Home</Link>
                                </div>
                                <div className='listMenu' onClick={() => setIsMobile(false)}>
                                    <Link href='/about'>About</Link>
                                </div>
                                <div className='listMenu' onClick={() => childHandal([
                                    {
                                        title: 'Microsite Design',
                                        url: '/service/Microsite-Design'
                                    },
                                    {
                                        title: 'VR Solutions',
                                        url: '/service/VR-Solutions'
                                    },
                                    {
                                        title: 'Playable Ads',
                                        url: '/service/Playable-Ads'
                                    },
                                    {
                                        title: 'On Ground Activations',
                                        url: '/service/On-ground-activations'
                                    },
                                ])}>
                                    Service
                                </div>
                                <div className='listMenu' onClick={() => childHandal([
                                    {
                                        title: 'Digital Engagement',
                                        url: '/product/Digital-Engagement'
                                    },
                                    {
                                        title: 'Physical Engagement',
                                        url: '/product/Physical-Engagement'
                                    }
                                ])}>
                                    Products
                                </div>
                                <div className='listMenu' onClick={() => setIsMobile(false)}>
                                    <Link href="/case-studies">Case Studies</Link>
                                </div>
                            </div >
                            <div className="MobileNavBtn">
                                <Link href='https://calendly.com/ensights-meeting/' target='_blank'>
                                    <button onClick={() => setIsMobile(false)}>Book A Demo</button>
                                </Link>
                                <Link href='/contact' >
                                    <button onClick={() => setIsMobile(false)}>Contect Us</button>
                                </Link >
                            </div >
                        </div >
                    </div >
                }
            </nav >

            {
                isChild && <div className='Mobile_nav_child_modal'>
                    <div className='Mobile_nav_child_modal_inner'>
                        {
                            curChild?.map((item) => {
                                return <div className='listMenu' onClick={() => {
                                    // setIsMobile(false)
                                    // setIsChild(false)
                                }}>
                                    <Link href={item?.url}>{item.title}</Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            }
        </>
    }

}

export default Header