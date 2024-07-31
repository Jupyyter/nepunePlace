import { useState } from "react";
import JSZip from "jszip";
import jhonny from "../imgs/jhonny.png";
import badApple from "../imgs/badApple.png";
import GabrielIsHungry from "../imgs/GabrielIsHungry.png";
import bingChilling from "../imgs/bingChilling.png";
import shadowGang from "../imgs/shadowGang.png";
import cppGame from "../imgs/cppGame.png";
import checkers from "../imgs/checkers.png";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  downloadUrls: string[];
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project.id === selectedProject?.id ? null : project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const handleDownload = (downloadUrls: string[]) => {
    downloadUrls.forEach((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop() || "";
      link.click();
    });
  };
  const [isLoading, setIsLoading] = useState(false);

  async function combineAndDownload(project: Project) {
    setIsLoading(true);

    if (!("showSaveFilePicker" in window)) {
      alert(
        "Your browser doesn't support this feature. Files will be downloaded separately."
      );
      handleDownload(project.downloadUrls);
      setIsLoading(false);
      return;
    }

    let saveHandle;
    try {
      // Call showSaveFilePicker immediately after user interaction
      saveHandle = await window.showSaveFilePicker({
        suggestedName: `${project.title}.zip`,
        types: [
          {
            description: "ZIP Archive",
            accept: { "application/zip": [".zip"] },
          },
        ],
      });
    } catch (err) {
      // User cancelled the save dialog
      if (err instanceof Error && err.name === "AbortError") {
        console.log("File save cancelled by user");
      } else {
        console.error("Error opening file picker:", err);
        alert(
          "Unable to open file picker. Files will be downloaded separately."
        );
        handleDownload(project.downloadUrls);
      }
      setIsLoading(false);
      return;
    }

    try {
      const mainZip = new JSZip();

      // Fetch all files, extract their contents, and add to the main zip
      await Promise.all(
        project.downloadUrls.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();

          // Read the zip file
          const zip = await JSZip.loadAsync(blob);

          // Extract and add each file from the zip to the main zip
          await Promise.all(
            Object.keys(zip.files).map(async (filename) => {
              const content = await zip.files[filename].async("blob");
              mainZip.file(filename, content);
            })
          );
        })
      );

      // Generate the final zip file
      const content = await mainZip.generateAsync({ type: "blob" });

      // Use the previously obtained file handle to save the file
      const writable = await saveHandle.createWritable();
      await writable.write(content);
      await writable.close();

      alert("Files combined and saved successfully!");
    } catch (err) {
      console.error("Error saving file:", err);
      alert(
        "There was an error saving the combined file. Files will be downloaded separately."
      );
      handleDownload(project.downloadUrls);
    } finally {
      setIsLoading(false);
    }
  }

  const projects: Project[] = [
    {
      id: 0,
      title: "jhonny",
      thumbnail: jhonny,
      description: "you play as jhonny and you shoot gangsters. i made possible for a multiplayer game, but since i dont have servers for this, you will have to use hamachi if you dont play multiplayer locally. i also dont recomand shooting until all the players are connected :)",
      downloadUrls: ["jhonnyGame.zip"],
    },
    {
      id: 1,
      title: "video in ascii",
      thumbnail: badApple,
      description: "this thing plays any video in ascii. the size of the file is greater than 100 MB so github forced me to separate it into 2 files and combine them into 1 so i can continue abusing their servers. even after it downloaded, wait until the button on which you pressed to download it stops showing 'combining files'",
      downloadUrls: ["asciiVideo.zip", "badApple.zip"],
    },
    {
      id: 2,
      title: "gabriel the hungry",
      thumbnail: GabrielIsHungry,
      description: "this is the story of gabriel. the size of the file is greater than 100 MB so github forced me to separate it into 2 files and combine them into 1 so i can continue abusing their servers. even after it downloaded, wait until the button on which you pressed to download it stops showing 'combining files'",
      downloadUrls: [`GabrielIsHungry.zip`,'GabrielIsHungry0.zip'],
    },
    {
      id: 3,
      title: "fight Jhon Cena",
      thumbnail: bingChilling,
      description: "i liked undertale. because of that, i made a game in which you fight john cena in an undertale-style fight",
      downloadUrls: [`bingChilling.zip`],
    },
    {
      id: 4,
      title: "shadow wizzard money gang",
      thumbnail: shadowGang,
      description: "i made this with a classmate (code: 95% me, art: 1% me ) for a contest. unfortunately the contest required the usage of 'greenfoot'. this greenfoot doesnt let me export a jar file, so all i can give you is the entire project, so if you want to run it you will have to download greenfoot",
      downloadUrls: [`shadowGang.zip`],
    },
    {
      id: 5,
      title: "the 3 room adventure",
      thumbnail: cppGame,
      description: "this looks too simple for a game, and it is, except the fact that it was made in c++ using sdl2 instead of a game engine. the size of the file is greater than 100 MB so github forced me to separate it into 2 files and combine them into 1 so i can continue abusing their servers. even after it downloaded, wait until the button on which you pressed to download it stops showing 'combining files'",
      downloadUrls: [`cppGame.zip`,'cppGame0.zip'],
    },
    {
      id: 6,
      title: "checkers",
      thumbnail: checkers,
      description: "checkers",
      downloadUrls: [`worldOfTanks.jar`],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg mb-4">
          projects here and there and here and everywhere
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
              <button
                onClick={() => combineAndDownload(selectedProject)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                disabled={isLoading}
              >
                {isLoading ? "Combining files..." : "Windows"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
