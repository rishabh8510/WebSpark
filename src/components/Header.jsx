import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { US, GB, EU, AU, CA } from 'country-flag-icons/react/3x2';
import {
  FaGlobe, FaStethoscope, FaUtensils, FaFilm, FaPlane, FaMotorcycle,
  FaCalendarAlt, FaGasPump, FaNetworkWired, FaTools, FaShoppingCart,
  FaChartLine, FaSpa, FaUniversity, FaShieldAlt, FaStore, FaBuilding,
  FaBook, FaTruck, FaSeedling, FaCar, FaIndustry, FaLaptopCode,
  FaMobileAlt, FaCogs, FaTruckMoving, FaHistory, FaBolt, FaProjectDiagram,
  FaCubes, FaCloud, FaCloudSun, FaAmazon, FaChartPie, FaExchangeAlt,
  FaGlasses, FaBriefcaseMedical, FaHandshake, FaRobot, FaEye, FaBrain
} from "react-icons/fa";





const iconMap = {
  "On Demand": FaGlobe,
  "Healthcare": FaStethoscope,
  "Restaurant": FaUtensils,
  "Entertainment": FaFilm,
  "Travel": FaPlane,
  "E - scooter": FaMotorcycle,
  "Events": FaCalendarAlt,
  "Oil and Gas": FaGasPump,
  "Telecom": FaNetworkWired,
  "Construction": FaTools,
  "eCommerce": FaShoppingCart,
  "Saas": FaChartLine,
  "Wellness": FaSpa,
  "Finace": FaChartLine,
  "Social Networking": FaNetworkWired,
  "Banking": FaUniversity,
  "Insurance": FaShieldAlt,
  "Retail": FaStore,
  "Real Estate": FaBuilding,
  "Education": FaBook,
  "Logistics": FaTruck,
  "Aviation": FaPlane,
  "Agriculture": FaSeedling,
  "Automotive": FaCar,
  "Manufacturing": FaIndustry,
  "Web Development": FaLaptopCode,
  "Mobile Apps": FaMobileAlt,
  "Custom Software": FaCogs,
  "Supply chain Management": FaTruckMoving,
  "Legacy Modernization": FaHistory,
  "E - mobility": FaBolt,
  "ERP Software Development": FaProjectDiagram,
  "AR/VR Development": FaGlasses,
  "IoT Development": FaCubes,
  "Microservices": FaExchangeAlt,
  "Product Development": FaCogs,
  "Cloud Managed Services": FaCloud,
  "Cloud Consulting": FaCloudSun,
  "AWS": FaAmazon,
  "Business Intelligence": FaChartPie,
  "NFT Marketplace": FaExchangeAlt,
  "Metaverse Development": FaGlasses,
  "Healthcare IT Consulting Services": FaBriefcaseMedical,
  "IT Outsourcing Services": FaHandshake,
  "Generative AI": FaRobot,
  "Computer Vision": FaEye,
  "Machine Learning": FaBrain
};


const mobileMenuLinks = [
  {
    title: "Software Solution",
    id: "software",
    subItems: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "Custom Software", href: "#" },
      { label: "Supply chain Management", href: "#" },
      { label: "Legacy Modernization", href: "#" },
      { label: "E - mobility", href: "#" },
      { label: "ERP Software Development", href: "#" },
      { label: "AR/VR Development", href: "#" },
      { label: "IoT Development", href: "#" },
      { label: "Microservices", href: "#" },
      { label: "Product Development", href: "#" },
      { label: "Cloud Managed Services", href: "#" },
      { label: "Cloud Consulting", href: "#" },
      { label: "AWS", href: "#" },
      { label: "Business Intelligence", href: "#" },
      { label: "NFT Marketplace", href: "#" },
      { label: "Metaverse Development", href: "#" },
      { label: "Healthcare IT Consulting Services", href: "#" },
      { label: "IT Outsourcing Services", href: "#" },
      { label: "Generative AI", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "IT Outsourcing Services", href: "#" },
      { label: "Machine Learning", href: "#" },

    ]
  },
  {
    title: "AI Solution",
    id: "ai",
    subItems: [
      { label: "Machine Learning", href: "#" },
      { label: "Computer Vision", href: "#" },
      { label: "NLP Solutions", href: "#" },
      { label: "Risk Scoring Systems", href: "#" },
      { label: "Chatbots & Virtual Assistants", href: "#" },
      { label: "Sentiment Analysis", href: "#" },
      { label: "Email Automation", href: "#" },
      { label: "Facial Recognition", href: "#" },
      { label: "AR Filters", href: "#" },
      { label: "Creative AI Apps", href: "#" },
      { label: "Robotic Process Automation (RPA)", href: "#" },
      { label: "AI-Powered CRMs", href: "#" },
      { label: "Smart Assistants", href: "#" },
      { label: "TensorFlow Models", href: "#" },
      { label: "Reinforcement Learning", href: "#" },
      { label: "AI for E-commerce Personalization", href: "#" },
      { label: "AI in Telecom Operations", href: "#" },
      { label: "Intrusion Detection AI", href: "#" },
      { label: "AI for CCTV Monitoring", href: "#" },
      { label: "Revenue Forecasting AI", href: "#" }

    ]
  },
  {
    title: "BPO Services",
    id: "bpo",
    subItems: [
      { label: "Customer Support", href: "#" },
      { label: "Back Office", href: "#" },
      { label: "Data Entry", href: "#" },
      { label: "Email Support Services", href: "#" },
      { label: "Technical Support", href: "#" },
      { label: "Customer Onboarding", href: "#" },
      { label: "Data Management", href: "#" },
      { label: "Document Digitization", href: "#" },
      { label: "Quality Assurance (QA)", href: "#" },
      { label: "Inventory Management", href: "#" },
      { label: "Knowledge Base Management", href: "#" },
      { label: "IT Helpdesk Support", href: "#" },
      { label: "Recruitment Process Outsourcing (RPO)", href: "#" },
      { label: "Real Estate BPO Support", href: "#" },
      { label: "Order Fulfillment", href: "#" },
      { label: "SOP Documentation", href: "#" },
      { label: "Internal Communication Management", href: "#" },
      { label: "Project Documentation Support", href: "#" },
      { label: "Process Reengineering", href: "#" },
      { label: "E-learning BPO", href: "#" },
      { label: "Inventory Syncing", href: "#" }
    ]
  },
  {
    title: "Solution For Industry",
    id: "industry",
    subItems: [
      { label: "On Demand", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Restaurant", href: "#" },
      { label: "Entertainment", href: "#" },
      { label: "Travel", href: "#" },
      { label: "E - scooter", href: "#" },
      { label: "Events", href: "#" },
      { label: "Oil and Gas", href: "#" },
      { label: "Telecom", href: "#" },
      { label: "Construction", href: "#" },
      { label: "eCommerce", href: "#" },
      { label: "Saas", href: "#" },
      { label: "Wellness", href: "#" },
      { label: "Finace", href: "#" },
      { label: "Social Networking", href: "#" },
      { label: "Banking", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Retail", href: "#" },
      { label: "Real Estate", href: "#" },
      { label: "Education", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Aviation", href: "#" },
      { label: "Agriculture", href: "#" },
      { label: "Automotive", href: "#" },
      { label: "Manufacturing", href: "#" },
    ]
  },
  {
    title: "Delivered Solutions",
    id: "delivered",
    subItems: [
      { label: "Case Studies", href: "#" },
      { label: "Client Success", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Product Demos", href: "#" },
      { label: "UI/UX Showcases", href: "#" },

      { label: "Performance Benchmarks", href: "#" },
      { label: "Revenue Growth Stats", href: "#" },
      { label: "Automation Impact", href: "#" },
      { label: "Speed Optimization Results", href: "#" },
      { label: "User Retention Results", href: "#" },

      { label: "Client Testimonials", href: "#" },
      { label: "Video Testimonials", href: "#" },
      { label: "Written Feedback", href: "#" },
      { label: "Google Reviews", href: "#" },
      { label: "Partner Endorsements", href: "#" },

      { label: "B2B Tools", href: "#" },
      { label: "B2C Platforms", href: "#" },
      { label: "Real Estate Platforms", href: "#" },
      { label: "Logistics Tech", href: "#" },
      { label: "SaaS Deployments", href: "#" },

      { label: "AI & ML Model Deployments", href: "#" },
      { label: "IoT Integrations", href: "#" },
      { label: "API Integrations", href: "#" },
      { label: "CRM Customizations", href: "#" },
      { label: "Web App Rollouts", href: "#" },
      { label: "Brochures", href: "#" },
      { label: "Community Contributions", href: "#" }
    ]
  },
  {
    title: "Contact Us",
    id: "contact",
    subItems: null
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

      {/* Top Header - Hidden below lg (≥1024px) */}
      <div className="hidden lg:block w-full px-4 py-2 border-b border-gray-800/50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 flex-wrap">
            <span className="text-gray-400 text-sm font-light flex items-center">Serving International Clients for 10+ Years</span>
            <span className="text-white text-xs font-light flex items-center"><US className="h-3 mr-2" /> USA</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><CA className="h-3 mr-2" /> Canada</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><AU className="h-3 mr-2" /> Australia</span>
            <span className="text-white text-xs font-light flex items-center uppercase"><EU className="h-3 mr-2" /> Europe</span>
            <span className="text-white text-xs font-light flex items-center"><GB className="h-3 mr-2" /> UK</span>
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
          <div className="hidden lg:flex gap-6 text-white text-sm font-light">
            {mobileMenuLinks.map((link, i) => (
              link.subItems ? (
                <div className="relative group" key={i}>
                  <a href={`#${link.id}`} className="hover:text-blue-400">{link.title}</a>
                  <div className="grid grid-cols-4 absolute items-center top-full left-1/2 -translate-x-1/2 mt-8 bg-[#0d1d34]/50 backdrop-blur-md rounded shadow-lg min-w-[800px] min-h-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">


                    {link.subItems.map((sub, idx) => {
                      const Icon = iconMap[sub.label] || FaCogs; // Default icon if not mapped
                      return (
                        <a
                          key={idx}
                          href={sub.href}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-blue-500/10"
                        >
                          <Icon className="text-blue-400 w-4 h-4" />
                          {sub.label}
                        </a>
                      );
                    })}

                  </div>
                </div>
              ) : (
                <a key={i} href={`#${link.id}`} className="hover:text-blue-400">{link.title}</a>
              )
            ))}
          </div>

          {/* Desktop Brochure Button */}
          <div className="hidden lg:flex">
            <button className="bg-[#0066FF] text-white px-5 py-2 rounded text-sm flex items-center hover:bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] transition">
              Brochure <HiOutlineDownload className="ml-2" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 space-y-2 flex flex-col items-start text-white text-sm font-light px-2 max-h-screen overflow-y-auto">
            {mobileMenuLinks.map((link, i) => (
              <div key={i} className="w-full">
                {link.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="w-full text-left py-2 hover:text-blue-400 flex justify-between items-center"
                    >
                      <span>{link.title}</span>
                      <span className="text-xl">{openDropdown === i ? '−' : '+'}</span>
                    </button>
                    {openDropdown === i && (
                      <div className="pl-4 space-y-1">
                        {link.subItems.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            className="block py-1 text-white/80 hover:text-blue-400"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className="block py-2 hover:text-blue-400"
                  >
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
