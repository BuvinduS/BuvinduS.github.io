import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Qualifications = () => {
  return (
    <div id="qualifications" className="w-full">
      <h2 className="text-center text-5xl font-Outfit">Qualifications</h2>

      <p className="text-center mt-6 mb-14 font-Outfit">
        Below are the qualifications that I currently hold:
      </p>

      {/* Main Container - Adds margin & centers content */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-10 ">
        {/* --- Qualification Bar 1 --- */}
        <div className="w-full flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:shadow-black">
          {/* Image Area */}
          <div className="md:w-1/4 w-full h-48 md:h-40 flex items-center justify-center">
            <Image
              src={assets.UoM_logo}
              alt="Qualification"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Text Area */}
          <div className="md:w-3/4 w-full p-6 font-Outfit flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Qualification Title</h3>
            <p className="text-gray-700">
              This is where you describe the qualification. You can add the
              duration, institution, achievements, or anything relevant.
            </p>
          </div>
        </div>

        {/* --- Qualification Bar 2 --- */}
        {/* <div className="w-full flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:shadow-black">
          <div className="md:w-1/4 w-full h-48 md:h-40 flex items-center justify-center ">
            <Image
              src={assets.UoM_logo}
              alt="Qualification"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          <div className="md:w-3/4 w-full p-6 font-Outfit flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">
              Another Qualification
            </h3>
            <p className="text-gray-700">
              Add your explanation here as well. This section expands to fill
              the remaining space.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Qualifications;
