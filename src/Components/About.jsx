import React, { useState } from 'react'
import { AboutData } from './AboutData'

export default function About() {
    const [hovver , sethovver] = useState(0);
  return (
    <div className='bg-[#181824] mt-12 px-3 md:px-0'>
        <h1 className='md:text-[32px] font-semibold text-[#7562E0] mb-3 text-[15px] '>About me</h1>
        <p className='md:text-[18px] text-[9px] font-poppins text-white pr-3'>Hi, my name is Imran Shahid. I am a Front-End Developer with a strong foundation in web development and advanced UI design principles. I specialize in creating responsive, visually appealing user interfaces and seamless user experiences. With expertise in HTML, CSS, and JavaScript.</p>
       <div className='flex mt-3'>
       <div className='md:text-8xl text-7xl font-bold text-[#7562E0]'>
            1+
        </div>
        <span className='text-[11px] md:text-[24px] pt-4 text-white pl-1'>Years of experience. Specialised in building responsive webs, while ensuring a seamless
        web experience for end users.</span>
       </div>
       
        <div className='flex md:flex-row flex-col justify-around pt-8 gap-2'>
            {
                AboutData.map((v,i)=>{
                    return(
                        <div key={i} onClick={()=>sethovver(i)} className={`${hovver === i?"bg-[#7562E0]":"bg-[#f0eeee]"} text-  flex-1 h-56 grid place-content-center`}>
                            <div className=' h-48 pt-[22px]'>
                            <img className='w-20' src={v.png} alt="" />
                            <p className='text-xl'>{v.up}</p>
                            <p className='text-xl'>{v.low}</p>
                            </div>
                         
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
