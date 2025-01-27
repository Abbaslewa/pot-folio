import AbbasImage from '../assets/Abbas.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-6 bg-gray-700 h-auto lg:h-[80vh]">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl text-center mt-4 font-bold text-white mb-6">
          About <span className="text-yellow-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          
          <div className="flex flex-col items-center bg-gray-800 text-center rounded-lg shadow-lg w-full md:w-1/4 p-4">
            <div className="w-36 sm:w-48 h-36 sm:h-48 rounded-full overflow-hidden border-2 border-white bg-black mb-4">
              <img
                src={AbbasImage}
                alt="Abbas Omer Hassan Suliman"
                className="h-full object-cover w-full"
              />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold mt-2">Abbas Omer Hassan Suliman</h3>
            <p className="text-white mt-1 text-sm">Full-Stack Developer</p>
            <p className="text-white text-sm">Frontend Specialist</p>
            <p className="text-white text-sm">Backend Developer</p>
          </div>

          <div className="flex flex-col w-full md:w-2/3 bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg">
            <div className="flex justify-center md:justify-start space-x-3 border-b border-gray-600 pb-2 mb-3">
              <a href="#project" className="text-yellow-500 font-bold hover:underline text-sm">Project</a>
              <a href="#education" className="text-white font-bold hover:text-yellow-500 hover:underline text-sm">Education</a>
            </div>

            <div className="text-white">
              <p className="leading-relaxed font-bold text-sm sm:text-base mb-4 text-gray-300">
                Hi, I'm Abbas Omer Hassan Suliman, a passionate front-end developer from Sudan. With a strong focus on building dynamic and responsive web applications, I specialize in front-end development using React and TailwindCSS, while also working with back-end technologies like Node.js and MongoDB.
              </p>
              <p className="leading-relaxed font-bold text-sm sm:text-base mb-4 text-gray-300">
                I'm driven by the challenge of solving complex problems through code and always seek to learn new technologies and improve my skills. I love contributing to open-source projects and experimenting with cutting-edge design patterns. My goal is to create engaging user experiences and seamless interactions across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
