import { useState, useEffect } from "react";
import axios from "axios";
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

function Jumbotron() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8888/getflixProject/api/get_movies.php";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        console.log("Response data:", data);

        if (data && data.movies && data.movies.length > 0) {
          setMovie(data.movies[0]); // Imposta il primo film
          console.log(
            `Image URL: https://image.tmdb.org/t/p/w300${data.movies[0].poster_path}`
          );
        } else {
          console.error("Invalid data structure received from the server");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="jumbotron d-flex align-items-center"
      style={{ height: "90vh", position: "relative" }}
    >
      <div className="col-10 video-container d-flex justify-content-center">
        {movie && (
          <>
            <div className="row" style={{ position: "absolute", zIndex: 5 }}>
              <h2
                className="mt-3 "
                style={{
                  color: " #53bb90",
                  fontSize: "60px",
                  fontWeight: 600,
                }}
              >
                {movie.title}
              </h2>
              <p
                style={{
                  color: "#0071b8",
                  fontSize: "20px",
                }}
                className="mt-3"
              >
                Release Date: {movie.release_date}
              </p>
              <p style={{ color: "#0071b8", fontSize: "20px" }}>
                Vote Average: {movie.vote_average}
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                zIndex: 4,
              }}
            ></div>
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 0,  
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "blur(30px)",
                zIndex: 1,
              }}
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
            />
            <img
              className="mb-3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
              }}
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Jumbotron;
