import React, { useState } from 'react';
import Button from './Button'; // Sử dụng Button.tsx bạn tải lên
import Image from './Image';   // Sử dụng Image.tsx bạn tải lên

interface Slide {
  src: string;
  alt: string;
}

interface SlideShowProps {
  slides: Slide[];
}

const SlideShow: React.FC<SlideShowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {/* Hiển thị hình ảnh bằng Image.tsx */}
        <Image src={slides[currentIndex].src} alt={slides[currentIndex].alt} />
        {/* Nút điều hướng */}
        <Button onClick={handlePrev} className="prev-btn">
          &#8249;
        </Button>
        <Button onClick={handleNext} className="next-btn">
          &#8250;
        </Button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
