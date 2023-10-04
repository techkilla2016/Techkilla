    // Counter.js

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

        return (
            <div ref={counterRef}>
                {
                    isVisible && <Row>
                        <Col xl={3} lg={3} md={6} sm={12} data-aos="zoom-in-up" data-aos-delay={0}>
                            <div className="recode my-4 py-4" >
                                <div className="recodeIcon">
                                    <Image src='/home/a01.png' alt="Happy Customers" width={1920} height={1080} />
                                </div>
                                <div className="recodeData">
                                    <DynamicCountUp start={0} end={80} duration={2.5} />+
                                </div>
                                <div className="recodeTitle">
                                    Happy Customers
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} data-aos="zoom-in-up" data-aos-delay={100}>
                            <div className="recode my-4 py-4">
                                <div className="recodeIcon">
                                    <Image src='/home/a02.png' alt="Projects Completed" width={1920} height={1080} />
                                </div>
                                <div className="recodeData">
                                    <DynamicCountUp start={0} end={600} duration={2.5} />+
                                </div>
                                <div className="recodeTitle">
                                    Projects Completed
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} data-aos="zoom-in-up" data-aos-delay={200}>
                            <div className="recode my-4 py-4">
                                <div className="recodeIcon">
                                    <Image src='/home/a03.png' alt="Organic Impressions" width={1920} height={1080} />
                                </div>
                                <div className="recodeData">
                                    <DynamicCountUp start={0} end={5} duration={2.5} />M+
                                </div>
                                <div className="recodeTitle">
                                    Organic Impressions
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={3} md={6} sm={12} data-aos="zoom-in-up" data-aos-delay={300}>
                            <div className="recode my-4 py-4">
                                <div className="recodeIcon">
                                    <Image src='/home/a04.png' alt="Pro Awards Winner" width={1920} height={1080} />
                                </div>
                                <div className="recodeData">
                                    <DynamicCountUp start={0} end={3} duration={2.5} />+
                                </div>
                                <div className="recodeTitle">
                                    Pro Awards Winner
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </div>
        );
    };

    export default Counter;
