import React from 'react';
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { US, GB, EU, AU, CA } from 'country-flag-icons/react/3x2';

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#02060c] via-[#0d1d34] to-[#02060c] shadow-md">
    {/* Top Bar: Flags and Contact Info */}
    <div className="w-full px-4 py-2 border-b border-gray-800/50">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        {/* Country Flags */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <span className="text-white text-xs font-light flex items-center">
            <US title="United States" className="h-3 mr-2" /> USA
          </span>
          <span className="text-white text-xs font-light flex items-center uppercase">
            <CA title="Canada" className="h-3 mr-2" /> Canada
          </span>
          <span className="text-white text-xs font-light flex items-center uppercase">
            <AU title="Australia" className="h-3 mr-2" /> Austrelia
          </span>
          <span className="text-white text-xs font-light flex items-center uppercase">
            <EU title="European Union" className="h-3 mr-2" /> Europe
          </span>
          <span className="text-white text-xs font-light flex items-center">
            <GB title="United Kingdom" className="h-3 mr-2" /> UK
          </span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-white text-xs font-light">
          <div className="flex items-center gap-2">
            <IoIosMail className="h-5 w-5" />
            <a href="mailto:hr@bluewebspark.com">hr@bluewebspark.com</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="h-4 w-4" />
            <a href="tel:+911234567890">+91 8965029288</a>
          </div>
        </div>
      </div>
    </div>

    {/* Main Nav: Logo, Links, Button */}
    <div className="w-full px-4 py-3">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-white text-sm font-light">
          <a href="#software" className="hover:text-blue-400 transition-colors">Software Solution</a>
          <a href="#ai" className="hover:text-blue-400 transition-colors">AI Solution</a>
          <a href="#bpo" className="hover:text-blue-400 transition-colors">BPO Services</a>
          <a href="#industry" className="hover:text-blue-400 transition-colors">Solution For Industry</a>
          <a href="#delivered" className="hover:text-blue-400 transition-colors">Delivered Solutions</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
        </div>

        {/* Brochure Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <button className="bg-[#0066FF] text-white px-5 py-2 rounded text-sm font-light flex items-center hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] transition">
            Brochure <HiOutlineDownload className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
