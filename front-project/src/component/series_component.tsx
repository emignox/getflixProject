import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface Serie {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
}

function SeriesSlider() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const seriesPerSlide = window.innerWidth < 500 ? 2 : 5;

  useEffect(() => {
    const apiUrl = "http://localhost:8888/getflixProject/api/get_series.php";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data && data.series) {
          setSeries(data.series);
        }
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    const starCount = Math.floor(roundedRating / 2);

    const fullStars = Array.from({ length: starCount }, (_, index) => (
      <span key={index} className="gold-star">
        &#9733;
      </span>
    ));

    return [fullStars];
  };

  const nextSlide = () => {
    setCurrentSlide((oldCurrentSlide) => {
      let nextSlide = oldCurrentSlide + 1;
      if (nextSlide * seriesPerSlide >= series.length) nextSlide = 0;
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((oldCurrentSlide) => {
      let prevSlide = oldCurrentSlide - 1;
      if (prevSlide < 0) prevSlide = Math.floor(series.length / seriesPerSlide);
      return prevSlide;
    });
  };

  return (
    <>
      <h1
        className="titreSeries mov"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#0071b8",
          fontSize: "40px",
        }}
      >
        Series
      </h1>
      <div className="container justify-content-center  slider-container bg-white ">
        {series
          .slice(
            currentSlide * seriesPerSlide,
            (currentSlide + 1) * seriesPerSlide
          )
          .map((serie, index) => (
            <div
              key={serie.id}
              className={currentSlide === index ? "slide-in" : "slide-out"}
            >
              <Link
                to={`/series/watch/${serie.id}`}
                className="card series-link"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w780${serie.poster_path}`}
                  alt={serie.name}
                  className="img fadex"
                />
                <h5 className="movie-title">{serie.name}</h5>
                <p className="rating">
                  Rating: {renderStars(serie.vote_average)}
                </p>
              </Link>
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-between ">
        <button
          className="previous  bg-transparent border-0 rounded-4 mb-5 fs-1"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="next border-0 bg-transparent rounded-4 mb-5 fs-1"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
}

export default SeriesSlider;
