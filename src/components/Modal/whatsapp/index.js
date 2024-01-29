"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Cookies from "js-cookie";

const WhatsappModal = () => {
  const [show, setShow] = useState(false);
  // const [isMore, setIsMore] = useState(false)
  /* useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3000)
    }, []) */

  useEffect(() => {
    // Check if the modal has been shown before
    // const hasModalBeenShown = localStorage.getItem("hasWhatsappModalBeenShown");
    const hasModalBeenShown = Cookies.get("hasWhatsappModalBeenShown");
    if (!hasModalBeenShown) {
      setTimeout(() => {
        setShow(true);
        // localStorage.setItem("hasWhatsappModalBeenShown", "true");
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
      <Modal
        show={show}
        onHide={handleClose}
        centered
        data-aos="zoom-in-down"
        data-aos-delay="0"
      >
        <Modal.Body>
          <div className="wts-header">
            <div className="wts-profile-icon">
              <Image
                src="/logo/robo.jpg"
                alt="techkilla"
                width={100}
                height={100}
              />
            </div>
            <div className="wts-profile-content">
              <div className="wts-name">Techkilla</div>
              <div className="wts-headline">
                Advanced Technology Solutions
                {/* {
                    isMore ? <span onClick={() => setIsMore(false)}>
                      Interactive Playable Ads instead of simple video ads, VR Solutions and offline tech engagement
                    </span> : <span onClick={() => setIsMore(true)} className='wts-see'> ... see more</span>
                  } */}
              </div>
            </div>
            <button className="wts-close" onClick={handleClose}>
              <AiOutlineCloseCircle />
            </button>
          </div>

          <div className="wts-body">
            <div className="wts-msg">
              <div className="wts-recive">
                <strong>Techkilla</strong> <br />
                <br />
                Hi! Welcome to Techkilla, <br />
                How may we help you?
              </div>
            </div>
          </div>

          <div className="wts-footer">
            <Link
              href="http://wa.me/917827362702?text=Hi Techkilla Team,%0AI am looking for some tech solutions. %0AKindly revert on this%0A%0AThanks."
              className="btn btn-success"
              target="_blank"
            >
              Start Chat
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      {/* {show ? (
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
