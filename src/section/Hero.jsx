import { FaDownload, FaBehance, FaInstagram, FaLinkedin, FaReact } from 'react-icons/fa';
import ew from "../assets/ew.png";
import Navbar from '../components/Navbar';  

const Hero = () => {
  return (
    <main
      id="home"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen py-10 px-4 sm:px-6 md:px-14 lg:px-20 bg-gray-700"
    >
      <Navbar />

      <div className="relative top-8 z-10 w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="relative w-[160px] h-[160px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] p-4 md:p-5 bg-gray-800 rounded-full ml-4 shadow-xl shadow-yellow-500/50">
          <img
            src={ew}
            alt="Abbas"
            className="object-cover absolute w-[220px] h-[220px]  -top-[60px] lg:w-[530px] lg:h-[530px] lg:-top-[130px] rounded-b-full"
          />
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-5 px-4 sm:px-6 md:px-9">
        <h1 className="text-lg sm:text-2xl p-2 animate-pulse rounded-lg font-extrabold text-gray-100">
          Hi, I'm Abbas Omer 👋
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl p-2 font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
          I'm a front-end developer, and I like what I do.
        </p>

        <div className="flex space-x-3">
          <a
            href="#contact"
            className="relative inline-block px-3 sm:px-5 py-1.5 text-white font-semibold bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg shadow-lg duration-500"
            aria-label="Hire Abbas"
          >
            Hire Me
          </a>
          <a
            href="Abbas_CVF.pdf"
            download="Abbas_CVF.pdf"
            className="hidden md:block bg-black hover:bg-gray-800 outline-2 border border-white text-white px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md bg-opacity-30 hover:scale-105 transition-all duration-300 ease-in-out"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-1.5" />
            Download CV
          </a>
        </div>

        <div className="md:hidden flex justify-center mt-3">
          <a
            href="Abbas_CVF.pdf"
            download="Abbas_CVF.pdf"
            className="bg-black hover:bg-gray-800 text-white px-3 py-1.5 rounded-lg shadow-lg transition-colors duration-300 ease-in-out flex items-center animate-bounce"
            aria-label="Download Abbas's Resume"
          >
            <FaDownload className="inline mr-1.5" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center md:justify-start space-x-5 mt-5">
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="text-white text-xl hover:text-gray-500 transition-all">
            <FaBehance />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white text-xl hover:text-gray-500 transition-all">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white text-xl hover:text-gray-500 transition-all">
            <FaLinkedin />
          </a>
          <FaReact className="text-yellow-600 animate-spin" size={24} />
        </div>

        <div className="flex flex-col md:flex-row mt-5 space-y-3 md:space-y-0 md:space-x-7">
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2 animate-float">
            <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              1+
            </h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-2 animate-float">
            <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              10+
            </h3>
            <p className="text-sm">Projects Done</p>
          </div>
          <div className="text-center bg-white bg-opacity-10 text-white p-3 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-2 animate-float">
            <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
              10+
            </h3>
            <p className="text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
