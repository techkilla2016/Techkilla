import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import SwipeCard from "@/components/tk-ai/swipeCard";
import { Card, Col, Container, Row } from "react-bootstrap";
import ExpoBtn from "@/components/button/expoBtn";
import { MdDone } from "react-icons/md";
import Slider from "@/components/photo-ai/slider";
import { videoDemo, videoDemoMB } from "@/data/tk-ai/videoDemo";
import AiEngagement from "@/data/photo-ai/AiEngagement";
import React from "react";
const aiList = [
  "No Need for Staffing",
  "Ready for iPad Use",
  "Accessible on Mobile Devices with Ease",
  "User-Friendly and Intuitive",
  "Instant Sharing via QR Code, Email, or Drive",
  "Compatible with On-Site Printing",
];

export const metadata = {
  title: "AI Photo Booth Group | Techkilla",
  description:
    "Transform your group into superheroes with Techkilla's AI Photo Booth Group. Perfect for events, our tool uses advanced AI to create fun, themed group photos.",
  keywords:
    "AI Photo Booth Group, group photo transformation, event technology, superhero photos, interactive photo booth, Techkilla",
};

const Home = () => {
  return (
    <>
      <Header />
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
                  Group <span>AI Photo</span> with a single click!
                </div>
                <p
                  className="photo-ai-para py-4"
                  data-aos="zoom-in-down"
                  data-aos-delay="300"
                >
                  Turn your group into your preferred collection of Heroes in an
                  instant using our cutting-edge AI-powered tool.
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
                  For Media & Promotional Purposes
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Generate social media excitement or captivate the audience by
                  allowing them to morph into their beloved movie characters,
                  just like in the renowned Netflix film "Archies."
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
                  Create your own superhero squad.
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Ever had the notion that your group could step into the shoes
                  of superheroes? Introducing a platform where your group can
                  seamlessly embody our favorite Marvel and DC characters,
                  turning engagement into a fun-filled activity executed
                  entirely as a team.
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
                  Snap a Selfie with the Star
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="ai-title">
                  Capture your AI-enhanced selfie alongside any of your beloved
                  superheroes or superstars using our seamlessly magnificent AI
                  tool, delivering magical results in no time.
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
                  {" "}
                  Your Event Engagement Solution for In-Person, Hybrid, and
                  Virtual Gatherings
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
            <Slider cardData={AiEngagement} />
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
