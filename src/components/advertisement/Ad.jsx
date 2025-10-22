import { useState, useEffect } from 'react';

export default function Ad({ 
  message = "Happy Diwali 2025! May the festival of lights fill your home and heart with joy, peace and prosperity.",
  duration = 9,
  onClose 
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const expirationTime = new Date();
    expirationTime.setDate(expirationTime.getDate() + duration);
    
    const checkVisibility = () => {
      const now = new Date();
      if (now >= expirationTime) {
        setIsVisible(false);
        onClose?.();
      } else {
        const diff = expirationTime - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h`);
      }
    };

    checkVisibility();
    const interval = setInterval(checkVisibility, 60000);
    return () => clearInterval(interval);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white p-3 shadow-lg w-full mx-auto  overflow-hidden">
      {/* Crackers */}
      <div className="absolute top-0 left-4 text-2xl animate-bounce">🧨</div>
      <div className="absolute top-0 right-16 text-2xl animate-pulse">🎆</div>
      <div className="absolute bottom-0 left-20 text-xl animate-bounce delay-300">🔥</div>
      <div className="absolute bottom-0 right-8 text-2xl animate-pulse delay-700">✨</div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors z-10 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center"
      >
        ×
      </button>

      {/* Marquee Container */}
      <div className="marquee-container flex items-center">
        <div className="marquee-content flex items-center space-x-8">
          {/* Duplicate content for seamless loop */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center space-x-8">
              <span className="text-xl">✨</span>
        
              <span className="text-sm whitespace-nowrap">{message}</span>
              <span className="text-xl">🪔</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}