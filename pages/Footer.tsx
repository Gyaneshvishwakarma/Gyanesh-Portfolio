'use client'
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Gyaneshvishwakarma",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/gyanesh-vishwakarma-01a159245/",
      label: "LinkedIn"  
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/Gyaneshz",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:gyaneshvishwakarma917@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#1e1e2f] via-[#2a2a4e] to-[#1e1e2f] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-400 max-w-md">
            Feel free to reach out for collaborations. I'm eager to gain more knowledge and experience.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg bg-gray-800/80 text-purple-400 hover:text-purple-300 hover:bg-gray-700/80 transition-colors border border-white/5 hover:border-purple-500/30"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gyanesh Vishwakarma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
