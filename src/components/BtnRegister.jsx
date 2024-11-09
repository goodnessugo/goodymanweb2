import React from 'react'
import { Link } from 'react-router-dom'

const BtnRegister = () => {
    return (
        <div>
            <Link to='/register'>
                <button className='px-7 py-3 bg-red-500 hover:bg-white hover:text-red-500  rounded-lg   shadow- '>Register</button>

            </Link>
        </div>
    )
}

export default BtnRegister