import React from "react";
import { achievementData } from "@/assets/assets";
import Image from "next/image";

const Achievements = () => {
  return (
    <div
      id="achievements"
      className="w-full py-25 px-4 sm:px-10 lg:px-20 overflow-x-hidden"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-Outfit">
        Accomplishments & Certifications
      </h2>
      <p className="text-center mt-6 mb-14 font-Outfit">
        Some of my achievements and certifications so far:
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievementData.map((achievement, index) => (
          <div
            key={index}
            className="group rounded-xl shadow-2xl min-h-[200px] overflow-hidden flex flex-col"
          >
            {/* Image */}

            {achievement.img && (
              <div className="w-full aspect-video relative">
                <Image
                  src={achievement.img}
                  alt={achievement.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="pt-10 p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold font-Outfit mb-2">
                {achievement.title}
              </h3>

              {achievement.description && (
                <p className="text-lg font-Outfit leading-relaxed mb-3 text-gray-700">
                  {achievement.description}
                </p>
              )}
              {achievement.offered_by && (
                <p className="text-md font-semibold font-sans mb-1">
                  {achievement.offered_by}
                </p>
              )}

              {/* Spacer pushes button to bottom if needed */}
              <div className="flex-grow" />

              {achievement.url && (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full text-center px-4 py-2 bg-gray-600 text-white font-Outfit rounded-lg text-sm hover:bg-gray-500 transition-all"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
