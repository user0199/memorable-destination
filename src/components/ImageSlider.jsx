import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, Link } from 'react-router-dom';

// import './ImageSlider.css';  // Import the CSS file for custom styles

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="relative max-w-6xl mx-auto mt-8 mb-8 px-4">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className="relative w-full h-64 rounded-md overflow-hidden">
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

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            &#10095;
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            &#10094;
        </div>
    );
};

export default ImageSlider;
