import React from 'react'
import contactImage from "/contactpage.webp"

import { useNavigate } from 'react-router-dom';

function ContactUsButton() {
    const nevigate = useNavigate();
    const handleClick = () => {
        nevigate("/contact");
    }
    return (
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row  items-center justify-around p-4'>
            <img src={contactImage} alt="" className='md:w-1/3' />
            <div className='md:w-1/3 text-center items-center flex flex-col gap-4'>
                <h2 className=' text-[25px] md:text-[32px] font-bold'>Come On! Talk to Us.</h2>
                <p>We’ve a large community of bloggers, influencers, travelers and of course travel experts to help you out.</p>
                <button className='border w-40 border-black rounded-3xl hover:bg-black hover:text-white transition-all duration-150 ease-in-out p-2 font-semibold shadow-xl' onClick={handleClick}>Contact us</button>
            </div>
        </div>
    )
}

export default ContactUsButton