"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "./video";
import Content from "./content";
import Button from "@/components/button/";
import Image from "next/image";
import WhatWeDoData from "@/data/home/What-We-Do";
const WhatWeDo = () => {
  return (
    <div className="Section2">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Video />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Content />
          </Col>
        </Row>

        <h3
          className="colHeading text-center pt-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          We address your issues to draw customers to your brand.
        </h3>
        <Row className="mt-5">
          {WhatWeDoData?.map((item, keys) => {
            return (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={12}
                sm={12}
                data-aos="fade-up"
                data-aos-delay="100"
                key={keys}
              >
                <div className="d-flex justify-content-start">
                  <div className="img_section">
                    <div className="img">
                      <Image
                        src={item?.icon}
                        alt={item?.alt}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>

                  {/* This is my code */}
                  {/* <div className="img_section img">
                    <Image
                      src={item?.icon}
                      alt={item?.alt}
                      width={1920}
                      height={1080}
                    />
                  </div> */}

                  <div className="para_section">
                    <div className="heading">{item?.title}</div>
                    <div className="para">{item?.disc}</div>

                    {/* this is my code */}
                    {/* <p className="heading">{item?.title}</p>
                    <p className="para">{item?.disc}</p> */}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <div className="mt-5 d-flex justify-content-center flex-sm-row flex-column">
          <div className="m-3" data-aos="zoom-in-right" data-aos-delay="0">
            <Button url="/about" title="Read more" />
          </div>
          <div className="m-3" data-aos="zoom-in-left" data-aos-delay="0">
            <Button
              url="https://calendly.com/techkilla/meeting"
              target="_blank"
              title="Book free demo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default WhatWeDo;
