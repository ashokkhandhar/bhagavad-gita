import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, config } from '../config/apiConfig';
import loadingGif from '../assets/loading.gif';
import { VersesDropDown } from './DropDown';

const Chapter = () => {

  const { i } = useParams();

  const [chapter, setChapter] = useState([]);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Chapter ${i}`;

    const fetchData = async () => {
      try {
        const chapterResponse = await axios.get(`${API_URL}/chapters/${i}/`, config);
        setChapter(chapterResponse.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      
      try {
        const versesResponse = await axios.get(`${API_URL}/chapters/${i}/verses/`, config);
        setVerses(versesResponse.data);
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, [i]);

  return (
    <>
      {loading ? (
        <div className='h-96 flex justify-center items-center'>
          <img src={loadingGif} alt="Loading..." className='h-5 w-5'/>
        </div>
      ) : (
        <div className='flex justify-center'>
          <div className='lg:w-9/12 flex flex-col items-center gap-10'>
            <h2 className='pt-5 text-orange-500 font-medium text-xl'>Chapter {chapter.chapter_number}</h2>
            <h1 className='text-2xl font-semibold text-gray-700 dark:text-white'>{chapter.name}</h1>
            <p className='text-justify text-lg text-gray-500 dark:text-gray-300'>{chapter.chapter_summary}</p>
            <div className='flex items-center justify-between border-y border-gray-300 py-6 w-full'>
              <h2 className='font-medium dark:text-white'>{verses.length} Verses</h2>
              <VersesDropDown chapter_number={chapter.chapter_number} verses_count={chapter.verses_count} />
            </div>
            <div className='w-full flex flex-col gap-3'>
              {verses.map((verse) => (
                <Link 
                  to={`/chapter/${chapter.chapter_number}/verse/${verse.verse_number}`}
                  key={verse.verse_number}
                  className='flex flex-col lg:flex-row gap-2 lg:gap-0 bg-white dark:bg-neutral-800 p-4 lg:p-7 border-2 border-transparent rounded-lg hover:border-yellow-200 hover:bg-amber-50 dark:hover:bg-neutral-900 dark:hover:border-neutral-800'
                >
                  <h2 className='text-orange-500 font-semibold text-lg w-24'>
                    Verse {verse.verse_number}
                  </h2>
                  <p className='dark:text-white'>
                    {verse.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chapter;
