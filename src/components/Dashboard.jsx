import React, { useEffect, useState } from 'react'
import { BsFileSpreadsheet, BsPersonFill } from 'react-icons/bs'
import { FaGamepad } from 'react-icons/fa'
import { MdOndemandVideo } from 'react-icons/md'
import { BiSlideshow } from 'react-icons/bi'
import Word from './Word'
import Coreldraw from './Coreldraw';
import Excel from './Excel';
import Powerpoint from './Powerpoint';
import Introduction from './Introduction';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { PiStudent, PiStudentFill } from 'react-icons/pi';
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { FaPenNib } from 'react-icons/fa6'
import TutorialVideo from './TutorialVideo'









const Dashboard = () => {

    const [introduction, setIntroduction] = useState(true);
    const [word, setWord] = useState(false);
    const [excel, setExcel] = useState(false);
    const [powerpoint, setPowerpoint] = useState(false);
    const [coreldraw, setCoreldraw] = useState(false);
    const [tutorialvideo, setTutorialvideo] = useState(false);


    // -------------------------retrieving userdata from database---------------- 
    //    creating useState for students/users
    const [userData, setUserdata] = useState([]);


    // useParams get the students id from the login
    const { id } = useParams();






    return (
        <div>
            <div className=' lectureContainer grid grid-cols-2 justify-between   px-10'>
                {/* profile section */}
                <div className=' flex'>
                    <div className='bg-green-500 h-[85vh] w-[100%] my-5 rounded-lg flex flex-col items-center '>

                        {/* profile picture and name */}
                        <div className='flex flex-col justify-center items-center py-10 gap-3'>
                            {/* profile image */}
                            <div className='h-36 w-36 bg-white rounded-full flex justify-center items-center text-8xl text-gray-300 shadow-lg'><BsPersonFill /></div>
                            <h1 className='text-white font-bold'>George Goodness</h1>
                        </div>

                        <div className='bg-white h-[50%] w-[90%] rounded-lg p-3 '>

                            {/* for  the levels of the student */}
                                <div className='bg-gray-200 hover:bg-gray-400 hover:text-white w-full h-12 rounded-lg flex items-center pl-3 gap-2 mb-3 cursor-pointer'> <PiStudentFill className='text-2xl' /> 5/0 Complete</div>
                            

                            {/* for the Games */}
                                <div className='bg-gray-200 hover:bg-gray-400 hover:text-white w-full h-12 rounded-lg flex items-center pl-3 gap-2 mb-3 cursor-pointer'> <FaGamepad className='text-2xl' /> Games</div>
                            



                            {/* the  tutorial videos */}
                                <div className='bg-gray-200 hover:bg-gray-400 hover:text-white w-full h-12 rounded-lg flex items-center pl-3 gap-2 mb-3 cursor-pointer' onClick={() => { setTutorialvideo(!tutorialvideo); setIntroduction(false); setExcel(false); setPowerpoint(false); setWord(false); setCoreldraw(false) }}> <MdOndemandVideo className='text-2xl' />Tutorial Videos</div>

                            


                        </div>


                    </div>

                    {/* each button has an onClick eventListener that helps call the components */}
                    <div className='flex flex-col gap-5 p-5'>
                        <button className='flex jusity-between items-center gap-2 px-5 py-3 bg-orange-500 rounded-lg shadow-lg hover:bg-orange-300' onClick={() => { setIntroduction(!introduction); setWord(false); setExcel(false); setPowerpoint(false); setCoreldraw(false) }}> <PiStudentFill className='text-2xl' />  Introduction</button>

                        <button className='flex jusity-between items-center gap-2 px-5 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-300' onClick={() => { setWord(!word); setIntroduction(false); setExcel(false); setPowerpoint(false); setCoreldraw(false) }}> <HiOutlineBookOpen className='text-2xl' />  Word</button>

                        <button className='flex jusity-between items-center gap-2 px-5 py-3 bg-green-500 rounded-lg shadow-lg hover:bg-green-300' onClick={() => { setExcel(!excel); setIntroduction(false); setCoreldraw(false); setPowerpoint(false); setWord(false) }}><BsFileSpreadsheet className='text-2xl' /> Excel</button>

                        <button className='flex jusity-between items-center gap-2 px-5 py-3 bg-red-500 rounded-lg shadow-lg hover:bg-red-300' onClick={() => { setPowerpoint(!powerpoint); setIntroduction(false); setExcel(false); setCoreldraw(false); setWord(false) }}> <BiSlideshow className='text-2xl' />  Powerpoint</button>

                        <button className='flex jusity-between items-center gap-2 px-5 py-3 bg-green-600 rounded-lg shadow-lg hover:bg-green-300' onClick={() => { setCoreldraw(!coreldraw); setIntroduction(false); setExcel(false); setPowerpoint(false); setWord(false) }}><FaPenNib className='text-2xl' />Corel Draw</button>
                    </div>
                </div>


                {/* the class section */}
                <div className='h-full'>
                    {word === true ? <Word /> : null}
                    {coreldraw === true ? <Coreldraw /> : null}
                    {excel === true ? <Excel /> : null}
                    {powerpoint === true ? <Powerpoint /> : null}
                    {introduction === true ? <Introduction /> : null}
                    {tutorialvideo === true ? <TutorialVideo/> : null}
                </div>

            </div>
        </div>
    )
}

export default Dashboard