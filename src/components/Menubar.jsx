import React, { useState } from 'react';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* Hamburger icon */}
      <div className='md:hidden fixed top-4 left-4 z-50'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <svg className='w-8 h-8 text-gray-700 cursor-pointer' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`md:flex md:flex-col md:justify-start md:h-screen md:w-64 fixed left-0 top-0 bg-white shadow-lg z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        {/* Close button (visible on mobile) */}
        <div className='md:hidden absolute top-4 right-4'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6 text-gray-700 cursor-pointer' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className='mt-8 md:mt-16 md:space-y-4'>
          {/* Home */}
          <a href='/' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900'>Home</a>
          
          {/* Testimonials */}
          <a href='/testimonials' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900'>Testimonials</a>
          
          {/* Contact Us */}
          <a href='/contact' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900'>Contact Us</a>
        </div>

        {/* User actions */}
        <div className='mt-auto mb-8 md:mb-16 md:pb-8'>
          {/* Login */}
          <a href='/login' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900'>Login</a>
          
          {/* Signup */}
          <a href='/signup' className='block py-2 px-4 text-gray-700 hover:bg-gray-200 hover:text-gray-900'>Sign Up</a>
          
          {/* User Icon */}
          <div className='flex justify-center'>
            <svg className='w-8 h-8 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Overlay for closing the menu on click */}
      {isOpen && <div onClick={toggleMenu} className='fixed inset-0 bg-black opacity-50 z-30'></div>}
    </div>
  );
};

export default MenuBar;
