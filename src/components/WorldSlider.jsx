import React, { useState } from 'react';

const WorldSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 7 < images.length) {
      setCurrentIndex((prevIndex) => (prevIndex + 7) % images.length);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 7 + images.length) % images.length);
    }
  };

  const currentImages = images.slice(currentIndex, currentIndex + 7).concat(images.slice(0, Math.max(0, 7 - (images.length - currentIndex))));

  return (
    <div className="relative max-w-6xl mx-auto mt-8 mb-8">
      {currentIndex > 0 && (
        <button
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 h-12 w-12 rounded-full z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
      )}
      <div className="flex flex-wrap justify-center items-center h-128 transition-transform duration-700 ease-in-out">
        <div className="relative w-[599px] h-[460px] rounded-md overflow-hidden mr-6 ">
          <img src={currentImages[0].image} alt={currentImages[0].name} className="w-full h-full object-cover rounded-md border hover:scale-105 transition-transform duration-400 ease-in" />
          <div className="absolute bottom-56 left-0 right-0 text-5xl text-white text-center py-2">
            {currentImages[0].name}
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {currentImages.slice(1).map((item, index) => (
            <div key={index} className="relative w-40 h-56 rounded-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md border hover:scale-105 transition-transform duration-400 ease-in" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentIndex + 7 < images.length && (
        <button
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 h-12 w-12 rounded-full z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

export default WorldSlider;
