'use client'
import { useState, useEffect } from 'react'
import { User, GraduationCap, Code, ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import AboutImg from '../public/assests/Image.jpeg'

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<string>('personal')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('enhanced-about-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const cardContent = {
    personal: {
      title: "Personal Info ",
      content: (
        <div className="space-y-4">
          <p className="text-lg sm:text-base">I'm Gyanesh Vishwakarma, a passionate web developer with a Bachelor of Computer Applications (BCA) and currently pursuing my Master of Computer Applications (MCA). As a fresher in the field, I have successfully completed freelance projects, honing my skills in building dynamic and user-friendly web applications.</p>
          <div className="mt-6 p-4 bg-gray-750 rounded-lg border border-gray-600">
            <h4 className="text-xl sm:text-lg font-semibold text-purple-400 mb-3">Contact Details</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-pink-400" />
                <a href="mailto:gyaneshvishwakarma917@gmail.com" className="hover:text-pink-400 transition-colors duration-300">gyaneshvishwakarma917@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-green-400" />
                <a href="tel:+91917472918" className="hover:text-green-400 transition-colors duration-300">+91 9174729184</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-blue-400" />
                <span>Jabalpur, Madhya Pradesh</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://github.com/Gyaneshvishwakarma" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/gyanesh-vishwakarma-01a159245/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://x.com/Gyaneshz" icon={<Twitter size={20} />} label="Twitter" />
            </div>
          </div>
        </div>
      ),
      icon: <User size={24} />,
      color: "from-purple-400 to-pink-600"
    },
    education: {
      title: "My Learning Journey",
      content: (
        <div className="space-y-6">
          <EducationCard
            degree="Master of Computer Applications (MCA)"
            school="Shri Ram Institute of Technology"
            year="2024-2026"
            description="Focused on Data Structure, Advance Programming."
            color="purple"
          />
          <EducationCard
            degree="Bachelor of Computer Applications (BCA)"
            school="St.Aloysius College (Autonomous) Jabalpur"
            year="2021-2024"
            description="Focused on Programming, machine learning, and Web Development."
            color="pink"
          />
        </div>
      ),
      icon: <GraduationCap size={24} />,
      color: "from-blue-400 to-green-600"
    },
    skills: {
      title: "My Toolbox",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCategory title="Libraries and Frameworks" skills={["ReactJS", "NextJS", "TailwindCSS","Framer Motion","Vite"]} color="blue" />
          <SkillCategory title="Tools & Software" skills={["Github", "VS Code", "Postman", "Microsoft Office"]} color="green" />
          <SkillCategory title="Backend" skills={["NodeJS ", "Express"]} color="blue" />
          <SkillCategory title="Languages" skills={["Java", "Python", "JavaScript"]} color="green" />
        </div>
      ),
      icon: <Code size={24} />,
      color: "from-yellow-400 to-red-600"
    }
  }

  return (
    <section id="enhanced-about-section" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-3xl font-bold text-center mb-16 relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-600"></span>
        </h2>
        <div className={`flex flex-col justify-center lg:flex-row gap-8 items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
          <div className="lg:w-1/3">
            <div className="relative mb-8 group">
              <div className="w-64 h-64 mx-auto relative">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={AboutImg.src}
                    alt="Gyanesh Vishwakarma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl sm:text-xl font-bold text-gray-100 mb-2">Gyanesh Vishwakarma</h3>
              <p className="text-lg sm:text-base text-purple-400 mb-4">Web Developer</p>
              <a href="/contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {Object.entries(cardContent).map(([key, { title, icon, color }]) => (
                <button
                  key={key}
                  onClick={() => setActiveCard(key)}
                  className={`p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
                    activeCard === key
                      ? `bg-gradient-to-r ${color} text-white`
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-750'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    {icon}
                  </div>
                  <h3 className="text-lg sm:text-base font-semibold text-center">{title}</h3>
                </button>
              ))}
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl">
              
              <div className="text-gray-300">
                {cardContent[activeCard as keyof typeof cardContent].content}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        body {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function EducationCard({ degree, school, year, description, color }: { degree: string; school: string; year: string; description: string; color: string }) {
  return (
    <div className={`bg-gray-750 p-4 rounded-lg border-l-4 border-${color}-500 hover:shadow-lg transition-shadow duration-300`}>
      <h4 className={`text-xl sm:text-lg font-semibold text-${color}-400 mb-1`}>{degree}</h4>
      <p className="text-gray-300 font-medium">{school}</p>
      <p className="text-gray-400 text-sm mb-2">{year}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function SkillCategory({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  return (
    <div className={`bg-gray-750 p-4 rounded-lg border border-${color}-500/50`}>
      <h4 className={`text-xl sm:text-lg font-semibold text-${color}-400 mb-3`}>{title}</h4>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center text-gray-300">
            <ChevronRight size={16} className={`text-${color}-400 mr-2`} />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}