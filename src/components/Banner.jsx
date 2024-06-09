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
            <div className='max-w-6xl mx-auto flex justify-between h-full'>
                <div className='flex flex-col justify-around w-1/2'>
                    <div className='text-white'>
                        <h1 className='text-4xl font-bold mb-4'>
                            {content || "Effortless Travel Planning! Let AI Be Your Expert Guide."}
                        </h1>
                        <h3 className='text-2xl mb-5'>Bid farewell to generic holiday packages. Get Your AI-Personalised Itineraries</h3>
                        <button className='bg-yellow-400 border border-black text-black text-lg font-semibold rounded-lg px-4 py-2 hover:bg-black hover:text-white transition duration-300'>Plan Itinerary For Free!</button>
                    </div>
                    <div className='flex gap-16'>
                        <div className='w-32 flex flex-col items-center'>
                            <FaMapLocationDot className='text-white w-14 h-14' />
                            <p className='font-semibold text-white text-center'>Free Personalized Itineraries</p>
                        </div>
                        <div className='w-32 flex flex-col items-center'>
                            <FaCalendarAlt className='text-white w-14 h-14' />
                            <p className='font-semibold text-white text-center'>Flexible Travel Dates</p>
                        </div>
                        <div className='w-32 flex flex-col items-center'>
                            <FaHandHoldingUsd className='text-white w-14 h-14' />
                            <p className='font-semibold text-white text-center'>Best Price Guarantee</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white bg-opacity-75 shadow-sm w-[450px] text-black h-[460px] p-2 pl-4 pr-4 mt-10 rounded-md'>
                    <h2 className='text-2xl font-semibold border-b pb-3 pt-2 tracking-wide'>Get your free travel plan now</h2>
                    <h3 className='pt-4 pb-4 text-start font-semibold'>What do you want to explore?</h3>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <div className='relative'>
                                <FaLocationCrosshairs className='absolute text-black top-2 left-2' />
                                <input type="text" placeholder='Departing from ' className='w-full p-1 pl-8 rounded-md text-black border border-gray-500 outline-0' />
                            </div>
                            <div className='relative'>
                                <FaLocationDot className='absolute text-black top-2 left-2' />
                                <input type="text" placeholder='Search destination' className='w-full p-1 pl-8 rounded-md text-black border border-gray-500 outline-0' />
                            </div>
                        </div>
                        <h3 className='font-semibold'>When are you planning to travel?</h3>
                        <div className='flex justify-between text-black'>
                            <div>
                                <p className='font-semibold text-sm pb-1'>Start date</p>
                                <input type="date" className='rounded-md p-3 border border-black' />
                            </div>
                            <div>
                                <p className='font-semibold text-sm pb-1'>End date</p>
                                <input type="date" className='rounded-md p-3 border border-black' />
                            </div>
                        </div>
                        <div className='text-black flex gap-2'>
                            <input type="checkbox" name="" id="" className='w-4 border border-black' />
                            <p className='text-sm'>Not sure? Let us decide the best time for your trip.</p>
                        </div>
                        <button className='px-2 py-2 border border-black bg-yellow-400 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-semibold'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
