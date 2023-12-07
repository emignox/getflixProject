import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Define your backend API endpoint
    const apiUrl = 'http://localhost:8888/getflixProject/api/get_movies.php';

    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        console.log('Response data:', data);

        if (data && data.movies) {
          setMovies(data.movies);
        } else {
          console.error('Invalid data structure received from the server');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Movies</h1>
      <ul className='card'>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className='img' />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Movies;
