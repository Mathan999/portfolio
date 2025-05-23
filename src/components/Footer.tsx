import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              John<span className="text-blue-400">Dev</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Passionate developer creating innovative mobile and web solutions with a focus on quality and user experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:john.doe@example.com" className="hover:text-blue-400 transition-colors">itsmemathankumar@gmail.com</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">+91 8778915065</a>
              </li>
              <li className="text-gray-400">
                <span className="block">Location:</span>
                <span>Coimbatore</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Mathan Kumar. All rights reserved.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <p>Made with</p>
            <Heart size={14} className="mx-1 text-red-500" />
            <p>by Mathan Kumar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;