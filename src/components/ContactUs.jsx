import React, { useEffect } from 'react'
import Header from './Header'
import bgImage from "/contactimg.webp"
import whatsApp from "/whats.jpg"
import insta from "/insta.webp"
import face from "/face.webp"
import google from "/google.webp"


import ContactForm from './ContactForm'
import Footer from './Footer'


function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <div className='relative h-56  md:h-96 flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='relative w-1/2 text-center'>
                    <h2 className='text-xl  md:text-6xl font-bold text-white'>Let's Talk</h2>
                    <p className='text-base  md:text-3xl text-white'>We love to talk to our travel community. If you've anything you want to ask, feel free to get in touch.</p>
                </div>
            </div>
            <div className=' '>
                <ContactForm />
            </div>
            <div className='flex justify-center items-center bg-yellow-300 '>
                <div className='  w-[90%] md:w-[65%] bg-white flex flex-col justify-center '>
                    <div className=' flex justify-center py-8'>
                        <h2 className='text-2xl  md:text-4xl lg:text-6xl pb-5 text-gray-700 mb-6 text-center border border-t-0 border-l-0 border-r-0 border-b-2 border-yellow-300 '>Want to meet us?</h2>
                    </div>
                    <div className=' flex flex-col md:flex-row justify-around text-center '>
                        <div className='w-full md:w-1/3 flex flex-col gap-5'>
                            <h2 className='text-2xl font-semibold'>Address</h2>
                            <p>D-14 First Floor, Sector 20, Noida, Uttar Pradesh 201301</p>
                            <h2 className='text-2xl font-semibold'>Call Us</h2>
                            <p>+91 95821 25476</p>
                        </div>
                        <div className='  w-full md:w-1/3 flex flex-col gap-5 justify-center items-center'>
                            <h2 className='text-2xl font-semibold'>Reach Out</h2>
                            <a href="https://web.whatsapp.com/">
                                <img src={whatsApp} alt="" className='w-40'/>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <div>
                            <p className=' text-2xl font-bold md:pt-6'>Social Media</p>
                        </div>
                        <div className='flex justify-center gap-5 pb-9'>
                            <a href="">
                                <img src={insta} alt="" className='w-12 h-12' />
                            </a>
                            <a href="">
                                <img src={face} alt="" className='w-12 h-12' />
                            </a>
                            <a href="">
                                <img src={google} alt="" className='w-12 h-12' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>


        </>
    )
}

export default ContactUs