import Task from "../assets/Task.png";
import pop from "../assets/pop.png";
import book from "../assets/book.png";

const Project = () => {
  return (
    <section id="project" className="py-12 sm:px-4 lg:h-[90vh] sm:px-6 md:px-16 lg:px-24 bg-gray-700 text-white">
      <div className="text-center mb-40">
        <h2 className="text-2xl sm:text-3xl font-bold mt-10 text-white">
          My <span className="text-yellow-700 ">Project</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        
        <div className="w-full md:w-1/3 bg-gray-900 rounded-lg shadow-lg p-11 hover:scale-105 hover:rotate-3 transition-transform duration-300 wiggle">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
          Task Tracker
          </h3>
          <p className="text-sm text-center text-gray-400 mb-6">
            <a href="https://set-task-uskk.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={Task} alt="task" className="lg:rounded-lg"/>
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-gray-900 rounded-lg shadow-lg p-9 hover:scale-105 hover:translate-x-2 transition-transform duration-300 shake">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
          Portfolio
          </h3>
          <p className="text-sm text-center text-gray-400 mb-6">
          <a href="https://daynamc-component.vercel.app/#contact" target="_blank" rel="noopener noreferrer">

            <img src={pop} alt="pop" className="lg:rounded-lg"/>
            </a>
          </p>
        </div>
        

        <div className="w-full md:w-1/3 bg-gray-900 rounded-lg shadow-lg p-16 hover:scale-105 hover:skew-y-3 transition-transform duration-300 bounce-twice">
          <h3 className="text-xl font-semibold text-yellow-600 mb-4 text-center">
          Bookmark
          </h3>
          <p className="text-sm text-center text-gray-400 mb-6">
          <a href="https://abbaslewa.github.io/bookmarks/" target="_blank" rel="noopener noreferrer">

            <img src={book} alt="book" className="rounded-lg"/>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
