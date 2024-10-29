'use client'
import { useState, useEffect } from 'react'
import { FileText, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#1e1e2f] via-[#2a2a4e] to-[#1e1e2f] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl mx-auto space-y-16"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-purple-400">Myself</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                  Gyanesh Vishwakarma
              </h1>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light text-gray-400 mt-4">Web Developer</h3>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 max-w-1xl mx-auto"
            >
              I &apos;am a software developer specializing in building high-performance, user-focused web applications. Good in ReactJS, NextJS, and an Skilled in JavaScript, HTML and CSS
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
            >
              <FileText></FileText><span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}