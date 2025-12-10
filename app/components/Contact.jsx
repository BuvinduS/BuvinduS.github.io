import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ContactBarsAndForm = () => {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02ac1b6e-f573-4af1-823f-cee424809d94");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
          onSubmit={onSubmit}
          className="flex-1 flex flex-col gap-6 bg-gray-400 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Enter your message"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
          />

          <button
            type="submit"
            className="cursor-pointer w-full px-6 py-1 bg-blue-600 text-white rounded-2xl font-Outfit hover:bg-blue-700 transition-colors flex justify-center items-center gap-2"
          >
            Submit message{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>

          <p className="mt-4 font-Outfit">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactBarsAndForm;
