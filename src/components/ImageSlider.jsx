import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 6 < images.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % images.length);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 6 + images.length) % images.length);
    }
  };

  const currentImages = images.slice(currentIndex, currentIndex + 6).concat(images.slice(0, Math.max(0, 6 - (images.length - currentIndex))));

  return (
    <div className="relative max-w-6xl mx-auto mt-8 mb-8 ">
      {currentIndex > 0 && (
        <button
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
      )}
      <div className="flex justify-center items-center space-x-4 h-64 transition-transform duration-700 ease-in-out">
        {currentImages.map((item, index) => (
          <div key={index} className="relative w-1/5 h-full rounded-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md border hover:scale-105 transition-transform duration-400 ease-in" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      {currentIndex + 6 < images.length && (
        <button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
