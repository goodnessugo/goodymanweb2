import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterValidation from './RegisterValidation';



const Register = () => {






    // useState a check for form submision to mysql database
    // const [values, setValues] = useState({

    //     firstname: '',
    //     lastname: '',
    //     male: '',
    //     female: '',
    //     dateofbirth: '',
    //     email: '',
    //     password: '',
    //     confirmpassword: '',
    //     image: '',

    // })

    // set errors
    const [errors, setErrors] = useState({})

    // the useNavigate hook , this controls our navigations like moving from one web page to another through authentication
    // const navigate = useNavigate();

    //   handleInput
    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // }


    // handleSubmit function
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(RegisterValidation(values));

    // calling the Api triggered when there is no error
    // if (errors.firstname === "" && errors.lastname === "" && errors.dateofbirth === "" && errors.email === "" && errors.password === "" && errors.confirmpassword === "") {

    //     axios.post('http://localhost:8081/register', values)
    //         .then(res => {
    //             navigate('/signin')
    //         })
    //         .then(res => console.log('Registered'))
    // .catch(err => console.log(err)); 
    //this catche any error and displays it
    // }

    // }


    // --------------------------------NEW LOGIC AND DATA ALGORITHM------------------------------------------
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

        // this controls the error
        // setErrors(RegisterValidation(values));

        // axios
        axios.post('http://localhost:8081/register', { firstname, lastname, male, female, dateofbirth, email, password, confirmpassword })
            .then(res => {
                console.log(res);
                navigate('/signin');
            }).catch(err => console.log(err));
    }



    return (
        <div className='bg-gray-100
        '>

            <div className=' flex flex-col h-screen w-screen justify-center items-center '>
                <div className=' bg-white p-10 rounded-lg'>
                    <h1 className='mb-3 text-3xl font-bold text-green-600'>Registration Form</h1>



                    {/* the form section  */}
                    <form action="" className='' onSubmit={handleSubmit}>


                        {/* first and last name */}
                        <div className='flex gap-10 mb-3'>
                            <div className="flex flex-col mb-3">
                                <label>First Name</label>
                                <input type="text" name="firstname" placeholder="Enter First Name" className='border-b outline-none' onChange={e => setFirstname(e.target.value)} />
                                {errors.firstname && <span className='text-red-400 text-xs'>{errors.firstname}</span>}
                            </div>

                            <div className="flex flex-col mb-3">
                                <label>Last Name</label>
                                <input type="text" name="lastname" placeholder="Enter Last Name" className='border-b outline-none' onChange={e => setLastname(e.target.value)} />
                                {errors.lastname && <span className='text-red-400 text-xs'>{errors.lastname}</span>}
                            </div>
                        </div>


                        {/* --------------------gender section-------------------- */}

                        <div className='grid grid-cols-2 mb-3'>
                            <div className='flex flex-col'>

                                {/* male section */}
                                <div className=" mb-3 flex items-center gap-1">
                                    <input type="checkbox" id='option1' name='male' value='male' onChange={e => setMale(e.target.value)} />
                                    <label>Male</label>

                                </div>

                                {/* female section */}
                                <div className="flex items-center gap-1 mb-3">

                                    <input type="checkbox" id='option2' name='female' value='female' onChange={e => setFemale(e.target.value)} />
                                    <label>Female</label>

                                </div>
                            </div>

                            {/* -------date of birth---------- */}
                            <div className="flex flex-col mb-3">
                                <label>D.O.B</label>
                                <input type="date" name="dateofbirth" className='border-b outline-none' onChange={e => setDateofbirth(e.target.value)} />
                                {errors.dateofbirth && <span className='text-red-400 text-xs'>{errors.dateofbirth}</span>}
                            </div>
                        </div>

                        {/* --------------------email----------------- */}
                        <div className="flex flex-col mb-3 ">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Email Address" className='border-b outline-none' name='email' onChange={e => setEmail(e.target.value)} />
                            {errors.email && <span className='text-red-400 text-xs'>{errors.email}</span>}
                        </div>



                        {/* --------------password ------------*/}
                        <div className="flex flex-col mb-3 ">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" className='border-b outline-none' name='password' onChange={e => setPassword(e.target.value)} />
                            {errors.password && <span className='text-red-400 text-xs'>{errors.password}</span>}
                        </div>




                        <div className="flex flex-col mb-3">
                            <label>Con. Password</label>
                            <input type="password" name="confirmpassword" placeholder="Enter password" className='border-b outline-none' onChange={e => setConfirmpassword(e.target.value)} />
                            {errors.confirmpassword && <span className='text-red-400 text-xs'>{errors.confirmpassword}</span>}
                        </div>


                        {/* ----------------upload profile image--------------------- */}
                        <div>
                            {/* <input type="file" />
                            <img src={file} alt="the profile image" className='w-20 h-20' onChange={handleInput} />
                            {errors.image && <span className='text-red-400'>{errors.image}</span>} */}
                        </div>
                        {/* <input type="file" onChang={handleInput}/>
                                <button onClick={handleUpload}>Upload</button> */}





                        {/* button section */}
                        <div className='flex justify-between gap-5'>
                            <Link to="/">
                                <button className='px-10 py-4 bg-red-500 ' >Cancel</button>
                            </Link>


                            <button className='px-10 py-4 bg-green-500' type='submit'>Create</button>


                        </div>

                        <div className='my-3 text-xs'>
                            <h1>Already have account ? <Link to='/signin'><span className='text-green-500 font-bold cursor-pointer'>Sign In</span></Link></h1>
                        </div>


                    </form>
                </div>

            </div>

        </div>
    )
}

export default Register