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
    <div id='education' className="flex flex-col items-center justify-center min-h-screen bg-gray-700 py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-4xl  text-white rounded-lg  p-8">
     
        <div className="certifications font-extrabold ">
          <h2 className="text-3xl font-bold mb-4 text-center text-yellow-400">Education</h2>
          
          <ul className="space-y-4 text-center font-extrabold">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-md shadow-md hover:shadow-lg hover:shadow-yellow-300/50 transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{cert.title}</h3>
                <p className="text-gray-400 text-sm ">{cert.description}</p>
              </motion.li>
            ))}
          </ul>

          
        </div>

        <div className="education-journey">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">My Education Story</h3>
          <marquee>
          <p className="text-gray-100 text-center font-extrabold ">
            My education journey began with a passion for learning and a drive to acquire skills that could positively impact
            my community. From early school days in Sudan to professional training in Rwanda, I have always sought out
            opportunities to grow and improve.
          </p>
          <p className="text-gray-100 text-center mt-4 font-extrabold
          ">
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
