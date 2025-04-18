import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";




const industries = [
    { icon: '/icons/logistics.png', title: "logistics" },
    { icon: '/icons/jewellery.png', title: "Jewellery" },
    { icon: '/icons/budget.png', title: "Finance & Banking" },
    { icon: '/icons/dish.png', title: "FMCG" },
    { icon: '/icons/manufacturing.png', title: "Manufacture" },
    { icon: '/icons/house.png', title: "Real Estate" },
    { icon: '/icons/protection.png', title: "Healthcare" },
    { icon: '/icons/oil.png', title: "Oil & Gas" },
    { icon: '/icons/automobile.png', title: "Automotive" },
    { icon: '/icons/online-shop.png', title: "E-commerce & Retail" },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };
  
  // Variants for text animations
  const textVariants = {
    span: {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    },
    h2: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 },
      },
    },
    p: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      },
    },
  };

  const images = [
    "/Img.png",
    "/Img.png",
    "/Img.png",
    "/Img.png",
  ];

  // Text animations
  const variants = {
    span: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    h1: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
    p: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
  };

  const imageVariants = (direction) => ({
    hidden: { opacity: 0, y: direction === "up" ? -40 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  });

    // Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    
      const fadeDown = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    
      const slideLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      };
    
      const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      };

      const steps = [
        { title: "Discovery & Consultation", side: "right" },
        { title: "Planning & Strategy", side: "left" },
        { title: "Design & Development", side: "right" },
        { title: "Testing & Quality Assurance", side: "left" },
        { title: "Delivery & Support", side: "right" },
      ];
    
      const [activeIndex, setActiveIndex] = useState(1); // Show first 2 cards
      const [lineHeight, setLineHeight] = useState(0);
      const dotRefs = useRef([]);
      const timelineRef = useRef(null);
    
      useEffect(() => {
        if (dotRefs.current[activeIndex] && timelineRef.current) {
          const containerTop = timelineRef.current.getBoundingClientRect().top;
          const dotTop = dotRefs.current[activeIndex].getBoundingClientRect().top;
          const offset =
            dotTop - containerTop + dotRefs.current[activeIndex].offsetHeight / 2;
          setLineHeight(offset);
        }
      }, [activeIndex]);

      const teamMembers = new Array(10).fill({
        name: "John Doe",
        role: "UI/UX Designer",
        image: "/Profile.avif",
      });

      const partners = [
        {
          name: "Think Aisle",
          logo: "/ThinkAisle.png",
        },
        {
          name: "Pinio",
          logo: "/Pinio.png",
        },
        {
          name: "Iventurs",
          logo: "/Inventurs.png",
        },
        {
          name: "Trucking Techs",
          logo: "/TruckingTechs.png",
        },
      ];


const Home = () => {
    return (
        <>
        <main
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[160px] bg-[#0b0a14]"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Main Content */}
            <div className="relative z-20 px-4 text-center flex flex-col items-center justify-center min-h-[calc(100vh-160px)] pb-10">
                {/* Badge */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-[#1A2C4E]/30 px-4 py-1.5 rounded-full text-[#0066FF] inline-block mb-4 md:mb-6 backdrop-blur-sm text-sm font-light border border-[#3A4C6C]"
                >
                    <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
                        Technology that Moves Your Business Forward
                    </span>
                </motion.div>

                {/* Headline */}
                <div className="mb-4 md:mb-6">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        We Build Software
                    </motion.h1>
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        to Make Your Life &
                    </motion.h1>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        Business Easy!
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light px-2 sm:px-4"
                >
                    Bluewebspark Technologies: Pioneering IT Software, AI, and Business Solutions
                    <br className="hidden sm:block" />
                    Founded on Thursday, February 19, 2015.
                </motion.p>
            </div>
        </main>


// ppppppppppppppppppppppppppppppppppppppppppppppppppppppp

<section className="w-full my-10 md:my-20 px-4 bg-[#0b0a14]">
<div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12">
  {/* Left Content */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }}
    className="w-full ml-2 md:ml-4 text-white text-center md:text-left border-t border-b border-r border-[#4B5E7A] rounded-tr-lg rounded-br-lg p-6 md:p-8 md:flex md:flex-col md:justify-center lg:h-[300px]"
  >
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug lg:pl-36"
    >
      Built by{" "}
      <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
        Brothers
      </span>
      ,<br />
      Driven by Purpose
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-gray-400 mt-4 md:mt-6 text-sm md:text-base lg:pl-36"
    >
      Manish & Shekhar, both brothers, started Bluewebspark Technologies
      with a vision To Deliver IT Solutions.
    </motion.p>
  </motion.div>

  {/* Right Cards */}
  <div className="w-full flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
    {/* Manish Card (From Top) */}
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative bg-cover bg-center rounded-xl aspect-square min-w-[160px] flex-1 max-w-[220px] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-0 left-0 right-0 bg-[#1A2C4E]/50 backdrop-blur-md p-3"
      >
        <h3 className="text-white text-lg font-semibold">
          Manish Shukla
        </h3>
        <p className="text-white text-sm">Co-Founder & Director</p>
      </motion.div>
    </motion.div>

    {/* Shekhar Card (From Bottom) */}
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative bg-cover bg-center rounded-xl aspect-square min-w-[160px] flex-1 max-w-[220px] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute bottom-0 left-0 right-0 bg-[#1A2C4E]/50 backdrop-blur-md p-3"
      >
        <h3 className="text-white text-lg font-semibold">
          Shekhar Shukla
        </h3>
        <p className="text-white text-sm">Co-Founder & Director</p>
      </motion.div>
    </motion.div>
  </div>
</div>
</section>

{/* ffffffffffffffffffffffffffffffffffffffffff */}

<div className="bg-[#0b0a14] text-white py-16 px-6 text-center">
      {/* Animated span */}
      <motion.div
        className="mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants.span}
      >
        <span className="text-sm border border-[#3A4C6C] px-3 py-1 rounded-full bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
          Universal Solutions
        </span>
      </motion.div>

      {/* Animated h2 */}
      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants.h2}
      >
        For <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Every Industry</span> We have Solution
      </motion.h2>

      {/* Animated p */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-400 text-sm mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={textVariants.p}
      >
        We deliver tailored software solutions for every industry—enhancing productivity, streamlining operations, and driving growth with innovative, reliable, and scalable technology built to meet your unique business needs.
      </motion.p>

      {/* Grid of industry cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#0e0e1a] border border-gray-700 rounded-lg p-6 flex flex-col items-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="mb-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain filter invert" />
            </div>
            <h3 className="text-white font-medium">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>


{/* fffffffffffffffffffffffffffffffffffffffffffffff */}

<div className="bg-[#0b0a14] text-white py-10 px-4 md:px-20 min-h-screen">
      <div className="text-center space-y-4">
        <motion.span
          className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={variants.span}
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Decade Strong
          </span>
        </motion.span>

        <motion.h1
          className="text-3xl md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={variants.h1}
        >
          Celebrating <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">10 Years</span> of Growth and Success!
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={variants.p}
        >
          Proudly marking a decade of innovation, dedication, and success—thanks to our amazing team,
          clients, and partners who’ve fueled our journey from startup to standout.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {images.map((img, idx) => {
          const direction = idx % 2 === 0 ? "up" : "down";

          return (
            <motion.div
              key={idx}
              className="bg-[#141320] rounded-2xl p-4 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={imageVariants(direction)}
            >
              <img
                src={img}
                alt={`MR HAMIN ${idx + 1}`}
                className="rounded-xl mx-auto w-full h-auto"
              />
              <motion.h3
                className="text-lg font-semibold mt-4 tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false }}
              >
                MR HAMIN
              </motion.h3>
              <motion.p
                className="text-sm text-gray-400 mt-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: false }}
              >
                GITEX DUBAI EXPO
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* tttttttttttttttttttttttttttttttttttttttttttttttt */}

    <div className="bg-[#0A0614] text-white font-sans px-4 sm:px-8 md:px-16 py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-[#021226] via-[#0066FF] to-[#021226] rounded-xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-center shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeDown}
      >
        <motion.h2
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4"
          variants={fadeDown}
        >
          10 Years. $1M+ in Projects. One Trusted Team.
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm md:text-base mx-auto"
          variants={slideLeft}
        >
          We have a proven track record of delivering over 10 high-impact software solutions to prominent clients across top industries,
          including Logistics, Real Estate, FMCG, Jewelry, and more, each valued at nearly $50K - $100K, over the past 10 years.
          This demonstrates our expertise in managing and executing large-scale projects with exceptional results.
        </motion.p>
        <motion.button
          className="mt-4 sm:mt-6 bg-white text-blue-600 font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-md hover:bg-blue-100 transition text-sm sm:text-base"
          variants={scaleIn}
        >
          Let's Discuss the Project
        </motion.button>
      </motion.div>

      {/* Partner Section */}
      <div className="mt-12 sm:mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10">
        {/* Left Column */}
        <motion.div
          className="flex-1 flex flex-col justify-between bg-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={slideLeft}
        >
          <div>
            <motion.h3
              className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4"
              variants={slideLeft}
            >
              OUR <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">Partner</span>
            </motion.h3>

            <motion.p
              className="text-xs sm:text-sm text-gray-300 max-w-xl mb-6 sm:mb-8"
              variants={fadeUp}
            >
              Empowering businesses through strategic partnerships with leading platforms like ZOHO, Shopify, ERPNext, and ODOO —
              delivering integrated, scalable, and efficient software solutions tailored to your industry needs.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                'ZOHO – Smarter Business',
                'Shopify – Sell Seamlessly',
                'ERP Next – Process Perfected',
                'ODOO – Operate Smarter',
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#120E1E] px-4 sm:px-6 py-2 sm:py-3 rounded-md flex items-center gap-2 text-xs sm:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * idx }}
                  viewport={{ once: false }}
                >
                  <span className="text-purple-400">
                    <img src="/p.png" alt="bullet" className="w-4 h-4" />
                  </span>
                  <span><strong>{text.split(' – ')[0]}</strong> – {text.split(' – ')[1]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Logo Grid */}
        <motion.div
          className="flex-1 mt-6 sm:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="bg-[#120E1E] h-full rounded-xl p-4 sm:p-6 md:p-8 flex flex-col justify-center gap-4 sm:gap-6 items-center">
            <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                { src: '/image 1.png', alt: 'ZOHO' },
                { src: '/image 5.1.png', alt: 'Shopify' },
                { src: '/image 6.png', alt: 'ERPNext' },
                { src: '/image 2.png', alt: 'Odoo' },
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}

    <div className="bg-[#0B0A13] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Decade Strong
          </span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold mt-3"
        >
          Simply{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Philosophy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto mt-3 sm:mt-4"
        >
          Proudly marking a decade of innovation, dedication, and success—thanks
          to our amazing team, clients, and partners who've fueled our journey
          from startup to standout.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative" ref={timelineRef}>
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1">
          <div className="h-full bg-gray-700 relative">
            <div
              className="absolute top-0 w-full bg-blue-500 transition-all duration-700"
              style={{ height: `${lineHeight}px` }}
            ></div>
          </div>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 relative">
          {steps.slice(0, activeIndex + 1).map((step, index) => (
            <div key={index} className="relative h-16 sm:h-20">
              {/* Step Box */}
              <div
                className={`absolute top-0 ${
                  step.side === "left"
                    ? "right-[calc(50%+40px)] sm:right-[calc(50%+60px)] md:right-[calc(50%+80px)]"
                    : "left-[calc(50%+40px)] sm:left-[calc(50%+60px)] md:left-[calc(50%+80px)]"
                } w-40 sm:w-48 md:w-56`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onClick={() => {
                    if (activeIndex === index + 1) {
                      // Collapse
                      setActiveIndex(index);
                    } else if (index + 1 < steps.length) {
                      // Expand
                      setActiveIndex(index + 1);
                    }
                  }}
                  className={`${
                    activeIndex === index
                      ? "bg-[#202036] border-blue-500 shadow-xl"
                      : "bg-[#161421] border-[#1f1d2b]"
                  } p-3 sm:p-4 md:p-5 rounded-lg border shadow-lg cursor-pointer flex flex-col items-center justify-center`}
                >
                  <div className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base md:text-lg">
                    <img
                      src="/exam 1.png"
                      alt="Exam"
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
                    />
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium mt-1 sm:mt-2 text-center">
                    {step.title}
                  </div>
                </motion.div>
              </div>

              {/* Center Dot */}
              <div
                ref={(el) => (dotRefs.current[index] = el)}
                className="absolute left-1/2 transform -translate-x-1/2 top-8 sm:top-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full z-10"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}

    <section className="bg-[#0b0a14] text-white py-16 px-4 md:px-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* Span Animation - from top */}
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="inline-block text-sm px-4 py-1 rounded-full mb-4 border border-[#3A4C6C] bg-[#0D1B36]"
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Journey Captured
          </span>
        </motion.span>

        {/* H2 Animation - fade in from center */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-4"
        >
          The Story Behind{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Bluewebspark
          </span>
        </motion.h2>

        {/* P Animation - from bottom */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ amount: 0.5 }}
          className="text-sm md:text-base text-gray-300"
        >
          Take a visual journey through 10 incredible years of growth,
          innovation, and milestones. Each moment captured reflects our passion,
          progress, and the people who made Bluewebspark what it is today.
        </motion.p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Left Card - from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Team in 2015"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
            <h3 className="text-lg font-semibold mb-1">Where It All Began</h3>
            <p className="text-sm text-gray-300">
              Our humble beginning in 2015 — a vision, a small team, and big
              dreams. This is the moment that sparked the Bluewebspark journey.
            </p>
          </div>
        </motion.div>

        {/* Right Card - from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
            alt="Modern team"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
            <h3 className="text-lg font-semibold mb-1">How Far We’ve Come</h3>
            <p className="text-sm text-gray-300">
              From startup to success — now a thriving tech company with 10
              years of innovation, trusted clients, and a growing team shaping
              the future of software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* hjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}

    <div className="bg-[#0b0a14] text-white py-16 px-4">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
        {/* Span from right */}
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="inline-block text-sm px-4 py-1 rounded-full mb-4 border border-[#3A4C6C] bg-[#0D1B36]"
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Team Exellence
          </span>
        </motion.span>

        {/* H2 from left */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mt-4"
        >
          Top Talent at{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Bluewebspark
          </span>
        </motion.h2>

        {/* P from bottom */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm"
        >
          Meet the brilliant minds driving innovation, excellence, and growth at
          Bluewebspark—our dedicated team of experts committed to delivering impactful
          solutions and exceeding client expectations every step of the way.
        </motion.p>
      </div>

      {/* Marquee Slider (unchanged) */}
      <div className="relative overflow-hidden mt-12">
        <div
          className="flex gap-6 whitespace-nowrap"
          style={{
            animation: "marquee 40s linear infinite",
            width: "fit-content",
          }}
        >
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] rounded-xl overflow-hidden shadow-md relative h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="relative z-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4">
                <div className="backdrop-blur-md bg-white/10 rounded-xl p-3">
                  <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-200 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}

    <div className="bg-[#0b0a14] text-white py-16 px-16 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12 px-2">
        <motion.span
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Decade Strong
          </span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
        >
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Bluewebspark
          </span>
          <span className="text-white">’s Associate Partners</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
          className="mt-3 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto"
        >
          Proudly marking a decade of innovation, dedication, and success—thanks to our amazing team, clients, and partners who’ve fueled our journey from startup to standout.
        </motion.p>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.3 }}
            className="bg-[#120f23] rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300 w-full"
          >
            {/* Logo container */}
            <div className="bg-white rounded-xl w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-[80%] object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 text-lg text-white flex-wrap">
              <div className="bg-[#0b61d6] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaLinkedin />
              </div>
              <div className="bg-[#e1306c] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-[#2e2eec] p-2 rounded-full hover:scale-105 transition cursor-pointer">
                <FaGlobe />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

</>
    );
};

export default Home;
