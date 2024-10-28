'use client'
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Code, Eye, Sparkles, Zap, Layers } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export default function ProjectSection() {
  const projects: ProjectCardProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and secure payment integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      imageUrl: "/projects/ecommerce.jpg",
      liveUrl: "https://example.com", 
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspace features.",
      technologies: ["React", "Firebase", "Material UI"],
      imageUrl: "/projects/taskapp.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      imageUrl: "/projects/ai-generator.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
   
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#1e1e2f] via-[#2a2a4e] to-[#1e1e2f] py-20 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <Code className="text-purple-400 w-8 h-8" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"
                />
              </div>
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and technical expertise. Each project represents a unique challenge and solution.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                Full Stack Development
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                UI/UX Design
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Cloud Architecture
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className={`${project.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all w-full sm:w-auto justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <Eye className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gray-800/50 hover:bg-gray-800/80 rounded-lg text-white font-medium border border-white/10 hover:border-purple-500/30 transition-all w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, description, technologies, imageUrl, liveUrl, githubUrl, featured }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col backdrop-blur-sm"
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {featured && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/80 text-white text-sm backdrop-blur-sm">
            <Star className="w-4 h-4" />
            <span>Featured</span>
          </div>
        )}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-purple-500/90 text-white hover:bg-purple-600 transition-colors shadow-lg backdrop-blur-sm"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-purple-500/90 text-white hover:bg-purple-600 transition-colors shadow-lg backdrop-blur-sm"
            >
              <Github size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm line-clamp-3 group-hover:text-gray-300 transition-colors flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-purple-400 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:bg-gray-800 transition-all"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
