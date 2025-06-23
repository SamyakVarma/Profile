import React from 'react';
import { Github, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Samyak
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Varma
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Computer Science Student & Technology Innovator looking to craft intelligent systems for humanity
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('/Samyak_Resume.pdf', '_blank')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2" size={20} />
                Résumé
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://github.com/SamyakVarma', '_blank')}
                className="p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 shadow-lg"
              >
                <Github size={20} />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <img
                    src="/images/me.jpg"
                    alt="Samyak Varma"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 dark:bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;