'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gradient-to-r from-earth-50 via-sage-50 to-earth-50 shadow-lg border-b-2 border-earth-300/50 sticky top-0 z-50 backdrop-blur-sm">
      {/* Decorative top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-earth-400 via-amber-500 to-earth-400"></div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-32">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-4 md:space-x-6 group">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
              <Image 
                src="/images/logo/roocheck-logo-transparent.png" 
                alt="RooCheck Logo"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 group-hover:text-amber-700 transition-all duration-300" style={{ fontFamily: '"Noto Serif", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif', letterSpacing: '0.03em', fontWeight: '700' }}>
                RooCheck
              </span>
              {/* Tibetan Script */}
              <span className="text-lg md:text-xl lg:text-2xl font-semibold text-amber-700 group-hover:text-amber-600 tracking-wide transition-colors duration-300" style={{ fontFamily: 'serif' }}>
                རུ་ཅེག
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-3">
            <Link 
              href="/" 
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                isActive('/') 
                  ? 'text-amber-700 bg-white shadow-md scale-105' 
                  : 'text-sage-800 hover:text-earth-900 hover:bg-white/70 hover:shadow-md hover:scale-105'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <Link 
              href="/clans" 
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                isActive('/clans') 
                  ? 'text-amber-700 bg-white shadow-md scale-105' 
                  : 'text-sage-800 hover:text-earth-900 hover:bg-white/70 hover:shadow-md hover:scale-105'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>About Clans</span>
            </Link>
            <Link 
              href="/check" 
              className={`px-5 py-2.5 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform flex items-center space-x-2 ${
                isActive('/check')
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 scale-105'
                  : 'bg-gradient-to-r from-earth-600 to-amber-600 hover:from-earth-700 hover:to-amber-700 hover:scale-110 hover:-translate-y-1'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Check Relationship</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
              isMenuOpen 
                ? 'bg-amber-600 text-white shadow-lg scale-110 rotate-90' 
                : 'text-sage-800 hover:text-white hover:bg-earth-600 hover:shadow-md hover:scale-110'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close icon
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-earth-200/50 bg-white/50 backdrop-blur-sm rounded-b-xl mx-2 mb-2 shadow-lg animate-slideDown">
            <div className="flex flex-col space-y-2 px-2">
              <Link 
                href="/" 
                className={`font-semibold transition-all duration-300 px-4 py-3 rounded-lg ${
                  isActive('/')
                    ? 'text-amber-700 bg-white shadow-md scale-105'
                    : 'text-sage-800 hover:text-earth-900 hover:bg-white/90 hover:shadow-md hover:scale-105'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </span>
              </Link>
              <Link 
                href="/clans" 
                className={`font-semibold transition-all duration-300 px-4 py-3 rounded-lg ${
                  isActive('/clans')
                    ? 'text-amber-700 bg-white shadow-md scale-105'
                    : 'text-sage-800 hover:text-earth-900 hover:bg-white/90 hover:shadow-md hover:scale-105'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  About Clans
                </span>
              </Link>
              <Link 
                href="/check" 
                className={`font-semibold transition-all duration-300 px-4 py-3 rounded-lg shadow-md ${
                  isActive('/check')
                    ? 'text-white bg-gradient-to-r from-amber-600 to-amber-700 scale-105'
                    : 'text-white bg-gradient-to-r from-earth-600 to-amber-600 hover:from-earth-700 hover:to-amber-700 hover:shadow-lg hover:scale-105'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Check Relationship
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
