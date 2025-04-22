import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  { title: "Discovery & Consultation", side: "right" },
  { title: "Planning & Strategy", side: "left" },
  { title: "Design & Development", side: "right" },
  { title: "Testing & Quality Assurance", side: "left" },
  { title: "Delivery & Support", side: "right" },
];

const TimelineCard = ({ title, side, index, onInView, isMobile }) => {
  const controls = useAnimation();
  const dotControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    onInView(index, inView);

    if (inView) {
      controls.start("visible");
      dotControls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start("hidden");
      dotControls.start({ scale: 0, opacity: 0 });
    }
  }, [inView]);

  // For mobile, always position on the right with larger size
  const positionClass = isMobile 
    ? "left-[calc(25%+40px)] sm:left-[calc(50%+60px)] md:left-[calc(50%+80px)]"
    : side === "left"
      ? "right-[calc(50%+40px)] sm:right-[calc(50%+60px)] md:right-[calc(50%+80px)]"
      : "left-[calc(50%+40px)] sm:left-[calc(50%+60px)] md:left-[calc(50%+80px)]";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="relative h-24 sm:h-28 md:h-32"
    >
      <div
        className={`absolute top-0 ${positionClass} ${isMobile ? 'w-52' : 'w-40'} sm:w-48 md:w-56`}
      >
        <div className="bg-[#161421] p-3 sm:p-4 md:p-5 rounded-lg border border-[#1f1d2b] shadow-lg flex flex-col items-center justify-center">
          <div className={`${isMobile ? 'w-10 h-10' : 'w-8 h-8'} sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] rounded-full flex items-center justify-center`}>
            <img
              src="/exam.png"
              alt="Exam"
              className={`${isMobile ? 'w-4 h-4' : 'w-3 h-3'} sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain`}
            />
          </div>
          <div className={`${isMobile ? 'text-sm' : 'text-xs'} sm:text-sm font-medium mt-1 sm:mt-2 text-center text-white`}>
            {title}
          </div>
        </div>
      </div>

      <motion.div
        animate={dotControls}
        initial={{ scale: 0, opacity: 0 }}
        className={`absolute ${isMobile ? 'left-[25%]' : 'left-1/2'} transform -translate-x-1/2 top-8 sm:top-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full z-10`}
      />
    </motion.div>
  );
};

const PhilosophyTimeline = () => {
  const [highestVisibleIndex, setHighestVisibleIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const lineControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardInView = (index, inView) => {
    if (inView) {
      if (index > highestVisibleIndex) {
        setHighestVisibleIndex(index);
        const newHeight = ((index + 1) / steps.length) * 100;
        lineControls.start({ height: `${newHeight}%` });
      }
    } else {
      if (index === highestVisibleIndex) {
        const newHighest = Math.max(0, highestVisibleIndex - 1);
        setHighestVisibleIndex(newHighest);
        const newHeight = ((newHighest + 1) / steps.length) * 100;
        lineControls.start({ height: `${newHeight}%` });
      }
    }
  };

  return (
    <div className="bg-[#010101] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
        >
          <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
            Decade Strong
          </span>
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold mt-3"
        >
          Our Simple{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Philosophy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-sm sm:text-sm  mx-auto mt-3 sm:mt-4"
        >
          Our simple philosophy centers on collaboration, innovation, and dedication, driving success through strong partnerships with our team, clients, and partners to foster growth and excellence.
        </motion.p>
      </div>

      <div className="relative">
        {/* Base center line */}
        <div className={`absolute ${isMobile ? 'left-[25%]' : 'left-1/2'} transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-gray-700 z-0`}></div>

        {/* Animated fill line */}
        <motion.div
          className={`absolute ${isMobile ? 'left-[25%]' : 'left-1/2'} transform -translate-x-1/2 w-0.5 sm:w-1 bg-blue-500 z-10 origin-top`}
          initial={{ height: 0 }}
          animate={lineControls}
          transition={{ duration: 0.4 }}
        />

        <div className="space-y-24 relative z-20">
          {steps.map((step, index) => (
            <TimelineCard
              key={index}
              title={step.title}
              side={step.side}
              index={index}
              onInView={handleCardInView}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhilosophyTimeline;