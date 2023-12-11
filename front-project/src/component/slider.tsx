import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

function MovieSlider() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const moviesPerSlide = 5;
  
    useEffect(() => {
      const apiUrl = 'http://localhost:8888/getflixProject/api/get_movies.php';
    
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          const data = response.data;
  
          if (data && data.movies) {
            setMovies(data.movies);
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const renderStars = (rating: number) => {
      const roundedRating = Math.round(rating);
      const starCount = Math.floor(roundedRating / 2);
    
      const fullStars = Array.from({ length: starCount }, (_, index) => (
        <span key={index} className="gold-star">&#9733;</span>
      ));
      
      return [fullStars];
    };
  
    const nextSlide = () => {
      setCurrentSlide((oldCurrentSlide) => {
        let nextSlide = oldCurrentSlide + 1;
        if (nextSlide * moviesPerSlide >= movies.length) nextSlide = 0;
        return nextSlide;
      });
    };
  
    const prevSlide = () => {
      setCurrentSlide((oldCurrentSlide) => {
        let prevSlide = oldCurrentSlide - 1;
        if (prevSlide < 0) prevSlide = Math.floor(movies.length / moviesPerSlide);
        return prevSlide;
      });
    };

  return (
    <>
    <h1 className='titreMovies mov  ' style={{ textAlign: 'center', marginTop: '2rem', color:'#53bb90', fontSize:'40px' }} >Movies</h1>
    <div className='container bg-white' >
      {movies.slice(currentSlide * moviesPerSlide, (currentSlide + 1) * moviesPerSlide).map((movie, index) => (
        <div key={movie.id} className={currentSlide === index ? 'slide-in' : 'slide-out'}>
          <Link to={`/movies/watch/${movie.id}`} className='card movie-link '>
            <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} className='img fadex' />
            <h5 className='movie-title'>{movie.title}</h5>
            <p className='rating'>Rating: {renderStars(movie.vote_average)}</p>          
          </Link>
        </div>
      ))}
      </div>
      <div className='d-flex justify-content-between '>
      <button  className='previous  bg-transparent border-0 rounded-4 mb-5 fs-1 'onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /> </button>
      <button className='next border-0 bg-transparent rounded-4 mb-5 fs-1 ' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

</>
  )
}

export default MovieSlider;