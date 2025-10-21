'use client'

// components/Navbar.tsx
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-dark">Kamimo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dark hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-dark hover:text-primary transition-colors font-medium">
              Nosotros
            </Link>
            <Link href="/productos" className="text-dark hover:text-primary transition-colors font-medium">
              Productos
            </Link>
            <Link href="/contacto" className="text-dark hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
            <Link 
              href="/admin"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors font-medium"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md font-medium">
              Inicio
            </Link>
            <Link href="/nosotros" className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md font-medium">
              Nosotros
            </Link>
            <Link href="/productos" className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md font-medium">
              Productos
            </Link>
            <Link href="/contacto" className="block px-3 py-2 text-dark hover:bg-gray-100 rounded-md font-medium">
              Contacto
            </Link>
            <Link href="/admin" className="block px-3 py-2 bg-primary text-white rounded-md font-medium">
              Admin
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}