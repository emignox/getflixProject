import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './movies.css';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

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
    const apiUrl = 'http://localhost:8888/getflixProject/api/get_movies.php';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        //console.log('Response data:', data);
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
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Movies</h1>
      <div className='container'>
        {movies.map((movie) => (
          <div key={movie.id} className='card'>
            {/* Use Link to navigate to SingleMovie with movie ID */}
            <Link to={`/movies/watch/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className='img' />
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
