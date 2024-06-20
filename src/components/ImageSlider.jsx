import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 -left-2  bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer flex justify-center items-center " onClick={onClick}>
        <FaChevronLeft />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 -right-2 flex justify-center items-center bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer" onClick={onClick}>
        <FaChevronRight />
    </div>
);

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024, // Large devices
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Medium devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480, // Small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false
                }
            }
        ]
    };

    return (
        <div className="relative max-w-6xl mx-auto mt-8 mb-8 px-4">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className="relative   md:w-full h-96 md:h-64 rounded-md overflow-hidden">
                            <Link to={item.path}>
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md border hover:scale-105 transition-transform duration-400 ease-in cursor-pointer"  />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
