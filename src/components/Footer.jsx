import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344498/memorable%20destination%20images/LOGO_-_SVG_lofjeb.svg"


function Footer() {
    return (
        <div className='bg-neutral-800 text-white font-semibold'>
            <div className='max-w-6xl mx-auto pt-5 pb-5 flex gap-16 '>
                <div className='flex flex-col gap-6 justify-between w-1/3 text-sm'>
                    <img src={logo} alt="" className='w-36 bg-white' />
                    <p className='text-white'>The Memorable destination is a travel based startup with the vision to simplify travel and build immersive travel programs across India.</p>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter className="w-8 h-8 text-gray-500 hover:text-[#1DA1F2]" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram className="w-8 h-8 text-gray-500 hover:text-[#E4405F]" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaFacebook className="w-8 h-8 text-gray-500 hover:text-[#1877F2]" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin className="w-8 h-8 text-gray-500 hover:text-[#0A66C2]" />
                        </a>
                    </div>
                    <div className='text-white flex flex-col gap-2'>
                        <p className='font-semibold'>Contact Us</p>
                        <p className='flex gap-2 items-center'>
                            <LuPhoneCall className='text-lg' /> +9832143456
                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdMail className='text-lg' /> example@mail.com
                        </p>
                    </div>
                </div>
                <div className='w-1/5 '>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Travel Destinations</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Europe</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Asia</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>North America</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>South America</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Australia & New Zealand</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Africa</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Caribbean</li>

                    </ul>
                </div>
                <div className='w-1/5 '>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Travel Styles</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Personalise</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Workcation</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Volunteer</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Road Trips</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Unique</li>


                    </ul>
                </div>
                <div className='w-1/5 '>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Company</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Blogs</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>For Corporates</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Testimonials</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>About Us</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Contact Us</li>

                    </ul>
                </div>
                <div className='w-1/5 '>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Terms & Policies</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Terms of service</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Privacy Policy</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>COVID_19 Safety</li>
                        <li className=' transition-all duration-800 ease-in-out hover:underline'>Subscribe</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer