import React, { useState } from 'react';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative bg-[#181824] border-gray-200 dark:bg-gray-900">
      <div className=" flex items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-[#7562E0] text-2xl font-semibold whitespace-nowrap dark:text-white">
            Imran Shahid
          </span>
        </a>
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Mobile menu overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-gray-900 bg-opacity-100 z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
          id="mobile-menu"
          style={{ width: '160px' }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={handleToggle}
              className="text-white text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center  h-full space-y-4 text-white">
            <li>
              <a href="#" className="text-2xl" onClick={handleToggle}>Home</a>
            </li>
            <li>
              <a href="#" className="text-2xl" onClick={handleToggle}>About me</a>
            </li>
            <li>
              <a href="#" className="text-2xl" onClick={handleToggle}>Projects</a>
            </li>
            <li>
              <a href="#" className="text-2xl" onClick={handleToggle}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#7562E0] md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About me</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
