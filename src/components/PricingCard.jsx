import React from 'react'
import { BiRupee } from 'react-icons/bi'

function PricingCard({price,place,days,image}) {
    return (
        <div className='max-w-6xl mx-auto flex justify-center p-4'>
            <div className='relative  md:w-1/2 lg:w-1/3 border border-gray-200 overflow-hidden rounded-t-xl'>
                <div className=''><img src={image} alt="images" className='w-full ' /></div>
                <div className='absolute  top-2 right-2 text-white bg-gray-900 bg-opacity-85  font-semibold rounded-xl  px-3'>{days} days</div>
                <div className='p-2 '>
                    <p className='font-semibold'>Tour for {place}</p>
                    <p className='font-semibold flex items-center text-2xl'><BiRupee/><span className='text-2xl font-bold'>{price}/ -</span> <span className='text-base'>per person</span></p>
                </div>
            </div>
        </div>
    )
}

export default PricingCard