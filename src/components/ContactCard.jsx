export default function ContactSection() {
    return (
      <section className="bg-gradient-to-r from-[#0F1B3D] to-[#0C0B1F] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text Column */}
          <div>
            <h2 className="text-4xl md:text-4xl font-semibold leading-snug mb-6">
              We’d love to hear from you. Let’s  <br />
              build something great together.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl text-justify">
            Looking to start a project or need more details about our services? Complete the form, and our team will reach out to you soon. At Blueswepspark, we’re committed to listening, collaborating, and bringing your digital ideas to life — whether you're starting from scratch or enhancing your existing systems. We’re here to help every step of the way.
            </p>
          </div>
  
          {/* Right Form Column */}
          <div className="bg-gradient-to-r from-[#0F1B3D] to-[#0C0B1F] border border-gray-500 rounded-xl p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] w-full max-w-lg  mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-[#0F1B3D] border border-gray-500 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2.5 bg-[#0F1B3D] border border-gray-500 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-2.5 bg-[#0F1B3D] border border-gray-500 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <select
                className="w-full px-4 py-2.5 bg-[#0F1B3D] border border-gray-500 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option className="text-white" value="">
                  Select a Budget Range
                </option>
                <option className="text-white">$0 - $5,000</option>
                <option className="text-white">$5,000 - $10,000</option>
                <option className="text-white">$10,000+</option>
              </select>
              <textarea
                placeholder="Note"
                rows={4}
                className="w-full px-4 py-2.5 bg-[#0F1B3D] border border-[#2B3A55] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold py-2.5 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  