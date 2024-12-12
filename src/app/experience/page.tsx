'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    logo: "/kawasaki.png?height=80&width=80",
    period: "2020 - Present",
    description: "Lead frontend development for multiple high-profile projects, focusing on React and Next.js applications. Implemented state-of-the-art UI/UX designs and optimized performance for large-scale web applications."
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions Ltd.",
    logo: "/california.png?height=80&width=80",
    period: "2017 - 2020",
    description: "Developed and maintained various client websites and web applications. Specialized in responsive design and cross-browser compatibility. Collaborated with UX designers to implement intuitive user interfaces."
  }
]

export default function Experience() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/experience.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-indigo-900/80 via-blue-900/80 to-blue-800/80 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
            Professional Journey
          </h1>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              })

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-700 to-indigo-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                    <div className="flex-shrink-0 mr-4 mb-4 sm:mb-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={80}
                        height={80}
                        className="rounded-lg bg-white p-2"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                        <h2 className="text-2xl font-bold text-blue-200">{exp.title}</h2>
                        <p className="text-teal-300 font-semibold mt-2 sm:mt-0">{exp.period}</p>
                      </div>
                      <h3 className="text-xl text-blue-300 mb-3">{exp.company}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

