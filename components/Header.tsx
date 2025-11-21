'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#eee9e1] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-10 mr-12">
            <div className="relative w-48 h-14">
              <Image
                src="/logonavbar.png"
                alt="Yesica Oviedo Real Estate"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="relative w-48 h-14 -ml-10">
              <Image
                src="/logonavbar2.png"
                alt="Logo adicional"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-auto pr-6">
            <Link href="/" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em]">
              INICIO
            </Link>
            <Link href="/servicios" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em]">
              SERVICIOS
            </Link>
            <Link href="/sobre-mi" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em] whitespace-nowrap">
              SOBRE MÍ
            </Link>
            <Link href="/blog" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em]">
              BLOG
            </Link>
            <Link href="/destacados" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em]">
              DESTACADOS
            </Link>
            <Link href="/desarrollos" className="text-[#1a1a1a] hover:text-[#8b7355] transition-colors font-serif text-sm uppercase tracking-[0.15em]">
              DESARROLLOS
            </Link>
            <Link 
              href="/contacto" 
              className="bg-[#7c6043] text-white px-6 py-2 hover:bg-[#5d4630] transition-colors font-serif text-sm uppercase tracking-[0.15em]"
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
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em]"
              onClick={toggleMenu}
            >
              INICIO
            </Link>
            <Link 
              href="/servicios" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em]"
              onClick={toggleMenu}
            >
              SERVICIOS
            </Link>
            <Link 
              href="/sobre-mi" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em] whitespace-nowrap"
              onClick={toggleMenu}
            >
              SOBRE MÍ
            </Link>
            <Link 
              href="/blog" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em]"
              onClick={toggleMenu}
            >
              BLOG
            </Link>
            <Link 
              href="/destacados" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em]"
              onClick={toggleMenu}
            >
              DESTACADOS
            </Link>
            <Link 
              href="/desarrollos" 
              className="block text-[#1a1a1a] hover:text-[#8b7355] transition-colors py-2 font-serif text-sm uppercase tracking-[0.15em]"
              onClick={toggleMenu}
            >
              DESARROLLOS
            </Link>
            <Link 
              href="/contacto" 
              className="block bg-[#7c6043] text-white px-6 py-2 hover:bg-[#5d4630] transition-colors text-center font-serif text-sm uppercase tracking-[0.15em]"
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
