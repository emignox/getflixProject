import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import "./movie.css";

interface Trailer {
  trailerKey: string;
  trailerName: string;
}

const TrailerPage: React.FC = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/getflixProject/api/trailer.php?id=${id}`);
        const data = response.data;
        console.log(data);
        setTrailer(data);
      } catch (error) {
        console.error('Error fetching trailer:', error);
        setError('Error fetching trailer. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="trailer-page">
        <h2>{trailer?.trailerName}</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && !trailer && <div>No trailer available.</div>}
        {!loading && !error && trailer && (
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.trailerKey}`}
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TrailerPage;
