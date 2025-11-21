'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#e8ddd4] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-56 h-16">
              <Image
                src="/logonavbar.png"
                alt="Yesica Oviedo Real Estate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              INICIO
            </Link>
            <Link href="/servicios" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              SERVICIOS
            </Link>
            <Link href="/sobre-mi" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              SOBRE MÍ
            </Link>
            <Link href="/blog" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              BLOG
            </Link>
            <Link href="/destacados" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              DESTACADOS
            </Link>
            <Link href="/desarrollos" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide">
              DESARROLLOS
            </Link>
            <Link 
              href="/contacto" 
              className="bg-[#1a1a1a] text-white px-6 py-2 hover:bg-[#8b7355] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              CONTÁCTAME
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3">
            <Link 
              href="/" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              INICIO
            </Link>
            <Link 
              href="/servicios" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              SERVICIOS
            </Link>
            <Link 
              href="/sobre-mi" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              SOBRE MÍ
            </Link>
            <Link 
              href="/blog" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              BLOG
            </Link>
            <Link 
              href="/destacados" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              DESTACADOS
            </Link>
            <Link 
              href="/desarrollos" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              DESARROLLOS
            </Link>
            <Link 
              href="/contacto" 
              className="block bg-[#1a1a1a] text-white px-6 py-2 hover:bg-[#8b7355] transition-colors text-center font-medium text-sm uppercase tracking-wide"
              onClick={toggleMenu}
            >
              CONTÁCTAME
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
