import React from 'react';
import offbeat from '/offbeat.webp';
import road from '/Road.webp';
import workcation from '/workcation.webp';
import volunteer from '/volunteer.webp';

function AsperMood() {
    return (
        <div className='max-w-6xl mx-auto mb-8 flex flex-col gap-4'>
            <div className='text-4xl font-bold mb-8'>
                <p>Plan trip as per mood</p>
            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col w-full gap-2'>
                    <div className=' h-[355px]  relative group'>
                        <img src={offbeat} alt="Offbeat" className='w-full h-full object-cover rounded-md border ' />
                        <div className='absolute text-white text-2xl  font-bold top-8 left-8 group-hover:top-12  transition-all duration-300 ease-in-out '>
                            offbeat trip planner
                            <p className='text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-[200px] gap-2'>
                        <div className='flex-1 w-1/2 relative group'>
                            <img src={road} alt="Road" className='w-full h-full object-cover rounded-md border' />
                            <div className='absolute text-white text-2xl  font-bold top-8 left-8 group-hover:top-12  transition-all duration-300 ease-in-out '>
                                Road trip planner
                                <p className='text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                            </div>
                        </div>
                        <div className='w-2/5 border border-black rounded-md flex flex-col justify-center items-center'>
                            <p className='text-4xl font-semibold'>53+</p>
                            <p className='font-semibold text-lg'>trips planned so far</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2 '>
                    <div className='flex relative w-full h-[264px] group'>
                        <img src={workcation} alt="Workcation" className='w-full h-full object-cover rounded-md border' />
                        <div className='absolute text-white text-2xl  font-bold top-8 left-8 group-hover:top-12  transition-all duration-300 ease-in-out '>
                           Workcation trip planner
                            <p className='text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>
                    <div className='flex relative h-[293px] group'>
                        <img src={volunteer} alt="Volunteer" className='w-full h-full object-cover rounded-md border' />
                        <div className='absolute text-white text-2xl  font-bold top-8 left-8 group-hover:top-12  transition-all duration-300 ease-in-out '>
                            Volunteer trip planner
                            <p className='text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                    <button className='bg-yellow-300 border border-black p-1 pl-3 pr-4 rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Create your free itinerary</button>
            </div>
        </div>
    );
}

export default AsperMood;
