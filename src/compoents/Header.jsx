import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const menuItems = [
    { title: "Home", key: "/" },
    { title: "Projects", key: "/projects" },
    { title: "Contact", key: "/contact" },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black  text-white font-sans  shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">S M</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              className={`px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition ${
                pathname === item.key ? "bg-white text-black" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              onClick={() => setMenuOpen(false)} // Close menu on click
              className={`block px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black transition ${
                pathname === item.key ? "bg-white text-black" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
