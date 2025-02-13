import React from "react";
import "./contactUs.scss";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex-col-center Contact">
      <div className="flex-col-center contactMain">
        <p className="contactUs">
          Make Your Event Unforgettable with Techkilla!
        </p>
        <p className="descText">
          Want to wow your guests with AI-driven wedding experiences? Contact
          Techkilla today and book your AI-powered wedding photobooth!
        </p>
        <p className="fontContent queryMail">
          📩 Get in touch:{" "}
          <a href="mailto:support@snapshawt.com" className="contactEmail">
            contact@techkilla.com
          </a>{" "}
          or{" "}
          <a
            className="whatsappLink"
            href="https://wa.me/917827362702"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </p>
        <p className="fontContent queryMail2">
          📅 Book a Demo:{" "}
          <a
            className="booking"
            href="https://calendly.com/techkilla/meeting?month=2025-02"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </p>
      </div>
      <div className="flex-row-center leftFooterSecond">
        <ul className="flex-row-center socialIconCon">
          {/* Facebook */}
          <Link href="https://www.facebook.com/techkilla2015" target="_blank">
            <li>
              <Image
                src={"/blogs/Icon-02.png"}
                width={32}
                height={32}
                className="socialIcon"
                alt="Facebook icon"
              />
            </li>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/techkillatechnologies/"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-04.png"}
                width={32}
                height={32}
                className="socialIcon"
                alt="Instagram icon"
              />
            </li>
          </Link>

          {/* Twitter */}
          <Link href="https://x.com/techkillatechno" target="_blank">
            <li>
              <Image
                src={"/blogs/Icon-03.png"}
                width={32}
                height={32}
                className="socialIcon"
                alt="Twitter icon"
              />
            </li>
          </Link>

          {/* Pinterest */}
          <Link
            href="https://www.pinterest.com/techkillatechnologies/"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-01.png"}
                width={32}
                height={32}
                className="socialIcon"
                alt="Pinterest icon"
              />
            </li>
          </Link>

          {/* Snapchat */}
          <Link
            href="https://www.snapchat.com/add/techkilla2.0?share_id=PVHWA-z-93w&locale=en-GB"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-05.png"}
                width={32}
                height={32}
                className="socialIcon"
                alt="Snapchat icon"
              />
            </li>
          </Link>

          <Link
            href="https://www.youtube.com/@TechkillaTechnologies"
            target="_blank"
          >
            <li>
              <Image
                src={"/blogs/Icon-07.png"}
                width={32} // specify appropriate width
                height={32} // specify appropriate height
                className="socialIcon"
                alt="YouTube icon"
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
