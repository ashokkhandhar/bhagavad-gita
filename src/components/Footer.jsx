import React from 'react';

const Footer = () => (
  <footer 
    className='h-16 flex flex-col justify-center items-center gap-1 md:h-14 md:flex-row md:gap-3 text-gray-400 text-base dark:bg-neutral-800'
    >
    <span>© {new Date().getFullYear()}  Copyright</span>
    <div className='hidden md:block'>|</div>
    <div>
        <a 
          className='text-orange-500 hover:underline' 
          href='https://github.com/ashokkhandhar/bhagavad-gita' 
          target='_blank'
          rel="noopener noreferrer"
        >
          code
        </a> with ❤️ by <a 
          className='text-orange-500 hover:underline' 
          href='http://ashokkhandhar.netlify.app/' 
          target='_blank'
          rel="noopener noreferrer"
        >
          Ashok Khandhar
        </a>
    </div>
  </footer>
);

export default Footer;