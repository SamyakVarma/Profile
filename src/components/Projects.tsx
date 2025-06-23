import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "University Rover Challenge",
      description: "Autonomous rover for our official URC submission. A mars exploration rover with 5DOF arm for autonomous manipulation.",
      image: "/images/Rover.jpg",
      github: "https://github.com/SamyakVarma/URC_NAV",
      tech: ["ROS2", "Path Planning", "Communication","Image Processing", "Robotics", "IK", "Teamwork"]
    },
    {
      title: "Deepfake Detection",
      description: "Custom model based on ResNet architecture which combines spatial and temporal analysis to classify the videos. Achieved accuracy of 93.7%. ",
      image: "/images/deepDet.webp",
      github: "https://github.com/SamyakVarma/DeepFake_Detection",
      tech: ["Deep Learning", "CNN", "TensorFlow", "Computer Vision"]
    },
    {
      title: "M.A.R.C",
      description: "My Automated Robotic Companion. An intelligent arm for improved workspace efficiency in cluttered environments. ",
      image: "/images/marc.jpg",
      github: "https://github.com/SamyakVarma/marc",
      tech: ["Robotics", "ROS2", "Image Processing", "C++", "IK"]
    },
    {
      title: "Feyncheck",
      description: "A desktop application using python that validates a drawn Feynman diagram. Also Provides the mathematical equation corresponding to the drawn diagram.",
      image: "/images/FeynCheck.png",
      github: "https://github.com/SamyakVarma/Feyncheck",
      tech: ["Pygame", "Feynman Diagrams", "Python"]
    },
    {
      title: "ARES",
      description: "Autonomous Recon and Elimination System. An autonomous 6 wheeled holonomic drive bot with stabilized mounted turret. capable of autonomous search and target identification and tracking. Suitable for indoor and outdoor hostile environments. Uses new RRT path planning algorithm for navigation " ,
      image: "/images/Ares.jpg",
      github: "https://github.com/SamyakVarma/ARES",
      tech: ["SLAM","Path Planning", "Sensor Fusion", "Image Processing","IK"]
    },
    {
      title: "Black-Box Flight Simulator",
      description: "Flight simulator with history replay using 3DOF stewart platform.",
      image: "/images/FlightSim.png",
      github: "https://github.com/SamyakVarma/BlackBloxFlightSim",
      tech: ["IK", "Robotics", "Simulation", "Firebase"]
    },
    {
      title: "Traffic Sign Detection",
      description: "Real-time traffic sign recognition system for autonomous vehicle navigation and safety.",
      image: "/images/trafficDet.jpg",
      github: "https://github.com/SamyakVarma/TrafficSignRecognition/tree/main",
      tech: ["Computer Vision", "OpenCV", "Machine Learning", "Python"]
    },
 
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">Browse My Recent</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Projects</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-all duration-300 group-hover:line-clamp-none line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;