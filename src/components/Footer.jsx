import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 px-5 md:px-10 flex flex-col items-center justify-center shadow-inner">
        <div className="flex flex-col items-center space-y-2 mb-6">
          <p className="text-lg font-bold text-gray-100">Abbas Lewa</p>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        <div className="flex flex-col items-center space-y-3 mb-6">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <a 
              href="mailto:abbasomerhassn@gmail.com" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              abbasomerhassn@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <a 
              href="tel:0794294091" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
            >
              07 94294091
            </a>
          </div>
        </div>

       
        <div className="h-0.5 w-full max-w-xs bg-gray-600 mb-4"></div>

        
        <p className="text-xs text-gray-500">
          © {currentYear} <span className="font-bold">Abbas Lewa</span>. All rights reserved.
        </p>
      </footer>
    );
}

export default Footer;
