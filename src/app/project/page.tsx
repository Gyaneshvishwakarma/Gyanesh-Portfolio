// pages/projects.tsx

'use client'
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code, Star } from 'lucide-react';
import ProjectImg from '../../../public/assests/project1.png'
import ProjectImg2 from '../../../public/assests/project2.png'
import ProjectImg3 from '../../../public/assests/project3.png'

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: ProjectCardProps[] = [
  {
    title: "The Yogesh Vishwakarma Landing Website",
    description: "A ReactJS and Tailwind CSS landing page designed for a YouTuber, highlighting their services, portfolio, and essential details.",
    technologies: ["ReactJS", "Shadcn", "Tailwind CSS", "Accernity"],
    imageUrl: ProjectImg.src,
    liveUrl: "https://the-yogesh-vishwakarma.vercel.app/", 
    githubUrl: "https://github.com/Gyaneshvishwakarma/The-Yogesh-Vishwakarma-Website-Project",
    featured: true
  },
  {
    title: "Beauty Parlour Website",
    description: "An user-friendly WordPress website crafted for a freelance beauty parlour. It showcases services, booking options, and client testimonials.",
    technologies: ["Wordpress"],
    imageUrl: ProjectImg2.src,
    liveUrl: "https://divyzone.in/",
    githubUrl: "https://github.com/Gyaneshvishwakarma",
    featured: true
  },
  {
    title: "Personal Portfolio",
    description: "Personal portfolio showcasing my web development skills, projects, and achievements. Built with Next.js, Tailwind CSS, and interactive libraries for engagement.",
    technologies: ["NextJS", "TailwindCSS", "Framer Motion", "Shadcn"],
    imageUrl: ProjectImg3.src,
    liveUrl: "/",
    githubUrl: "https://github.com/Gyaneshvishwakarma/Gyanesh-Portfolio",
    featured: true
  },
 
];

export default function Projects() {
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
              {/* <div className="relative">
                <Code className="text-purple-400 w-8 h-8" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"
                />
              </div> */}
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                Projects Showcase
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and technical expertise. Each project represents a unique challenge and solution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className={`col-span-1 ${project.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, description, technologies, imageUrl, liveUrl, githubUrl, featured }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col"
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {/* {featured && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/80 text-white text-sm">
            <Star className="w-4 h-4" />
            <span>Featured</span>
          </div>
        )} */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-purple-500/90 text-white hover:bg-purple-600 transition-colors shadow-lg"
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
              className="p-3 rounded-lg bg-purple-500/90 text-white hover:bg-purple-600 transition-colors shadow-lg"
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
