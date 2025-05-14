import React from 'react';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
// Import your CV file - assuming it's a PDF which is more appropriate for a CV
import CvFile from './assets/mathan.pdf'; // Change this to the actual file path and extension

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600">
                <Typewriter
                  options={{
                    strings: ['Mathan Kumar B', 'a Developer', 'a Tester'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 75,
                  }}
                />
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              <span className="text-blue-600">Mobile & Web Developer</span> with a passion for creating exceptional user experiences
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I specialize in Android Development, Web Development, and cross-platform mobile solutions using React Native and Flutter. With experience in Software Testing and Data Analysis, I build robust and user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a
                href={CvFile}
                download="Mathan_Kumar_CV"
                className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
              >
                Download CV
                <Download size={18} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500 shadow-xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dxfqqm0yt/image/upload/v1747199998/WhatsApp_Image_2024-11-18_at_6.40.42_PM_kh655c.jpg"
                  alt="Mathan Kumar"
                  className="w-full h-full object-cover object-center object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#skills" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;