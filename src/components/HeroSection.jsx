export default function HeroSection() {
    return (
      <div className="relative bg-[#000a16] text-white h-[740px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-20 lg:mt-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Transport & Logistic <br />
              <span className="text-gray-300">Management Software</span>
            </h1>
            <p className="mt-4 sm:mt-6  sm:text-sm text-gray-400">
              Streamline Operations, Optimize Deliveries, and Drive Efficiency
            </p>
          </div>
  
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-[500px] sm:max-w-[600px]">
              <img
                src="/m.png"
                alt="Dashboard preview on laptop"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  