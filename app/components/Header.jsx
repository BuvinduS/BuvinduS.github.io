import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col justify-center pt-28 lg:pt-36">
        {/* Side-by-side container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left: Big Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src={assets.profile_img}
              alt=""
              className="rounded-xl w-50 object-cover lg:w-100 items-start"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left flex flex-col gap-4">
            <h3 className="flex items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl mb-2 font-Ovo">
              Hello!
              <Image src={assets.hand_icon} alt="" className="w-6" />
            </h3>

            <h1 className="text-3xl sm:text-6xl lg:text-[57px] font-Outfit">
              I'm NAME
            </h1>

            <p className="max-w-2xl font-Ovo">
              shbfizhsbkauhbskdhjva shbvaihbepiahbefiahbdkhv aiehbgpaiehbaihjdbv
              ahsbdvpa9iuebgpiahb dpviahjb
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-4">
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
                Download
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
