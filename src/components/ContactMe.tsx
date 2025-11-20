import React, { useState, type FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import type { FormData, FormErrors } from "../types/formTypes";

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
    <div className="text-center w-full">
      <div className="title py-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Contacts</h1>
      </div>
      <p className="h-auto text-center text-white text-xs md:text-sm lg:text-base my-1">
        <em>Do you need help with your project?</em>
      </p>
      <p className="h-auto text-center text-white text-xs md:text-sm lg:text-base my-1">
        <em>Are you interested in starting a collaboration with me?</em>
      </p>
      <p className="h-auto text-center text-white text-xs md:text-sm lg:text-base my-1">Fill out the form below</p>

      {isSubmitted && <div className="bg-green-100 text-green-800 p-3 rounded mb-5 border border-green-300">Your message has been sent successfully!</div>}

      <form className="flex justify-center items-center flex-col rounded-md w-full" onSubmit={sendEmail}>
        <div className="flex justify-start flex-col flex-wrap mt-2 w-full md:w-4/5 lg:w-3/5 md:max-w-[300px] lg:max-w-[350px]">
          <label htmlFor="fullName" className="mx-auto mb-0.5 text-white text-xs md:text-sm">
            Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className={`bg-white border rounded-sm w-full p-2 text-sm text-black ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
        </div>

        <div className="flex justify-start flex-col flex-wrap mt-2 w-full md:w-4/5 lg:w-3/5 md:max-w-[300px] lg:max-w-[350px]">
          <label htmlFor="company" className="mx-auto mb-0.5 text-white text-xs md:text-sm">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            required
            className={`bg-white border rounded-sm w-full p-2 text-sm text-black ${errors.company ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.company && <span className="text-red-500 text-sm">{errors.company}</span>}
        </div>

        <div className="flex justify-start flex-col flex-wrap mt-2 w-full md:w-4/5 lg:w-3/5 md:max-w-[300px] lg:max-w-[350px]">
          <label htmlFor="email" className="mx-auto mb-0.5 text-white text-xs md:text-sm">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="joe@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`bg-white border rounded-sm w-full p-2 text-sm text-black ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex justify-start flex-col flex-wrap mt-2 w-full md:w-4/5 lg:w-3/5 md:max-w-[300px] lg:max-w-[350px]">
          <label htmlFor="message" className="mx-auto mb-0.5 text-white text-xs md:text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleInputChange}
            required
            className={`text-sm border rounded-sm min-h-[120px] mb-1 p-2 resize-none text-black ${errors.message ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <div className="flex justify-start flex-col flex-wrap mt-2 w-full md:w-4/5 lg:w-3/5 md:max-w-[300px] lg:max-w-[350px]">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-lg md:text-xl font-bold text-black bg-white border-2 border-black rounded-md py-2 px-8 cursor-pointer hover:bg-logo-blue hover:border-white hover:text-white active:bg-blue-700 transition-colors duration-200 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
