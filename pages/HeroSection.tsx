'use client'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter, FileText, ChevronDown } from 'lucide-react'
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
              <h2 className="text-xl font-medium text-purple-400">Welcome to my portfolio</h2>
              <h1 className="text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Jane Doe
              </h1>
              <h3 className="text-3xl font-light text-gray-400 mt-4">Full Stack Developer & UI Designer</h3>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-500 max-w-2xl mx-auto"
            >
              Crafting digital experiences that blend creativity with technical excellence. 
              Passionate about building innovative solutions that make a difference.
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
              <FileText size={20} />
              <span>Download Resume</span>
            </motion.a>

            <div className="flex gap-4">
              <SocialButton href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialButton href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialButton href="https://twitter.com" icon={<Twitter />} label="Twitter" />
            </div>
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

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-purple-400 hover:border-purple-400/50 hover:bg-gray-800 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}
