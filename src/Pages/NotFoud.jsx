import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6 bg-gray-100">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <h2 className="text-4xl font-semibold text-gray-700">Page Not Found</h2>
      <Link 
        to="/" 
        className="bg-green-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out 
                   outline outline-2 outline-green-600 hover:bg-green-600 hover:outline-green-500 
                   focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
