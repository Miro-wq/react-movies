import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "components/API/Api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch trending movies.");
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <p>{error}</p>}
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))
        ) : (
          <li>No movies found</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
