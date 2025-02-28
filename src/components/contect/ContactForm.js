"use client";
import React, { useState } from "react";
import styles from "./contactForm.module.css";
import { FaUser, FaIndustry, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import Loader from "@/components/Loader/sniper";
import { Button, Modal, ButtonGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMPTY_CONTACT = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [isLoad, setIsload] = useState(false);
  const [show, setShow] = useState(false);

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // toast options
  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // post request to send email api
  const send = async (contact) => {
    // try {
    //   let response = await axios.post(
    //     "https://api.telecrm.in/enterprise/"+ process.env.NEXT_PUBLIC_CRM_ENTERPRISE_ID+"/autoupdatelead",
    //     {"fields":contact,"actions": [{"type": "SYSTEM_NOTE","text": "Lead Source: Main Website"}]},{
    //       headers: {
    //         Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_CRM_TOKEN
    //       }});
    //      // console.log(response)
    //   // alert(process.env.NEXT_PUBLIC_CRM_TOKEN)
    //   /* response = await response.json();
    //   console.log(response); */
    //   return true;
    // } catch (error) {
    //   console.log(error);
    //   return false;
    // }
  };

  // form submission
  const submitForm = async (e) => {
    e.preventDefault();
    // console.log("submitting the form", contact);
    setIsload(true);
    if (
      contact.name &&
      contact.email &&
      contact.company &&
      contact.phone &&
      contact.service
    ) {
      // console.log("move on");

      const isSend = await send({ ...contact });
      if (isSend) {
        setIsload(false);
        setShow(true);
        setContact(EMPTY_CONTACT);
        // console.log("email sent", show);
      } else {
        setIsload(false);
        console.log("catching error");
      }
    } else {
      setIsload(false);
      toast.error("Please fill all the required fields", toastOptions);
    }
  };

  return (
    <div className={styles.ContactForm}>
      <header className={styles.header}>
        <h1>Send A Message</h1>
        <p>
          Please let us know what service you are interested in by completing
          the form below. We will get in touch with you shortly.
        </p>
      </header>
      {isLoad ? <Loader /> : ""}
      <form className={styles.form}>
        <main>
          <div className={styles.differentBox}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Your Name *"
                required
                name="name"
                value={contact.name}
                onChange={onInputChange}
              />
              <FaUser />
            </div>
            <div className={styles.inputBox} required>
              <input
                type="email"
                placeholder="Your Email *"
                required
                name="email"
                value={contact.email}
                onChange={onInputChange}
              />

              <IoMail />
            </div>
          </div>

          <div className={styles.differentBox}>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Company Name *"
                required
                name="company"
                value={contact.company}
                onChange={onInputChange}
              />
              <FaIndustry />
            </div>
            <div className={styles.inputBox}>
              <input
                type="number"
                placeholder="Your Phone *"
                required
                name="phone"
                value={contact.phone}
                onChange={onInputChange}
              />
              <FaPhoneAlt />
            </div>
          </div>

          <div className={`${styles.inputBox} ${styles.services}`}>
            <input
              type="text"
              placeholder="Service Required *"
              required
              name="service"
              value={contact.service}
              onChange={onInputChange}
            />
            <GrServices />
          </div>

          <div
            className={`${styles.inputBox} ${styles.services} ${styles.msg}`}
          >
            <textarea
              placeholder="Let us know what you need"
              required
              name="message"
              value={contact.message}
              onChange={onInputChange}
            />
            <MdEdit />
          </div>
        </main>

        <footer className={styles.footer}>
          <p>
            *By submitting this form, you are accepting our Terms of use and our
            Privacy policy
          </p>
          <button type="submit" onClick={(e) => submitForm(e)}>
            Send Message
          </button>
        </footer>
      </form>

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
        <Modal.Body style={{ textAlign: "justify" }}>
          Thank you for your submission! Our team will review your information
          and get back to you as soon as possible. In the meantime, feel free to
          explore our website and learn more about our products/services. If you
          have any urgent inquiries, please don't hesitate to contact us
          directly. We appreciate your interest in our business and look forward
          to speaking with you soon.
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShow(false)}
            >
              close
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}
