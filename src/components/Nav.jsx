import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { US, GB, EU, AU, CA } from 'country-flag-icons/react/3x2';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#02060c] via-[#0d1d34] to-[#02060c] shadow-md">
      {/* Top Bar - Only on Desktop */}
      <div className="hidden md:block w-full px-4 py-2 border-b border-gray-800/50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Country Flags */}
          <div className="flex gap-4">
            <span className="text-white text-xs font-light flex items-center"><US className="h-3 mr-2" /> USA</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><CA className="h-3 mr-2" /> Canada</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><AU className="h-3 mr-2" /> Australia</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><EU className="h-3 mr-2" /> Europe</span>
            <span className="text-white text-xs font-light flex items-center"><GB className="h-3 mr-2" /> UK</span>
            <span className="text-gray-400 text-sm font-light flex items-center"> Serving International Client From last 10 Years</span>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 text-white text-xs font-light">
            <div className="flex items-center gap-2">
              <IoIosMail className="h-5 w-5" />
              <a href="mailto:hr@bluewebspark.com">hr@bluewebspark.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="h-4 w-4" />
              <a href="tel:+918965029288">+91 8965029288</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full px-4 py-3">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-white text-sm font-light">
            <a href="#software" className="hover:text-blue-400">Software Solution</a>
            <a href="#ai" className="hover:text-blue-400">AI Solution</a>
            <a href="#bpo" className="hover:text-blue-400">BPO Services</a>
            <a href="#industry" className="hover:text-blue-400">Solution For Industry</a>
            <a href="#delivered" className="hover:text-blue-400">Delivered Solutions</a>
            <a href="#contact" className="hover:text-blue-400">Contact Us</a>
          </div>

          {/* Desktop Brochure Button */}
          <div className="hidden md:flex">
            <button className="bg-[#0066FF] text-white px-5 py-2 rounded text-sm flex items-center hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] transition">
              Brochure <HiOutlineDownload className="ml-2" />
            </button>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-3 flex flex-col items-start text-white text-sm font-light px-2">
            <a href="#software" className="hover:text-blue-400 w-full">Software Solution</a>
            <a href="#ai" className="hover:text-blue-400 w-full">AI Solution</a>
            <a href="#bpo" className="hover:text-blue-400 w-full">BPO Services</a>
            <a href="#industry" className="hover:text-blue-400 w-full">Solution For Industry</a>
            <a href="#delivered" className="hover:text-blue-400 w-full">Delivered Solutions</a>
            <a href="#contact" className="hover:text-blue-400 w-full">Contact Us</a>
            <button className="bg-[#0066FF] text-white w-full px-5 py-2 rounded text-sm flex items-center justify-center hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] transition">
              Brochure <HiOutlineDownload className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
