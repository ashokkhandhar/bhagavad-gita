import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, config } from "../config/apiConfig";
import loadingGif from '../assets/loading.gif';

const Verse = () => {
	const { i, j } = useParams();

	const [verse, setVerse] = useState([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.title = `Chapter ${i}, Verse ${j}`;

		const fetchData = async () => {
			try {
				const response = await axios.get(`${API_URL}/chapters/${i}/verses/${j}/`, config);
        setVerse(response.data);
        setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(false);
			}
		}
		fetchData();
	}, []);

  return (
    <>
      {loading ? (
        <div className='h-96 flex justify-center items-center'>
          <img src={loadingGif} alt="Loading..." className='h-5 w-5'/>
        </div>
      ) : (
        <div className='flex justify-center'>
          <div className='lg:w-9/12 flex flex-col items-center gap-10 mt-10'>
            <h2 className="text-xl font-medium dark:text-white">{`Chapter ${i}, Verse ${j}`}</h2>
            <h1 className="text-orange-500 text-2xl font-medium">
              {verse.text.substring(0, verse.text.search('।')+1)}
              <br/>
              {verse.text.substring(verse.text.search('।')+1, verse.length)}
            </h1>
            <p className="text-justify text-gray-600 text-xl dark:text-gray-200">{verse.transliteration}</p>
            <div className="border-t border-gray-300 py-6">
              <h3 className="text-center text-xl font-semibold dark:text-white">Translation:</h3>
              <p className="mt-4 text-justify text-xl dark:text-white">{verse.translations[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Verse;