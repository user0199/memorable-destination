import React from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

function Banner({ content, bannerImage }) {
    const bgImage = bannerImage ? bannerImage : "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371055/samples/landscapes/beach-boat.jpg";

    return (
        <div className='mb-6' style={{ backgroundImage: `url(${bgImage})`, height: '92vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='max-w-full mx-auto flex flex-col lg:flex-row justify-between h-full p-4'>
                <div className='flex flex-col gap-9 lg:justify-between  w-full lg:w-1/2 mt-20 lg:mt-0 '>
                    <div className='flex flex-col justify-between  gap-2 text-white text-center md:text-left lg:p-8'>
                        <h1 className='text-[22px] lg:text-4xl font-bold'>
                            {content || "Effortless Travel Planning! Let AI Be Your Expert Guide."}
                        </h1>
                        <h3 className='text-lg lg:text-2xl mb-5'>Bid farewell to generic holiday packages. Get Your AI-Personalised Itineraries</h3>
                        <button className='lg:w-56 bg-yellow-400 border border-black text-black text-base lg:text-lg font-semibold rounded-lg px-3 py-2 hover:bg-black hover:text-white transition duration-300'>Plan Itinerary For Free!</button>
                    </div>
                    <div className='flex justify-between w-full  lg:gap-16 mt-4 lg:mt-0'>
                        <div className='flex flex-col items-center w-full lg:w-32'>
                            <FaMapLocationDot className='text-white w-10 h-10 lg:w-14 lg:h-14' />
                            <p className='font-semibold text-white text-center text-xs lg:text-base'>Free Personalized Itineraries</p>
                        </div>
                        <div className='flex flex-col items-center w-full lg:w-32'>
                            <FaCalendarAlt className='text-white w-10 h-10 lg:w-14 lg:h-14' />
                            <p className='font-semibold text-white text-center text-xs lg:text-base'>Affordable &
                            Flexible Bookings</p>
                        </div>
                        <div className='flex flex-col items-center w-full  lg:w-32'>
                            <FaHandHoldingUsd className='text-white w-10 h-10 lg:w-14 lg:h-14' />
                            <p className='font-semibold text-white text-center text-xs lg:text-base'>Zero Hidden
                            Charges</p>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block bg-white bg-opacity-75 shadow-sm w-full lg:w-[450px] text-black h-auto lg:h-[460px] p-4 mt-4 lg:mt-10 rounded-md'>
                    <h2 className='text-xl lg:text-2xl font-semibold border-b pb-3 pt-2 tracking-wide'>Get your free travel plan now</h2>
                    <h3 className='pt-4 pb-4 text-start font-semibold'>What do you want to explore?</h3>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='relative'>
                                <FaLocationCrosshairs className='absolute text-black top-2 left-2' />
                                <input type="text" placeholder='Departing from ' className='w-full p-2 pl-8 rounded-md text-black border border-gray-500 outline-0' />
                            </div>
                            <div className='relative'>
                                <FaLocationDot className='absolute text-black top-2 left-2' />
                                <input type="text" placeholder='Search destination' className='w-full p-2 pl-8 rounded-md text-black border border-gray-500 outline-0' />
                            </div>
                        </div>
                        <h3 className='font-semibold'>When are you planning to travel?</h3>
                        <div className='flex flex-col lg:flex-row justify-between text-black'>
                            <div className='w-full lg:w-auto'>
                                <p className='font-semibold text-sm pb-1'>Start date</p>
                                <input type="date" className='w-full lg:w-auto rounded-md p-2 border border-black' />
                            </div>
                            <div className='w-full lg:w-auto mt-2 lg:mt-0'>
                                <p className='font-semibold text-sm pb-1'>End date</p>
                                <input type="date" className='w-full lg:w-auto rounded-md p-2 border border-black' />
                            </div>
                        </div>
                        <div className='text-black flex gap-2'>
                            <input type="checkbox" name="" id="" className='w-4 border border-black' />
                            <p className='text-sm'>Not sure? Let us decide the best time for your trip.</p>
                        </div>
                        <button className='px-3 py-2 border border-black bg-yellow-400 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-semibold'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
