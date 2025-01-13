import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import ContactFrom from "@/components/contect/ContactForm";
import ColLeft from "@/components/contect/slide";
import Image from "next/image";
import contact from "./../../../public/assets/contact/contact.png";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Techkilla – Innovative Solutions for Your Brand",
  description:
    "Get in touch with Techkilla for experiential marketing solutions. Contact our team to explore VR, AI booths, and interactive event services for your brand.",
  keywords:
    "Experiential Marketing, VR Booths, AI Booths, Interactive Event Services, Brand Engagement Tools, Techkilla Team, Marketing Innovation, Creative Brand Experiences",
};
const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main">
          <div className="mainContainer">
            <div className="contact container-fluid">
              <div className={`row ${styles.container}`}>
                <div
                  className={`col-lg-6  home-image ${styles.imageParent} px-0`}
                >
                  <div className={`hero ${styles.imgContainer}`}>
                    {/* <ColLeft /> */}
                    <Image src={contact} alt="contact" />
                  </div>
                </div>
                <div
                  className="col-lg-6 contact-form"
                  style={{ background: "#f5f5f4" }}
                >
                  <ContactFrom bg="#f5f5f4" />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
