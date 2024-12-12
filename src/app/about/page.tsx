'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Book, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/work.mp4" type="video/mp4" />
        
      </video>
      <div className="container relative z-10 mx-auto p-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-black bg-opacity-70 p-8 rounded-lg shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.img
              src="/fotoo.png?height=100&width=100"
              alt="Professional headshot"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              variants={itemVariants}
            />
            <motion.img
              src="/medaaan.png?height=100&width=100"
              alt="Working on a project"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              variants={itemVariants}
            />
          </div>
          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-8 text-blue-300 text-center">About Me</motion.h1>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Code className="w-12 h-12 text-yellow-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-white">Passionate Developer</h2>
              <p className="text-gray-300">
                With years of experience, I've honed my skills in creating intuitive and efficient web applications.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-green-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-white">Always Learning</h2>
              <p className="text-gray-300">
                I'm constantly exploring new technologies and methodologies to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mt-8">
            <div className="text-center">
              <Coffee className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Coffee Enthusiast</p>
            </div>
            <div className="text-center">
              <Book className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Avid Reader</p>
            </div>
            <div className="text-center">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-300">Tech Experimenter</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

