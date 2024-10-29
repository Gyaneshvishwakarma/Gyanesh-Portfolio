'use client'
import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} id="unique-contact-section" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-gray-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMTMxMzEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-out`}>
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 sm:p-10">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center sm:text-left">
                  Reach Out
                </h3>
                <div className="space-y-6">
                  <ContactItem
                    icon={<Mail className="text-purple-400" size={24} />}
                    title="Email"
                    content="gyaneshvishwakarma917@gmail.com"
                    href="mailto:gyaneshvishwakarma917@gmail.com"
                  />
                  <ContactItem
                    icon={<Phone className="text-pink-400" size={24} />}
                    title="Phone"
                    content="+91 9174729184"
                    href="tel:+919174729184"
                  />
                  <ContactItem
                    icon={<MapPin className="text-blue-400" size={24} />}
                    title="Location"
                    content="Jabalpur, Madhya Pradesh"
                  />
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-750 p-8 sm:p-10 relative overflow-hidden">
                
                <h4 className="text-xl font-semibold text-gray-300 mb-6 relative z-10 text-center sm:text-left">Connect with Me</h4>
                <div className="flex space-x-4 mb-8 relative z-10 justify-center sm:justify-start">
                  <SocialLink href="https://github.com/Gyaneshvishwakarma" icon={<Github size={24} />} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/gyanesh-vishwakarma-01a159245/" icon={<Linkedin size={24} />} label="LinkedIn" />
                  <SocialLink href="https://x.com/Gyaneshz" icon={<Twitter size={24} />} label="Twitter" />
                </div>
                <p className="text-gray-300 mb-6 relative z-10 text-center sm:text-left">
                  I'm always open to new opportunities and collaborations. Let's create something amazing together!
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg relative z-10 text-center sm:text-left"
                >
                  Full Contact Page
                  <ArrowRight size={18} className="ml-2" />
                </a>
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

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

function ContactItem({ icon, title, content, href }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-750 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-300">{title}</h4>
        {href ? (
          <a
            href={href}
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
          >
            {content}
            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ) : (
          <p className="text-gray-400">{content}</p>
        )}
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all duration-300 text-gray-300 hover:text-white transform hover:scale-110 hover:shadow-lg"
      aria-label={label}
    >
      {icon}
    </a>
  )
}