import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "@/components/footer";
import SingleCard from "@/components/Slider/singleCard";
import Related_projects from "@/data/service/On-ground-activations/relatedProject";
import Benefits from "@/data/service/On-ground-activations/Benefits";
import BenifitCard from "@/components/general/Benefits";
const siteUrl = "https://www.techkilla.com";
export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/service/On-ground-activations",
    languages: {
      "en-US": `/service/On-ground-activations/en-US`,
      "de-DE": `/service/On-ground-activationsde-DE`,
    },
  },
  title: "On Ground Activations Services for Events and Promotions Techkilla",
  description:
    "Techkilla offers on-ground activation services to create interactive brand experiences. Empower your brand with innovative, immersive, and memorable activations.",
  keywords:
    "On Ground Activations Services, Experiential Marketing, VR Solutions, On-Ground Marketing, Innovative Campaigns, Marketing Activations, Techkilla Services, Immersive Marketing Strategies, Creative Brand Engagement , Experiential Marketing Services, Techkilla Solutions, VR Marketing Solutions, On-Ground Activations, Innovative Marketing Campaigns",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    site_name: "Techkilla",
    title: "On Ground Activations Services for Events and Promotions Techkilla",
    description:
      "Techkilla offers on-ground activation services to create interactive brand experiences. Empower your brand with innovative, immersive, and memorable activations.",
    // images: {
    //   url: "/og-images/home-og.png",
    //   width: 1200,
    //   height: 630,
    //   alt: "AI-powered face swap preview image",
    // },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Techkilla",
    title: "On Ground Activations Services for Events and Promotions Techkilla",
    description:
      "Techkilla offers on-ground activation services to create interactive brand experiences. Empower your brand with innovative, immersive, and memorable activations.",
    // images: {
    //   url: "/og-images/home-og.png",
    //   width: 1200,
    //   height: 630,
    //   alt: "AI-powered face swap preview image",
    // },
  },
};
const Ongroundactivations = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main">
          <div className="mainContainer">
            <div className="product_landing" style={{ background: "#fff" }}>
              <div className="product_landing_background">
                <div className="preloaderBack">
                  <Image
                    src="/assets/banner/ongroound-activity_01.png"
                    alt="Physical Engagement"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    src="/assets/banner/ongroound-activity.png"
                    alt="Physical Engagement"
                    width={1920}
                    height={1080}
                  />
                  <div className="preloaderBack-layer"></div>
                </div>
                <div className="product_intro">
                  <Container>
                    <Row>
                      <Col xxl={7} xl={7} lg={7} md={7} sm={12} xm={12}>
                        <div className="product_main">
                          <h1>On-ground Activities</h1>
                          <p>
                            Experiential marketing is all about creating
                            memorable and immersive experiences that engage
                            customers and leave a lasting impression. Our
                            innovative strategies are designed to do just that.
                          </p>
                        </div>
                      </Col>
                      <Col xxl={5} xl={5} lg={5} md={4} sm={0} xm={0}>
                        <div className="product_main_icon">
                          <Image
                            src="/assets/service/brand-activation.png"
                            alt="Physical Engagement"
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

            <div className="BenefitsContainer bgWhite">
              <Container>
                <p className="text-center  first_line">
                  Discover a new dimension of fun and engagement with our
                  On-ground experiential technology solutions. Our installations
                  are designed to appeal to a wide range of audiences, from kids
                  to adults, from tech-savvy to casual users.
                </p>
                <div className="serviceContainer pb-5">
                  <h3 className="text-center benifit-head pt-5">Benefits </h3>
                  {/* <div className="text-center benifit-para">
                    Advantages of on-the-ground activations
                  </div> */}
                  <p className="text-center benifit-para">
                    Advantages of on-the-ground activations
                  </p>
                </div>
                <Row className="justify-content-center">
                  {Benefits?.map((item, keys) => {
                    return (
                      <Col
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={6}
                        sm={6}
                        xm={12}
                        className="mt-2"
                        key={keys}
                      >
                        <BenifitCard payload={item} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
            <div className="bgWhite pb-5">
              <Container>
                <p className="use_case_heading">Related projects</p>
                {/* <div className="use_case_heading">Related projects</div> */}
                <SingleCard list={Related_projects} />
              </Container>
            </div>
            <Container>
              <Row className="justify-content-center pb-4">
                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                  {/* <div className="text-center finishLine py-5">
                    Are you looking to take your on-ground activations to the
                    next level? Do you want to engage your audience in a truly
                    memorable way? If so, experiential technologies may be just
                    what you need.
                  </div> */}
                  <p className="text-center finishLine py-5">
                    Are you looking to take your on-ground activations to the
                    next level? Do you want to engage your audience in a truly
                    memorable way? If so, experiential technologies may be just
                    what you need.
                  </p>
                </Col>
              </Row>
            </Container>
            <Footer bg="#fff" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Ongroundactivations;
