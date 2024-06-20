import React from 'react'
import firstImage from "/first.webp"
import secondImage from "/second.webp"
import thirdImage from "/third.webp"
import forthImage from "/forth.webp"
function InfoSection() {
    return (
        <div className='max-w-6xl mx-auto flex flex-col justify-between pt-10 p-2 '>
            <div className='font-bold text-3xl'>How it works?</div>
            <div className='flex justify-center md:justify-between items-center text-center pt-4 pb-8 flex-wrap '>
                <div className='w-56 flex flex-col items-center'>
                    <img src={firstImage} alt="first step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Handpick Your Selection</p>
                        From solo travel to workcation, honeymoon to family travel, tell us about your mood, budget & timeline.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center'>
                    <img src={secondImage} alt="first step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Unleash AI's Itinerary Wizardry!</p>
                        Get a unique itinerary completely personalized for you, with all bookings in one place.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center'>
                    <img src={thirdImage} alt="first step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>Easy Bookings with 24x7 Concierge</p>
                        From your stays to activities, book-it-all in one click, and enjoy 24x7 assistance while you explore.
                    </div>
                </div>
                <div className='w-56 flex flex-col items-center'>
                    <img src={forthImage} alt="first step" className='w-36 h-36' />
                    <div>
                        <p className='font-bold text-lg'>No Commissions - Pay for what you get</p>
                        No hidden charges during & after bookings. Pay For What You Get.
                    </div>
                </div>
            </div>
            <div className='max-w-6xl flex justify-center pb-8 '>
                <button className='border border-black p-2 rounded-lg font-semibold bg-yellow-300 w-80 hover:bg-black hover:text-white transition-all duration-300 ease-in-out '>Plan Itinerary For Free</button>
            </div>
        </div>
    )
}

export default InfoSection