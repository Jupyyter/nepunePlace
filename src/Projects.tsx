import { useState } from "react";
import phos from "../imgs/phos.jpg"
import jhonny from "../imgs/jhonny.png"

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project.id === selectedProject?.id ? null : project);
  };
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  interface Project {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    downloadUrl: string;
  }

  const baseUrl = import.meta.env.BASE_URL || '';

  const projects: Project[] = [
    {
      id: 0,
      title: "jhonny..",
      thumbnail: jhonny,
      description: "this game is fun.",
      downloadUrl: `${import.meta.env.BASE_URL}jhonnyGame.zip`,
    }

  ];
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg mb-4">
          Here are some of the projects I've worked on. Each one represents a
          unique challenge and learning experience.
        </p>
      </header>

      <div className="w-full max-w-6xl flex">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            selectedProject ? "w-2/3" : "w-full"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all
                          ${
                            selectedProject?.id === project.id
                              ? "ring-2 ring-blue-500"
                              : ""
                          }
                          hover:scale-105`}
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div
                className={`p-3 ${
                  selectedProject?.id === project.id ? "bg-blue-700" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="w-1/3 ml-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
            <button
              onClick={closeProjectDetails}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedProject.thumbnail}
              alt={selectedProject.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              <a
                href={selectedProject.downloadUrl}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Windows
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
