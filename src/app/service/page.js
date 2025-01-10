import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSection from "@/components/home/service";
// export const metadata = {
//   title: "Explore Our Services – Techkilla Experiential Solutions",
//   description: `Explore Techkilla’s range of experiential marketing services. From VR solutions to on-ground activations, we craft innovative, interactive experiences for brands.`,
// };
const siteUrl = "https://www.techkilla.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/service",
    languages: {
      "en-US": `/service/en-US`,
      "de-DE": `/service/de-DE`,
    },
  },
  title: "Explore Our Services – Techkilla Experiential Solutions",
  description:
    "Explore Techkilla’s range of experiential marketing services. From VR solutions to on-ground activations, we craft innovative, interactive experiences for brands.",
  keywords:
    "Experiential Marketing, VR Solutions, On-Ground Marketing, Innovative Campaigns, Marketing Activations, Techkilla Services, Immersive Marketing Strategies, Creative Brand Engagement , Experiential Marketing Services, Techkilla Solutions, VR Marketing Solutions, On-Ground Activations, Innovative Marketing Campaigns",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    site_name: "Techkilla",
    title: "Explore Our Services – Techkilla Experiential Solutions",
    description:
      "Explore Techkilla’s range of experiential marketing services. From VR solutions to on-ground activations, we craft innovative, interactive experiences for brands.",
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
    title: "Explore Our Services – Techkilla Experiential Solutions",
    description:
      "Explore Techkilla’s range of experiential marketing services. From VR solutions to on-ground activations, we craft innovative, interactive experiences for brands.",
    // images: {
    //   url: "/og-images/home-og.png",
    //   width: 1200,
    //   height: 630,
    //   alt: "AI-powered face swap preview image",
    // },
  },
};
const Service = () => {
  return (
    <>
      <Head>
        <title>Our Service</title>
      </Head>
      <Header />
      <main>
        <div className="main">
          <div className="product_landing  bg-light">
            <div className="product_landing_background">
              <div className="preloaderBack">
                <Image
                  src="/assets/banner/service.png"
                  alt="Physical Engagement"
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/assets/banner/Microsite.png"
                  alt="Physical Engagement"
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
                        <h1>Revolutionary Tech Solutions</h1>
                        <p>
                          we specialize in providing experiential technology
                          solutions that help businesses enhance customer
                          engagement, drive growth, and increase brand loyalty.
                        </p>
                      </div>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={0} xm={0}>
                      <div className="product_main_icon">
                        <Image
                          src="/assets/service/playble-ads.png"
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
          <div className="mainContainer bg-light">
            <div className="service">
              <h3
                className="section__title my-5"
                style={{
                  color: " #000",
                  padding: "30px 0px",
                  textAlign: "center",
                }}
              >
                <span className="section__title-line-center">Our Services</span>
              </h3>
              <ServiceSection bgColor="#f8f9fa" />
            </div>
            <Container>
              <Row className="justify-content-center py-4">
                <Col xxl={10} xl={10} lg={10} md={10} sm={12} xm={12}>
                  {/* <div className="text-center" style={{ fontSize: "18px" }}>
                    Our team of experts works closely with you to understand
                    your unique needs and deliver tailored solutions that meet
                    your specific goals. Whether you're looking to improve
                    customer satisfaction, increase sales, or enhance your
                    brand's image, our experiential technology solutions can
                    help you achieve your objectives.
                  </div> */}
                  <p className="text-center" style={{ fontSize: "18px" }}>
                    Our team of experts works closely with you to understand
                    your unique needs and deliver tailored solutions that meet
                    your specific goals. Whether you're looking to improve
                    customer satisfaction, increase sales, or enhance your
                    brand's image, our experiential technology solutions can
                    help you achieve your objectives.
                  </p>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};
export default Service;
