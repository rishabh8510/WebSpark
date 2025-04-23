import React, { useEffect, useState } from 'react';

const SwappingCards = () => {
  const [leftImages, setLeftImages] = useState([
    './card/img1.jpg',
    './card/img2.jpg',
    './card/img3.jpg',
    './card/img4.jpg',
    './card/img5.jpg',
    './card/img6.jpg',
    './card/img7.jpg',
  ]);

  const [rightImages, setRightImages] = useState([
    './second/img1.jpg',
    './second/img2.jpg',
    './second/img3.jpg',
    './second/img4.jpg',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftImages((prev) => shuffleArray([...prev]));
      setRightImages((prev) => shuffleArray([...prev]));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const gridClasses = [
    'col-span-2 row-span-2',
    '',
    'col-span-2',
    'col-span-3',
    'col-span-2',
    '',
    'col-span-2',
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Left Card */}
      <div className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl bg-white p-4">
        <div className="grid grid-cols-5 grid-rows-3 gap-2 h-80">
          {leftImages.map((src, i) => (
            <img
              key={`left-${i}`}
              src={src}
              alt={`Left${i}`}
              className={`object-cover w-full h-full rounded-lg animate-floatX ${gridClasses[i]}`}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
          <h3 className="text-lg font-semibold mb-1 text-white">Where It All Began</h3>
          <p className="text-xs text-white">
            Our humble beginning in 2015 — a vision, a small team, and big dreams.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative rounded-lg overflow-hidden group shadow-lg w-full max-w-xl bg-white p-4">
        <div className="grid grid-cols-5 grid-rows-3 gap-2 h-80">
          {rightImages.map((src, i) => (
            <img
              key={`right-${i}`}
              src={src}
              alt={`Right${i}`}
              className={`object-cover w-full h-full rounded-lg animate-floatY ${gridClasses[i]}`}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-2">
          <h3 className="text-lg font-semibold mb-1 text-white">How Far We’ve Come</h3>
          <p className="text-xs text-white">
            From startup to success — now a thriving tech company with 10 years of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwappingCards;
