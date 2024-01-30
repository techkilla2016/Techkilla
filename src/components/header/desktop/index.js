import Image from "next/image";
import Link from "next/link";
import React from "react";
const DesktopNav = () => {
  return (
    <nav>
      <div className="navbar">
        <Link href="/" className="logo">
          <Image
            priority
            src="/logo/logo-01.png"
            alt="teckkilla"
            width={80}
            height={80}
          />
        </Link>
        <div className="nav">
          <Link className="navlink" href="/">
            Home
          </Link>
          <Link className="navlink" href="/about">
            About
          </Link>
          <div className="navlink">
            <Link className="nav_child" href="/service">
              Services
            </Link>
            <div className="drop_down">
              <Link className="nav_child_drop" href="/service/Microsite-Design">
                Microsite design
              </Link>
              <Link className="nav_child_drop" href="/service/VR-Solutions">
                Virtual reality Solutions
              </Link>
              <Link className="nav_child_drop" href="/service/Playable-Ads">
                Playable Ads
              </Link>
              <Link
                className="nav_child_drop"
                href="/service/On-ground-activations"
              >
                On-ground activations
              </Link>
            </div>
          </div>
          <div className="navlink">
            <Link className="nav_child" href="/ai-photobooth">
              AI Solutions
            </Link>
            <div className="drop_down">
              <Link className="nav_child_drop" href="/ai-photobooth">
                AI Photobooth
              </Link>
              <Link className="nav_child_drop" href="/group-ai-photobooth">
                Group AI Photobooth
              </Link>
              <Link className="nav_child_drop" href="/ai-videobooth">
                AI Videobooth
              </Link>
            </div>
          </div>
          <div className="navlink">
            <Link className="nav_child" href="/product/Digital-Engagement">
              Products
            </Link>
            <div className="drop_down">
              <Link
                className="nav_child_drop"
                href="/product/Digital-Engagement"
              >
                Digital Engagement
              </Link>
              <Link
                className="nav_child_drop"
                href="/product/Physical-Engagement"
              >
                Physical Engagement
              </Link>
              <Link className="nav_child_drop" href="/QR-code-solution">
                QR Registration
              </Link>
            </div>
          </div>
          <Link className="navlink" href="/case-studies">
            Case Studies
          </Link>
          {/* <Link className='navlink' href="/privacy-policy">Privacy & Policy</Link> */}
          {/* <Link className='navlink' href="/QR-Registration" style={{
                        color: '#fdb714'
                    }}>QR Registration</Link> */}
          {/* <button className='navlink btn' onClick={() => setShow(true)}> Careers</button> */}
        </div>
      </div>
      <div className="navButton">
        <Link href="https://calendly.com/techkilla/meeting" target="_blank">
          <button>Book a Demo</button>
        </Link>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </div>
      {/* <Career /> */}
    </nav>
  );
};

export default DesktopNav;
