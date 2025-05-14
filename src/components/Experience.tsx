import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-700 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through my professional career and the valuable experience I've gained
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 ml-[6.5px] top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50"></div>
            
            {/* Experience Item */}
            <div className="relative mb-12">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 dark:border-gray-800 z-10 relative"></div>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Testing Intern</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar size={16} className="text-blue-600 dark:text-blue-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">June 2023 - Sept 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Tech Solutions Inc.</span>
                      <span className="mx-2 text-gray-400">|</span>
                      <MapPin size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">San Francisco, CA</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Gained hands-on experience in manual software testing while contributing to the quality assurance of web and mobile applications.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Created and executed test cases for web and mobile applications</p>
                      </div>
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Participated in defect tracking, reporting, and verification</p>
                      </div>
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Collaborated with development teams to ensure software quality</p>
                      </div>
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Assisted in creating test documentation and reporting</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Manual Testing</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Test Case Design</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Defect Tracking</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Quality Assurance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education Item */}
            <div className="relative">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 dark:border-gray-800 z-10 relative"></div>
                </div>
                <div className="ml-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar size={16} className="text-blue-600 dark:text-blue-400 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Sept 2019 - June 2023</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">University of Technology</span>
                      <span className="mx-2 text-gray-400">|</span>
                      <MapPin size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">New York, NY</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive education in computer science with focus on software development, algorithms, and mobile application development.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Coursework: Data Structures, Algorithms, Mobile Development, Web Technologies</p>
                      </div>
                      <div className="flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <p className="text-gray-600 dark:text-gray-400">Senior Project: Developed a cross-platform mobile app for student resource management</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Computer Science</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Software Development</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">Mobile Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;