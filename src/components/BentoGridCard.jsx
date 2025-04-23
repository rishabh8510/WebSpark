import React, { useEffect, useState } from 'react';

const SwappingCards = () => {
  const leftImages = [
    './card/img1.jpg',
    './card/img2.jpg',
    './card/img3.jpg',
    './card/img4.jpg',
    './card/img5.jpg',
    './card/img6.jpg',
    './card/img7.jpg',
  ];

  const rightImages = [
    './second/img1.jpg',
    './second/img2.jpg',
    './second/img3.jpg',
    './second/img4.jpg',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0',
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Left Card */}
      <div
        className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-xl h-80 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${leftImages[leftIndex]})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
          <h3 className="text-lg font-semibold text-white mb-1">Where It All Began</h3>
          <p className="text-xs text-white">
            Our humble beginning in 2015 — a vision, a small team, and big dreams.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div
        className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-xl h-80 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${rightImages[rightIndex]})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
          <h3 className="text-lg font-semibold text-white mb-1">How Far We’ve Come</h3>
          <p className="text-xs text-white">
            From startup to success — now a thriving tech company with 10 years of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwappingCards;
