import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { US, GB, EU, AU, CA } from 'country-flag-icons/react/3x2';

const mobileMenuLinks = [
  {
    title: "Software Solution",
    id: "software",
    subItems: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "Custom Software", href: "#" }
    ]
  },
  {
    title: "AI Solution",
    id: "ai",
    subItems: [
      { label: "Machine Learning", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "NLP Solutions", href: "#" }
    ]
  },
  {
    title: "BPO Services",
    id: "bpo",
    subItems: [
      { label: "Customer Support", href: "#" },
      { label: "Back Office", href: "#" },
      { label: "Data Entry", href: "#" }
    ]
  },
  {
    title: "Solution For Industry",
    id: "industry",
    subItems: [
      { label: "Healthcare", href: "#" },
      { label: "Retail", href: "#" },
      { label: "Education", href: "#" }
    ]
  },
  {
    title: "Delivered Solutions",
    id: "delivered",
    subItems: [
      { label: "Case Studies", href: "#" },
      { label: "Client Success", href: "#" },
      { label: "Portfolio", href: "#" }
    ]
  },
  {
    title: "Contact Us",
    id: "contact",
    subItems: null  // 🔥 No dropdown for Contact Us
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#02060c] via-[#0d1d34] to-[#02060c] shadow-md">
      {/* Top Bar */}
      <div className="hidden md:block w-full px-4 py-2 border-b border-gray-800/50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-white text-xs font-light flex items-center"><US className="h-3 mr-2" /> USA</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><CA className="h-3 mr-2" /> Canada</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><AU className="h-3 mr-2" /> Australia</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><EU className="h-3 mr-2" /> Europe</span>
            <span className="text-white text-xs font-light flex items-center"><GB className="h-3 mr-2" /> UK</span>
            <span className="text-gray-400 text-sm font-light flex items-center">Serving International Clients for 10+ Years</span>
          </div>
          <div className="flex items-center gap-6 text-white text-xs font-light">
            <div className="flex items-center gap-2">
              <IoIosMail className="h-5 w-5" />
              <a href="mailto:hr@bluewebspark.com">info@bluewebspark.com | hr@bluewebspark.com</a>
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
          <img src={logo} alt="Logo" className="h-12" />

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-white text-sm font-light">
            {mobileMenuLinks.map((link, i) => (
              link.subItems ? (
                <div className="relative group" key={i}>
                  <a href={`#${link.id}`} className="hover:text-blue-400">{link.title}</a>
                  <div className="absolute top-full left-0 mt-2 bg-[#0d1d34] rounded shadow-lg min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.href} className="block px-4 py-2 hover:bg-blue-500/10">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={i} href={`#${link.id}`} className="hover:text-blue-400">{link.title}</a>
              )
            ))}
          </div>

          {/* Desktop Brochure Button */}
          <div className="hidden md:flex">
            <button className="bg-[#0066FF] text-white px-5 py-2 rounded text-sm flex items-center hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] transition">
              Brochure <HiOutlineDownload className="ml-2" />
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 space-y-2 flex flex-col items-start text-white text-sm font-light px-2">
            {mobileMenuLinks.map((link, i) => (
              <div key={i} className="w-full">
                {link.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="w-full text-left py-2 hover:text-blue-400"
                    >
                      {link.title}
                    </button>
                    {openDropdown === i && (
                      <div className="pl-4 space-y-1">
                        {link.subItems.map((sub, idx) => (
                          <a key={idx} href={sub.href} className="block py-1 text-white/80 hover:text-blue-400">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={`#${link.id}`} className="block py-2 hover:text-blue-400">
                    {link.title}
                  </a>
                )}
              </div>
            ))}
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
