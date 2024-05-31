import React from 'react'

import image1 from '/kerala.webp';
import image2 from '/jammuandkashmir.webp';
import image3 from '/laddakh.webp';
import image4 from '/rajasthan.webp';
import image5 from '/spitivally.webp';
import image6 from '/andmannicobar.webp';
import image7 from '/goa.webp';
import image8 from '/asam.webp';
import image9 from '/delhi.webp';
import image10 from '/gujarat.webp';
import image11 from '/himachal.webp';
import image12 from '/jharakhand.webp';
import image13 from '/madhyapradesh.webp';
import image14 from '/manipur.webp';
import image15 from '/meghalay.webp';
import image16 from '/sikkim.webp';
import image17 from '/tamilnadu.webp';
import image18 from '/uttarakhand.webp';
import Slider from '../Slider';
import WorldSlider from '../WorldSlider';

function WorldPlaces() {
    const images = [
        { name: 'Kerala', image: image1 },
        { name: 'Kashmir', image: image2 },
        { name: 'Ladakh', image: image3 },
        { name: 'Rajasthan', image: image4 },
        { name: 'Spiti Valley', image: image5 },
        { name: 'Andaman and Nicobar', image: image6 },
        { name: 'Goa', image: image7 },
        { name: 'Assam', image: image8 },
        { name: 'Delhi', image: image9 },
        { name: 'Gujarat', image: image10 },
        { name: 'Himachal Pradesh', image: image11 },
        { name: 'Jharkhand', image: image12 },
        { name: 'Madhya Pradesh', image: image13 },
        { name: 'Manipur', image: image14 },
        { name: 'Meghalaya', image: image15 },
        { name: 'Sikkim', image: image16 },
        { name: 'Tamil Nadu', image: image17 },
        { name: 'Uttarakhand', image: image18 },
    ];
  return (
    <div className='max-w-6xl mx-auto'>
            <div className='text-3xl font-bold pt-5'>
               Plan your trip anywhere in the world
            </div>
            <WorldSlider images={images} />
            {/* <div className='text-center pb-8'>
                <button className='p-2 pr-4 pl-4  border border-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out font-semibold'>Start your journey to Asia now!</button>
            </div> */}
        </div>
  )
}

export default WorldPlaces