import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Outfit">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">
        {/* Image with popping frame */}
        <div className="relative w-64 sm:w-80 max-w-none">
          {/* Frame behind image */}
          <div className="absolute top-4 left-4 w-full h-full border-4 border-gray-400 rounded-3xl bg-gray-700"></div>

          {/* Image itself */}
          <div className="relative w-full h-0 pb-[100%] rounded-3xl overflow-hidden shadow-2xl -translate-x-2 -translate-y-2 transition-transform duration-500 hover:scale-105">
            <Image
              src={assets.user_image}
              alt="user"
              fill
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>

        {/* <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div> */}

        <div className="flex-1">
          <h2 className="text-4xl font-Outfit pb-5">
            Computer Science and Engineering Undergraduate
          </h2>
          <p className="mb-10 max-w-2xl font-Outfit">
            Computer science engineering undergraduate with strong skills in
            problem solving and communication. Passionate about robotics, and
            real world problem solving
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
