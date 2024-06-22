import React from 'react'
import Header from './Header'
import data from "../data/constants.json"
import Footer from './Footer';
import contactImage from "/contactpage.webp"
import { useNavigate } from 'react-router-dom';
function AllTestimols() {
    const testimonials = data.testimonial;
    const nevigate = useNavigate();
    const handleClick = () => {
        nevigate("/contact");
    }
    return (
        <>
            <Header />
            <div>
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
                </div>
            </div>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row  items-center justify-around p-4'>
                <img src={contactImage} alt="" className='md:w-1/3' />
                <div className='md:w-1/3 text-center items-center flex flex-col gap-4'>
                    <h2 className=' text-[25px] md:text-[32px] font-bold'>Come On! Talk to Us.</h2>
                    <p>We’ve a large community of bloggers, influencers, travelers and of course travel experts to help you out.</p>
                    <button className='border w-40 border-black rounded-3xl hover:bg-black hover:text-white transition-all duration-150 ease-in-out p-2 font-semibold shadow-xl' onClick={handleClick}>Contact us</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AllTestimols