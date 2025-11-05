import React, { useState } from 'react'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="relative  text-gray-800 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img
                className="h-12 w-auto p-auto"
                src="https://smartwebcarecenter.com/wp-content/uploads/2025/05/smart-website-logo-2.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/feature">Feature</Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/blog">Blog</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm" to="/Login">
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link className="rounded-md bg-pink-100 px-5 py-2.5 text-sm font-medium text-teal-600" to="/register">
                    Register
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Navbar2 cartCount={cartCount} />
    </nav>
  )
}

export default Navbar
