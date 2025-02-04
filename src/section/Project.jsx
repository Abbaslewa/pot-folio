import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Task from "../assets/Task.png";
import pop from "../assets/pop.png";
import book from "../assets/book.png";
import "animate.css";

const Project = () => {
  const location = useLocation();

  useEffect(() => {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach((project, index) => {
      setTimeout(() => {
        project.classList.add(
          "animate__animated",
          index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
        );
      }, 200 * index);
    });

    return () => {
      projects.forEach((project) => {
        project.classList.remove(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__fadeInRight"
        );
      });
    };
  }, [location]);

  return (
    <section
      id="project"
      className="flex flex-col justify-center items-center py-12 sm:px-4 lg:h-[100vh] sm:px-6 md:px-16 lg:px-24 bg-gray-700 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-white">
          My <span className="text-yellow-700">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Task Tracker Card */}
        <div className="project-item w-full md:w-1/3">
          <div className="bg-black p-6 rounded-lg h-[350px] flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
              Task Tracker
            </h3>
            <p className="text-sm text-center text-gray-100 mb-4">
              A task management app to organize your daily activities.
            </p>
            <a
              href="https://set-task-uskk.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <img src={Task} alt="task" className="lg:rounded-lg w-full" />
            </a>
            <div className="text-center">
              <a
                href="https://set-task-uskk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-yellow-600 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Card */}
        <div className="project-item w-full md:w-1/3">
          <div className="bg-black p-6 rounded-lg h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
              Portfolio
            </h3>
            <p className="text-sm text-center text-gray-100 mb-4">
              A modern and responsive personal portfolio website.
            </p>
            <a
              href="https://daynamc-component.vercel.app/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <img src={pop} alt="portfolio" className="lg:rounded-lg w-full" />
            </a>
            <div className="text-center">
              <a
                href="https://daynamc-component.vercel.app/#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-yellow-600 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bookmark Card */}
        <div className="project-item w-full md:w-1/3">
          <div className="bg-black p-6 rounded-lg h-[350px] flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
              Bookmark
            </h3>
            <p className="text-sm text-center text-gray-100 mb-4">
              A bookmark manager for easy access to your favorite sites.
            </p>
            <a
              href="https://abbaslewa.github.io/bookmarks/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <img src={book} alt="bookmark" className="rounded-lg w-full" />
            </a>
            <div className="text-center">
              <a
                href="https://abbaslewa.github.io/bookmarks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-yellow-600 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
