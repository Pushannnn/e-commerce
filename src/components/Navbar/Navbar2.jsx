import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";



const Navbar2 = ({cartCount}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isComponentsOpen, setIsComponentsOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [isMobileComponentsOpen, setIsMobileComponentsOpen] = useState(false)
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const coursesDropdownRef = useRef(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsComponentsOpen(false)
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
        setIsCoursesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative bg-white/50 backdrop-blur-sm border-t border-white/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1 overflow-visible">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all">Home</Link>
            <Link to="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all">Blog</Link>

            {/* Components Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsComponentsOpen(true)}
              onMouseLeave={() => setIsComponentsOpen(false)}
            >
              <button
                onClick={() => setIsComponentsOpen(!isComponentsOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all"
              >
                Components
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isComponentsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Components Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-xl py-2 border border-white/20 transition-all duration-200 ${isComponentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a href="/laptop" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>💻</span>
                  <span className="font-medium">Laptop Components</span>
                </a>
                <a href="/mobile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>📱</span>
                  <span className="font-medium">Mobile Components</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>🖥️</span>
                  <span className="font-medium">Desktop Components</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>⌨️</span>
                  <span className="font-medium">Accessories</span>
                </a>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div
              className="relative"
              ref={coursesDropdownRef}
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all"
              >
                Courses
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-xl py-2 border border-white/20 transition-all duration-200 ${isCoursesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>📘</span>
                  <span className="font-medium">Web Development</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>💾</span>
                  <span className="font-medium">Data Science</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>📱</span>
                  <span className="font-medium">Mobile App Dev</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all">
                  <span>🎮</span>
                  <span className="font-medium">Game Dev</span>
                </a>
              </div>
            </div>

            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all">Articles</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 rounded-lg hover:bg-white/50 transition-all">Videos</a>
          </div>

          {/* Search and Mobile Menu Button */}



          {/* Cart Icon  and favourite icon*/}

          <div className="flex items-center space-x-4 ml-auto">
            <Link to="/favorite">
              <MdFavoriteBorder className="w-10 h-10 p-2 rounded-full  cursor-pointer hover:bg-red-700 text-gray-700 hover:text-white transition-colors duration-300" />
            </Link>

            {/* { cartCount > 0 && (
          <Link to="/cart">
            <CiShoppingCart className="w-10 h-10 p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-red-700 text-gray-700 hover:text-white transition-colors duration-300" />
          </Link>
        )} */}

            <div className="relative">
              {/* Always show the cart icon */}
              <Link to="/cart">
                <CiShoppingCart
                  className="w-10 h-10 p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-red-700 text-gray-700 hover:text-white transition-colors duration-300"
                />
              </Link>

              {/* Show cart count only if greater than 0 */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  className="w-48 lg:w-64 py-2 pl-10 pr-4 text-sm text-gray-700 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                  placeholder="Search..."
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/50 transition-all"
            >
              {!isOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-1 pb-4">
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all">Home</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all">Blog</a>

            {/* Mobile Components Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileComponentsOpen(!isMobileComponentsOpen)}
                className="flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all"
              >
                Components
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileComponentsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`ml-4 mt-1 space-y-1 border-l-2 border-purple-200 pl-3 transition-all duration-300 overflow-hidden ${isMobileComponentsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="/laptop" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>💻</span>
                  <span>Laptop Components</span>
                </a>
                <a href="/mobile" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>📱</span>
                  <span>Mobile Components</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>🖥️</span>
                  <span>Desktop Components</span>
                </a>
              </div>
            </div>

            {/* Mobile Courses Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                className="flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all"
              >
                Courses
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`ml-4 mt-1 space-y-1 border-l-2 border-purple-200 pl-3 transition-all duration-300 overflow-hidden ${isMobileCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>📘</span>
                  <span>Web Development</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>💾</span>
                  <span>Data Science</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>📱</span>
                  <span>Mobile App Dev</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-white/50 rounded-lg transition-all">
                  <span>🎮</span>
                  <span>Game Dev</span>
                </a>
              </div>
            </div>

            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all">Articles</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white/50 rounded-lg transition-all">Videos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2