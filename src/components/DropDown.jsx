import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const ChapterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const chapterCount = 18;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 focus:border-orange-400 dark:text-white"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <div className='pb-1'>Chapters</div>
          <svg
            className="-mr-1 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:ring-neutral-700 min-w-max"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="p-2 grid grid-cols-6" role="none">
            {[...Array(chapterCount)].map((_, i) => (
              <Link 
                to={`/chapter/${i + 1}`} 
                key={i} 
                className='text-gray-700 text-center p-2 rounded-md hover:bg-orange-500 hover:text-white dark:text-white' 
                role='menuitem'
                onClick={handleMenuItemClick}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const VersesDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { chapter_number, verses_count } = props;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center rounded-md border border-gray-300 px-4 py-2 font-medium text-gray-700 focus:border-orange-400 dark:text-white"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <div className='pb-1'>Verses</div>
          <svg
            className="-mr-1 ml-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:ring-neutral-700 min-w-max"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="p-2 grid grid-cols-10" role="none">
            {[...Array(verses_count)].map((_, i) => (
              <Link 
                to={`/chapter/${chapter_number}/verse/${i+1}`} 
                key={i} 
                className='text-gray-700 text-center p-2 rounded-md hover:bg-orange-500 hover:text-white dark:text-white' 
                role='menuitem'
                onClick={handleMenuItemClick}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};