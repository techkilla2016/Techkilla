"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";
import styles from "./whatsappModal.module.css";
import closeBtn from "./../../../../public/assets/home/whatsapp-modal/cancel-btn.png";

const WhatsappModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before
    const hasModalBeenShown = Cookies.get("hasWhatsappModalBeenShown");
    if (!hasModalBeenShown) {
      setTimeout(() => {
        setShow(true);
        Cookies.set("hasWhatsappModalBeenShown", "true", {
          expires: 1 / (24 * 60),
        });
      }, 3000);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/* aria-labelledby={styles.whatsappModal} */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        data-aos="zoom-in-down"
        data-aos-delay="0"
        className={styles.whatsappModal}
      >
        {/* aria-labelledby={styles.modelBody} */}
        <Modal.Body className={styles.modelBody}>
          {/* wts-header */}
          {/* wts-profile-content */}
          {/* wts-close */}
          {/* wts-name */}
          {/* wts-headline */}
          <div className={styles.header}>
            <div className={styles.leftHeader}>
              <div className={`wts-profile-icon ${styles.logoContainer}`}>
                <Image
                  src="/logo/robo.jpg"
                  alt="techkilla"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.contentContainer}>
                <p className={styles.title}>Techkilla</p>
                <p className={styles.description}>
                  Advanced Technology Solutions
                </p>
              </div>
            </div>
            <button className={styles.close} onClick={handleClose}>
              {/* <AiOutlineCloseCircle /> */}
              <Image src={closeBtn} alt="close btn" width={20} height={20} />
            </button>
          </div>

          <div className={`wts-body ${styles.main}`}>
            <div className={styles.comingMsg}>
              <img
                src="/assets/home/whatsapp-modal/comingMsg.png"
                alt="coming-msg"
              />
            </div>
            <Link
              href="http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks."
              target="_blank"
              className={styles.msgBox}
            >
              <img src="/assets/home/whatsapp-modal/msgBox.png" alt="msg-box" />
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/*  {show ? (
        ""
      ) : (
        <Link
          className="whatsapp-btn"
          href="http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks."
        >
          <BsWhatsapp />
        </Link>
      )} */}
    </>
  );
};

export default WhatsappModal;
