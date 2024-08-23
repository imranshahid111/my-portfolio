import React from 'react'
import img1 from "./pic/quiz.jpg"
import img2 from "./pic/Netflix.png"
import img3 from "./pic/Cassino.png"
export default function Projects() {
  return (
    <>
    <div className='px-3 md:px-0'>
    <h1 className='md:text-[32px] font-semibold text-[#7562E0] mb-3 text-[15px] mt-10 '>Featured projects:</h1>
    <p className='text-[11px] md:text-[18px] text-white' >I have worked on many projects over the course of being a Web Developer, here are a few of my projects</p>
  
    </div>
     <div className='grid place-items-center'>
    <div className='flex md:flex-wrap md:flex-row flex-col md:justify-evenly mt-10 gap-9 '>
        
    <div class="w-[301px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={img1} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz Application</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A dynamic React quiz app that offers interactive multiple-choice questions with real-time scoring.</p>
            <div className='flex justify-between'>
            <a href="https://quiz-app-react-tau-sable.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Live
                 
            </a> 
            <a href="https://github.com/imranshahid111/quiz-app-react.git" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#181824] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github Repo
                 
            </a>
            </div>
           
        </div>
    </div>

    
    <div class="w-[301px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="">
            <img class="rounded-t-lg " src={img3} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Number Guessing Game</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A React-based game where players guess a random number within a range.</p>
            <div className='flex justify-between'>
            <a href="https://cassino-react-project.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Live
                 
            </a> 
            <a href="https://github.com/imranshahid111/Cassino-react-project.git" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#181824] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github Repo
                 
            </a>
            </div>
        </div>
    </div>


    <div class="w-[301px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={img2} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Netflix</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A sleek Netflix clone built with React and styled using Tailwind CSS, featuring a responsive interface.</p>
            <div className='flex justify-between'>
            <a href="https://net-flixclonebyimran.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Live
                 
            </a> 
            <a href="https://github.com/imranshahid111/Netflix-clone-tailwind.git" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#181824] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github Repo
                 
            </a>
            </div>
        </div>
    </div>


    </div>
    </div>
    </>
  )
}
