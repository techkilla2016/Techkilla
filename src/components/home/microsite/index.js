import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";

const QrRegistration = () => {
  return (
    <div className="microSection">
      <h1
        className="section__title pb-5 text-center"
        data-aos="zoom-in-down"
        data-aos-delay="0"
      >
        <span className="section__title-line-center">
          {" "}
          <strong
            style={{
              color: "#fdb714",
            }}
          >
            Project X:
          </strong>{" "}
          The Ultimate Trendsetter
        </span>
      </h1>
      <h2
        className="heading"
        style={{ fontSize: "40px" }}
        data-aos="zoom-in-up"
        data-aos-delay="0"
      >
        <Link href="/QR-code-solution" style={{ color: "#fdb714" }}>
          QR Code
        </Link>{" "}
        Registration
      </h2>
      <Container>
        <div className="microFulImg" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src="/assets/microsite/microsite.png"
            alt="What is QR Code Registration?"
            width={1920}
            height={1080}
          />
        </div>
        <div className="microPara" data-aos="zoom-out" data-aos-delay="100">
          QR code registration is a form of one-of-a-kind registration process
          that occurs when a wider audience must be managed in terms of
          attendance,verification, and backend entry count over time. It
          overcomes the difficulty of dealing with and maintaining manual
          records and also saves time & labor
        </div>
        <div
          className="micro_heading01 my-5"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          How does it <span>function</span>?{" "}
        </div>
        <div
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link id="bottone1" href="/QR-code-solution" className="m-auto my-3">
            <strong>Read More...</strong>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default QrRegistration;
