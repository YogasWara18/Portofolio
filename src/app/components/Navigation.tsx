'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/comments', label: 'Comments' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,0,255,0.5)] group-hover:from-blue-700 group-hover:to-purple-700">
              <span className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">YW</span>
            </span>
          </Link>
          <button 
            className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-0 bg-white md:bg-transparent shadow-lg md:shadow-none`}>
            {navItems.map((item) => (
              <li key={item.href} className="group">
                <Link 
                  href={item.href} 
                  className={`block py-3 px-4 md:px-3 text-gray-800 hover:text-blue-600 transition-colors relative ${pathname === item.href ? 'text-blue-600' : ''}`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pathname === item.href ? 'scale-x-100' : ''}`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

