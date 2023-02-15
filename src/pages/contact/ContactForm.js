import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";


// const SERVICE_URL = 

const EMPTY_CONTACT = {
  subject: "",
  company: "",
  email: "",
  name: "",
  message: "",
  phone: "",
};
function ContactFrom() {
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState(EMPTY_CONTACT);

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const send = async () => {
    setContact({ ...EMPTY_CONTACT });
  };
  return (
    <div className=" contactus px-3" id="contact" >
      <div className="container">
        <h3 className="fw-bold" >Let's Talk</h3>
        <Row className={`main-row ${showModal ? "form-submitted" : ""}`}>
          <Col className="details-form">
            <Row>
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Control
                    placeholder="Full Name *"
                    name="name"
                    value={contact.name}
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Work Email *"
                    name="email"
                    value={contact.email}
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="company">
                  <Form.Control
                    placeholder="Company Name *"
                    name="company"
                    value={contact.company}
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Control
                    placeholder="Phone Number"
                    name="phone"
                    value={contact.phone}
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="subject">
                  <Form.Control
                    name="subject"
                    value={contact.subject}
                    placeholder="Subject"
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="message">
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={3}
                    value={contact.message}
                    placeholder="Type your message..."
                    onChange={onInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="auto">
                <Button className="btn-action" onClick={send}>
                  Contact Us
                </Button>
              </Col>
              <Col>
                <div className="disclaimer">
                  * By submitting this form, you are accepting our <u>Terms of use</u> and our <u>Privacy policy .</u>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {showModal && (
          <div className="submitted">
            <div className="header">
              <div className="close-btn" onClick={() => setShowModal(false)}>
                <img src="/close.svg" alt="close button" />
              </div>
            </div>
            <div className="body">
              <div>
                <img src="/envelop.svg" alt="envelop" />
              </div>
              <div className="title">Thanks for submitting</div>
              <div className="subtitle">your message has been sent!</div>
            </div>
          </div>
        )}</div>
    </div>
  );
}

export default ContactFrom;
