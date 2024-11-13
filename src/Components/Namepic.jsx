import React from 'react'
import myimage from "./pic/hero.png"
import { TypeAnimation } from 'react-type-animation'
export default function Namepic() {
  return (
    <div className='flex md:h-[550px] h-64 '>
        {/* left area */}
        <div className='md:w-[50%] w-[60%] mt-auto md:mb-20 mb-5  md:pl-0 pl-3'>
          <div className=''>
                <h1 className='text-white text-[20px] md:text-[32px] font-semibold'>Hello, i’m</h1>
                <h1 className='text-white text-[27px] md:text-[52px] font-semibold '>Imran Shahid</h1>
                <div className='w-[100%] md:w-[66%] mt-2'>
                  <p className='md:mb-5 text-white text-[9px] md:text-[15px] '>As a web developer, I build, and maintain websites and web applications using front-end technologies.</p>
                  <span className="text-white text-[12px] md:text-[22px] font-semibold">I am a </span>
                <TypeAnimation
      sequence={[
        'Front-End developer',
        1000, 
        'React-JS developer',
        1000,
        'Backend developer',
        1000,
        'Node-JS developer',
        1000,
        'MERN-Stack developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      className="font-bold text-[12px] md:text-[22px] inline-block text-red-600"
      repeat={Infinity}
    />
                 </div>
                <div className='md:space-x-5 md:mt-6 mt-3 '>
                <button type="button" class=" px-3.5 py-2 w-20 md:w-32 focus:outline-none text-white md:text-sm bg-[#7562E0] hover: font-medium rounded-md md:rounded-lg text-[10px] md:px-5 md:py-2.5 me-2 mb-2 dark: dark:hover: dark:">About me</button>
                <button type="button" class=" px-3.5 py-2 w-20 md:w-32 focus:outline-none md:text-sm text-white bg-[#7562E0]   focus: font-medium rounded-md md:rounded-lg text-[10px] md:px-5 md:py-2.5 me-2 mb-2 dark: dark:hover: dark:">Projects</button>
                </div>
                </div>
        </div>
        {/* Right area */}
        <div className='md:w-[50%] w-[40%] overflow-hidden flex justify-end md:pt-0 pt-16  '>
                <img className='md:w-auto w-36 md:h-auto h-36 ' src={myimage} alt="" />
        </div>
    </div>
  )
}
