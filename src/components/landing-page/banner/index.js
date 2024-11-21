"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./banner.scss";

const EMPTY_FORM = {
  token: "FjUDGe9iYH55sykd0BtD0HweUhjAWfQE",
  name: "",
  phone: "",
  designation: "",
};

export default function Banner({ setFormRef }) {
  const contactFormRef = useRef();
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // API request function
  const sendForm = async (data) => {
    try {
      let response = await axios.post(
        "https://analytiq4.com/tk-emailer/mail.php",
        data
      );
      return true;
    } catch (err) {
      console.error("Error submitting the form:", err);
      return false;
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Validate required fields
    if (form.name && form.phone) {
      const isSend = await sendForm({ ...form });

      if (isSend) {
        setLoading(false);
        setSuccess(true);
        setForm(EMPTY_FORM);
        toast.success("Form submitted successfully!", toastOptions);
      } else {
        setLoading(false);
        toast.error("There was an error submitting the form.", toastOptions);
      }
    } else {
      setLoading(false);
      toast.error("Please fill in all the required fields.", toastOptions);
    }
  };

  // Pass the form ref to parent component
  useEffect(() => {
    if (contactFormRef?.current) {
      setFormRef(contactFormRef.current);
    }
  }, [contactFormRef, setFormRef]);

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
          onChange={inputChange}
          required
        />

        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={inputChange}
          required
        />

        <label htmlFor="designation">Designation/Role</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={form.designation}
          onChange={inputChange}
          placeholder="e.g., Manager, Developer"
        />

        <button className="submit-btn" disabled={loading}>
          {loading ? "Submit" : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
