import React from "react";
import Footer from "@/components/footer";
import { Col, Container, Row } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import Slider from "@/components/photo-ai/slider";
import Hero from "@/components/photo-ai/hero";
import ModelSwiper from "@/components/photo-ai/ModelSwiper";
import CompanySlider from "@/components/photo-ai/CompanySlider";
import Testimonials from "@/components/Testimonials";
import data2 from "@/data/photo-ai/companyAbout";
import AIEnhancedData from "@/data/photo-ai/AIEnhancedData";
import aiList from "@/data/photo-ai/aiList";
import aiPhoto from "@/data/photo-ai/AI-Photo";
import TestimonialsData from "@/data/Testimonials";
import cardData from "@/data/photo-ai/Engagement";
const SingleAIPhoto = () => {
  return (
    <main>
      <div className="main">
        <div className="mainContainer">
          <Hero isContinue={false} />

          {/* section 2  */}
          <Container className="photo-ai-company py-5">
            <Row>
              {data2?.map((item, keys) => {
                return (
                  <Col
                    key={keys}
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={12}
                    sm={12}
                    xs={12}
                    data-aos="fade-up"
                    data-aos-delay={keys * 100}
                  >
                    <div className="inner d-flex flex-column align-items-center">
                      <div
                        className="icon"
                        data-aos="fade-up"
                        data-aos-delay={keys * 100}
                      >
                        {item?.icon}
                      </div>
                      <h5
                        className="head text-center"
                        data-aos="fade-up"
                        data-aos-delay={keys * 200}
                      >
                        {item?.heading}
                      </h5>
                      <p
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-delay={keys * 300}
                      >
                        {item?.desc}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          <Container fluid className="my-5 CompanySlider">
            <CompanySlider />
          </Container>

          {/* section 3 */}
          <div className="What-ai py-5">
            <Container>
              <Row className="justify-content-evenly">
                <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                  <h2 className="py-3" data-aos="fade-up" data-aos-delay={100}>
                    What is an AI Photobooth?
                  </h2>
                  <h3 className="py-3" data-aos="fade-up" data-aos-delay={100}>
                    Embark on an Unmatched AI Photobooth Experience: Introducing
                    AI Photoshots
                  </h3>
                  <p data-aos="fade-up" data-aos-delay={200}>
                    Dive into the forefront of technological excellence with our
                    cutting-edge AI Photobooth, driven by the revolutionary AI
                    Photoshots platform. At the core of this groundbreaking
                    experience lies the infusion of advanced generative AI
                    technology, ensuring the creation of truly exceptional and
                    captivating results.
                  </p>
                  <p data-aos="fade-up" data-aos-delay={300}>
                    Seamlessly integrated, our AI Photobooth empowers you to
                    unlock the full potential of personalized AI prompts,
                    effortlessly transforming user photographs into enchanting,
                    themed masterpieces. Our proprietary AI Photobooth
                    implementation takes it a step further, granting you the
                    creative authority to not only shape distinct styles but
                    also dictate unique poses and introduce specific characters
                    or objects.
                  </p>
                  <p data-aos="fade-up" data-aos-delay={400}>
                    Step into the future of photo booth experiences with AI
                    Photoshots - where the AI Photobooth seamlessly integrates
                    artificial intelligence with creativity, redefining the art
                    of capturing moments. Elevate your events and celebrations
                    with our unparalleled AI Photobooth, delivering innovative
                    and sophisticated experiences every time. Experience the
                    magic of AI Photobooth at its finest with AI Photoshots!
                  </p>
                </Col>
                <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                  <Row className="px-4">
                    {AIEnhancedData?.map((item, keys) => {
                      return (
                        <Col
                          xxl={6}
                          lg={6}
                          md={6}
                          sm={6}
                          xs={6}
                          key={keys}
                          className="py-3"
                          data-aos="fade-up"
                          data-aos-delay={keys * 100}
                        >
                          <div className="img-ai-box">
                            <div className="imgBox">
                              <img src={item?.img} alt="" />
                            </div>
                            <div className="count-ai" id={`count${keys + 1}`}>
                              {keys + 1}
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>

          {/* section 4 */}
          <div className="ai-model-container py-5">
            <div className="ai-model-inner  py-5 d-flex align-items-start">
              <ModelSwiper />
            </div>
          </div>

          {/* section 5 */}
          <Container className="py-5 ai-list-container">
            <Row>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <h2>
                  {" "}
                  AI Photobooth for Your event engagement solution (In-person,
                  Hybrid or Virtual gatherings)
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

          {/* section 6 */}
          <Container fluid className="ai-slilder py-5">
            <Slider cardData={cardData} />
          </Container>

          {/* section 7  */}
          <Container className="ai-photo-Section-7">
            <Row>
              <Col xxl={6} xl={6} lg={6} md={10} sm={12} xs={12}>
                <h2>
                  Craft and Transfigure with the AI Photo Booth Experience
                </h2>
                <p>
                  Irrespective of your event's theme, our exclusive AI
                  technology is malleable and tailored to manifest your vision
                  seamlessly."
                </p>
                <button className="btn">GET IN TOUCH</button>
              </Col>
            </Row>
            <Row className="py-3 mt-5">
              {aiPhoto?.map((item, keys) => {
                return (
                  <Col
                    key={keys}
                    xxl={4}
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    className="px-5 py-2"
                  >
                    <div className="img-section">
                      <img src={item?.img} />
                    </div>
                    <h3 className="py-2s">{item?.title}</h3>
                  </Col>
                );
              })}
            </Row>
          </Container>

          {/* Testimonials */}
          <Container fluid className="Testimonials">
            <h2 className="fw-bold text-center mt-5">Testimonials</h2>
            <Testimonials cardData={TestimonialsData} />
          </Container>

          <Footer bg={"#fff"} />
        </div>
      </div>
    </main>
  );
};

export default SingleAIPhoto;
