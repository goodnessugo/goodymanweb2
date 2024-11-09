import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 bg-white top-0 sticky w-full z-[10] border-b-2 border-gray-50'>
            <div className='pt-2'>
                <Link to='/'>
                    <div className="logo  w-36 h-12 bg-contain bg-no-repeat bg-[url('./components/assets/goodymanlogo.png')] "></div>
                </Link>

            </div>

            <div className='link'>
                <ul className='flex  '>
                    <Link to="/"><li> <a href="#">Home</a> </li></Link>
                    <Link to="/courses"><li> <a href="#">Courses</a> </li></Link>
                    <li> <a href="/research">Research</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="/student">Student</a> </li>
                    <Link to="/signin">
                        <button className='px-8 py-4 bg-green-500 text-white '>Login / Register</button>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Navbar