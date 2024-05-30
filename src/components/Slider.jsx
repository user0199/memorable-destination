import React, { useState } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex + 5 < images.length) {
            setCurrentIndex((prevIndex) => (prevIndex + 5) % images.length);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 5 + images.length) % images.length);
        }
    };

    const currentImages = images.slice(currentIndex, currentIndex + 5).concat(images.slice(0, Math.max(0, 5 - (images.length - currentIndex))));

    return (
        <div className="relative max-w-6xl mx-auto mt-8 mb-8">
            {currentIndex > 0 && (
                <button
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>
            )}
            <div className="flex justify-center items-center space-x-4 h-80 transition-transform duration-700 ease-in-out">
                {currentImages.map((item, index) => (
                    <div key={index} className="relative w-1/5 h-80 overflow-hidden">
                        <div className="image-container relative group">
                            <img src={item.image} alt={item.name} className="w-full h-80 object-cover" />
                            <div className="image-content absolute bottom-0 left-0 right-0 text-white text-center py-2 transition-all duration-300 ease-in">
                                <p className='text-2xl font-semibold'>{item.name}</p>
                                <div className='h-0 group-hover:h-20 transition-all duration-300 ease-in-out bg-black bg-opacity-20'>
                                    <button className=' border-white border-2 rounded-2xl p-1 pl-2 pr-2 font-semibold text-sm py-1 opacity-0 group-hover:opacity-100'>Plan trip to {item.name} !</button>
                                </div>
                            </div>
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

export default Slider;
