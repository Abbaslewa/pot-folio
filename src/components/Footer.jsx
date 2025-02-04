import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 px-5 md:px-10 flex flex-col items-center justify-center shadow-inner space-y-6">
        <div className="flex flex-col items-center space-y-2 mb-6">
          <p className="text-2xl font-bold text-white">Abbas Lewa</p>
          <p className="text-sm text-gray-400 italic">Full Stack Developer</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:abbasomerhassn@gmail.com" 
              className="text-sm"
            >
              abbasomerhassn@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out">
            <Phone className="w-5 h-5" />
            <a 
              href="tel:0794294091" 
              className="text-sm"
            >
              07 94294091
            </a>
          </div>
        </div>

        <div className="h-0.5 w-full max-w-xs bg-gray-600 mb-4"></div>

        <p className="text-xs text-gray-500">
          © {currentYear} <span className="font-semibold text-white">Abbas Lewa</span>. All rights reserved.
        </p>
      </footer>
    );
}

export default Footer;
