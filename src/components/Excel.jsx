import React, { useState } from 'react'
import e1 from './assets/excel/e1.jpg'
import e2 from './assets/excel/e1.jpg'
import e3 from './assets/excel/e1.jpg'
import e4 from './assets/excel/e1.jpg'
import e5 from './assets/excel/e5.jpg'
import e6 from './assets/excel/e6.jpg'
import e7 from './assets/excel/e7.jpg'
import e8 from './assets/excel/e8.jpg'
import e9 from './assets/excel/e9.jpg'
import e10 from './assets/excel/e10.jpg'
import e11 from './assets/excel/e11.jpg'
import e12 from './assets/excel/e12.jpg'
import e13 from './assets/excel/e13.jpg'
import e14 from './assets/excel/e14.jpg'
import e15 from './assets/excel/e15.jpg'
import e16 from './assets/excel/e16.jpg'
import e17 from './assets/excel/e17.jpg'
import e18 from './assets/excel/e18.jpg'
import e19 from './assets/excel/e19.jpg'
import e20 from './assets/excel/e20.jpg'
import e21 from './assets/excel/e21.jpg'
import e22 from './assets/excel/e22.jpg'
import e23 from './assets/excel/e23.jpg'
import e24 from './assets/excel/e24.jpg'
import e25 from './assets/excel/e25.jpg'
import e26 from './assets/excel/e26.jpg'
import e27 from './assets/excel/e27.jpg'
import e28 from './assets/excel/e28.jpg'
import e29 from './assets/excel/e29.jpg'
import e30 from './assets/excel/e30.jpg'
import e31 from './assets/excel/e31.jpg'
import e32 from './assets/excel/e32.jpg'
import e33 from './assets/excel/e33.jpg'
import e34 from './assets/excel/e34.jpg'
import e35 from './assets/excel/e35.jpg'
import e36 from './assets/excel/e36.jpg'
import e37 from './assets/excel/e37.jpg'
import e38 from './assets/excel/e38.jpg'
import e39 from './assets/excel/e39.jpg'
import e40 from './assets/excel/e40.jpg'

const Excel = () => {


  // array to iterate through the images URL
  const images = [
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    e9,
    e10,
    e11,
    e12,
    e13,
    e14,
    e15,
    e16,
    e17,
    e18,
    e19,
    e20,
    e21,
    e22,
    e23,
    e24,
    e25,
    e26,
    e27,
    e28,
    e29,
    e30,
    e31,
    e32,
    e33,
    e34,
    e35,
    e36,
    e37,
    e38,
    e39,
    e40,
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // function to handle the "Next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  // function to handle the "Back" button click
  const handleBack = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };






  return (
    <div>
      {/* the class section */}
      <div className='bg-gray-500 h-screen w-[100%] flex flex-col justify-start items-center   '>

        {/* the lecture preview section  */}
        <div className='bg-white  w-[90%] h-[75%] overflow-x-hidden mt-5 '>

          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className='w-full h-auto' />
        </div>
        {/* ------------------the control buttons--------------- */}
        <div className='flex justify-center gap-10 pt-5'>
          <button className='px-12 py-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleBack} disabled={currentIndex === 0} >Prev Page</button>
          <button className='px-12 py-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleNext} disabled={currentIndex === images.length - 1} >Next Page</button>
        </div>

      </div>
    </div>
  )
}

export default Excel