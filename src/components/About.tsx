import React from 'react';
import { GraduationCap, Code, Cpu, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Cpu, title: 'Robotics', description: 'Designing intelligent autonomous systems' },
    { icon: Code, title: 'ML', description: 'Machine learning with tensorflow keras, pytorch' },
    { icon: Rocket, title: 'Web', description: 'Full stack web development' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">Get To Know More</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am passionate about Computer Science, Robotics, and Simulations, constantly exploring ways to help humanity via technology. With a strong foundation in 3D modeling using SolidWorks and Blender, I enjoy designing and developing solutions that create a positive real-world impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Driven by adaptability and innovation, I strive to be a true and versatile engineer, continuously evolving to meet new challenges. My goal is to push the boundaries of technology, crafting intelligent systems that make a difference.
            </p>

            {/* Education Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p><strong>BE Computer Science</strong> - RV College of Engineering (2027)</p>
                    <p><strong>PU:</strong> Base PU College</p>
                    <p><strong>Schooling:</strong> Presidency School Nandini Layout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{skill.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;