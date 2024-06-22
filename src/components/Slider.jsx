import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import './ImageSlider.css';  // Import the CSS file for custom styles


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
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Large devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // Medium devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480, // Small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="relative max-w-6xl mx-auto mt-8 mb-8 ">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="px-2"> {/* Add padding here */}
                        <div className="relative w-full h-80 overflow-hidden">
                            <div className="image-container relative group">
                                <img src={item.image} alt={item.name} className="w-full h-80 object-cover" />
                                <div className="image-content absolute bottom-0 left-0 right-0 text-white text-center py-2 transition-all duration-300 ease-in">
                                    <p className='text-2xl font-semibold'>{item.name}</p>
                                    <div className='h-0 group-hover:h-20 transition-all duration-300 ease-in-out bg-black bg-opacity-20'>
                                        <button className='border-white border-2 rounded-2xl p-1 pl-2 pr-2 font-semibold text-sm py-1 opacity-0 group-hover:opacity-100'>Plan trip to {item.name}!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer`}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             &#10095;
//         </div>
//     );
// };

// const PrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 h-10 w-10 rounded-full z-10 cursor-pointer`}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             &#10094;
//         </div>
//     );
// };

export default ImageSlider;
