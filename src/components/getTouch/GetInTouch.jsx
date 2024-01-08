import React, { useEffect, useState } from "react";
import "./GetinTouch.scss";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HashLoader } from "react-spinners";
import Footer from "../footer/Footer";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({ name: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submut");
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      window.open(
        `mailto:contactus.webwrite@gmail.com?&subject=${formData.subject}&body=${formData.message}`,
        "_blank"
      );

      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    if (!formData.subject) {
      errors.subject = "Subject is required";
    }
    return errors;
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HashLoader color="#0051FB" size={50} />
        </div>
      ) : (
        <>
          <div className="form">
            <h1> Get in touch </h1>
            <div className="input_fields">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error_name">{errors.name}</span>
                )}
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error_email">{errors.email}</span>
                )}

                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData?.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="error_email">{errors.subject}</span>
                )}

                <textarea
                  placeholder="Let us know your thoughts to contact..."
                  cols="7"
                  rows="5"
                  name="message"
                  value={formData?.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <span className="error_message">{errors.message}</span>
                )}
                <button className="submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default GetInTouch;
