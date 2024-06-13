import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChapterDropdown } from './DropDown';

const Header = () => {
  const theme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(theme === "dark" ? true : false);

  if(darkMode) {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className='p-5 flex justify-between dark:bg-neutral-800'>
      <Link to="/"><h1 className='text-gray-700 text-3xl font-bold dark:text-white'>Bhagavad Gita</h1></Link>
      <div className='flex items-center'>
        <button 
          type="button" 
          onClick={toggleTheme} 
          className="group mx-2 h-10 w-10  rounded p-2 dark:hover:bg-dark-bg"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="hidden h-6 w-6 text-yellow-300 group-hover:text-yellow-600 dark:block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 group-hover:text-gray-900 dark:hidden" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        </button>
        <ChapterDropdown />
      </div>
    </header>
  );
};

export default Header;