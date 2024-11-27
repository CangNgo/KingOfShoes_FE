import React from 'react';
import SlideShow from './components/commons/Slideshow';

const App: React.FC = () => {
  const slides = [
    { src: 'https://via.placeholder.com/800x400?text=Slide+1', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x400?text=Slide+2', alt: 'Slide 2' },
    { src: 'https://via.placeholder.com/800x400?text=Slide+3', alt: 'Slide 3' },
  ];

  return (
    <div>
      <h1>SlideShow Demo</h1>
      <SlideShow slides={slides} />
    </div>
  );
};

export default App;
