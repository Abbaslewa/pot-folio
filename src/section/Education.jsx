import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Certificate of Participation',
    description: 'Awarded for active participation in various development programs aimed at enhancing professional and technical skills.',
  },
  {
    title: 'Certificate in Training and Development Department',
    description: 'Focused on developing training programs to enhance both professional and technical abilities in various fields.',
  },
  {
    title: 'Certificate in Community-Based Health First Aid',
    description: 'Emphasizes critical health and safety skills, particularly in community settings, enabling prompt and effective first aid.',
  },
];

const Certifications = () => {
  return (
    <div id="education" className="flex flex-col items-center justify-center min-h-screen bg-gray-700 py-4 px-2">
      <div className="grid grid-cols-1 gap-6 w-full max-w-3xl text-white rounded-lg p-4">
        
        {/* Certifications Section */}
        <div className="certifications font-extrabold">
          <h2 className="text-2xl font-bold mb-2 text-center text-yellow-400">Education</h2>
          
          <ul className="space-y-3 text-center font-extrabold">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                className="p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-md shadow-md hover:shadow-lg hover:shadow-yellow-300/50 transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              >
                <h3 className="text-lg font-semibold mb-1 text-yellow-300">{cert.title}</h3>
                <p className="text-gray-400 text-xs">{cert.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Education Journey Section */}
        <div className="education-journey">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2 text-center">My Education Story</h3>
          
          <marquee>
            <p className="text-gray-100 text-center font-bold text-sm">
              My education journey began with a passion for learning and a drive to acquire skills that could positively impact
              my community. From early school days in Sudan to professional training in Rwanda, I have always sought out
              opportunities to grow and improve.
            </p>
            <p className="text-gray-100 text-center mt-3 font-bold text-sm">
              Whether it was participating in development programs, attending training seminars, or gaining technical expertise,
              each experience has shaped me into the person I am today—a software developer with a commitment to continuous learning
              and personal growth.
            </p>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
