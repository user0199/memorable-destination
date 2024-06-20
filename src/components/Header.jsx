import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344503/memorable%20destination%20images/LOGO_-JPG_tvg44k.jpg";

    return (
        <div className='max-w-full mx-auto flex justify-between items-center h-20 p-4 overflow-hidden'>
            <div className='md:hidden'>
                <GiHamburgerMenu/>
            </div>
            <div className=''>
                <img src={logo} alt="Logo" className=' h-32 md:h-24' />
            </div>
            <div className='hidden md:flex relative w-full mx-4 md:w-1/2'>
                <IoMdSearch className='h-6 w-6 absolute top-2 left-2 text-gray-400' />
                <input 
                    type="text" 
                    placeholder='Where do you want to go!' 
                    className='border border-gray-300 h-10 w-full rounded-lg pl-10 text-sm md:text-lg font-semibold' 
                />
            </div>
            <div className='flex gap-2 items-center'>
                <button className='hidden md:block p-1 px-2 border bg-yellow-400 text-sm md:text-lg font-semibold rounded-lg border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>
                    Create a trip
                </button>
                <div className='md:hidden'>
                    <IoMdSearch className='h-8 w-8 text-gray-400 rounded-full bg-gray-500 p-1' onClick={() => setShowSearch(!showSearch)} />
                </div>
                <div>
                    <FaUserCircle className='hidden md:block h-8 w-8 md:h-10 md:w-10' />
                </div>
            </div>
            {showSearch && (
                <div className='absolute top-20 left-0 w-full bg-white p-4'>
                    <div className='relative w-full'>
                        <IoMdSearch className='h-6 w-6 absolute top-2 left-2 text-gray-400' />
                        <input 
                            type="text" 
                            placeholder='Where do you want to go!' 
                            className='border border-gray-300 h-10 w-full rounded-lg pl-10 text-sm md:text-lg font-semibold' 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
