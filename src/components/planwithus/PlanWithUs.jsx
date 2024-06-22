import React from 'react';

function PlanWithUs() {
  return (
    <div className='max-w-6xl mx-auto p-4 md:p-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>🌴</div>
            <div>
              <p className='font-bold text-lg'>Personalization in seconds</p>
              <p>Personalized and flexible itineraries crafted by our AI-powered planner</p>
            </div>
          </div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>📱</div>
            <div>
              <p className='font-bold text-lg'>Book-it-all in one click</p>
              <p>Book all your personalized and flexible travel needs in just one clicked</p>
            </div>
          </div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>🐦</div>
            <div>
              <p className='font-bold text-lg'>Offbeat Experiences, curated for you</p>
              <p>Discover offbeat adventures, activities & experiences.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>🌍</div>
            <div>
              <p className='font-bold text-lg'>Best Real-Time Negotiated Bookings</p>
              <p>Dedicated travel experts negotiate the best prices within your budget</p>
            </div>
          </div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>🕰️</div>
            <div>
              <p className='font-bold text-lg'>
                24x7 Live Assistance as you explore</p>
              <p>24x7 support that keeps you swinging all day and night, no monkey business!</p>
            </div>
          </div>
          <div className='flex gap-4 py-4 items-center'>
            <div className='text-5xl'>💰</div>
            <div>
              <p className='font-bold text-lg'>Transparent Pricing - No Commissions</p>
              <p>Transparent pricing with no hidden fees - pay only a small service fee!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanWithUs;
