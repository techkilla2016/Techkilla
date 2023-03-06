import React, { useState, useEffect } from 'react'
import logo from '&/logo/logoOne.png'
import { CgMenuRightAlt } from 'react-icons/cg'
import { IoCloseSharp } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
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

    if (windowSize.width > 966) {
        return (
            <nav>
                <div className="navbar">
                    <Link href='/' className="logo">
                        <Image src={logo} width={80} height={80} />
                    </Link>
                    <div className="nav">
                        <Link className='navlink' href='/'>Home</Link>
                        <Link className='navlink' href='/about'>About</Link>
                        <Link className='navlink' href='/service'>Service</Link>
                        <Link className='navlink' href="/case-studies">Case Studies</Link>
                        <Link className='navlink' href='/careers' > Careers</Link >
                    </div >
                </div >
                <div className="navButton">
                    <Link href='https://calendly.com/techkilla/meeting' target='_blank'>
                        <button>Book A Demo</button>
                    </Link>
                    <Link href='/contact' >
                        <button>Contect Us</button>
                    </Link >
                </div >
            </nav >
        )
    } else {
        return <nav>
            <div className="navbar">
                <Link href='/' className="logo">
                    <Image src={logo} width={60} height={60} />
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
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href='/service'>Service</Link>
                            </div>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href="/case-studies">Case Studies</Link>
                            </div>
                            <div className='listMenu' onClick={() => setIsMobile(false)}>
                                <Link href='/careers'>Careers</Link>
                            </div >
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
    }
}

export default Header