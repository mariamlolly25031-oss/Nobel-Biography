import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import VisitorCounter from "./VisitorCounter";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "Research", path: "/research" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#08111F]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 z-50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-xl font-bold text-[#08111F] shadow-lg">
            T
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-white">
              TU YOUYOU
            </h1>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              Nobel Laureate
            </p>
          </div>
        </Link>
        <VisitorCounter/>

        {/* Desktop Navigation Link Setup (Visible only on lg screens) */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 text-sm font-medium uppercase tracking-wider transition ${
                  isActive ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#D4AF37]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Icon Toggle Button (Visible on mobile & tablet viewports) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden z-50 text-white focus:outline-none transition-transform duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Dropdown Slide Menu Overlay */}
        <div
          className={`fixed inset-x-0 top-0 h-screen bg-[#08111F] flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xl font-semibold uppercase tracking-widest transition ${
                  isActive ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;