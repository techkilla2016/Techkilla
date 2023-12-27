"use client"
import React, { useState, useEffect } from 'react'
import DesktopNav from './desktop/'
import MobileNav from './mobile/'
const Header = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
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
        return <DesktopNav />
    } else {
        return <MobileNav isMobile={isMobile} setIsMobile={setIsMobile} />
    }
}

export default Header