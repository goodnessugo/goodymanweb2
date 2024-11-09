import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import update from './Update'






const Student = () => {


    // this displays the data from database using useState
    const [student, setStudent] = useState([])

    // using useEffect to get data and print it out
    useEffect(() => {
        axios.get('http://localhost:8081/')
            // .then(res => console.log(res))
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, [])


    // the Delete arrow function
    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/student/' + id);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='p-5'>
            <Link to="/create">
                <button className='bg-green-500 px-8 py-5 mb-5'>Add +</button>
            </Link>

            <table>
                <thead>
                    <div className='' >
                        <tr className='flex justify-evenly '>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Male</th>
                            <th>Female</th>
                            <th>D.O.B</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm pasword</th>
                            {/* <th>image</th> */}
                            <th>Action</th>

                        </tr>
                    </div>

                </thead>


                {/* the table body collects the data and displays them */}
                <tbody className=''>
                    <div className='grid grid-row-9 gap-5'>
                        {
                            student.map((data, i) => (
                                <tr key={i} className='grid grid-cols-9 px-10'>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.male}</td>
                                    <td>{data.female}</td>
                                    <td>{data.dateofbirth}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.confirmpassword}</td>
                                    {/* <td>{data.image}</td> */}

                                    {/* the update and delete button */}
                                    <td className='flex gap-2'>
                                        <Link to={`/update/${data.id}`} className='px-8 py-4 bg-blue-400'>
                                            Update
                                        </Link>

                                        <button className='px-8 py-4 bg-red-400' onClick={() => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </div>

                </tbody>
            </table>
        </div>
    )
}

export default Student