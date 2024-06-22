import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        mobile: '',
        email: '',
        topic: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='w-full bg-yellow-300 flex justify-center items-center'>
            <div className=' w-[90%] md:w-[65%] bg-white border border-t-0 border-l-0 border-r-0 border-b-gray-200'>
                <div className='max-w-lg mx-auto  p-6 bg-white'>
                    <div className=' flex justify-center'>
                        <h2 className=' text-2xl md:text-4xl lg:text-6xl pb-5 text-gray-700 mb-6 text-center border border-t-0 border-l-0 border-r-0 border-b-2 border-yellow-300 '>Contact Us</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                                    First Name *
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
                                    Last Name *
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='country'>
                                    Country *
                                </label>
                                <input
                                    type='text'
                                    id='country'
                                    name='country'
                                    value={formData.country}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='mobile'>
                                    Mobile *
                                </label>
                                <input
                                    type='text'
                                    id='mobile'
                                    name='mobile'
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                                    required
                                />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email Address *
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='topic'>
                                Topic of Interest
                            </label>
                            <input
                                type='text'
                                id='topic'
                                name='topic'
                                value={formData.topic}
                                onChange={handleChange}
                                className='w-full px-3 py-2 border rounded-lg focus:outline-gray-300 focus:shadow-outline'
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button
                                type='submit'
                                className='w-36 border border-black py-2 px-4 mb-8 hover:bg-black  shadow-2xl hover:text-white transition duration-300 font-semibold'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
