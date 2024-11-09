import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Create = () => {

// this helps pic the input data from the inputs
const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [male, setMale] = useState('')
const [female, setFemale] = useState('')
const [dateofbirth, setDateofbirth] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmpassword, setConfirmpassword] = useState('')
// const [image, setImage] = useState('')

// this navigates us to a page when the submot button is clicked
const navigate = useNavigate();



// the handleSubmit with axios takes the data from the form to the backend using POST METHOD FORM AXIOS
function handleSubmit(event) {
    // prevents reloading of the webpage
    event.preventDefault();
    // axios
    axios.post('http://localhost:8081/create', {firstname, lastname, male, female, dateofbirth, email, password, confirmpassword})
    .then(res => {
        console.log(res);
        navigate('/student');
    }).catch(err => console.log(err));
}



    return (
        <div className='bg-green-500 w-screen h-screen flex justify-center items-center'>
            <div className='bg-white p-5 rounded-md w-[50vw]'>

                <form onSubmit={handleSubmit}>
                    <h2 className='text-3xl font-bold'>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">First Name</label>
                        <br/>
                        <input type="text" placeholder='Enter Name' className="w-full  text-2xl bg-gray-100 outline-none" 
                        onChange={e => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Last Name</label>
                        <br/>
                        <input type="text" placeholder='Enter Last Name' className="w-full  text-2xl bg-gray-100 outline-none"
                        onChange={e => setLastname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="" className='me-2'>Male </label>
                        
                        <input type="checkbox" placeholder='Enter Name' value="male" className="  text-2xl bg-gray-100 outline-none"
                        onChange={e => setMale(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="" className='me-2'>Female</label>
                        
                        <input type="checkbox" placeholder='Enter Name' value="female" className="  text-2xl bg-gray-100 outline-none"
                        onChange={e => setFemale(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Date of Birth</label>
                        <br/>
                        <input type="date" placeholder='Date of Birth' className="  text-2xl bg-gray-100 outline-none"
                        onChange={e => setDateofbirth(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <br/>
                        <input type="text" placeholder='Enter Email' className="w-full  text-2xl bg-gray-100 outline-none"
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Password</label>
                        <br/>
                        <input type="password" placeholder='Enter Password' className="w-full  text-2xl bg-gray-100 outline-none"
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Password</label>
                        <br/>
                        <input type="text" placeholder='Enter Password' className="w-full  text-2xl bg-gray-100 outline-none"
                        onChange={e => setConfirmpassword(e.target.value)}
                        />
                    </div>
                    {/* <div className='mb-2'>
                        <label htmlFor="">Image</label>
                        <input type="file" placeholder='Enter Image' />
                    </div> */}

                    <button className='px-8 py-4 bg-blue-500 w-full'>Submit</button>


                </form>
            </div>
        </div>
    )
}

export default Create