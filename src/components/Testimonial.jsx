import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonials from "./Testi";

export default function TestimonialsGrid() {
  return (
    <div className="bg-[#010101] py-10 px-4 md:px-10">
      {/* Top Marquee */}
      <div className="relative mb-10 h-[320px] overflow-hidden">
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .marquee-container {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .marquee-container-reverse {
              display: flex;
              width: max-content;
              animation: marquee-reverse 30s linear infinite;
            }
            .testimonial-card {
              height: 250px;
              min-width: 300px;
              width: 350px;
              display: flex;
              flex-direction: column;
              flex-shrink: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .testimonial-content {
              flex-grow: 1;
              overflow: hidden;
            }
            .testimonial-text {
              text-rendering: optimizeLegibility;
            }
          `}
        </style>
        <div className="marquee-container">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`top-${index}`}
              className="mx-3 bg-[#13132a] text-white p-6 rounded-2xl shadow-lg testimonial-card"
            >
              <div className="text-3xl mb-2 ">
                <RiDoubleQuotesL />
              </div>
              <div className="testimonial-content">
                <p className="text-sm leading-relaxed text-gray-100 testimonial-text">
                  {testimonial.message}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3 justify-between">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-600"
                />
                <div>
                  <p className="font-medium text-sm text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative mt-[-80px] h-[320px] overflow-hidden">
        <div className="marquee-container-reverse">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`bottom-${index}`}
              className="mx-3 bg-[#13132a] text-white p-6 rounded-2xl shadow-lg testimonial-card"
            >
              <div className="text-3xl mb-2 ">
                <RiDoubleQuotesL />
              </div>
              <div className="testimonial-content">
                <p className="text-sm leading-relaxed text-gray-100 testimonial-text">
                  {testimonial.message}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3 justify-between">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-gray-600"
                />
                <div>
                  <p className="font-medium text-sm text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}