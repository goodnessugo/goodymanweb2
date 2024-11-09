import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterValidation from './RegisterValidation';


const Upload = () => {


    // -------------------------handleFile for image upload-------------------------
    // first call useState
    const [file, setFile] = useState();

    // then the handleFile function
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    // the handleUpload function
    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:8081/upload', formdata)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    // -------------------------END of handleFile for image upload-------------------------





    return (
        <div>

            {/* image upload */}
            <div>
                <input type="file" onChange={handleFile} />
                <button onClick={handleUpload}>Upload</button>
            </div>

        </div>
    )
}

export default Upload