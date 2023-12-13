import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Serie {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
}

function TopRatedSeries() {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.themoviedb.org/3/tv/top_rated',
        {
          params: {
            api_key: '01fd56a673d7b722de210fadfb094f1f',
          },
        }
      );

      setSeries(result.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      {series.map((serie) => (
        <div key={serie.id}>
          <h2>{serie.name}</h2>
          <img className=' w-25' src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
          <p>Rating: {serie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default TopRatedSeries;