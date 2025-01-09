import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CardContent from "@/components/case-studies/CardContent";
import Image from "next/image";
import Link from "next/link";
import useCase from "@/data/case-studie/use-case";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Case Studies of Experiential Tech Projects – Techkilla",
  description: ` Explore Techkilla’s case studies to discover how we create impactful brand activations. See real examples of innovative experiential marketing solutions.`,
  keywords:
    "Case Studies of Experiential Tech, Techkilla Projects, Experiential Marketing Case Studies, Brand Activation Examples, Innovative Tech Solutions , Case Studies, Brand Activations, Experiential Marketing Solutions, Real-World Examples, Innovative Tech Projects, Creative Marketing Strategies, Techkilla Success Stories, Impactful Campaigns",
};

const CaseStudie = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main">
          <div className="product_landing">
            <div className="product_landing_background">
              <div className="preloaderBack">
                <Image
                  src="/assets/product/product-01.png"
                  alt="Case Studie, Techkilla"
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/assets/product/product-01_01.png"
                  alt="Case Studie, Techkilla"
                  width={1920}
                  height={1080}
                />
                <div className="preloaderBack-layer"></div>
              </div>
              <div className="product_intro">
                <Container>
                  <Row>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xm={12}>
                      <div className="product_main">
                        <h1>
                          From Challenge to Triumph: Clients' Journey with
                          Experiential Tech
                        </h1>
                        <p>
                          See how Techkilla delivered exceptional results for
                          its clients by providing innovative experiential
                          technology solutions.
                        </p>
                      </div>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                      <div className="product_main_icon">
                        <Image
                          src="/assets/use-case/case-studie.png"
                          alt="Case Studie, Techkilla"
                          width={1080}
                          height={1920}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          <div className="mainContainer">
            <div className="service">
              <h3
                className="section__title"
                style={{
                  color: " #000",
                  padding: "30px 0px",
                  textAlign: "center",
                }}
              >
                <span className="section__title-line-center">Case Studies</span>
              </h3>

              {/* card content  */}
              <CardContent useCase={useCase} />

              <Container>
                <Row className="justify-content-center  py-5">
                  <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                    <div className="text-center finishLine">
                      <Link href="/contact">Partner with us</Link> to leverage
                      the power of experiential technology and create unique,
                      memorable, and personalized brand experiences that drive
                      customer engagement, loyalty, and revenue growth.
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default CaseStudie;
