import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"; // Import icons
import { motion } from "framer-motion";

const ContactImage = () => {
  return (
    <div className="w-full md:h-auto rounded-xl flex items-center justify-center mb-6">
      {/* Image */}
      <img
        src="/images/CON.jpg"
        alt="Contact"
        className="rounded-xl w-88 h-88 object-cover border-2 border-blue-400/50 shadow-lg"
      />
    </div>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black to-black"
    >
      <RevealOnScroll>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row w-full max-w-4xl bg-gradient-to-br from-black to-blue-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-8 md:p-10"
        >
          {/* Contact Image Section */}
          <div className="md:w-1/2 flex items-center justify-center md:order-1">
            <ContactImage />
          </div>
          {/* Contact Card Section */}
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2 space-y-4 flex flex-col items-start md:order-2"
          >
            <h2 className="text-3xl font-bold text-white text-left mb-4">
              Contact Me
            </h2>
            <p className="text-md text-gray-300 text-left">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-300" />
                <a
                  href="mailto:mierangelina03@gmail.com"
                  className="text-md text-gray-200 hover:text-blue-300 transition-colors"
                >
                  mierangelina03@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-md text-gray-200">Phone: +63 930 2658 865</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 text-blue-300" />
                <span className="text-md text-gray-200">
                  Address: Nalhub, Dalaguete, Cebu
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-300" />
                <a
                  href="https://www.linkedin.com/in/angelina-mier-593460358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-blue-300 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-blue-300" />
                <a
                  href="https://github.com/Mier03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-blue-300 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};