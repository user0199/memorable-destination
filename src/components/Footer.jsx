import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344498/memorable%20destination%20images/LOGO_-_SVG_lofjeb.svg"

function Footer() {
    return (
        <div className='relative bg-neutral-800 text-white font-semibold'>
            <div className='info relative -top-40 w-10/12 h-80 bg-yellow-300 mx-auto rounded-lg flex flex-col justify-center items-center '>
                <h1 className='text-center text-4xl text-black pt-6 font-bold'>Join the memorable destination</h1>
                <h3 className='text-center text-2xl text-black font-normal'>Get Early Bird Deals, Extra Discounts & Priority Customer Support.</h3>
                <div className='flex justify-center items-center w-10/12 h-1/2 gap-10'>
                    <input type="text" placeholder='First Name' className='w-full border border-black p-4 rounded-md bg-yellow-300 text-black '/>
                    <input type="text" placeholder='Email' className='w-full border border-black p-4 rounded-md bg-yellow-300 text-black '/>
                    <button className='w-full bg-black text-white p-4 rounded-md'>Subscribe Now</button>
                </div>
            </div>
            <div className='max-w-6xl mx-auto  pb-5 flex gap-16'>
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
                <div className='w-1/5'>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Travel Destinations</li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Europe</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Asia</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">North America</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">South America</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Australia & New Zealand</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Africa</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Caribbean</a></li>
                    </ul>
                </div>
                <div className='w-1/5'>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Travel Styles</li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Personalise</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Workcation</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Volunteer</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Road Trips</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Unique</a></li>
                    </ul>
                </div>
                <div className='w-1/5'>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Company</li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Blogs</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">For Corporates</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Testimonials</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">About Us</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className='w-1/5'>
                    <ul className='flex flex-col gap-5 text-sm'>
                        <li className='mb-5 font-semibold text-lg'>Terms & Policies</li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Terms of service</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Privacy Policy</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">COVID_19 Safety</a></li>
                        <li className='transition-all duration-800 ease-in-out hover:underline'><a href="#">Subscribe</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
