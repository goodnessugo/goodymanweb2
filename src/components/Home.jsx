import React from 'react'
import bike from './assets/bike.gif'


import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BiArrowToBottom, BiCycling } from "react-icons/bi";
import { BiBookReader } from "react-icons/bi";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaPeoplePulling } from "react-icons/fa6";
import { PiCertificateDuotone } from "react-icons/pi";


// partners logo
import HP from './assets/hp.png'
import Microsoft from './assets/microsoft.jpg'
import Google from './assets/google.png'
import Photoshop from './assets/photoshop.png'
import Coreldraw from './assets/coreldraw.jpg'
import Dell from './assets/dell.png'


const Home = () => {





  return (
    <div className='bg-gray-100'>
      <main className=''>

        {/* new hero section */}

        <section>
          <div className='flex justify-between items-center px-20 bg-[#FCFEFC] w-full h-screen'>
            {/* educational image */}
            <div>
              <img src={bike} alt="cycling a bike" />
            </div>

            {/* write up */}
            <div className=' w-[50vw] h-screen flex flex-col justify-center items-center '>
              <h1 className='font-bold text-9xl text-center text-green-600 mb-2'>Learn At Your <span className='text-orange-500'>Pace</span></h1>
              <h1 className='flex justify-end font-bold italic text-gray-400'>...Goodyman</h1>
            </div>
          </div>
        </section>

        {/* end of hero section */}
        <div className='flex justify-center items-center relative mb-5'>
          <hr className='w-[75vw] border-0 h-1 bg-gray-100 rounded' />
          <div className='w-20 h-20 bg-green-500 absolute rounded-full flex justify-center items-center text-4xl text-white animate-bounce'><BiArrowToBottom className='' /></div>
        </div>


        {/* list of experience section */}
        <section className=''>
          <div className='flex flex-col p-10 justify-between items-center '>
            <div className='grid grid-cols-3 p-10 gap-10 shadow-md'>

              <div className='bg-green-500 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-white hover:bg-green-600 ease-in cursor-pointer  '>
                <HiOutlineComputerDesktop className='text-7xl ' />
                <h1 className='font-bold'>Ease Access to Information</h1>
              </div>

              <div className='bg-green-500 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-white hover:bg-green-600 ease-in cursor-pointer'>
                <BiCycling className='text-7xl' />
                <h1 className='font-bold'>Flexible Learning Experience</h1>
              </div>

              <div className='bg-green-500 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-white hover:bg-green-600 ease-in cursor-pointer'>
                <BiBookReader className='text-7xl' />
                <h1 className='font-bold'>Arranged Curriculum</h1>
              </div>

            </div>

            {/* second line */}
            <div className='grid grid-cols-3 p-10 gap-10 shadow-md text-white '>

              <div className='bg-green-600 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-black hover:bg-green-500 ease-in cursor-pointer'>
                <TfiAlarmClock className='text-7xl' />
                <h1 className='font-bold'>Scheduled Lecture Time</h1>
              </div>

              <div className='bg-green-600 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-black hover:bg-green-500 ease-in cursor-pointer'>
                <FaPeoplePulling className='text-7xl' />
                <h1 className='font-bold'>Co-Learning Environment</h1>
              </div>

              <div className='bg-green-600 h-80 w-80 rounded-3xl flex flex-col justify-center items-center  hover:text-black hover:bg-green-500 ease-in cursor-pointer'>
                <PiCertificateDuotone className='text-7xl' />
                <h1 className='font-bold'>Certification Issuance</h1>
              </div>

            </div>

          </div>


        </section>




        {/* --------------------partnership section--------------- */}

        <section>
          <div className='flex justify-center items-center p-5'>
            <h1 className='font-bold text-6xl '>Brands We Use</h1>
          </div>


          {/*--------------------- the list of partners---------------- */}
          <div className=' '>
            <div className='w-screen h-auto grid grid-cols-6 items-center  p-10 gap-10  bg-white'>

              <img src={Dell} alt="" className='w-40 h-40 ' />
              <img src={HP} alt="" className='w-40 h-40 ' />
              <img src={Microsoft} alt="" className='w-40 h-40 ' />
              <img src={Coreldraw} alt="" className='w-40 h-40 ' />
              <img src={Photoshop} alt="" className='w-40 h-40 ' />
              <img src={Google} alt="" className='w-40 h-20 hover:scale-125' />



            </div>
          </div>


        </section>



      </main>
    </div>
  )
}

export default Home