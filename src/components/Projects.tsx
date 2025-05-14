import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Health Tracker App',
      description: 'A comprehensive Android application for tracking health metrics, exercise routines, and nutrition.',
      image: 'https://images.pexels.com/photos/3846115/pexels-photo-3846115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'android',
      technologies: ['Java', 'SQLite', 'Android SDK'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Interactive web dashboard for e-commerce analytics with data visualization and reporting features.',
      image: 'https://images.pexels.com/photos/4481529/pexels-photo-4481529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'web',
      technologies: ['React', 'TailwindCSS', 'Chart.js', 'Node.js'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Cross-platform mobile application for task management with real-time synchronization.',
      image: 'https://images.pexels.com/photos/3182775/pexels-photo-3182775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'react-native',
      technologies: ['React Native', 'Firebase', 'Redux'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A Flutter application that provides weather forecasts with beautiful visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'flutter',
      technologies: ['Flutter', 'Dart', 'Weather API'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'Sales Analytics Dashboard',
      description: 'Interactive data visualization dashboard built with PowerBI for sales analytics.',
      image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'data',
      technologies: ['Power BI', 'DAX', 'SQL'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'Inventory Management System',
      description: 'Desktop application for inventory management with barcode scanning capabilities.',
      image: 'https://images.pexels.com/photos/4481251/pexels-photo-4481251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'desktop',
      technologies: ['Java', 'JavaFX', 'MySQL'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-700 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing my skills across different technologies
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('android')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'android' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Android
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'web' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('react-native')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'react-native' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              React Native
            </button>
            <button 
              onClick={() => setFilter('flutter')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'flutter' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Flutter
            </button>
            <button 
              onClick={() => setFilter('data')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'data' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Data Analysis
            </button>
            <button 
              onClick={() => setFilter('desktop')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'desktop' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Desktop
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;