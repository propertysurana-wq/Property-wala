"use client";

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Navbar */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-teal-500" />
            <span className="text-xl font-bold text-gray-900">Property Sathi</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/About" className="nav-link">About</Link>
            <Link href="/service" className="nav-link">Services</Link>
            <Link href="/Process" className="nav-link">Process</Link>
            <Link href="/Contact" className="nav-link">Contact</Link>
            {/* <Link href="/Adminlogin" className="nav-link">Contact</Link> */}
          </div>
          

          {/* Desktop Buttons */}
           <div className="hidden md:flex items-center space-x-4">
            <Link href="/userlogin">
              <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
                Sign In
              </button>
            </Link>
<Link href="/Adminlogin">
  <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
    Admin
  </button>
   </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fadeDown">
            <div className="flex flex-col space-y-4">

              <Link href="/" className="mobile-link">Home</Link>
              <Link href="/About" className="mobile-link">About</Link>
              <Link href="/service" className="mobile-link">Services</Link>
              <Link href="/Process" className="mobile-link">Process</Link>
              <Link href="/Contact" className="mobile-link">Contact</Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/userlogin">
                  <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition w-full">
                    Sign In
                  </button>
                </Link>

                <Link href="/Adminlogin">
  <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
    Admin
  </button>
   </Link>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-teal-500 font-medium transition;
        }
        .mobile-link {
          @apply text-gray-800 hover:text-teal-600 text-lg font-semibold transition;
        }

        /* Desktop Green Buttons */
        .btn-desktop-green {
          @apply px-6 py-2 bg-green-600 text-white rounded-lg font-medium 
                 shadow-sm hover:bg-green-700 active:scale-95 transition-all;
        }

        /* Mobile Green Buttons */
        .btn-mobile-green {
          @apply w-full bg-green-600 text-white py-3 rounded-full font-bold 
                 text-center shadow-md hover:bg-green-700 active:scale-95 
                 transition-all;
        }

        .animate-fadeDown {
          animation: fadeDown 0.3s ease;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}