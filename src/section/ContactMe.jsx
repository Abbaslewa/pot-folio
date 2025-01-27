import AbbasImage from "../assets/Abbas.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <div id="contact" className="relative min-h-screen flex flex-col sm:flex-row justify-center items-center bg-gray-700 overflow-hidden py-10 sm:py-0">
      <div className="relative w-full sm:w-1/2 h-full flex flex-col justify-center items-center space-y-4">
        <div className="relative w-[90%] sm:w-[80%] lg:w-[70%]">
          <img
            src={AbbasImage}
            alt="Abbas"
            className="w-full h-auto object-cover transform-gpu transition-transform duration-[4000ms] hover:scale-105 filter brightness-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
        </div>

        <a
          href="#"
          className="text-white text-lg sm:text-xl font-semibold hover:text-green-400 transition-colors duration-300"
        >
          Visit My Portfolio
        </a>

        <div className="flex justify-center space-x-4 sm:space-x-10 mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl sm:text-3xl hover:text-green-400 transition-all duration-300 ease-in-out" />
          </a>
        </div>
      </div>

      <div className="relative z-10 w-full sm:w-1/2 flex justify-center items-center">
        <form className="flex flex-col space-y-6 w-[85%] sm:w-[70%] lg:w-[80%] p-8 sm:p-10 rounded-2xl shadow-lg transition-shadow duration-500 ease-in-out">
          <h1 className="text-center text-3xl sm:text-4xl text-white font-bold mb-4 sm:mb-6">
            Let's Have a Chat
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 sm:p-4 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-600 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 sm:p-4 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-600 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-3 sm:p-4 h-28 sm:h-32 rounded-lg outline-none focus:ring-4 focus:ring-green-500 border-[1px] border-gray-600 bg-white/20 text-white placeholder-gray-300 transition-all duration-300 ease-in-out"
          ></textarea>

          <button type="submit" className="bg-gradient-to-r from-yellow-600 to-red-700 text-white p-3 sm:p-4 rounded-lg w-full text-base sm:text-lg font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-colors duration-300 ease-in-out focus:ring-4 focus:ring-green-600 shadow-lg hover:shadow-xl hover:shadow-yellow-500/50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
