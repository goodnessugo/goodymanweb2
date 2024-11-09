import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signin = () => {








  return (
    <div>

      <div className=' flex flex-col h-screen w-screen justify-center items-center bg-gray-200 '>
        <div className=' bg-white p-10 rounded-lg'>
          <h1 className='mb-5 text-3xl font-bold text-green-600'>Sign In </h1>


          <form action="" className='' >

            {/* --------------------email----------------- */}
            <div className="flex flex-col mb-3">
              <label>Email</label>
              <input type="text" placeholder="Enter Email Address" className='border-b outline-none' name='email' />


            </div>

            {/* --------------password ------------*/}
            <div className="flex flex-col mb-10">
              <label>Password</label>
              <input type="password" placeholder="Enter password" className='border-b outline-none' name='password' />


            </div>


            {/* button section */}
            <div className='flex justify-between gap-5'>
              <Link to='/register'>
                <button className='px-10 py-4 bg-red-500'>Sign Up</button>
              </Link>

              <Link to='/dashboard'>
              <button className='px-10 py-4 bg-green-500' type='submit'>Log In</button>

              </Link>
              



            </div>

            <div className='my-3 text-xs'>
              <h1>Don't have an account ? <Link to='/register'><span className='text-green-500 font-bold cursor-pointer'>Create Account</span></Link></h1>
            </div>


          </form>
        </div>

      </div>


    </div>
  )
}

export default Signin