import React, { useState } from 'react';
import firstImage from "/first.webp";
import secondImage from "/second.webp";
import thirdImage from "/third.webp";
import forthImage from "/forth.webp";
import TravelPlanModal from '../TravelPlanModal';  

function InfoSection() {
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
        <div className='max-w-6xl mx-auto flex flex-col justify-between pt-10 p-4 '>
            <div className='font-bold text-3xl'>How it works?</div>
            <div className='flex justify-center md:justify-between items-center text-center pt-4 pb-8 flex-wrap '>
                <div className='w-56 flex flex-col items-center pt-4'>
                    <img src={firstImage} alt="first step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Handpick Your Selection</p>
                        From solo travel to workcation, honeymoon to family travel, tell us about your mood, budget & timeline.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center pt-4'>
                    <img src={secondImage} alt="second step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Unleash AI's Itinerary Wizardry!</p>
                        Get a unique itinerary completely personalized for you, with all bookings in one place.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center pt-4'>
                    <img src={thirdImage} alt="third step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Easy Bookings with 24x7 Concierge</p>
                        From your stays to activities, book-it-all in one click, and enjoy 24x7 assistance while you explore.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center pt-4'>
                    <img src={forthImage} alt="fourth step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>No Commissions - Pay for what you get</p>
                        No hidden charges during & after bookings. Pay For What You Get.
                    </div>
                </div>
            </div>
            <div className='max-w-6xl flex justify-center pb-8 '>
                <button
                    className='border border-black p-2 rounded-lg font-semibold bg-yellow-300 w-80 hover:bg-black hover:text-white transition-all duration-300 ease-in-out'
                    onClick={handleOpenModal}
                >
                    Plan Itinerary For Free
                </button>
            </div>
            {isModalOpen && <TravelPlanModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>
    );
}

export default InfoSection;
