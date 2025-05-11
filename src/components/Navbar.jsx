"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-950 via-blue-950 to-purple-950 shadow-[0_4px_20px_rgba(59,130,246,0.3)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="md:text-3xl text-2 but   font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-neon-glow ">
                Tech Assignment Support
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/team", label: "Team" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="relative px-4 py-2 text-gray-200 text-base font-semibold transition-all duration-300 group hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 backdrop-blur-sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-gray-900/90 backdrop-blur-lg shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/team", label: "Team" },
            { to: "/testimonials", label: "Testimonials" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg text-lg font-medium transition-all duration-300 animate-slide-in"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;