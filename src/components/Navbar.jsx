/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const baseLink =
    "block text-white hover:text-[#A586ED] transition font-medium";
  const activeLink = "text-[#A586ED] font-semibold";

  return (
    <nav className="bg-[#10101A] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl sm:text-4xl font-bold text-white">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Saba
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            ri.
          </span>
        </Link>

        <div className="hidden md:flex space-x-6 sm:text-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#10101A]/90 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <span className="text-2xl font-bold text-white">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <div className="mt-6 space-y-6 px-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg tracking-wide transition-transform duration-300 hover:translate-x-2 ${
                  isActive ? activeLink : baseLink
                }`
              }
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
