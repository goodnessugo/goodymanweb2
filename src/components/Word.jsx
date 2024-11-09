import React, { useState } from 'react'
import w1 from './assets/word/w1.jpg'
import w2 from './assets/word/w2.jpg'
import w3 from './assets/word/w3.jpg'
import w4 from './assets/word/w4.jpg'
import w5 from './assets/word/w5.jpg'
import w6 from './assets/word/w6.jpg'
import w7 from './assets/word/w7.jpg'
import w8 from './assets/word/w8.jpg'
import w9 from './assets/word/w9.jpg'
import w10 from './assets/word/w10.jpg'
import w11 from './assets/word/w11.jpg'
import w12 from './assets/word/w12.jpg'
import w13 from './assets/word/w13.jpg'
import w14 from './assets/word/w14.jpg'
import w15 from './assets/word/w15.jpg'
import w16 from './assets/word/w16.jpg'
import w17 from './assets/word/w17.jpg'
import w18 from './assets/word/w18.jpg'
import w19 from './assets/word/w19.jpg'
import w20 from './assets/word/w20.jpg'
import w21 from './assets/word/w21.jpg'
import w22 from './assets/word/w22.jpg'
import w23 from './assets/word/w23.jpg'
import w24 from './assets/word/w24.jpg'
import w25 from './assets/word/w25.jpg'
import w26 from './assets/word/w26.jpg'
import w27 from './assets/word/w27.jpg'
import w28 from './assets/word/w28.jpg'
import w29 from './assets/word/w29.jpg'
import w30 from './assets/word/w30.jpg'
import w31 from './assets/word/w31.jpg'
import w32 from './assets/word/w32.jpg'
import w33 from './assets/word/w33.jpg'
import w34 from './assets/word/w34.jpg'








const Word = () => {


    // array to iterate through the images URL
    const images = [
        w1,
        w2,
        w3,
        w4,
        w5,
        w6,
        w7,
        w8,
        w9,
        w10,
        w11,
        w12,
        w13,
        w14,
        w15,
        w16,
        w17,
        w18,
        w19,
        w20,
        w21,
        w22,
        w23,
        w24,
        w25,
        w26,
        w27,
        w28,
        w29,
        w30,
        w31,
        w32,
        w33,
        w34,
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

export default Word