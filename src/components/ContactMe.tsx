import React, { useState, type FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import type { FormData, FormErrors } from "../types/formTypes";
import "../assets/css/contactMe.css";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("dxkaTtd0GknUmjcgS");
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the error when the user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const templateID = "template_5vkuo8n";
    const serviceID = "service_g8ukqjl";

    try {
      const response = await emailjs.send(serviceID, templateID, {
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        message: formData.message,
      });

      console.log("Email sent successfully", response);

      // Reset the form
      setFormData({
        fullName: "",
        company: "",
        email: "",
        message: "",
      });

      setIsSubmitted(true);

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="widthController">
      <div className="formContainer">
        <div className="title">
          <h1>Contacts</h1>
        </div>
        <p>
          <em>Do you need help with your project?</em>
        </p>
        <p>
          <em>Are you interested in starting a collaboration with me?</em>
        </p>
        <p>Fill out the form below</p>

        {isSubmitted && <div className="successMessage">Your message has been sent successfully!</div>}

        <form className="contactForm" onSubmit={sendEmail}>
          <div className="formRow">
            <label htmlFor="fullName">Name</label>
            <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleInputChange} required className={errors.fullName ? "error" : ""} />
            {errors.fullName && <span className="errorMessage">{errors.fullName}</span>}
          </div>

          <div className="formRow">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} required className={errors.company ? "error" : ""} />
            {errors.company && <span className="errorMessage">{errors.company}</span>}
          </div>

          <div className="formRow">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="joe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="errorMessage">{errors.email}</span>}
          </div>

          <div className="formRow">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={errors.message ? "error" : ""}
            />
            {errors.message && <span className="errorMessage">{errors.message}</span>}
          </div>

          <div className="formRow">
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
