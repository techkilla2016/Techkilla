"use client";
import { useState, useRef, useEffect } from "react";
import "./banner.scss";

export default function Banner({ setFormRef }) {
  const contactFormRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (contactFormRef?.current) {
      setFormRef(contactFormRef.current);
    }
  }, [contactFormRef]);

  return (
    <div className="Banner">
      <div className="bannerImg">
        <img
          className="desktopImg"
          src="/landing-page/Banner2.jpg"
          alt="Banner Image"
        />
        <img
          className="mobileImg"
          src="/landing-page/Bannermobile.jpg"
          alt="Banner Image"
        />
      </div>
      <form
        ref={contactFormRef}
        onSubmit={handleSubmit}
        className="formContainer"
      >
        <h3>Enquiry Now</h3>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Phone Number*</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={form.number}
          onChange={handleChange}
          required
        />

        <label htmlFor="designation">Designation/Role</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="e.g., Manager, Developer"
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
