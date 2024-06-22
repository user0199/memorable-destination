import React,{useState} from 'react';
import offbeat from '/offbeat.webp';
import road from '/Road.webp';
import workcation from '/workcation.webp';
import volunteer from '/volunteer.webp';
import TravelPlanModal from '../TravelPlanModal';

function AsperMood() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log("Open Modal Clicked");
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log("Close Modal Clicked");
        setIsModalOpen(false);
    };
    return (
        <div className='max-w-6xl mx-auto mb-8 flex flex-col gap-4 p-4'>
            <div className=' text-2xl lg:text-4xl font-bold mb-8'>
                <p>Plan trip as per mood</p>
            </div>
            <div className='flex justify-between gap-1'>
                <div className='flex flex-col w-full gap-1'>
                    <div className='h-[135px] md:h-[355px] relative group'>
                        <img src={offbeat} alt="Offbeat" className='w-full h-full object-cover rounded-md border' />
                        <div className='absolute text-white text-xl md:text-2xl font-semibold md:font-bold top-1 md:top-8 left-2 md:left-8 group-hover:top-4 md:group-hover:top-12 transition-all duration-300 ease-in-out drop-shadow-lg' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            offbeat trip planner
                            <p className='hidden md:block text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>

                    <div className='flex   flex-col-reverse md:flex-row  justify-between w-full h-[200px] gap-1'>
                        <div className='flex-1 md:w-1/2 relative group'>
                            <img src={road} alt="Road" className='w-full h-full object-cover rounded-md border' />
                            <div className='absolute text-white text-xl md:text-2xl font-semibold md:font-bold top-1 md:top-8 left-2 md:left-8 group-hover:top-4 md:group-hover:top-12  transition-all duration-300 ease-in-out ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                                Road trip planner
                                <p className='hidden md:block text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                            </div>
                        </div>
                        <div className='md:w-2/5  bg-yellow-100 md:border md:border-black rounded-md flex flex-col justify-center items-center'>
                            <p className='text-xl md:text-2xl lg:text-4xl font-semibold '>53+</p>
                            <p className='font-semibold text-base lg:text-lg text-center'>trips planned so far</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-1 '>
                    <div className='flex relative w-full h-[135px] md:h-[264px] group'>
                        <img src={workcation} alt="Workcation" className='w-full h-full object-cover rounded-md border' />
                        <div className='absolute text-white text-xl md:text-2xl font-semibold md:font-bold top-1 md:top-8 left-2 md:left-8 group-hover:top-4 md:group-hover:top-12  transition-all duration-300 ease-in-out ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Workcation trip planner
                            <p className='hidden md:block text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>
                    <div className='flex relative  md:w-full h-[199px] md:h-[293px] group'>
                        <img src={volunteer} alt="Volunteer" className='w-full h-full object-cover rounded-md border' />
                        <div className='absolute text-white text-xl md:text-2xl font-semibold md:font-bold top-1 md:top-8 left-2 md:left-8 group-hover:top-4 md:group-hover:top-12  transition-all duration-300 ease-in-out  ' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Volunteer trip planner
                            <p className='hidden md:block text-base opacity-0 group-hover:opacity-100'>Explore!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-yellow-300 border border-black p-1 pl-3 pr-4 rounded-md hover:bg-black font-semibold hover:text-white transition-all duration-300 ease-in-out' onClick={handleOpenModal}>Create your free itinerary</button>
            </div>
            {isModalOpen && <TravelPlanModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>
    );
}

export default AsperMood;
