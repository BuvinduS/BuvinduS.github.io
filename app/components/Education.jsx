import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div id="education" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Outfit">Education</h2>

      <p className="text-center mt-6 mb-14 font-Outfit">
        My education journey so far:
      </p>

      {/* Main Container - Adds margin & centers content */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-3 ">
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

            {/* Mobile view: simple sublist */}
            <ul className="md:hidden list-disc list-inside ml-4 text-gray-700 space-y-1">
              <li>Sub-entry 1: Extra detail about this qualification.</li>
              <li>Sub-entry 2: Another point or achievement.</li>
              <li>Sub-entry 3: Optional additional info.</li>
            </ul>
          </div>
        </div>

        {/* Sub-entries (Indented & styled like smaller cards) */}
        <div className="hidden md:flex flex-col ml-32 mt-4 gap-3">
          <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:shadow-black">
            <div className="md:w-1/4 w-full h-32 md:h-28 flex items-center justify-center">
              <Image
                src={assets.CSE_logo} // optional, can be another icon or empty
                alt="Sub-entry"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="md:w-3/4 w-full p-4 font-Outfit flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-1">Sub-entry Title 1</h4>
              <p className="text-gray-700 text-sm">
                Description for the sub-entry. Achievements, tasks, or relevant
                info.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:shadow-black">
            <div className="md:w-1/4 w-full h-32 md:h-28 flex items-center justify-center">
              <Image
                src={assets.UoM_logo}
                alt="Sub-entry"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="md:w-3/4 w-full p-4 font-Outfit flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-1">Sub-entry Title 2</h4>
              <p className="text-gray-700 text-sm">
                Another detail about this qualification.
              </p>
            </div>
          </div>
        </div>

        {/* --- Qualification Bar 2 --- */}
        <div className="w-full flex flex-col md:flex-row border rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:shadow-black">
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
        </div>

        {/* Sub-entries (Indented & styled like smaller cards) */}
      </div>
    </div>
  );
};

export default Education;
