"use client";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
const MobileNav = ({ isMobile, setIsMobile }) => {
  const [isChild, setIsChild] = useState(false);
  const [curChild, setCurChild] = useState([]);
  const childHandal = payload => {
    setIsChild(true);
    setCurChild(payload);
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <Link href="/" className="logo">
            <Image
              priority
              src="/logo/logo-01.png"
              alt="techkilla"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="toggle-secction">
          <button className="toggle btn" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <IoCloseSharp /> : <CgMenuRightAlt />}
            <span id="toggle"></span>
          </button>
        </div>
        {
          <div
            className={
              isMobile ? "active mobile-container" : "mobile-container "
            }
            id="hideMobileNave"
          >
            <div className={isMobile ? "mobile-nav active" : "mobile-nav"}>
              <div className="mobileMenuContaienr">
                <div className="listMenu" onClick={() => setIsMobile(false)}>
                  <Link href="/">Home</Link>
                </div>
                <div className="listMenu" onClick={() => setIsMobile(false)}>
                  <Link href="/about">About</Link>
                </div>
                <div
                  className="listMenu"
                  onClick={() =>
                    childHandal([
                      {
                        title: "Microsite Design",
                        url: "/service/Microsite-Design",
                      },
                      {
                        title: "VR Solutions",
                        url: "/service/VR-Solutions",
                      },
                      {
                        title: "Playable Ads",
                        url: "/service/Playable-Ads",
                      },
                      {
                        title: "On Ground Activations",
                        url: "/service/On-ground-activations",
                      },
                    ])
                  }
                >
                  Services
                </div>
                <div
                  className="listMenu"
                  onClick={() =>
                    childHandal([
                      {
                        title: "AI Photobooth",
                        url: "/ai-photo-booth",
                      },
                      {
                        title: "AI Photobooth Group",
                        url: "/ai-photo-booth-group",
                      },
                      {
                        title: "AI Videobooth",
                        url: "/ai-videobooth",
                      },
                    ])
                  }
                >
                  AI Solution
                </div>
                <div
                  className="listMenu"
                  onClick={() =>
                    childHandal([
                      {
                        title: "Digital Engagement",
                        url: "/product/Digital-Engagement",
                      },
                      {
                        title: "Physical Engagement",
                        url: "/product/Physical-Engagement",
                      },
                      {
                        title: "QR Registration",
                        url: "/QR-code-solution",
                      },
                    ])
                  }
                >
                  Products
                </div>
                <div className="listMenu" onClick={() => setIsMobile(false)}>
                  <Link href="/case-studies">Case Studies</Link>
                </div>
              </div>
              <div className="MobileNavBtn">
                <Link
                  href="https://calendly.com/ensights-meeting/"
                  target="_blank"
                >
                  <button onClick={() => setIsMobile(false)}>
                    Book A Demo
                  </button>
                </Link>
                <Link href="/contact">
                  <button onClick={() => setIsMobile(false)}>Contect Us</button>
                </Link>
              </div>
            </div>
          </div>
        }
      </nav>

      {isChild && (
        <div className="Mobile_nav_child_modal">
          <div className="Mobile_nav_child_modal_inner">
            {curChild?.map((item, key) => {
              return (
                <div
                  key={key}
                  className="listMenu"
                  onClick={() => {
                    // setIsMobile(false)
                    // setIsChild(false)
                  }}
                >
                  <Link href={item?.url}>{item.title}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
