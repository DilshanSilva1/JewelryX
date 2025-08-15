import React, { useState } from 'react';
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi';
import { PiXLogoBold } from 'react-icons/pi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  // State to control dropdown menu visibility
  const [showDropdown, setShowDropdown] = useState(false);
  // State to control mobile menu visibility
  const [menu, setMenu] = useState(false);

  // React Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle mobile menu
  const handleChangeMenu = () => {
    setMenu(!menu);
  };

  // Scroll to a section by id
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home page first
      navigate("/", { replace: false });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home page 
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-red shadow-md py-4 px-6 lg:px-20">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="bg-[#e2c6aa] p-4 rounded-full">
            <PiXLogoBold className="text-[#d1733d] p-2" />
          </span>
          <span style={{ fontWeight: 'bold', fontSize: '1.875rem' }}>JEWEL X</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-[#2fle0e]">
          {/* React Router Links */}
          <Link to="/" className="hover:text-[#d1733d] transition-colors">Home</Link>
          
          <Link to="/shop" className="hover:text-[#d1733d] transition-colors">Shop</Link>

          {/* Scroll buttons */}
          <button onClick={() => handleScroll("services")} className="hover:text-[#d1733d] transition-colors">Services</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-[#d1733d] transition-colors">Contact</button>
          <button onClick={() => handleScroll("about")} className="hover:text-[#d1733d] transition-colors">About</button>

          {/* Jewellery dropdown */}
          <div className="relative group" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <span className="hover:text-[#d1733d] transition-colors cursor-pointer">Jewellery</span>
            {showDropdown && (
              <div className="absolute top-6 left-0 bg-white shadow p-2 rounded z-10 w-40">
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Bangles</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Birthstones</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Bracelets</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Bridal</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Chains</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Diamonds</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Earrings</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Necklaces</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Pendants</a>
                <a href="/" className="block px-2 py-1 hover:text-[#d1733d]">Rings</a>
              </div>
            )}
          </div>
        </nav>

        {/* Icons */}
        <div>
          <div className="hidden md:flex gap-3 text-[#d1733d] text-lg justify-end">
            {[FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, idx) => (
              <span key={idx} className="p-2 border border-[#d1733d] rounded-full cursor-pointer hover:bg-[#d1733d] hover:text-white transition">
                <Icon />
              </span>
            ))}
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center justify-end">
            {menu ? (
              <FiX size={25} onClick={handleChangeMenu} />
            ) : (
              <FiMenu size={25} onClick={handleChangeMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-[#f5eee6] text-[#6b4226] left-0 top-16 font-semibold text-2xl pt-8 px-5 pb-4 gap-8 w-full transition-transform duration-300`}>
        <Link to="/" onClick={() => setMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
        <Link to="/shop" onClick={() => setMenu(false)}>Shop</Link>
        <button onClick={() => { handleScroll("services"); setMenu(false); }}>Services</button>
        <button onClick={() => { handleScroll("contact"); setMenu(false); }}>Contact</button>
        
        {/* Jewellery dropdown in mobile */}
        <details className="group">
          <summary className="cursor-pointer hover:text-[#d1733d]">Jewellery</summary>
          <div className="pl-4 mt-1 flex flex-col gap-2.5">
            <a href="/" className="hover:text-[#d1733d]">Bangle</a>
            <a href="/" className="hover:text-[#d1733d]">Birthstones</a>
            <a href="/" className="hover:text-[#d1733d]">Bracelets</a>
            <a href="/" className="hover:text-[#d1733d]">Bridal</a>
            <a href="/" className="hover:text-[#d1733d]">Chains</a>
            <a href="/" className="hover:text-[#d1733d]">Diamonds</a>
            <a href="/" className="hover:text-[#d1733d]">Earrings</a>
            <a href="/" className="hover:text-[#d1733d]">Necklaces</a>
            <a href="/" className="hover:text-[#d1733d]">Pendants</a>
            <a href="/" className="hover:text-[#d1733d]">Rings</a>
          </div>
        </details>

        {/* Mobile icons */}
        <div className="flex gap-3 mt-2">
          {[FiSearch, FiHeart, FiShoppingBag, FiUser].map((Icon, idx) => (
            <span key={idx} className="p-2 border border-[#d1733d] rounded-full cursor-pointer hover:bg-[#d1733d] hover:text-white transition">
              <Icon />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;