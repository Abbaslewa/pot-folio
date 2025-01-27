// import Card from '../components/Card';
// import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaMobileAlt, FaGithub } from 'react-icons/fa';
// import { SiTailwindcss, SiAdobe, SiMongodb, SiNodedotjs, SiMysql } from 'react-icons/si'; 

// const SkillsDisplay = () => {
//   const skills = [
//     { name: 'HTML 5', icon: <FaHtml5 size={20} className="text-orange-600 transition-transform duration-300" />, progress: 90 },
//     { name: 'CSS 3', icon: <FaCss3Alt size={20} className="text-blue-600 transition-transform duration-300" />, progress: 80 },
//     { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} className="text-blue-400 transition-transform duration-300" />, progress: 80 },
//     { name: 'React', icon: <FaReact size={20} className="text-blue-300 transition-transform duration-300" />, progress: 60 },
//     { name: 'JavaScript', icon: <FaJsSquare size={20} className="text-yellow-400 transition-transform duration-300" />, progress: 50 },
//     { name: 'Figma', icon: <FaFigma size={20} className="text-pink-600 transition-transform duration-300" />, progress: 90 },
//     { name: 'Adobe Photoshop', icon: <SiAdobe size={20} className="text-red-500 transition-transform duration-300" />, progress: 60 },
//     { name: 'Node.js', icon: <SiNodedotjs size={20} className="text-green-600 transition-transform duration-300" />, progress: 30 }, 
//     { name: 'MongoDB', icon: <SiMongodb size={20} className="text-green-500 transition-transform duration-300" />, progress: 30 },  
//     { name: 'Database', icon: <SiMysql size={20} className="text-blue-500 transition-transform duration-300" />, progress: 30 },    
//     { name: 'Mobile Development', icon: <FaMobileAlt size={20} className="text-purple-600 transition-transform duration-300" />, progress: 20 },
//     { name: 'GitHub', icon: <FaGithub size={20} className="text-black transition-transform duration-300" />, progress: 85 }, 
//   ];

//   return (
//     <div id="skills" className="bg-gray-700 min-h-screen p-6 sm:p-12 lg:p-20 flex justify-center items-center">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl w-full">
//         {skills.map((skill, index) => (
//           <Card
//             key={index}
//             name={skill.name}
//             icon={skill.icon}
//             progress={skill.progress}
//             className="text-sm group hover:scale-105 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
//           >
//             <div className="w-full  bg-gray-300 rounded-full h-2 mt-2 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-red-600">
//               <div
//                 className={`bg-gradient-to-r from-yellow-400 to-red-500 h-2 rounded-full transition-all duration-500`}
//                 style={{ width: `${skill.progress}%` }}
//               ></div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillsDisplay;








import Card from '../components/Card';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiAdobe, SiMongodb, SiNodedotjs, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const floatingAnimation = {
  rest: { y: 0 }, 
  animate: {
    y: [0, -10, 0], 
    transition: {
      duration: 2,
      repeat: Infinity, 
      ease: "easeInOut", 
    },
  },
};


const hoverEffect = {
  scale: 1.05,
  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)", 
  transition: { duration: 0.3 },
};

const SkillsDisplay = () => {
  const skills = [
    { name: 'HTML 5', icon: <FaHtml5 size={20} className="text-orange-600" />, progress: 90 },
    { name: 'CSS 3', icon: <FaCss3Alt size={20} className="text-blue-600" />, progress: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} className="text-blue-400" />, progress: 80 },
    { name: 'React', icon: <FaReact size={20} className="text-blue-300" />, progress: 60 },
    { name: 'JavaScript', icon: <FaJsSquare size={20} className="text-yellow-400" />, progress: 60 },
    { name: 'Figma', icon: <FaFigma size={20} className="text-pink-600" />, progress: 90 },
    { name: 'Adobe Photoshop', icon: <SiAdobe size={20} className="text-red-500" />, progress: 60 },
    { name: 'Node.js', icon: <SiNodedotjs size={20} className="text-green-600" />, progress: 60 },
    { name: 'MongoDB', icon: <SiMongodb size={20} className="text-green-500" />, progress: 20 },
    { name: 'Database', icon: <SiMysql size={20} className="text-blue-500" />, progress: 30 },
    { name: 'Mobile Development', icon: <FaMobileAlt size={20} className="text-purple-600" />, progress: 50 },
    { name: 'GitHub', icon: <FaGithub size={20} className="text-black" />, progress: 85 },
  ];

  return (
    <div id="skills" className="bg-gray-700  min-h-screen p-6 sm:p-12 lg:p-20 flex justify-center items-center">
      <motion.div
        className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl w-full"
        initial="rest"
        animate="animate"
        transition={{ staggerChildren: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={floatingAnimation} 
            whileHover={hoverEffect} 
          >
            <Card
              name={skill.name}
              icon={skill.icon}
              progress={skill.progress}
              className="text-sm group transition-all duration-300 hover:bg-gray-800"
            >
              <div className="w-full  bg-gray-300 rounded-full h-2 mt-2 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-red-600">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsDisplay;

