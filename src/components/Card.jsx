const SkillCard = ({ name, icon, progress }) => {
  return (
    <div
      id="skills"
      className="border p-5 rounded-lg shadow-md bg-gray-900 max-w-lg transition duration-300 hover:shadow-lg transform hover:scale-105 hover:translate-y-1"
    >
      <div className="flex  items-center mb-2">
        <div className="w-12 h-12 mr-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:text-yellow-500">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white group-hover:text-yellow-500">
          {name}
        </h2>
      </div>

      <div>
        <p className="text-gray-200 mb-1 group-hover:text-yellow-500">
          Progress: {progress}%
        </p>
        <div className="bg-gray-300 h-2 w-full rounded">
          <div
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-yellow-700"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
