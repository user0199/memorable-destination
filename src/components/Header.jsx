import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
function Header() {
    const logo = "https://res.cloudinary.com/dmzjba3cu/image/upload/v1717344503/memorable%20destination%20images/LOGO_-JPG_tvg44k.jpg"
    return (
        <div className=' max-w-6xl mx-auto flex justify-between items-center h-20 overflow-hidden'>
            <div className='bg-blue-300'>
                <img src={logo} alt="" className='h-32' />
            </div>
            <div className='relative w-1/2'>
                <IoMdSearch className='h-6 w-6 absolute top-4 left-2 text-gray-400' />
                <input type="text" placeholder='Where do you want to go!' className=' border border-gray-300 h-14 w-full rounded-lg pl-10 text-lg font-semibold' />
            </div>
            <div className='flex gap-4 items-center '>
                <button className='p-1 pl-2 pr-2 border bg-yellow-400 text-lg font-semibold rounded-lg border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Create a trip</button>
                <div >
                    <FaUserCircle className='h-10 w-10' />
                </div>
            </div>
        </div>
    )
}

export default Header