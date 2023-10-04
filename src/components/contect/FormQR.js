import { useState } from "react";
import { Form, Col, Row, Button, Modal, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import PhoneInput from "react-phone-input-2";

// const SERVICE_URL =

const EMPTY_CONTACT = {
    name: "",
    email: "",
    company: "",
    job: "",
    country: "",
};

function QrForm({ send, bg }) {
    const [showModal, setShowModal] = useState(false);
    const [contact, setContact] = useState(EMPTY_CONTACT);
    const [isLoad, setIsLoad] = useState(false);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    const [show, setShow] = useState(false);

    const submitForm = async () => {
        const { name, email, company, job, country } = contact;
        if (name && email && company && phone && job && country) {
            setIsLoad(true);
            const isSend = await send({ ...contact, phone });
            if (isSend) {
                setShow(true);
                setContact(EMPTY_CONTACT);
            } else {
                setIsLoad(false)
                // alert('something wrong please try again')
            }
        }
    };
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    return (
        <div className="contactus px-3 py-0" id="contact" style={{ background: bg }}>
            <div className="container">
                <h3 className="fw-bold">Let's Talk</h3>
                <Row className={`main-row ${showModal ? "form-submitted" : ""}`}>
                    <Col className="details-form">
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="name">
                                    <Form.Control
                                        placeholder="Full Name *"
                                        name="name"
                                        value={contact?.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="email">
                                    <Form.Control
                                        type="email"
                                        placeholder="Work Email *"
                                        name="email"
                                        value={contact?.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="country">
                                    <Form.Control
                                        name="country"
                                        value={contact?.country}
                                        placeholder="Country/Region *"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <PhoneInput
                                    className="phoneInput"
                                    defaultCountry="US" // Set the default country
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="job">
                                    <Form.Control
                                        name="job"
                                        value={contact?.job}
                                        placeholder="Job Title *"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="company">
                                    <Form.Control
                                        placeholder="Company Name *"
                                        name="company"
                                        value={contact?.company}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-3 px-3">
                                <div className="disclaimer">
                                    * By submitting this form, you are accepting our{" "}
                                    <u>Terms of use</u> and our <u>Privacy policy .</u>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="auto">
                                <Button
                                    className="btn-action d-flex align-items-center justify-content-center"
                                    onClick={submitForm}
                                >
                                    {isLoad ? (
                                        <div
                                            class="spinner-border text-secondary"
                                            role="status"
                                        ></div>
                                    ) : (
                                        <div className="px-3">submit</div>
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {showModal && (
                    <div className="submitted">
                        <div className="header">
                            <div className="close-btn" onClick={() => setShowModal(false)}>
                                <img src="/close.svg" alt="contact us" />
                            </div>
                        </div>
                        <div className="body">
                            <div>
                                <img src="/envelop.svg" alt="contact us" />
                            </div>
                            <div className="title">Thanks for submitting</div>
                            <div className="subtitle">your message has been sent!</div>
                        </div>
                    </div>
                )}
            </div>

            <>
                <Modal
                    size="lg"
                    show={show}
                    centered
                    onHide={() => {
                        setShow(false);
                        setIsLoad(false);
                    }}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            <strong>Submission Success</strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        Thank you for your submission! Our team will review your information
                        and get back to you as soon as possible. In the meantime, feel free
                        to explore our website and learn more about our products/services.
                        If you have any urgent inquiries, please don't hesitate to contact
                        us directly. We appreciate your interest in our business and look
                        forward to speaking with you soon.
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonGroup>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => {
                                    setShow(false);
                                    setIsLoad(false);
                                }}
                            >
                                close
                            </Button>
                        </ButtonGroup>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default QrForm;
