import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 mb-6 sticky top-0 backdrop-blur-xl bg-white/70 z-50 rounded-lg">
      <h2 className="text-2xl font-bold text-slate-700">Meals</h2>

      {/* Desktop / Medium screens */}
      <nav className="hidden md:flex items-center justify-between gap-8 text-lg font-semibold">
        <NavLink to="/" className="hover:text-slate-900">
          Home
        </NavLink>
        <NavLink to="/meals" className="hover:text-slate-900">
          Meals
        </NavLink>
        <NavLink to="/contact" className="hover:text-slate-900">
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
