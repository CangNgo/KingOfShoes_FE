import React, { useState, useEffect } from 'react';
import Button from './Button';
import Image from './Image';

interface Slide {
  src: string;
  alt: string;
}

interface SlideShowProps {
  slides: Slide[];
  interval?: number;
}

const SlideShow: React.FC<SlideShowProps> = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer); // Dọn dẹp khi component bị unmount
  }, [currentIndex, interval]);

  return (
    <div className="relative w-[1248px] h-[332px] mx-auto overflow-hidden bg-gray-100 rounded-md shadow-lg">
      {/* Hình ảnh */}
      <Image
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
        className="w-full h-full object-cover"
      />

      {/* Nút điều hướng */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8250;
      </button>

      {/* Dấu chấm trạng thái */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-orange-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
