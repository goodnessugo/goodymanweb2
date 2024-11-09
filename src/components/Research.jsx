import React from 'react'
import art from './assets/use2.gif'

const Research = () => {
  return (
    <div>

      {/* the Hero section */}
      <section>
        <div className='flex justify-between items-start p-5  w-full h-screen '>


          <div className=' w-[50vw] h-screen flex flex-col justify-start items-center pt-40 '>
            <h1 className='font-bold text-8xl text-center text-green-600 '>Grow Daily </h1>
            <br />
            <h1 className='font-bold text-7xl text-center text-green-600 '> with <span className='text-orange-500'>Projects</span></h1>
            <br />
            <h1 className='flex justify-end font-bold italic text-gray-400'>...Goodyman</h1>
          </div>

          {/* the hero image */}
          <div>
            <img src={art} alt="" />
          </div>
        </div>
      </section>




    </div>
  )
}

export default Research