import React from 'react'
import img1 from "./pic/quiz.jpg"
import img2 from "./pic/Netflix.png"
import img3 from "../assets/7449990.jpg"
import img4 from "../assets/ecommerce.jpg"
import ProjectWork from './ProjectWork'
import "../App.css"
import { ProjectData } from './AboutData'
export default function Projects() {
  return (
    <>
    <div className='px-3 md:px-0'>
    <h1 className='md:text-[32px] font-semibold text-[#7562E0] mb-3 text-[15px] mt-10 '>Featured projects:</h1>
    <p className='text-[11px] md:text-[18px] text-white' >I have worked on many projects over the course of being a Web Developer, here are a few of my projects</p>
  
    </div>
     <div className='grid place-items-center '>
    <div className='flex flex-nowrap flex-row overflow-x-scroll  mt-10 gap-9 w-[100%]'>
        {
            ProjectData.map((e,i)=>{
                return(
                    <ProjectWork img={e.img} title={e.title}  description={e.description} gitLink={e.gitLink} viewLink={e.viewLink}  />
                )
            })
        }
      
    </div>
    </div>
    </>
  )
}
