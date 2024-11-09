import React from 'react'
import { BiBookReader } from "react-icons/bi";
import BtnRegister from './BtnRegister';
import BtnLearnMore from '../BtnLearnMore';



const Courses = () => {
    return (
        <div>
            <section>
                <div className='flex justify-center items-center'>
                    <section className='hero  flex justify-center items-center w-full h-[80vh] bg-cover bg-no-repeat  brightness-50'>

                    </section>

                    <h1 className='text-7xl font-bold text-white  absolute'>Take <span>control of the Future</span></h1>

                </div>
            </section>


            {/* the courses  section */}
            <section>
                {/* ---------------------the first course-------------------- */}
                <div className='flex justify-center p-20  gap-20 w-screen h-auto '>
                    {/* the picture section */}
                    <div className="microsoft bg-gray-600 w-[30%]  flex justify-center items-end rounded-xl">



                        <div className='grid grid-cols-2 gap-5 p-5 text-white'>
                        <BtnLearnMore />
                        <BtnRegister />
                        </div>

                    </div>

                    {/* the description section */}
                    <div className='h-[50%] w-[50%] bg-gray-200 p-5 rounded-xl  '>
                        <h1 className='text-4xl font-bold mb-3'>Desktop Publishing Package</h1>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis accusamus accusantium nulla repellendus perferendis numquam quidem aliquid cupiditate. Fugiat natus aperiam eligendi quaerat recusandae asperiores, inventore deleniti quo maiores necessitatibus minus esse non, totam quae vel perferendis velit odit obcaecati iusto adipisci. Dicta eius voluptatum temporibus sint tempore dolore illum quis omnis cupiditate ex nobis, nulla error possimus nostrum sit fuga, nam quaerat hic explicabo neque! Nulla ducimus architecto ab, perferendis autem explicabo debitis consequatur repudiandae voluptatibus quisquam voluptate totam fugit vel quo odio. Praesentium laboriosam, perspiciatis mollitia nostrum quas maxime aperiam blanditiis. Incidunt excepturi animi modi error, ratione libero! Qui rem perferendis quaerat? </p>
                    </div>
                </div>

                {/* <hr className='w-[75vw] mx-40 border-0 h-1 bg-gray-100 rounded' /> */}

                {/* ---------------------the second course-------------------- */}
                <div className='flex flex-row-reverse justify-center px-20 pb-20  gap-20 w-screen h-auto'>

                    {/* the picture section */}
                    <div className="microsoft bg-gray-600 w-[30%]  flex justify-center items-end  rounded-xl">

                        <div className='grid grid-cols-2 gap-5 p-5 text-white'>
                        <BtnLearnMore />
                        <BtnRegister />
                        </div>

                    </div>

                    {/* the description section */}
                    <div className='h-[50%] w-[50%] bg-gray-200 p-5 rounded-xl'>
                        <h1 className='text-4xl font-bold mb-3'>Web Development/ Design Package</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis accusamus accusantium nulla repellendus perferendis numquam quidem aliquid cupiditate. Fugiat natus aperiam eligendi quaerat recusandae asperiores, inventore deleniti quo maiores necessitatibus minus esse non, totam quae vel perferendis velit odit obcaecati iusto adipisci. Dicta eius voluptatum temporibus sint tempore dolore illum quis omnis cupiditate ex nobis, nulla error possimus nostrum sit fuga, nam quaerat hic explicabo neque! Nulla ducimus architecto ab, perferendis autem explicabo debitis consequatur repudiandae voluptatibus quisquam voluptate totam fugit vel quo odio. Praesentium laboriosam, perspiciatis mollitia nostrum quas maxime aperiam blanditiis. Incidunt excepturi animi modi error, ratione libero! Qui rem perferendis quaerat? </p>
                    </div>
                </div>

                {/* ---------------------the third course-------------------- */}
                <div className='flex  justify-center px-20 pb-20  gap-20 w-screen h-auto'>

                    {/* the picture section */}
                    <div className="microsoft bg-gray-600 w-[30%]  flex justify-center items-end  rounded-xl">

                        <div className='grid grid-cols-2 gap-5 p-5 text-white'>
                            
                            <BtnLearnMore />
                            <BtnRegister />
                        </div>

                    </div>

                    {/* the description section */}
                    <div className='h-[50%] w-[50%] bg-gray-200 p-5 rounded-xl'>
                        <h1 className='text-4xl font-bold mb-3'>Graphics Design Package</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis accusamus accusantium nulla repellendus perferendis numquam quidem aliquid cupiditate. Fugiat natus aperiam eligendi quaerat recusandae asperiores, inventore deleniti quo maiores necessitatibus minus esse non, totam quae vel perferendis velit odit obcaecati iusto adipisci. Dicta eius voluptatum temporibus sint tempore dolore illum quis omnis cupiditate ex nobis, nulla error possimus nostrum sit fuga, nam quaerat hic explicabo neque! Nulla ducimus architecto ab, perferendis autem explicabo debitis consequatur repudiandae voluptatibus quisquam voluptate totam fugit vel quo odio. Praesentium laboriosam, perspiciatis mollitia nostrum quas maxime aperiam blanditiis. Incidunt excepturi animi modi error, ratione libero! Qui rem perferendis quaerat? </p>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Courses