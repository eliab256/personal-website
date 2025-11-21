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
    <div className="flex justify-center items-center w-full px-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Contacts</h1>
          <p className="text-white/80 text-sm md:text-base lg:text-lg mb-2 text-center">
            <em>Do you need help with your project?</em>
          </p>
          <p className="text-white/80 text-sm md:text-base lg:text-lg mb-2 text-center">
            <em>Are you interested in starting a collaboration with me?</em>
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg text-center">Fill out the form below</p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 rounded-2xl bg-green-500/20 border border-green-500/40 backdrop-blur-sm">
            <p className="text-green-300 text-sm md:text-base">Your message has been sent successfully!</p>
          </div>
        )}

        {/* Form Container with Glass-morphism */}
        <div className="border border-white/30 rounded-3xl bg-white/10 backdrop-blur-sm p-6 md:p-8 lg:p-10">
          <form className="flex flex-col gap-6" onSubmit={sendEmail}>
            {/* Full Name and Company Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-white text-sm md:text-base font-medium">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={`bg-white/10 border ${
                    errors.fullName ? "border-red-500/60" : "border-white/30"
                  } rounded-xl px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:outline-none focus:border-white/60 transition-all duration-300`}
                />
                {errors.fullName && <span className="text-red-400 text-sm">{errors.fullName}</span>}
              </div>

              {/* Company Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-white text-sm md:text-base font-medium">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className={`bg-white/10 border ${
                    errors.company ? "border-red-500/60" : "border-white/30"
                  } rounded-xl px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:outline-none focus:border-white/60 transition-all duration-300`}
                />
                {errors.company && <span className="text-red-400 text-sm">{errors.company}</span>}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-sm md:text-base font-medium">
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
                className={`bg-white/10 border ${
                  errors.email ? "border-red-500/60" : "border-white/30"
                } rounded-xl px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:outline-none focus:border-white/60 transition-all duration-300`}
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white text-sm md:text-base font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`bg-white/10 border ${
                  errors.message ? "border-red-500/60" : "border-white/30"
                } rounded-xl px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:outline-none focus:border-white/60 transition-all duration-300 resize-none`}
              />
              {errors.message && <span className="text-red-400 text-sm">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 rounded-xl px-8 py-4 text-white font-bold text-base md:text-lg backdrop-blur-sm transition-all duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
