'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, User, Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Here you would typically handle the actual form submission
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <motion.div 
        className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-blur-md w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-blue-300" size={20} />
            <input type="text" id="name" name="name" className="w-full p-3 pl-10 bg-blue-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Your Name" required />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-blue-300" size={20} />
            <input type="email" id="email" name="email" className="w-full p-3 pl-10 bg-blue-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Your Email" required />
          </div>
          <div className="relative">
            <MessageSquare className="absolute top-3 left-3 text-blue-300" size={20} />
            <textarea id="message" name="message" rows={4} className="w-full p-3 pl-10 bg-blue-800 bg-opacity-30 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition" placeholder="Your Message" required></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send className={`${isSubmitting ? 'animate-ping' : 'animate-none'}`} size={20} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

