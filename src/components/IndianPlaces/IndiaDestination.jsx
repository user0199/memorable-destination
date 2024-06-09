import React from 'react'
// import image1 from "/kerala.webp"
import ImageSlider from '../ImageSlider';
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


function IndiaDestination({title}) {
  const images = [
    { name: 'Kerala', image: image1, path: "/asia/india/kerala" },
    { name: 'Jammu and Kashmir', image: image2, path: "/asia/india/kashmir" },
    { name: 'Ladakh', image: image3, path: "/asia/india/ladakh" },
    { name: 'Rajasthan', image: image4, path: "/asia/india/rajasthan" },
    { name: 'Spiti Valley', image: image5, path: "/asia/india/spiti-valley" },
    { name: 'Andaman and Nicobar', image: image6, path: "/asia/india/andaman-nicobar" },
    { name: 'Goa', image: image7, path: "/asia/india/goa" },
    { name: 'Assam', image: image8, path: "/asia/india/assam" },
    { name: 'Delhi', image: image9, path: "/asia/india/delhi" },
    { name: 'Gujarat', image: image10, path: "/asia/india/gujarat" },
    { name: 'Himachal Pradesh', image: image11, path: "/asia/india/himachal-pradesh" },
    { name: 'Jharkhand', image: image12, path: "/asia/india/jharkhand" },
    { name: 'Madhya Pradesh', image: image13, path: "/asia/india/madhya-pradesh" },
    { name: 'Manipur', image: image14, path: "/asia/india/manipur" },
    { name: 'Meghalaya', image: image15, path: "/asia/india/meghalaya" },
    { name: 'Sikkim', image: image16, path: "/asia/india/sikkim" },
    { name: 'Tamil Nadu', image: image17, path: "/asia/india/tamil-nadu" },
    { name: 'Uttarakhand', image: image18, path: "/asia/india/uttarakhand" },
];

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='text-3xl font-semibold'>
       {
        title ? title : "Plan as per the best destinations in India"
       } 
      </div>
      <ImageSlider images={images} />
    </div>
  )
}

export default IndiaDestination