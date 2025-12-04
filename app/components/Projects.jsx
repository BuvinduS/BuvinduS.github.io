import React from "react";
import Image from "next/image";
import { projectData } from "@/assets/assets";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-center text-5xl font-Outfit">Projects</h2>
      <p className="text-center mt-6 mb-14 font-Outfit">
        Some of the projects I have worked on:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col min-h-[520px] border rounded-xl overflow-hidden shadow-lg hover:bg-gray-400 hover:scale-103 transition-all duration-500"
          >
            {/* Image */}
            <div className="w-full h-72 relative">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/*Text*/}
            <div className="p-6 flex flex-col justify-between ">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-900 mb-4">{project.description}</p>

              {/*Links*/}
              <div className="flex gap-4 mt-auto">
                {project.gitlink && (
                  <a
                    href={project.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full justify-center py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                  >
                    <FaGithub className="text-xl" />
                    {project.gitText || "Code"}
                  </a>
                )}
                {project.other_links && (
                  <a
                    href={project.other_links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
                  >
                    {project.other_link_text || "More"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
