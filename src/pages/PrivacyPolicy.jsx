import privacySections from "../data/privacyData";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-white mt-20">

      {/* 🔵 Header */}
      <div className="w-full bg-gradient-to-b from-[#0b1220] to-[#0d1b3d] py-30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Privacy Policy
        </h1>
      </div>

      {/* ⚪ Content */}
      <div className="bg-[#000a16] py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto space-y-10">

          {privacySections.map((section) => (
            <div key={section.id}>
              
              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {section.id}. {section.heading}
              </h2>

              {/* Content */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
                {section.content}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}