import React from 'react'
// import image1 from "/kerala.webp"
import ImageSlider from '../ImageSlider';
// import image1 from '/kerala.webp';
import image2 from '/jammuandkashmir.webp';
import image3 from '/laddakh.webp';
import image4 from '/rajasthan.webp';
import image6 from '/drilldown.jpeg';
import image7 from '/goa.webp';
import image9 from '/bali.avif';
import image10 from '/thailand.avif';
// import image11 from '/himachal.webp';
// import image12 from '/jharakhand.webp';
// import image13 from '/madhyapradesh.webp';
// import image14 from '/manipur.webp';
// import image15 from '/meghalay.webp';
// import image16 from '/sikkim.webp';
// import image17 from '/tamilnadu.webp';
// import image18 from '/uttarakhand.webp';


function IndiaDestination({ title }) {
  const image5 = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371117/memorable%20destination%20images/pi4hjcthaxbltxdwwh5j.jpg"
  const image8 = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371118/memorable%20destination%20images/najlyuckwyj9abhfsw9m.jpg"
  const images = [
    // { name: 'Kerala', image: image1, path: "/asia/india/kerala" },
    { name: 'Jammu and Kashmir', image: image2, path: "/asia/india/kashmir" },
    { name: 'Ladakh', image: image3, path: "/asia/india/lehladdakh" },
    { name: 'Jaisalmer', image: image4, path: "/asia/india/jaisalmer" },
    { name: 'Udaipur', image: image4, path: "/asia/india/udaipur" },
    { name: 'Dubai', image: image6, path: "/asia/Dubai" },
    { name: 'Dwarka and Somnath', image: image5, path: "/asia/india/dwarkaandsomnath" },
    { name: 'Goa', image: image7, path: "/asia/india/goa" },
    { name: 'Manali', image: image8, path: "/asia/india/manali" },
    { name: 'Bali', image: image9, path: "/asia/india/bali" },
    { name: 'Thailand', image: image10, path: "/asia/india/thailand" },
  ];

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='text-2xl font-bold md:text-3xl md:font-semibold'>
        {
          title ? title : "Plan as per the best destinations in India"
        }
      </div>
      <ImageSlider images={images} />
    </div>
  )
}

export default IndiaDestination