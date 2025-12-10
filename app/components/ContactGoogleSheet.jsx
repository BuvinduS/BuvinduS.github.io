import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ContactGoogleSheet = () => {
  const [status, setStatus] = useState(""); // for submission feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    formData.append("secret", "BUVINDU'S_FORM");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwkqlfVMfo2PhA7_gW8wr-ABw33g-cl8RtGveNfVduA45xK5pLAfX4K_0wVJKbxNJbn/exec",
        {
          // replace with your Apps Script URL
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Please try again.");
    }

    // Clear message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-20">
      <h2 className="text-center text-5xl font-Outfit mb-6">Contact Me</h2>
      <p className="text-center font-Outfit mb-12 text-lg">
        Let's connect! Or drop me a message!
      </p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Social Bars */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/buvindu-suraweera/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-300 hover:bg-gray-200 rounded-xl p-4 shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={assets.LinkedIn_logo}
              alt="LinkedIn"
              className="w-12 h-12 mr-4"
            />
            <span className="font-Outfit text-xl font-semibold">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BuvinduS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-300 hover:bg-gray-200 rounded-xl p-4 shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={assets.Github_logo}
              alt="GitHub"
              className="w-12 h-12 mr-4"
            />
            <span className="font-Outfit text-xl font-semibold">GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:buvindudsuraweera@gmail.com"
            className="flex items-center bg-gray-300 hover:bg-gray-200 rounded-xl p-4 shadow-md transition-transform transform hover:scale-105"
          >
            <Image
              src={assets.mail_icon}
              alt="Email"
              className="w-12 h-12 mr-4"
            />
            <span className="font-Outfit text-xl font-semibold">Email</span>
          </a>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 bg-gray-400 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="self-start px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit message
          </button>

          {status && (
            <p className="mt-4 text-green-600 font-semibold">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactGoogleSheet;
