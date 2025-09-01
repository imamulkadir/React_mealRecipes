import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Use a className for active styling instead of inline style to avoid layout shifts or width changes.
  // This ensures consistent width regardless of which link is active.
  const activeClassName = "bg-[#323334] text-white rounded px-2 py-1";
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 mb-6 sticky top-0 backdrop-blur-xl bg-white/70 z-50 rounded-lg">
      <h2 className="text-2xl font-bold text-slate-700">Meals</h2>

      {/* Desktop / Medium screens */}
      <nav className="hidden md:flex items-center justify-between gap-8 text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeClassName : "hover:text-slate-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            isActive ? activeClassName : "hover:text-slate-600"
          }
        >
          Meals
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? activeClassName : "hover:text-slate-600"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Mobile / Small screens */}
      <div className="md:hidden relative">
        <button
          className="text-slate-700 font-bold focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        {/* Mobile Menu */}
        <div
          className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden transition-all ${menuOpen ? "block" : "hidden"}`}
        >
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </NavLink>
          <NavLink to="/meals" className="block px-4 py-2 hover:bg-gray-100">
            Meals
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
