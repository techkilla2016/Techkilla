"use client";
import { useState } from "react";
import Banner from "../../../components/landing-page/banner/index.js";
import About from "../../../components/landing-page/about/index.js";
import Services from "../../../components/landing-page/services/index.js";
import Client from "../../../components/landing-page/client/index.js";
import Testimonials from "../../../components/landing-page/testimonials/index.js";
import StickyButton from "../../../components/landing-page/sticky-button/index.js";
import { animateScroll as scroll } from "react-scroll";
// import Footer from '../components/Footer';

export default function LandingPage() {
  const [formRef, setFormRef] = useState();
  // console.log(formRef);
  const handleContactScroll = () => {
    if (formRef) {
      const offsetPosition = formRef.offsetTop - 200;
      scroll.scrollTo(offsetPosition, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <div>
      <Banner setFormRef={setFormRef} />
      <About handleContactScroll={handleContactScroll} />
      <Services handleContactScroll={handleContactScroll} />
      <Client handleContactScroll={handleContactScroll} />
      <Testimonials handleContactScroll={handleContactScroll} />
    </div>
  );
}
