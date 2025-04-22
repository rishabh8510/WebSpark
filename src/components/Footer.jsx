import React from 'react';
import logo from "../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#02060c] via-[#0d1d34] to-[#02060c] text-white text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Logo and Description */}
        <div className='md:mr-10'>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 max-w-full" />
          </div>
          <p className="mt-4 text-gray-400">
            Bluewebspark Technologies is a professional software firm <br className="hidden xs:block" />delivering rapid, reliable solutions with a focus on Innovation, <br className="hidden xs:block" />Transparency, and Agility in every client interaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:text-right  md:mt-24">
          <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2">
            <li><a href="#" className="font-bold">Quick Links</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Our Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Our Blogs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Middle Section with Contact Info */}
      <div className="border-t border-gray-700 py-4 text-sm">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
    
    {/* Contact Info */}
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0 text-gray-300 w-full md:w-auto">
      <div className="flex items-start md:items-center justify-start space-x-2">
        <FaMapMarkerAlt className="text-lg flex-shrink-0" />
        <span>4th floor Apollo Premier Building Vijay Nagar, Indore (452010)</span>
      </div>
      <div className="flex items-start md:items-center justify-start space-x-2">
        <FaEnvelope className="text-lg flex-shrink-0" />
        <span>hr@bluewebspark.com</span>
      </div>
      <div className="flex items-start md:items-center justify-start space-x-2">
        <FaPhoneAlt className="text-lg flex-shrink-0" />
        <span>+91 8965029288</span>
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex items-start md:items-center md:justify-end space-x-4 text-white text-lg">
    <a href="#" aria-label="X" className="mt-2 md:mt-0"><SiX /></a>
      <a href="#" aria-label="Facebook" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/company/bluewebsparktechnologies/posts/?feedView=all" aria-label="LinkedIn" target='blank' className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
        <FaLinkedinIn />
      </a>
      <a href="https://youtube.com/@bluewebsparktechnologiespv5057?si=s_UXwUlA7pkNysav" aria-label="YouTube" target='blank' className="bg-red-500 text-white p-2 rounded-full hover:bg-red-800 transition">
        <FaYoutube />
      </a>
    </div>
    
  </div>
</div>


      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 py-3 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between  space-y-2 sm:space-y-0">
          <p>Copyright © Bluewebspark Technologies Ltd All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Terms & Condition</a>
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


{/* Social Icons */ }
{/* <div className="flex justify-center items-center gap-4 text-lg text-white flex-wrap">
        <motion.div 
          whileHover={{ scale: 1.05, transition: { delay: 0.1 } }}
          className="bg-[#0b61d6] p-2 rounded-full transition cursor-pointer"
        >
          <FaLinkedin />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, transition: { delay: 0.1 } }}
          className="bg-[#e1306c] p-2 rounded-full transition cursor-pointer"
        >
          <FaInstagram />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, transition: { delay: 0.1 } }}
          className="bg-[#2e2eec] p-2 rounded-full transition cursor-pointer"
        >
          <a href={partner.link} target="blank"><FaGlobe /></a>
        </motion.div>
      </div> */}