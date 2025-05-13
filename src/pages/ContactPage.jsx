"use client";

import { useState, useEffect } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [contacts, setContacts] = useState([]); // For optional table display

  // Firebase Realtime Database URL
  const DATABASE_URL = "https://rspmassege-default-rtdb.firebaseio.com/contacts.json";

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => setSubmitMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  // Optional: Fetch contacts for table display (uncomment if needed)
  /*
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(DATABASE_URL);
        if (!response.ok) throw new Error("Failed to fetch contacts");
        const data = await response.json();
        const contactsArray = data
          ? Object.entries(data).map(([id, contact]) => ({ id, ...contact }))
          : [];
        setContacts(contactsArray);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);
  */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Validation
    if (!formData.name || !formData.email || !formData.details) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.file) {
      if (formData.file.size > 10 * 1024 * 1024) {
        setSubmitMessage({
          type: "error",
          text: "File size exceeds 10MB limit.",
        });
        setIsSubmitting(false);
        return;
      }
      if (
        ![
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(formData.file.type)
      ) {
        setSubmitMessage({
          type: "error",
          text: "Only PDF, DOC, or DOCX files are allowed.",
        });
        setIsSubmitting(false);
        return;
      }
    }

    try {
      let fileData = null;
      if (formData.file) {
        // Convert file to Base64
        const reader = new FileReader();
        const filePromise = new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsDataURL(formData.file);
        });
        const base64String = await filePromise;
        fileData = {
          name: formData.file.name,
          type: formData.file.type,
          base64: base64String,
        };
      }

      // Send data to Firebase Realtime Database
      const response = await fetch(DATABASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          details: formData.details,
          file: fileData,
          timestamp: new Date().toISOString(),
          type: "inquiry",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save form data");
      }

      setSubmitMessage({
        type: "success",
        text: "Thank you for your message! We will get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        details: "",
        file: null,
      });

      const fileInput = document.getElementById("file");
      if (fileInput) fileInput.value = "";

      // Optional: Update contacts table after submission (uncomment if needed)
      /*
      const newContact = {
        id: Date.now().toString(), // Approximate ID
        name: formData.name,
        email: formData.email,
        details: formData.details,
        file: fileData,
        timestamp: new Date().toISOString(),
        type: "inquiry",
      };
      setContacts([...contacts, newContact]);
      */
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="details"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="file"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Upload File (Optional, PDF/DOC/DOCX)
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Upload relevant documents or specifications (Max size: 10MB)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 font-medium">Email</p>
                      <a
                        href="mailto:your-email@rspchampion.com"
                        className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-300"
                      >
                       techassignment.team@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 font-medium">Phone</p>
                      <a
                        href="tel:+12345678901"
                        className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-300"
                      >
                        +92 3172882180
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                     
                    </div>
                   
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office or reach out to us online.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          <div className="relative h-96 rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086133742804!2d-122.4194156846812!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f5e2e3c2f%3A0x4b1e4b7f8e1b7e2b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="RSP Champion Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I get started with RSP Champion?",
                answer:
                  "Simply fill out the contact form on this page with your project details, and our team will get back to you within 24 hours to discuss your requirements and provide a proposal.",
              },
              {
                question: "What types of projects do you handle?",
                answer:
                  "We specialize in blockchain development, machine learning projects, and various technical tasks including programming assignments, software development, and technical problem-solving.",
              },
              {
                question: "How do you ensure the quality of your work?",
                answer:
                  "Our team consists of experts with advanced degrees and industry experience. We follow a rigorous quality assurance process for all projects, including thorough testing and review before delivery.",
              },
              {
                question: "What are your payment terms?",
                answer:
                  "We typically require a 50% deposit to begin work, with the remaining balance due upon completion. For larger projects, we can arrange milestone-based payments. We accept credit cards, PayPal, and bank transfers.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Contacts Table (uncomment to display submissions) */}
      {/*
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Submitted Contacts
          </h2>
          {contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Details</th>
                    <th className="py-3 px-6 text-left">File</th>
                    <th className="py-3 px-6 text-left">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {contacts.map((contact) => (
                    <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6">{contact.name}</td>
                      <td className="py-3 px-6">{contact.email}</td>
                      <td className="py-3 px-6">{contact.details}</td>
                      <td className="py-3 px-6">
                        {contact.file ? (
                          <a
                            href={contact.file.base64}
                            download={contact.file.name}
                            className="text-blue-500 hover:underline"
                          >
                            {contact.file.name}
                          </a>
                        ) : (
                          "None"
                        )}
                      </td>
                      <td className="py-3 px-6">{new Date(contact.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-600">No contacts submitted yet.</p>
          )}
        </div>
      </section>
      */}

      {/* Toast Notification */}
      {submitMessage && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg ${
            submitMessage.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white transition-all duration-300 z-50`}
        >
          {submitMessage.text}
        </div>
      )}
    </div>
  );
};

export default ContactPage;