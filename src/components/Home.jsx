import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, config } from '../config/apiConfig.js';
import axios from 'axios';
import loadingGif from '../assets/loading.gif'; // Adjust the path to your GIF file

const Home = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Bhagavad Gita";

    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/chapters/`, config);
        setChapters(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='h-96 flex justify-center items-center'>
          <img src={loadingGif} alt="Loading..." className='h-5 w-5'/>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {chapters.map((chapter, index) => (
            <Link
              to={`/chapter/${chapter.chapter_number}`}
              key={chapter.chapter_number}
              className='bg-white dark:bg-neutral-800 p-4 border-2 border-transparent rounded-lg hover:border-yellow-200 hover:bg-amber-50 dark:hover:bg-neutral-900 dark:hover:border-neutral-800'
            >
              <h2 className='text-orange-500 font-semibold text-base pb-1'>
                Chapter: {chapter.chapter_number}
              </h2>
              <h1 className='text-gray-700 text-xl font-bold dark:text-white'>
                {chapter.name_translated}
              </h1>
              <p className='mt-2 text-gray-500 dark:text-gray-100'>
                {chapter.chapter_summary.substring(0, 250)}...
              </p>
              <div className="mt-4 flex items-center text-sm dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" className="mr-2">
                  <path fill="currentColor" fillRule="evenodd" d="M1.5 2.125a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75ZM5.656.812a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656Zm0 5.25a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656Zm0 5.25a.656.656 0 0 0 0 1.313H15.72a.656.656 0 0 0 0-1.313H5.656ZM2.375 6.5a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0ZM1.5 12.625a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z" clipRule="evenodd"></path>
                </svg>
                <span className="mb-1.5">
                  {chapter.verses_count} Verses
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;