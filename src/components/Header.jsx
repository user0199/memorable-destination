import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const MenuBar = ({ isOpen, toggleMenu }) => {
    const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344503/memorable%20destination%20images/LOGO_-JPG_tvg44k.jpg";
    return (
        <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className='relative flex justify-end p-4 overflow-hidden'>
                <div className='absolute -top-8 -left-4 h-24 w-36'>
                    <img src={logo} alt="Logo" className='' />
                </div>
                <button onClick={toggleMenu}>
                    <IoMdClose className='h-8 w-8 text-gray-700' />
                </button>
            </div>
            {/* Menu items */}
            <div className='p-4'>
                <Link to='/' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900' onClick={toggleMenu}>Home</Link>
                <Link to='/testimonials' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900' onClick={toggleMenu}>Testimonials</Link>
                <Link to='/contact' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900' onClick={toggleMenu}>Contact Us</Link>
            </div>
            {/* User actions */}
            <div className='absolute bottom-0 left-0 right-0 p-4 border-t'>
                <Link to='/login' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900' onClick={toggleMenu}>Login</Link>
                <Link to='/signup' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900' onClick={toggleMenu}>Sign Up</Link>
            </div>
        </div>
    );
};

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344503/memorable%20destination%20images/LOGO_-JPG_tvg44k.jpg";

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='max-w-full mx-auto flex justify-between items-center h-20 p-4 overflow-hidden'>
            <div className='md:hidden' onClick={toggleMenu}>
                <GiHamburgerMenu />
            </div>
            <div className=''>
                <img src={logo} alt="Logo" className='h-32 md:h-24' />
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
                    <IoMdSearch className='h-8 w-8 text-gray-400 rounded-full bg-gray-500 p-1' onClick={toggleSearch} />
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
            <MenuBar isOpen={showMenu} toggleMenu={toggleMenu} />
        </div>
    );
}

export default Header;
