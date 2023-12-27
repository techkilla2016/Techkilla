'use client'
import { useState } from "react";
import { Form, Col, Row, Button, Modal, ButtonGroup } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import Loader from "@/components/Loader/sniper";
import Image from "next/image";


// const SERVICE_URL = 

const EMPTY_CONTACT = {
  subject: "",
  company: "",
  email: "",
  name: "",
  message: "",
  type: 'contact'
};
function ContactFrom({ BaseUrl, bg }) {

  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [isLoad, setIsload] = useState(false)
  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false)

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const send = async (contact) => {
    try {
      const reponce = await axios.post(`${BaseUrl}/api/email/`, contact)
      return true
    } catch (error) {
      return false;
    }
  };


  const submitForm = async () => {
    setIsload(true)
    const isSend = await send({ ...contact, phone })
    if (isSend) {
      setIsload(false)
      setShow(true)
      setContact(EMPTY_CONTACT)
    } else {
      setIsload(false)
    }
  }

  return (
    <div className="contactus" id="contact" style={{ background: bg }}>
      {
        isLoad ? <Loader /> : ''
      }
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
                <PhoneInput
                  className="phoneInput"
                  defaultCountry="IN" // Set the default country
                  value={phone}
                  onChange={handlePhoneChange}
                />
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
              <Col className="mb-4 px-3">
                <div className="disclaimer">
                  * By submitting this form, you are accepting our <u>Terms of use</u> and our <u>Privacy policy .</u>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="auto" className="px-4">
                <Button className="btn-action" onClick={submitForm}>
                  Contact Us
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        {showModal && (
          <div className="submitted">
            <div className="header">
              <div className="close-btn" onClick={() => setShowModal(false)}>
                <Image src="/close.svg" alt="contact us" />
              </div>
            </div>
            <div className="body">
              <div>
                <Image src="/envelop.svg" alt="contact us" />
              </div>
              <div className="title">Thanks for submitting</div>
              <div className="subtitle">your message has been sent!</div>
            </div>
          </div>
        )}</div>


      <>
        <Modal
          size="lg"
          show={show}
          centered
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Submission Success
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            Thank you for your submission! Our team will review your information and get back to you as soon as possible. In the meantime, feel free to explore our website and learn more about our products/services. If you have any urgent inquiries, please don't hesitate to contact us directly. We appreciate your interest in our business and look forward to speaking with you soon.
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup>
              <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
                close
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ContactFrom;
