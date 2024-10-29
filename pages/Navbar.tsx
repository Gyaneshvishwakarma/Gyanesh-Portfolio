'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [showMenu, setShowMenu] = useState(false) // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Work', href: '/project' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/70 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-gray-900 to-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Gyanesh
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden sm:block">
            <ul className="flex space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative font-medium text-gray-300 hover:text-white transition-colors duration-300 group ${
                      activePage === item.name.toLowerCase() ? 'text-white' : ''
                    }`}
                    onClick={() => setActivePage(item.name.toLowerCase())}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                      activePage === item.name.toLowerCase() ? 'scale-x-100' : ''
                    }`} />
                    <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setShowMenu(!showMenu)} 
              className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="sm:hidden mt-2 space-y-2 bg-gray-800 px-4 py-4 rounded-lg shadow-md">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block font-medium text-gray-300 hover:text-white transition-colors duration-300 ${
                      activePage === item.name.toLowerCase() ? 'text-white' : ''
                    }`}
                    onClick={() => {
                      setActivePage(item.name.toLowerCase())
                      setShowMenu(false) // Close menu on selection
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        body {
          font-family: 'DM Sans', sans-serif;
          background-color: #111827;
          color: #e5e7eb;
        }
      `}</style>
    </header>
  )
}
