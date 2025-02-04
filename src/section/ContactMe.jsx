import AbbasImage from "../assets/Abbas.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState, useRef } from 'react';

const ContactMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contact"
      className="relative min-h-screen flex border-e-rose-50 flex-col sm:flex-row justify-center items-center bg-gray-700 overflow-hidden py-6 sm:py-0"
      ref={contactRef}
    >
      {/* Left Section with Image and Links */}
      <div
        className="relative w-full sm:w-1/2 h-full flex flex-col justify-center items-center space-y-3"
      >
        <div className="relative w-[85%] sm:w-[75%] lg:w-[65%]">
          <img
            src={AbbasImage}
            alt="Abbas"
            className="w-full h-auto object-cover transform-gpu transition-transform duration-[4000ms] hover:scale-105 filter brightness-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
        </div>

        <a
          href="#"
          className="text-white text-md sm:text-lg font-semibold hover:text-green-400 transition-colors duration-300"
        >
          Visit My Portfolio
        </a>

        <div className="flex justify-center space-x-3 sm:space-x-8 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-xl sm:text-2xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-xl sm:text-2xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="text-white text-xl sm:text-2xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl sm:text-2xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl sm:text-2xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="relative z-10 w-full sm:w-1/2 flex justify-center items-center">
        <form className="flex flex-col space-y-4 w-[80%] sm:w-[65%] lg:w-[70%] p-6 sm:p-8 rounded-2xl shadow-lg transition-shadow duration-500 ease-in-out backdrop-blur-md bg-white/10 border border-white/20">
          <h1 className="text-center text-2xl sm:text-3xl text-white font-bold mb-3 sm:mb-5">
            Let's Have a Chat
          </h1>

          {/* Glassmorphism Inputs with Moving Light Border */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 sm:p-3 rounded-lg outline-none focus:ring-4 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out border-[1px] border-gray-600 relative glassmorphism-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 sm:p-3 rounded-lg outline-none focus:ring-4 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out border-[1px] border-gray-600 relative glassmorphism-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-2 sm:p-3 h-24 sm:h-28 rounded-lg outline-none focus:ring-4 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out border-[1px] border-gray-600 relative glassmorphism-input"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-600 to-red-700 text-white p-2 sm:p-3 rounded-lg w-full text-sm sm:text-md font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-colors duration-300 ease-in-out focus:ring-4 focus:ring-green-600 shadow-lg hover:shadow-xl hover:shadow-yellow-500/50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
