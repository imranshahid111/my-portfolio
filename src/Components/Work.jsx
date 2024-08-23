import React from 'react'
import img1 from "./pic/eversollogo.png"
export default function Work() {
  return (
    <>
    <div className='px-5'>
    <h1 className='md:text-[32px] font-semibold text-[#7562E0] mb-3 text-[15px] mt-10 '>Work Experience:</h1>
    <p className='text-[11px] md:text-[18px] text-white' >Hands-on experience as a Web Developer with a focus on delivering innovative and high-quality web solutions in my first role, contributing to the success of various projects through technical expertise and collaborative teamwork.</p>
 
    </div>
          <div class="mt-10 flex justify-center items-center w-[100%] h-auto p-5">
        
    <div class='flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
        <div class='w-full flex items-center justify-between'>
            <div class='flex items-center justify-center px-2 md:px-6'>
                <img class='w-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={img1} alt="" />
                <div class='text-left '>
                    <h4 class='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span class='text-red-500'>Eversols </span>ltd</h4>
                    <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>Software Engineer</h4>
                </div>
            </div>
            <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>June 2024 - Present </p>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>Shalamar bagh, Lahore</p>
            </div>
        </div>
        <div class='text-left p-2'>
            <p class='text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4'>I am a Software Engineer currently employed at Eversols, where I work as a Front-end developer as part of the Web Application Development team. Together, we utilize ReactJS and NodeJS to create software solutions that provide users with a seamless and enjoyable experience.</p>
            <h4 class='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
            <ul class='text-sm list-disc ml-6'>
                <li>Develop and maintain the NodeJS server and frontend of the Web Application team's software solutions.</li>
                <li>Collaborate with the full-stack developer to contribute to the application's frontend development.</li>
                <li>Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
            </ul>
        </div>
    </div>
</div>
</>
  )
}
