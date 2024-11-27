import React from 'react';
import Slideshow from './SlideShow';
import ReusableNavBar from './ReusableNavBar';
import { slideshowImages } from './SlideshowImages';
import NavItems from './NavItems';

const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px',
        backgroundColor: '#ffffff', // Nền trắng
        border: '1px solid #e5e7eb', // Đường viền nhạt
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Hiệu ứng đổ bóng
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <Slideshow images={slideshowImages} />
      </div>
      <ReusableNavBar items={NavItems} />
    </div>
  );
};

export default HeroSection;

