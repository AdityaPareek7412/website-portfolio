import React from 'react';
import { motion } from 'motion/react';
import { Database, BarChart3, Lightbulb, GraduationCap } from 'lucide-react';
import profileImage from 'figma:asset/bdf11605e350899890d84771c0d667a13a727b55.png';

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Aditya Pareek" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={28} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-blue-300 font-semibold">
                  Bachelor of Technology (B.Tech) in Computer Science and Engineering
                </p>
                <p className="text-gray-400">
                  Rajasthan Technical University, Kota
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-purple-400 font-semibold">CGPA: 9.69 / 10</span>
                  <span className="text-gray-400 text-sm">Sep 2022 – Present</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Computer Science Engineer passionate about data science, machine learning, and intelligent solutions
            </h3>
            
            <p className="text-gray-300 text-base leading-relaxed">
              I am a B.Tech Computer Science student with a strong foundation in Python, machine learning, data analysis, and web development. I enjoy building data-driven solutions, extracting meaningful insights from data, and creating practical applications that solve real-world problems.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              With hands-on experience through internships in Data Science and Python Development, I have worked on machine learning workflows, data preprocessing, exploratory data analysis, dashboards, and web applications. My projects span predictive analytics, healthcare ML, customer churn analysis, and full-stack Django development.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-gray-300 bg-blue-500/5 p-3 rounded-lg border border-blue-400/20">
                <Database className="text-blue-400 flex-shrink-0" size={22} />
                <span className="text-sm font-medium">Strong in Python & Data Analysis</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 bg-purple-500/5 p-3 rounded-lg border border-purple-400/20">
                <BarChart3 className="text-purple-400 flex-shrink-0" size={22} />
                <span className="text-sm font-medium">Hands-on with ML & Dashboards</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 bg-pink-500/5 p-3 rounded-lg border border-pink-400/20">
                <Lightbulb className="text-pink-400 flex-shrink-0" size={22} />
                <span className="text-sm font-medium">Focused on Real-World Problem Solving</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-lg border border-blue-400/20 shadow-lg shadow-blue-500/10 text-center"
        >
          <p className="text-blue-300 text-lg md:text-xl italic font-medium">
            "Transforming data into insights and ideas into impactful solutions."
          </p>
        </motion.div>
      </div>
    </section>
  );
}