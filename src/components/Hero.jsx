import React from "react";
import facebook from "../assets/facbook.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Lan from "../assets/Lan.jpg";
import CV from "../assets/ThanhLan_CV.pdf"
const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
        <div
          className="md:h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 bg-gradient-to-r from-red-600 via-blue-600 to-green-400 absolute rounded-full transform rotate-12 top8 shadow-[0_0_100px_rgba(255,166,0,0.7)] z-0"
          aria-hidden="true"
        ></div>
        <section
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-gray-500 body-font z-10"
        >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items:start md:text-left mb-16 md:mb-0 items-center text-center">
              <div
                className="flex space-x-4 md-2"
                aria-label="Social media links"
              >
                <a href="https://www.facebook.com/" aria-label="facebook">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-14 h-14 hover:scale-110 transition-transform"
                  />
                </a>
                <a href="https://github.com/DyLan1401" aria-label="github">
                  <img
                    src={github}
                    alt="github"
                    className="w-14 h-14 hover:scale-110 transition-transform"
                  />
                </a>
                <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-thanh-l%C3%A2n-27ba52307/" aria-label="linkedin">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-14 h-14 hover:scale-110 transition-transform"
                  />
                </a>
              </div>
              <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
                Hi, I'm <span className="text-red-600">Thanh Lan</span>
              </h1>
              <h2 className="sm:text-3xl mb-4 font-bold text-blue-950">
                Frontend Web Developer
              </h2>
              <p className="mb-8 leading-relaxed text-black max-w-lg">
                <div className="py-2">
                  Professionally connected with the web development industry.
                </div>
                <div>
                  Problem solver, well-organised person, loyal employee with
                  high attention to detail. Fan detective story, outdoor activities,
                  video games, and coding of course.
                </div>
                <div>
                  Interested in the entire frontend spectrum and working on
                  ambitious projects with interesting people.
                </div>
              </p>

              <div className="flex justify-center">
                <a
                  href={CV}
                  download="ThanhLan_CV.pdf"
                  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded-full text-lg hover:shadow-[0_0_20px_rgba(225,100,100,0.5)] transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="lg:max-w-lg lg:w-full md:W-1/2 w-5/6"
            >
              <img
                src={Lan}
                alt=""
                className="object-cover object-center rounded-full w-80 h-80 border-4 border-white shadow-xl"
                width={320}
                height={320}
                loading="eager"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
