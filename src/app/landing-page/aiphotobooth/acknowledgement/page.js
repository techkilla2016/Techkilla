"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./thankyou.scss";

const AcknowledgementPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="main-container">
      <div className="thankyou-container">
        <div className="company-logo">
          <img src="/logo/logo-01.png" alt="Description of the image" />
        </div>

        <h1 className="thankyou-title">Thank You!</h1>
        <p className="thankyou-message">
          Thank You for Connecting with Techkilla! Your submission has been
          received. Our team will reach out to you shortly.
        </p>
        <p className="thankyou-info">
          Explore Our Interactive Tech Engagement Solutions, Visit:{" "}
          <Link href="/" className="thankyou-link">
            Techkilla.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AcknowledgementPage;
