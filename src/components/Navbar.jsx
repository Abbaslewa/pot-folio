import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 flex justify-between items-center px-4 sm:px-8 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <a href="/" className="
 text-yellow-600 text-2xl text-center rounded-lg w-[150px] border border-yellow-600 sm:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">
        ABBAS
      </a>

      <div className="md:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl text-white cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <div className="hidden md:flex space-x-6 lg:space-x-16 text-white">
        <a href="#home" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Home</a>
        <a href="#about" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">About Me</a>
        <a href="#skills" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Skills</a>
        <a href="#projects" className="text-base sm:text-lg font-semibold hover:text-gray-400 transition-all duration-300">Contact Me</a>
        <a href="#contact" className="text-base sm:text-lg font-semibold bg-gradient-to-r from-yellow-500 to-red-500 hover:text-gray-400 bg-yellow-600 px-4 sm:px-5 py-1 rounded-lg transition-all duration-300">Hire Me</a>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center md:hidden">
          <a href="#home" className="text-3xl text-white my-4" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-3xl text-white my-4" onClick={toggleMenu}>About Me</a>
          <a href="#skills" className="text-3xl text-white my-4" onClick={toggleMenu}>Skills</a>
          <a href="contact" className="text-3xl text-white my-4" onClick={toggleMenu}>Contact Me</a>
          <a href="#contact" className="text-3xl text-white my-4" onClick={toggleMenu}>Hire Me</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
