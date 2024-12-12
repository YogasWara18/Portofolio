'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { MdDevices, MdBrush } from 'react-icons/md'

const skills: { name: string; icon: IconType; color: string }[] = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "Responsive Design", icon: MdDevices, color: "text-green-400" },
  { name: "UI/UX Design", icon: MdBrush, color: "text-purple-400" }
]

export default function Skills() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-auto">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/skill.mp4" type="video/mp4" />
        
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80 z-10"></div>
      <div className="relative z-20 min-h-screen flex flex-col justify-center">
        <motion.h1 
          className="text-5xl font-bold mb-10 text-blue-300 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-4xl mb-3"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
              >
                <skill.icon className={`inline-block ${skill.color}`} />
              </motion.div>
              <span className="text-lg font-semibold text-blue-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

