"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import SwipeCard from "@/components/tk-ai/swipeCard";
import { Card, Col, Container, Row } from "react-bootstrap";
import ExpoBtn from "@/components/button/expoBtn";
import { MdDone } from "react-icons/md";
import Slider from "@/components/photo-ai/slider";
import { videoDemo, videoDemoMB } from "@/data/tk-ai/videoDemo";
import videoAiEngagement from "@/data/photo-ai/videoAiEngagement";
import React, { useState } from "react";
import YouTubePlayer from "@/components/Modal/video";
import { useRouter } from "next/navigation";
const aiList = [
  "No need for staffing",
  "Responsive to all mobile devices",
  "Ipad Friendly",
  "Instant sharing via QR, Email & whatsapp",
  "Social sharing",
];

const Home = () => {
  const route = useRouter();
  const [isPlay, setIsPlay] = useState(true);

  const handleClose = () => {
    setIsPlay(false);
    route.push("/");
  };
  return (
    <>
      <Head>
        <title>Techkilla</title>
      </Head>
      <Header />

      {/* popup */}
      <section className="popup">
        {isPlay && (
          <YouTubePlayer
            url={" https://youtube.com/shorts/TrqY8spsa3s?feature=shared"}
            handleClose={handleClose}
          />
        )}
      </section>

      <main>
        <div className="main">
          {/* 1 */}
          <Container className="py-5">
            <Row className="align-items-center ai-photo-Section-7">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col"
              >
                <div
                  className="micro_heading01 text-start"
                  data-aos="zoom-in-down"
                  data-aos-delay="0"
                >
                  AI <span>Animated Video</span> Transformation
                </div>
                <p
                  className="photo-ai-para py-4"
                  data-aos="zoom-in-down"
                  data-aos-delay="300"
                >
                  Always wished to be transformed into your imagination? Now it
                  is possible with our intelligent AI Animated video solution.
                </p>
                <div
                  className="d-flex"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <ExpoBtn
                    target="_blank"
                    title="Book Now"
                    url="https://calendly.com/techkilla/meeting"
                  />
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col"
              >
                <div
                  className="d-flex justify-content-center"
                  data-aos="zoom-in-up"
                  data-aos-delay="0"
                >
                  <SwipeCard />
                </div>
              </Col>
            </Row>
          </Container>

          {/* 2 */}
          <div className="">
            <div className="ai-model-container py-5">
              <Container className="home ai-photo-Section-7">
                <h2
                  className="py-5 fw-bold"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Action in Transformation
                </h2>
                <Row className="desktop row">
                  {videoDemo?.map((item, keys) => {
                    return (
                      <Col
                        xxl={4}
                        xl={4}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        key={keys}
                      >
                        {item?.map((curItem, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div
                                className="overflow-hidden my-2"
                                data-aos="fade-up"
                                data-aos-delay={`${(keys + index) * 100}`}
                              >
                                <img
                                  src={curItem?.img}
                                  className="img-fluid"
                                  style={{ borderRadius: "20px" }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </Col>
                    );
                  })}
                </Row>
                <Row className="mobile">
                  {videoDemoMB?.map((item, keys) => {
                    return (
                      <Col
                        xxl={4}
                        xl={4}
                        lg={4}
                        md={6}
                        sm={12}
                        xs={12}
                        key={keys}
                      >
                        {item?.map((curItem, index) => {
                          return (
                            <React.Fragment key={index}>
                              <div
                                className="overflow-hidden my-2"
                                data-aos="fade-up"
                                data-aos-delay={`${(keys + index) * 100}`}
                              >
                                <img
                                  src={curItem?.img}
                                  className="img-fluid"
                                  style={{ borderRadius: "20px" }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>

          {/* use-case  */}
          <Container className="py-4 ai-photo-Section-7">
            <h2
              className="fw-bold py-4 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Use Case
            </h2>
            <Row className="align-items-center py-5">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col"
              >
                <div
                  className="d-flex justify-content-center"
                  data-aos="zoom-in-up"
                  data-aos-delay="0"
                >
                  {/* <SwipeCard /> */}
                  <Card>
                    <img
                      src="/assets/tk-ai/gif/Archies.gif"
                      className="rounded"
                    />
                  </Card>
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col px-5"
              >
                <h2 data-aos="fade-up" data-aos-delay="100" className="fw-bold">
                  For fun engagement activities
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Dive into a realm of unparalleled fun with our AI Animated
                  Videobooth, designed to revolutionize your engagement
                  activities. Whether it's a corporate gathering or a social
                  celebration, our AI Animated Videobooth adds a touch of magic
                  to the experience. Elevate engagement, spark joy, and create a
                  buzz with our cutting-edge technology—because unforgettable
                  moments deserve the extraordinary. Let the fun begin!
                </p>
                <div
                  className="d-flex"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <ExpoBtn
                    target="_blank"
                    title="Book Now"
                    url="https://calendly.com/techkilla/meeting"
                  />
                </div>
              </Col>
            </Row>
            <Row className="align-items-center py-5">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col px-5"
              >
                <h2 data-aos="fade-up" data-aos-delay="100" className="fw-bold">
                  Brand recognition & promotion
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Elevate your brand presence effortlessly. Captivate your
                  audience with engaging visuals and dynamic storytelling.
                  Unlock the power of AI to enhance brand recognition and drive
                  promotional success. Stay ahead in the game with our
                  cutting-edge solution—where innovation meets impact. Your
                  brand, our expertise—let's make waves together.
                </p>
                <div
                  className="d-flex"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <ExpoBtn
                    target="_blank"
                    title="Book Now"
                    url="https://calendly.com/techkilla/meeting"
                  />
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col"
              >
                <div
                  className="d-flex justify-content-center"
                  data-aos="zoom-in-up"
                  data-aos-delay="0"
                >
                  {/* <SwipeCard /> */}
                  <Card>
                    <img
                      src="/assets/tk-ai/gif/DC-Super-Heros.gif"
                      className="rounded"
                    />
                  </Card>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center py-5 ai-photo-Section-7">
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col"
              >
                <div
                  className="d-flex justify-content-center p-5"
                  data-aos="zoom-in-up"
                  data-aos-delay="0"
                >
                  {/* <SwipeCard /> */}
                  <Card>
                    <img
                      src="/assets/tk-ai/gif/Virat-1.gif"
                      className="rounded"
                    />
                  </Card>
                </div>
              </Col>
              <Col
                xxl={6}
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="tk-ai-col px-5"
              >
                <h2 data-aos="fade-up" data-aos-delay="100" className="fw-bold">
                  Product Launch Event
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Unveil your product like never before! Elevate your product
                  launch events with our AI Animated Video solution. Allow
                  consumers to strike a pose with your product, and witness the
                  magical transformation into a captivating AI animation. Each
                  animation unfolds a unique story, dynamically changing the
                  atmosphere within the video, creating a memorable product
                  experience. Let your products tell their own stories in a way
                  that leaves a lasting impact.
                </p>
                <div
                  className="d-flex"
                  data-aos="zoom-in-up"
                  data-aos-delay="200"
                >
                  <ExpoBtn
                    target="_blank"
                    title="Book Now"
                    url="https://calendly.com/techkilla/meeting"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="py-5 ai-list-container">
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <h2 data-aos="zoom-in-up" data-aos-delay="0">
                  Our AI Solutions are seamless, effective & best for any kind
                  of events & experiential marketing
                </h2>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                {aiList?.map((item, keys) => {
                  return (
                    <div
                      key={keys}
                      className="list-ai py-1 d-flex align-items-center"
                      data-aos="fade-up"
                      data-aos-delay={keys * 150}
                    >
                      <div className="icon-done">
                        <MdDone />
                      </div>
                      <div className="ai-title">{item}</div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>

          <Container fluid className="ai-slilder py-5">
            <Slider cardData={videoAiEngagement} isVideoAI={true} />
          </Container>

          <Container>
            <Card>
              <div className="d-flex align-items-center justify-content-between p-4">
                <h2>Still got questions?</h2>
                <ExpoBtn target="_blank" title="Contact Us" url="/contact" />
              </div>
            </Card>
          </Container>
          <Footer bg="rgb(245 245 244)" />
        </div>
      </main>
    </>
  );
};

export default Home;
