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

const TimelineCard = ({ title, side, index, onInView }) => {
  const controls = useAnimation();
  const dotControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      dotControls.start({ scale: 1, opacity: 1 });
      onInView(index);
    } else {
      controls.start("hidden");
      dotControls.start({ scale: 0, opacity: 0 });
    }
  }, [inView]);

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
        className={`absolute top-0 ${side === "left"
          ? "right-[calc(50%+40px)] sm:right-[calc(50%+60px)] md:right-[calc(50%+80px)]"
          : "left-[calc(50%+40px)] sm:left-[calc(50%+60px)] md:left-[calc(50%+80px)]"
          } w-40 sm:w-48 md:w-56`}
      >
        <div className="bg-[#161421] p-3 sm:p-4 md:p-5 rounded-lg border border-[#1f1d2b] shadow-lg flex flex-col items-center justify-center">
          <div className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <img
              src="/exam.png"
              alt="Exam"
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
            />
          </div>
          <div className="text-white text-xs sm:text-sm font-medium mt-1 sm:mt-2 text-center">
            {title}
          </div>
        </div>
      </div>

      <motion.div
        animate={dotControls}
        initial={{ scale: 0, opacity: 0 }}
        className="absolute left-1/2 transform -translate-x-1/2 top-8 sm:top-10 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full z-10"
      />
    </motion.div>
  );
};

const PhilosophyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineKey, setLineKey] = useState(0);
  const pControls = useAnimation();
  const [pRef, pInView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (pInView) {
      pControls.start("visible");
    } else {
      pControls.start("hidden");
    }
  }, [pInView]);

  const handleCardInView = (index) => {
    setActiveIndex(index);
    setLineKey(prev => prev + 1);
  };

  const fillHeight = ((activeIndex + 1) / steps.length) * 100;

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
          Simply{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
            Philosophy
          </span>
        </motion.h2>

        {/* Animated P Tag */}
        <motion.p
          ref={pRef}
          initial="hidden"
          animate={pControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto mt-3 sm:mt-4"
        >
          Proudly marking a decade of innovation, dedication, and success—thanks
          to our amazing team, clients, and partners who've fueled our journey
          from startup to standout.
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-gray-700 z-0"></div>

        <motion.div
          key={lineKey}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-blue-500 z-10 origin-top"
          initial={{ height: 0 }}
          animate={{ height: `${fillHeight}%` }}
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhilosophyTimeline;
