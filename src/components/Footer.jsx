import React from "react";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-gray-200/80 text-black py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {currentYear} Lan. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DyLan1401"
                target="_blank"
                className="hover:text-gray-800 transition-colors duration-300"
                aria-label="Github"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a
                    href="#skills"
                    className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                  >
                    My Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                  >
                    My Project
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                  >
                    My Contact
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
