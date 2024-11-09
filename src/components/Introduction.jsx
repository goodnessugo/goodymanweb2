import React, { useState } from 'react'
import I1 from './assets/introduction/I1.jpg'
import I2 from './assets/introduction/I2.jpg'
import I3 from './assets/introduction/I3.jpg'
import I4 from './assets/introduction/I4.jpg'
import I5 from './assets/introduction/I5.jpg'
import I6 from './assets/introduction/I6.jpg'
import I7 from './assets/introduction/I7.jpg'
import I8 from './assets/introduction/I8.jpg'
import I9 from './assets/introduction/I9.jpg'
import I10 from './assets/introduction/I10.jpg'
import I11 from './assets/introduction/I11.jpg'
import I12 from './assets/introduction/I12.jpg'
import I13 from './assets/introduction/I13.jpg'
import I14 from './assets/introduction/I14.jpg'
import I15 from './assets/introduction/I15.jpg'
import I16 from './assets/introduction/I16.jpg'
import I17 from './assets/introduction/I17.jpg'
import I18 from './assets/introduction/I18.jpg'
import I19 from './assets/introduction/I19.jpg'
import I20 from './assets/introduction/I20.jpg'
import I21 from './assets/introduction/I21.jpg'
import I22 from './assets/introduction/I22.jpg'
import I23 from './assets/introduction/I23.jpg'
import I24 from './assets/introduction/I24.jpg'
import I25 from './assets/introduction/I25.jpg'
import I26 from './assets/introduction/I26.jpg'
import I27 from './assets/introduction/I27.jpg'
import I28 from './assets/introduction/I28.jpg'
import I29 from './assets/introduction/I29.jpg'
import I30 from './assets/introduction/I30.jpg'
import I31 from './assets/introduction/I31.jpg'
import I32 from './assets/introduction/I32.jpg'
import I33 from './assets/introduction/I33.jpg'
import I34 from './assets/introduction/I34.jpg'
import I35 from './assets/introduction/I35.jpg'
import I36 from './assets/introduction/I36.jpg'
import I37 from './assets/introduction/I37.jpg'
import I38 from './assets/introduction/I38.jpg'
import I39 from './assets/introduction/I39.jpg'
import I40 from './assets/introduction/I40.jpg'
import I41 from './assets/introduction/I41.jpg'
import I42 from './assets/introduction/I42.jpg'
import I43 from './assets/introduction/I43.jpg'
import I44 from './assets/introduction/I44.jpg'
import I45 from './assets/introduction/I45.jpg'
import I46 from './assets/introduction/I46.jpg'
import I47 from './assets/introduction/I47.jpg'
import I48 from './assets/introduction/I48.jpg'
import I49 from './assets/introduction/I49.jpg'


const Introduction = () => {



  // array to iterate through the images URL
  const images = [
    I1,
    I2,
    I3,
    I4,
    I4,
    I5,
    I6,
    I7,
    I8,
    I9,
    I10,
    I11,
    I12,
    I13,
    I14,
    I15,
    I16,
    I17,
    I18,
    I19,
    I20,
    I21,
    I22,
    I23,
    I24,
    I25,
    I26,
    I27,
    I28,
    I29,
    I30,
    I31,
    I32,
    I33,
    I34,
    I35,
    I36,
    I37,
    I38,
    I39,
    I40,
    I41,
    I42,
    I43,
    I44,
    I45,
    I46,
    I47,
    I48,
    I49,
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
        <div className='flex justify-center gap-16 pt-5'>
          <button className='px-12 py-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleBack} disabled={currentIndex === 0} >Prev</button>
          <button className='px-12 py-2 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleNext} disabled={currentIndex === images.length - 1} >Next</button>
    
        </div>

      </div>

    </div>
  )
}

export default Introduction