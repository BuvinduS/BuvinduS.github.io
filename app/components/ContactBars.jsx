import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ContactBars = () => {
  return (
    <div id="contact" className="w-full px-[12%] py-16 scroll-mt-20">
      <h2 className="text-center text-5xl font-Outfit mb-6">Contact Me</h2>
      <p className="text-center font-Outfit mb-12 text-lg">
        Let's connect! You can reach me through the following platforms:
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
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
          href="https://github.com/yourprofile"
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
          href="mailto:youremail@example.com"
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
    </div>
  );
};

export default ContactBars;
