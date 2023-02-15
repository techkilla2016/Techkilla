import { Row, Col } from "react-bootstrap";
import FeatureBox from "./FeatureBox";
import FeatureCentralBox from "./FeatureCentralBox";

function Technology() {
  return (
    <div className="page technology px-0" id="technology">
      <div className="container">
        <Row className="technology-main-row">
          <div className="page-title">How it Works</div>
        </Row>
        <div className="d-flex justify-content-between flex-lg-row flex-column ">
          <div className="in d-flex flex-column justify-content-center">
            <Row className="m-0">
              <Col className="d-lg-block  d-flex justify-content-between">
                <FeatureBox

                  title="Renewable Energy"
                  content="Direct, remote connections between inverters, loggers, weather data, SCADA, DAS, revenue grade meters, PV, solar, & wind for full visibility on every level."
                />
                <FeatureBox className="my-4"
                  title="Energy Utilizations"
                  content="Our platform empowers and connects to a variety of energy uses, including storage batteries, EV charging stations, smart consumption meters, and more."
                />
                <FeatureBox
                  title="Integrations"
                  content="Our platform empowers and connects to a variety of energy uses, including storage batteries, EV charging stations, smart consumption meters, and more."
                />
              </Col>
              <Col lg="auto" className="my-auto d-lg-block d-none">
                <img src="/curly.svg" alt="curly" />
              </Col>
            </Row>
            <div className=" d-flex d-lg-none justify-content-around"><div className=" my-3"><img className="tabletArrowDown" src="/arrow-right.svg" alt="arrow-right" /></div><div className=" my-3"><img className="tabletArrowDown" src="/arrow-right.svg" alt="arrow-right" /></div><div className=" my-3"><img className="tabletArrowDown" src="/arrow-right.svg" alt="arrow-right" /></div></div>
          </div>
          <FeatureCentralBox className="centerBoxMain" />

          <div className="out d-flex flex-column justify-content-between  ">
            <Row className="align-items-center m-0">
              <div className="d-lg-none d-block ">
                <div className="row justify-content-around my-3">  <img className="mobileArrowDown mobileArrowDownBottom " src="/arrow-right.svg" alt="arrow-right" />  <img className="mobileArrowDown mobileArrowDownBottom " src="/arrow-right.svg" alt="arrow-right" />  <img className="mobileArrowDown mobileArrowDownBottom " src="/arrow-right.svg" alt="arrow-right" />  <img className="mobileArrowDown mobileArrowDownBottom " src="/arrow-right.svg" alt="arrow-right" /></div>
              </div>
              <Col lg="auto" className="d-lg-block d-none">
                <img className="" src="/arrow-right.svg" alt="arrow-right" />
              </Col>
              <Col>
                <FeatureBox title="Real-Time Alerts & Insights" />
              </Col>
            </Row>
            <Row className="align-items-center m-0">
              <Col lg="auto" className="d-lg-block d-none">
                <img className="" src="/arrow-right.svg" alt="arrow-right" />
              </Col>
              <Col>
                <FeatureBox title="Performance & Analysis" />
              </Col>
            </Row>
            <Row className="align-items-center m-0">
              <Col lg="auto" className="d-lg-block d-none">
                <img className="" src="/arrow-right.svg" alt="arrow-right" />
              </Col>
              <Col>
                <FeatureBox title="Financial & Maintenance Visibility" />
              </Col>
            </Row>
            <Row className="align-items-center m-0">
              <Col lg="auto" className="d-lg-block d-none">
                <img className="" src="/arrow-right.svg" alt="arrow-right" />
              </Col>
              <Col>
                <FeatureBox title="Reports & End User Interfaces" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
