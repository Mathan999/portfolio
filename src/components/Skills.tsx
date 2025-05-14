import React from 'react';
import { Smartphone, Code, Database, Laptop, BrainCircuit, TestTube, Bot } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Mobile Development',
      icon: <Smartphone size={28} />,
      skills: [
        { name: 'Android Development (Java)', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 80 }
      ]
    },
    {
      category: 'Web Development',
      icon: <Code size={28} />,
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 85 }
      ]
    },
    {
      category: 'Testing',
      icon: <TestTube size={28} />,
      skills: [
        { name: 'Manual Testing', level: 90 },
        { name: 'Test Case Design', level: 85 },
        { name: 'Defect Tracking', level: 90 }
      ]
    },
    {
      category: 'Other Skills',
      icon: <BrainCircuit size={28} />,
      skills: [
        { name: 'C Programming', level: 75 },
        { name: 'Eclipse IDE', level: 85 },
        { name: 'Desktop Applications', level: 80 }
      ]
    },
    {
      category: 'Data Analysis',
      icon: <Database size={28} />,
      skills: [
        { name: 'Power BI', level: 80 },
        { name: 'Data Visualization', level: 75 },
        { name: 'Report Creation', level: 85 }
      ]
    },
    {
      category: 'AI & Prompt Engineering',
      icon: <Bot size={28} />,
      skills: [
        { name: 'Prompt Engineering', level: 85 },
        { name: 'AI Integration', level: 75 },
        { name: 'LLM Systems', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-700 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard 
              key={index} 
              category={skillGroup.category} 
              icon={skillGroup.icon} 
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;