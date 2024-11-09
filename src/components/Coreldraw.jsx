import React, { useState } from 'react'
import c1 from './assets/coreldraw/c1.jpg'
import c2 from './assets/coreldraw/c2.jpg'
import c3 from './assets/coreldraw/c3.jpg'
import c4 from './assets/coreldraw/c4.jpg'
import c5 from './assets/coreldraw/c5.jpg'
import c6 from './assets/coreldraw/c6.jpg'
import c7 from './assets/coreldraw/c7.jpg'
import c8 from './assets/coreldraw/c8.jpg'
import c9 from './assets/coreldraw/c9.jpg'
import c10 from './assets/coreldraw/c10.jpg'
import c11 from './assets/coreldraw/c11.jpg'
import c12 from './assets/coreldraw/c12.jpg'
import c13 from './assets/coreldraw/c13.jpg'
import c14 from './assets/coreldraw/c14.jpg'
import c15 from './assets/coreldraw/c15.jpg'
import c16 from './assets/coreldraw/c16.jpg'
import c17 from './assets/coreldraw/c17.jpg'
import c18 from './assets/coreldraw/c18.jpg'
import c19 from './assets/coreldraw/c19.jpg'
import c20 from './assets/coreldraw/c20.jpg'
import c21 from './assets/coreldraw/c21.jpg'
import c22 from './assets/coreldraw/c22.jpg'
import c23 from './assets/coreldraw/c23.jpg'
import c24 from './assets/coreldraw/c24.jpg'
import c25 from './assets/coreldraw/c25.jpg'
import c26 from './assets/coreldraw/c26.jpg'
import c27 from './assets/coreldraw/c27.jpg'
import c28 from './assets/coreldraw/c28.jpg'
import c29 from './assets/coreldraw/c29.jpg'


const Coreldraw = () => {


    // array to iterate through the images URL
    const images = [
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        c10,
        c11,
        c12,
        c13,
        c14,
        c15,
        c16,
        c17,
        c18,
        c19,
        c20,
        c21,
        c22,
        c23,
        c24,
        c25,
        c26,
        c27,
        c28,
        c29,
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

export default Coreldraw