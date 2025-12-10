import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const HeaderTextOnly = () => {
  return (
    <div>
      <div className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col justify-center items-center text-center pt-28 lg:pt-36">
        {/* Greeting */}
        <h3 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl mb-3 font-Outfit">
          Hello! I'm
        </h3>

        {/* NAME with glow + animated gradient (Tailwind v4 inline keyframes) */}
        <div className="relative w-full flex justify-center">
          {/* Soft glow behind the name */}
          {/* <div className="absolute inset-0 -z-10 blur-2xl bg-purple-600/25 rounded-full scale-125 hidden lg:block"></div> */}

          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-bold font-Outfit
      bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-700
      bg-clip-text text-transparent drop-shadow-lg
      text-center break-words px-4
      lg:bg-[length:200%_200%] 
      lg:animate-[gradientMove_4s_linear_infinite_alternate]
      lg:[--tw-keyframes:{'0%':{backgroundPosition:'0%_50%'},'100%':{backgroundPosition:'100%_50%'}}]"
          >
            Buvindu Suraweera
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-6 font-mono text-lg sm:text-xl">
          Computer Science and Engineering Undergraduate at Univerity of
          Moratuwa
        </p>

        {/* Buttons — increased gap from text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#contact"
            className="px-12 py-4 border border-white rounded-full bg-black text-white flex items-center gap-2 text-lg"
          >
            Contact
            <Image src={assets.right_arrow_white} alt="" className="w-5" />
          </a>

          <a
            href="/CV_Buvindu Suraweera.pdf"
            download
            className="px-12 py-4 border rounded-full border-black flex items-center gap-2 text-lg"
          >
            Download CV
            <Image src={assets.download_icon} alt="" className="w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTextOnly;
