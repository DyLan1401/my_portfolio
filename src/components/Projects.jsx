import React, { useState } from "react";
import {FiChevronLeft,FiChevronRight,FiExternalLink,FiGithub} from 'react-icons/fi';
import { MarsStroke } from "lucide-react";
import portfolio1 from "../assets/portfolio.jpg"
import todo from "../assets/todo.jpg"
import weather from "../assets/weather.jpg"
const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: "A personal portfolio website built with React and styled using Tailwind CSS, showcasing my projects, skills, and experience as a frontend developer",
    technologies: ["React", "Tailwind","git"],
    github: "",
    demo: "",
    image: portfolio1,
  },
  {
    id: 2,
    title:"ToDoList",
    desc: "This is a list of things to do when users want to use and manage time most effectively.",
    technologies: ["React", "CSS","git"],
    github: "",
    demo: "",
    image:todo,
  },
  {
    id: 3,
    title: "Weather",
    desc: "This application uses an API to display the weather of areas near the location you are interested in.",
    technologies: ["JS", "HTML", "CSS","git" ],
    github: "",
    demo: "",
    image: weather,
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPage = 2;

  const nextSlile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + projectsPage >= projects.length ? 0 : prevIndex + 1
    );
  };
  const prevSlile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPage
  );

  return (
    <>
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-delay="250"
        className="w-full py-20 px-4 sm:px-8 relative bg-gray-800  mt-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-100 mb-2">
              My <span className="text-red-600">Projects</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
            These are the projects where I applied the knowledge and experience I have learned and explored.
            </p>
          </div>
          <div className="relative">
            <button
              onClick={prevSlile}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FiChevronLeft className="text-gray-700 text-xl" />
            </button>
            <button
              onClick={nextSlile}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            >
              <FiChevronRight className="text-gray-700 text-xl" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden show-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
{
    Array.from({length: Math.ceil(projects.length/projectsPage)}).map((_,index)=>(
        <button key={index} onClick={()=>setCurrentIndex(index*projectsPage)}
        className={`w-3 h-3 rounded-full ${currentIndex === index * projectsPage ? 'bg-blue-600': 'bg-gray-300'}`}></button>

    ))
}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
