import React from "react";
import Header from "@/components/header/";
import Footer from "@/components/footer";
import Hero from "@/components/home/hero";
import WhatWeDo from "@/components/home/what-we-do";
import Service from "@/components/home/service";
import QrRegistration from "@/components/home/microsite";
import Portfolio from "@/components/general/Portfolio";
import work from "@/data/general/work";
import { Container } from "react-bootstrap";
import Testimonials from "@/components/Testimonials";
import TestimonialsData from "@/data/Testimonials";
import WhatsappModal from "@/components/Modal/whatsapp";
import Head from "next/head";
export const metadata = {
  title: "Techkilla",
  description: `With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals.`,
};

const Home = () => {
  return (
    <>
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main>
        <WhatsappModal />
        <div className="main">
          {/* hero section  */}
          <Hero isContinue={true} />

          {/* what we do section  */}
          <WhatWeDo />

          {/* service section  */}
          <div className="pb-5" style={{ background: "rgb(245 245 244)" }}>
            <div
              className="micro_heading01"
              data-aos="zoom-in-down"
              data-aos-delay={100}
            >
              Our <span>Services</span>
            </div>
          </div>
          <Service bg="/comman/tech.webp" />

          {/* QR Registrasion intro  section*/}
          <QrRegistration />

          {/* recent work section  */}
          <Portfolio
            work={work}
            lastLine="With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals."
          />

          {/* Testimonials section*/}
          <Container
            fluid
            className="Testimonials py-5"
            style={{ background: "#fafafa" }}
          >
            <h2 className="text-secondary fw-bold text-center pt-5">
              Testimonials
            </h2>
            <Testimonials cardData={TestimonialsData} />
          </Container>
        </div>
      </main>
      <Footer bg="#fafafa" />
    </>
  );
};

export default Home;
