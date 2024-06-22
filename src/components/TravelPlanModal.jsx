import React from 'react';
import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6';

const TravelPlanModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleClose = () => {
        onClose();  // Call the onClose function passed from InfoSection
    };

    return (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative bg-white  shadow-sm h-auto  md:w-[450px] text-black  lg:h-[460px] p-4 mt-4 lg:mt-10 rounded-md'>
                <button
                    onClick={handleClose}
                    className='absolute font-semibold text-2xl top-1 md:top-4  right-2 md:right-4 text-black hover:text-gray-800 transition duration-200'
                >
                    &times;
                </button>
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
                {/* <button
                    onClick={handleClose}
                    className='absolute  bottom-4 right-4 text-black-500 hover:text-gray-800 transition duration-200'
                >
                    Close
                </button> */}
            </div>
        </div>
    );
};

export default TravelPlanModal;
