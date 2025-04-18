<div className="bg-[#010101] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
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
    Our Simply{" "}
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
                src="/exam.png"
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