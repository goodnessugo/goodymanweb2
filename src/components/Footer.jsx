import React from 'react'
import whiteLogo from './assets/whitegoodyman.png'
import { TfiEmail } from "react-icons/tfi";
import { FaHouseChimney } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='h-[50vh] w-full bg-green-800 grid grid-cols-3 p-10 px-20 gap-20 text-white '>
      

        <div>
          <img src={whiteLogo} alt="" className='w-50 h-10 mb-2' />
          <h1>A computer school where computer science and skils, offering courses from basic skills to advanced topics. Students gain hands-on experience and earn certifications to boost their tech careers.</h1>
        </div>


        {/* social media links */}
        <div className='text-white '>
          <ul>
            <li><a href="http://">Education</a></li>
            <li><a href="http://">Research</a></li>
            <li><a href="http://">Innovation</a></li>
            <li><a href="http://">Admission</a></li>
            <li><a href="http://">About Us</a></li>
          </ul>
        </div>


        {/* contact details */}
        <div>
          <div className=''>
            <ul className=' text-white'>
              <li className='flex gap-2 items-center'><TfiEmail /><a href="http://">Email:****************</a></li>
              <li className='flex gap-2 items-center'><FaHouseChimney /><a href="http://"> School Bus Stop Ajangbadi Ojo, Lagos, Nigeri</a></li>
            </ul>

          </div>



        </div>


      </div>
    </div>
  )
}

export default Footer