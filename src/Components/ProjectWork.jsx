
import React from 'react'

const ProjectWork = ({img , title , description , gitLink , viewLink}) => {
  return (
<div class="w-[301px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5 w-[280px]">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <div className='flex justify-between'>
            <a href={viewLink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Live
                 
            </a> 
            <a href={gitLink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#181824] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github Repo
                 
            </a>
            </div>
           
        </div>
    </div>  )
}

export default ProjectWork