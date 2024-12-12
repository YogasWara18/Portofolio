'use client'

import { motion } from 'framer-motion'

const comments = [
  {
    name: "John Doe",
    comment: "Great work! The website design is stunning and user-friendly.",
    role: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Jane Smith",
    comment: "Impressive portfolio. Your attention to detail is commendable.",
    role: "Senior Developer",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Alex Johnson",
    comment: "Your skills in frontend development are truly remarkable.",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
]

export default function Comments() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        What People Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-300">{comment.name}</h2>
                <p className="text-purple-300 text-sm">{comment.role}</p>
              </div>
            </div>
            <p className="italic mb-4 text-gray-300">"{comment.comment}"</p>
            <div className="flex justify-end">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 6.59V19c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-5.59c0-.89.35-1.74.98-2.37l7.62-7.62c.77-.77 2.03-.77 2.8 0l1.22 1.22c.77.77.77 2.03 0 2.8L18 6.59z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

