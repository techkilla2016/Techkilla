import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiBlockchaindotcom } from "react-icons/si";
import Button, { ButtonLight } from "@/components/button/";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/Testimonials";
import TestimonialsData from "@/data/Testimonials";
import funData from "@/data/QR-Registration/funData";
import benefits from "@/data/QR-Registration/benefits";
import useCase from "@/data/QR-Registration/useCase";
import packageCart from "@/data/QR-Registration/packageCart";
import expertise from "@/data/QR-Registration/expertise";
import graphGrow from "@/data/QR-Registration/graphGrow";
import chooseList from "@/data/QR-Registration/chooseList";
import caseStudieList from "@/data/QR-Registration/caseStudieList";

export const metadata = {
  title: "QR Registration",
  description: `QR Registration and instant ID print with live verification - The National HRD Network`,
};

const QrRegistration = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main">
          <div className="mainContainer">
            <div className="microHome1">
              <div className="pagebg">
                <Image
                  src="/assets/microsite/micrositeHome.png"
                  alt="QR code registration & Auto verification"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="microHome">
                <Container>
                  <div className="microIntro">
                    QR code registration & Auto verification software with
                    Instant ID print
                  </div>
                </Container>
                <div className="microBtnSection resbtn1">
                  <ButtonLight
                    target="https://calendly.com/techkilla/meeting"
                    title="BOOK A FREE DEMO NOW"
                  />
                </div>
                {/* <div className="microBtnSection resbtn2">
                  <ButtonLight
                    target="https://calendly.com/techkilla/meeting"
                    title="BOOK DEMO"
                  />
                </div> */}
              </div>
            </div>
            {/* 2 */}
            <div className="microSection">
              <h1 className="heading">
                What is <span>QR Code</span> Registration?
              </h1>
              <Container>
                <div className="microFulImg">
                  <Image
                    src="/assets/microsite/microsite.png"
                    alt="What is QR Code Registration?"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="microPara">
                  QR code registration is a form of one-of-a-kind registration
                  process that occurs when a wider audience must be managed in
                  terms of attendance,verification, and backend entry count over
                  time. It overcomes the difficulty of dealing with and
                  maintaining manual records and also saves time & labor
                </div>
              </Container>
            </div>

            {/* 3 */}
            <div className="microSection2">
              <Container>
                <div className="micro_heading01">
                  How does it <span>function</span>?{" "}
                </div>
                {funData?.map((item, index) => (
                  <div
                    className={
                      index % 2 === 1 ? "microFun microFun1" : "microFun"
                    }
                    key={index}
                  >
                    <div className="microFun_contain">
                      <h3 className="micro_title">{item.title}</h3>
                      <p className="micro_desc">{item.desc}</p>
                    </div>
                    <div className="microFun_img">
                      <Image
                        src={item.img}
                        alt="How does it function"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                ))}
              </Container>
            </div>

            {/* usecase 4  */}
            <div className="micro_qr">
              <h2 className="micro_heading01 mb-4">
                Use <span>cases</span>
              </h2>
              <div className="qr-p">
                <Container>
                  <Row>
                    {useCase?.map((curCase, index) => {
                      // const Compo =
                      return (
                        <Col
                          key={index}
                          xxl={4}
                          xl={4}
                          lg={4}
                          md={6}
                          sm={6}
                          xs={12}
                        >
                          <div className="col-qr">
                            <div className="qr-cases">
                              <h3 className="qr-cases-icon">
                                <Image
                                  src={curCase.icon}
                                  alt={curCase?.title}
                                  width={1920}
                                  height={1080}
                                />
                              </h3>
                              <div className="qr-title">{curCase?.title}</div>
                              <div className="qr-desc">{curCase?.desc}</div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </div>
            </div>

            {/* 5 */}
            <div className="microSection2 my-4">
              <div className="micro_heading01 BenefitsHeading">Benefits </div>
              <Container className="pt-4">
                <Row className="justify-content-center">
                  {benefits?.map((item, index) => (
                    <Col
                      key={index}
                      xxl={3}
                      xl={3}
                      lg={3}
                      md={4}
                      sm={6}
                      xm={12}
                    >
                      <div className="micro-b-cart">
                        <div className="micro-b-them">
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={1920}
                            height={1080}
                          />
                        </div>
                        <p className="micro-b-title">{item.title}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>

            {/* 6 */}
            <div className="micro_qr">
              <Container>
                <div className="micro_heading01" style={{ textAlign: "left" }}>
                  Case <span>studies</span>{" "}
                </div>
                {caseStudieList?.map((item, keys) => {
                  return (
                    <div className="pointBox" key={keys}>
                      <div className="count">{keys + 1}</div>
                      <div className="point">
                        <Link href={item?.link} target="_blank">
                          {" "}
                          {item?.title}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Container>
            </div>

            {/* 7 */}
            <div className="micro_qr">
              <Container>
                <div className="micro_heading01" style={{ textAlign: "left" }}>
                  Package <span>includes</span>
                </div>
                {packageCart?.map((item, index) => {
                  return (
                    <div className="pointBox" key={index}>
                      <div className="count">{index + 1}</div>
                      <div className="point">{item}</div>
                    </div>
                  );
                })}
              </Container>
            </div>

            {/* 8 */}
            <div className="Qr_cartSection">
              <div className="micro_heading01">Cost </div>
              <div className="qr-cost-cart">
                <Container>
                  <Row>
                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                      <div className="cost-cart-box">
                        <div className="cost_cart">
                          <div className="top">
                            <div className="service_type">BASIC</div>
                            <div className="price_section">
                              <div className="cart-btnBox">
                                <div className="price-label">₹ 25000/-</div>
                              </div>
                            </div>
                            <div className="facilitie">
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">
                                  Registration page customization (only logo)
                                </div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Unique QR code</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Upto 1k users</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Scanner app</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Auto emailing</div>
                              </div>
                            </div>
                          </div>
                          <div className="pay_section">
                            <div className="cart-btnBox">
                              <Link
                                href="http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I've been looking for a reliable QR-based registration system and I came across your company. I would like to purchase the Basic package - could you help me with the process and any additional details I need to know?"
                                className="price-label"
                              >
                                ORDER NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                      <div className="cost-cart-box">
                        <div className="cost_cart">
                          <div className="top">
                            <div className="service_type">STANDARD</div>
                            <div className="price_section">
                              <div className="cart-btnBox">
                                <div className="price-label">₹ 35000/-</div>
                              </div>
                            </div>
                            <div className="facilitie">
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">
                                  Registration page customization (Background &
                                  Logo)
                                </div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Unique QR code</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Upto 1500 users</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Scanner app</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Auto emailing</div>
                              </div>
                            </div>
                          </div>

                          <div className="pay_section">
                            <div className="cart-btnBox">
                              <Link
                                href={`http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I've been looking for a reliable QR-based registration system and I came across your company. I would like to purchase the Standard package - could you help me with the process and any additional details I need to know?`}
                                className="price-label"
                              >
                                ORDER NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
                      <div className="cost-cart-box">
                        <div className="cost_cart">
                          <div className="top">
                            <div
                              className="service_type "
                              style={{ color: "#fdb714" }}
                            >
                              PREMIUM
                            </div>
                            <div className="price_section">
                              <div className="cart-btnBox">
                                <div className="price-label">₹ 45000/-</div>
                              </div>
                            </div>

                            <div className="facilitie">
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">
                                  Registration page customization (Background &
                                  Logo)
                                </div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">
                                  Unique Color QR code
                                </div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Upto 2k users</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Scanner app</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Auto Emailing</div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">
                                  Instant printing option
                                </div>
                              </div>
                              <div className="facilitie_option">
                                <div className="icon_fa">
                                  <SiBlockchaindotcom />
                                </div>
                                <div className="fa_text">Customized URL</div>
                              </div>
                            </div>
                          </div>

                          <div className="pay_section">
                            <div className="cart-btnBox">
                              <Link
                                href={`http://wa.me/917827362702?text=Hello Techkilla team! %0A%0A I've been looking for a reliable QR-based registration system and I came across your company. I would like to purchase the Premium Package - could you help me with the process and any additional details I need to know?`}
                                className="price-label"
                              >
                                ORDER NOW
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Container>
                <div
                  className="bookDemo py-4 mt-4"
                  style={{ borderRadius: "10px" }}
                >
                  <Row className="d-flex flex-column align-items-center justify-content-center">
                    <Col xxl={9} lg={9} md={9} xs={9}>
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <h2 className="h1 mb-3 text-center">
                          Start with your customized microsite now.
                        </h2>
                        <Button
                          url="https://calendly.com/techkilla/meeting"
                          title="Book free demo"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>

            {/* 9 */}
            <div className="microSection" style={{ background: "#fff" }}>
              <h2 className="heading">Additional features</h2>
              <Container>
                <div className="microFulImg">
                  <Image
                    src="/assets/microsite/microsite_02.png"
                    alt="Additional features"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="microPara">
                  Your microsite can experience more features like Gaming
                  engagement, digital photobooth interlinking, HR planned
                  activities & many more use cases.We customize your microsite
                  as per the storyline and new ideas.
                </div>
              </Container>
            </div>

            {/* 10 */}
            <div className="Expertise_container">
              <Container>
                <div className="micro_heading01">
                  Our <span>Industry</span> Expertise
                </div>
                <div className="qr_Expertise_container">
                  <Row className="justify-content-center">
                    {expertise?.map((item, index) => {
                      return (
                        <Col
                          key={index}
                          xxl={3}
                          xl={3}
                          lg={3}
                          md={4}
                          sm={6}
                          xm={12}
                        >
                          <div className="qr_expertise">
                            <div className="qr_exp_img">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={1920}
                                height={1080}
                              />
                            </div>
                            <div className="expertise_title">{item.title}</div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Container>
              <Container>
                <div className="Expertise_graph">
                  <h3 className="Expertise_para">
                    Grow your reach with enhanced interactive engagements
                  </h3>
                  <Row>
                    {graphGrow?.map((item, index) => {
                      return (
                        <Col
                          xxl={3}
                          xl={3}
                          lg={3}
                          md={6}
                          sm={6}
                          xm={12}
                          key={index}
                        >
                          <div className="graph_container">
                            <div className="graph_img">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={1920}
                                height={1080}
                              />
                            </div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Container>
            </div>

            {/* 11 */}
            <div
              className="Expertise_container res-top"
              style={{ background: "#f5f5f4" }}
            >
              <Container>
                <Row className="align-items-center">
                  <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                    <div className="micro_heading01">
                      We <span>Collaborate</span> with <span>Brands</span> and{" "}
                      <span>Agencies!</span>
                    </div>
                  </Col>
                  <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                    <div className="imgfulScreen">
                      <Image
                        src="/assets/microsite/Brands.png"
                        alt="we collaorate with brands and agencies"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            {/* 12 */}
            <div className="Expertise_container pt-5">
              <Container>
                <Row className="align-items-center">
                  <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                    <div className="imgfulScreen db-ful">
                      <Image
                        src="/assets/microsite/logo-02.png"
                        alt={"Collaborate"}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </Col>
                  <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
                    <div className="imgfulScreen db-ful">
                      <Image
                        src="/assets/microsite/logo-01.png"
                        alt={"Collaborate"}
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="choose_container">
                <Container>
                  {chooseList?.map((item, index) => {
                    return (
                      <Row className="align-items-center" key={index}>
                        <Col xxl={9} xl={9} lg={9} md={9} sm={12} xm={12}>
                          <div className="choose_list">
                            <h3>
                              <span></span> {item.title}
                            </h3>
                            <p>{item.desc}</p>
                          </div>
                        </Col>
                        <Col xxl={3} xl={3} lg={3} md={3} sm={12} xm={12}>
                          <div className="imageSec">
                            <Image
                              src={item.img}
                              alt={item.title}
                              width={1920}
                              height={1080}
                            />
                          </div>
                        </Col>
                      </Row>
                    );
                  })}
                </Container>
              </div>
            </div>

            {/* Testimonials */}
            <Container
              fluid
              className="Testimonials py-5"
              style={{ background: "#fff" }}
            >
              <h2 className="text-secondary fw-bold text-center pt-5">
                Testimonials
              </h2>
              <Testimonials cardData={TestimonialsData} />
            </Container>
            <Footer bg="#fff" />
          </div>
        </div>
      </main>
    </>
  );
};

export default QrRegistration;
