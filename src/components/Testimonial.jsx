import React from 'react'
import data from "../data/constants.json"
import { useNavigate } from 'react-router-dom';
function Testimonial() {
    const testimonials = data.testimonial.slice(0, 4);
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/testimonials")
    }
    return (
        <div className='max-w-6xl mx-auto  p-4 lg:py-14 lg:p-0'>
            <div className='text-xl md:text-3xl font-bold pb-10'>Happy Community of The Memorable Destination</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='p-4 border rounded-md flex gap-4'>
                        <img src={testimonial.image} alt={testimonial.name} className='w-16 h-16 rounded-full mb-2' />
                        <div>
                            <p className='font-semibold'>{testimonial.name}</p>
                            <p className='text-yellow-500'>{"★".repeat(testimonial.stars)}</p>
                            <p className='text-gray-600'>{testimonial.days} days in {testimonial.place}</p>
                            <p className='text-gray-700 mt-2'>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-5'>
                <button onClick={handleClick} className='border border-black px-8 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>View All</button>
            </div>
        </div>
    )
}

export default Testimonial