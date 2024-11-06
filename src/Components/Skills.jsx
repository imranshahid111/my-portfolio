
import React, { useEffect, useState } from 'react';
import { Info, Skill, Technical } from './AboutData';

export default function Skills() {
  const [widths, setWidths] = useState({});
  const [active, setActive] = useState(null);
  useEffect(() => {
    const initialActiveItem = Info.find(item => item.title === 'Front-End Skills') || null;
    setActive(initialActiveItem);
  }, []);
  // useEffect(() => {
  //       const timers = Skill.map((skill) => {
  //         return setTimeout(() => {
  //           setWidths(prevWidths => ({
  //             ...prevWidths,
  //             [skill.skill]: skill.value
  //           }));
  //         }, 100);
  //       });
    
  //       return () => timers.forEach(timer => clearTimeout(timer));
  //     }, []);

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className='flex md:flex-row flex-col-reverse'>
      <div className='md:w-[50%]'>
        <div className='grid place-items-center md:place-items-start'>
        <div className='grid grid-cols-2 gap-5 mt-8'>
         

          {Info.map((item) => (
            <div
              key={item.title} 
              onClick={() => handleClick(item)}
              className='w-[140px] md:w-56 h-24 bg-[#7562E0] text-sm md:text-md text-white rounded-lg grid place-content-center cursor-pointer' // Added cursor-pointer
            >
              {item.title}
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className='md:w-[50%] md:px-0 px-3 '>
        <div className='border-2 border-[#7562E0]  mt-8 rounded-xl h-[490px]'>
          <div className=' rounded-t-lg pt-[5px] text-white px-5 font-semibold text-xl border-b-2 bg-[#7562E0] h-10 border-[#7562E0]'>
            {active ? active.title : 'Select an item'} 
          </div>
          {active ? (
            active.skills.map((i, index) => (
              <div key={i.skill} className='w-full text-white mb-2 p-4'>
                <div className='w-[100%] flex'>
                  <div className='w-[50%]'>{i.skill}</div>
                  <div className='w-[50%] text-end'>{i.value + ' %'}</div>
                </div>
                <div className='bg-gray-300 w-[100%] rounded-lg'>
                <div
                      className='rounded-lg h-2 bg-blue-700'
                      style={{width: i.value+'%',  transition: "width 1s ease-in-out"}}
                    ></div>
                </div>
              </div>
            ))
          ) : (
            <p>Select an item to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}
