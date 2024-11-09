import React, { useState } from 'react'
import p1 from './assets/powerpoint/p1.jpg'
import p2 from './assets/powerpoint/p2.jpg'
import p3 from './assets/powerpoint/p3.jpg'
import p4 from './assets/powerpoint/p4.jpg'
import p5 from './assets/powerpoint/p5.jpg'
import p6 from './assets/powerpoint/p6.jpg'
import p7 from './assets/powerpoint/p7.jpg'
import p8 from './assets/powerpoint/p8.jpg'
import p9 from './assets/powerpoint/p9.jpg'
import p10 from './assets/powerpoint/p10.jpg'
import p11 from './assets/powerpoint/p11.jpg'
import p12 from './assets/powerpoint/p12.jpg'
import p13 from './assets/powerpoint/p13.jpg'
import p14 from './assets/powerpoint/p14.jpg'
import p15 from './assets/powerpoint/p15.jpg'
import p16 from './assets/powerpoint/p16.jpg'
import p17 from './assets/powerpoint/p17.jpg'
import p18 from './assets/powerpoint/p18.jpg'
import p19 from './assets/powerpoint/p19.jpg'
import p20 from './assets/powerpoint/p20.jpg'
import p21 from './assets/powerpoint/p21.jpg'
import p22 from './assets/powerpoint/p22.jpg'

const Powerpoint = () => {

  // array to iterate through the images URL
  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19,
    p20,
    p21,
    p22,
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
          <button className='px-12 py-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleBack} disabled={currentIndex === 0} >Prev</button>
          <button className='px-12 py-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-300 font-bold' onClick={handleNext} disabled={currentIndex === images.length - 1} >Next</button>
        </div>

      </div>
    </div>
  )
}

export default Powerpoint