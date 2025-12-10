import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col justify-center pt-28 lg:pt-26">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: Image with frame (hidden on mobile) */}
          <div className="relative flex-shrink-0 w-64 sm:w-80 lg:w-96 hidden sm:block">
            {/* Glowing Blur Background */}
            <div className="absolute inset-0 -z-10 blur-3xl bg-blue-500/30 rounded-full scale-110"></div>

            {/* Frame */}
            <div className="absolute top-5 left-5 w-full h-full border-4 border-gray-400 rounded-xl"></div>

            {/* Image */}
            <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-2xl -translate-x-3 -translate-y-3 transition-transform duration-500 hover:scale-105">
              <Image
                src={assets.profile_img}
                alt="Profile"
                width={700}
                height={700}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* Mobile Image (no frame) */}
          <div className="sm:hidden w-48 mx-auto rounded-xl overflow-hidden shadow-xl">
            <Image
              src={assets.profile_img}
              alt="Profile"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left flex flex-col gap-4">
            <h3 className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl mb-2 font-Outfit">
              Hello! I'm
            </h3>

            <h1
              className="lg:whitespace-nowrap text-5xl sm:text-6xl lg:text-[80px] font-bold font-Outfit 
             bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-700 
             bg-clip-text text-transparent drop-shadow-md"
            >
              Buvindu Suraweera
            </h1>

            <p className="lg:whitespace-nowrap max-w-full sm:max-w-xl mx-auto lg:mx-0 font-mono text-center lg:text-left">
              Computer Science and Engineering Undergraduate at Univerity of
              Moratuwa
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-4">
              <a
                href="#contact"
                className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
              >
                Contact
                <Image src={assets.right_arrow_white} alt="" className="w-4" />
              </a>

              <a
                href="/sample-resume.pdf"
                download
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
              >
                Download CV
                <Image src={assets.download_icon} alt="" className="w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
