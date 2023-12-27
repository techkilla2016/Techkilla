"use client"
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const DynamicCountUp = dynamic(() => import("react-countup"), { ssr: false });

const Counter = () => {
    const [isVisible, setIsVisible] = useState(true);
    const counterRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const divElement = counterRef?.current;
            if (!divElement) return;
            const { top, bottom } = divElement.getBoundingClientRect();
            if (top < window?.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const counterData = [
        {
            icon: '/assets/home/a01.png',
            alt: "Happy Customers",
            count: <><DynamicCountUp start={0} end={80} duration={2.5} />+</>,
            title: 'Happy Customers'
        },
        {
            icon: '/assets/home/a02.png',
            alt: "Projects Completed",
            count: <><DynamicCountUp start={0} end={600} duration={2.5} />+</>,
            title: ' Projects Completed'
        },
        {
            icon: '/assets/home/a03.png',
            alt: "Organic Impressions",
            count: <><DynamicCountUp start={0} end={5} duration={2.5} />M+</>,
            title: 'Organic Impressions'
        },
        {
            icon: '/assets/home/a04.png',
            alt: "Pro Awards Winner",
            count: <><DynamicCountUp start={0} end={3} duration={2.5} />+</>,
            title: "Pro Awards Winner"
        }
    ]
    return (
        <div ref={counterRef}>
            {
                isVisible && <Row>
                    {
                        counterData?.map((item, keys) => {
                            return <Col xl={3} lg={3} md={6} sm={12} key={keys} data-aos="zoom-in-up" data-aos-delay={0}>
                                <div className="recode my-4 py-4" >
                                    <div className="recodeIcon">
                                        <Image src={item?.icon} alt={item?.alt} width={1920} height={1080} />
                                    </div>
                                    <div className="recodeData">
                                        {item?.count}
                                    </div>
                                    <div className="recodeTitle">
                                        {item?.title}
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            }
        </div>
    );
};

export default Counter;
