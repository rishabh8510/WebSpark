<section className="mt-12 md:mt-24 px-4 sm:px-6 lg:px-8 bg-[#010101]">
{/* Section Header */}
<div className="text-center mb-8 md:mb-12">
  <motion.span
    initial={{ x: -60, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="inline-block px-4 py-1 border border-[#3A4C6C] rounded-full text-xs tracking-widest bg-[#0D1B36]"
  >
    <span className="bg-gradient-to-r from-[#BFDFFF] via-[#339BFF] to-[#BFDFFF] bg-clip-text text-transparent">
      Effortless Tech
    </span>
  </motion.span>

  <motion.h2
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
    viewport={{ once: false, amount: 0.3 }}
    className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
  >
    <span className="bg-gradient-to-r from-[#007AFF] to-[#7AC8FF] bg-clip-text text-transparent">
      Software
    </span>{" "}
    Solution
  </motion.h2>

  <motion.p
    initial={{ x: 60, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
    viewport={{ once: false, amount: 0.3 }}
    className="mt-3 md:mt-4 text-gray-400 max-w-[740px] mx-auto text-sm sm:text-sm"
  >
    Empowering businesses with innovative, scalable, and user-friendly software solutions, crafted to streamline operations, enhance productivity, optimize performance, and drive digital transformation across diverse industries and sectors
  </motion.p>
</div>

{/* Cards */}
<div className="space-y-4 flex flex-col items-center">
  {solutions.map((solution, index) => (
    <SolutionCard key={index} {...solution} />
  ))}
</div>
</section>