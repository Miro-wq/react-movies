import React, { useEffect, useState, useContext } from 'react';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'components/API/Api';
import { SearchHistoryContext } from 'components/SearchHistory/SearchHistory';
import styles from './Styles/MovieDetailes.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { searchHistory } = useContext(SearchHistoryContext);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleGoBack = () => {
    if (searchHistory.length > 0) {
      const lastSearch = searchHistory[searchHistory.length - 1];
      if (lastSearch) {
        navigate(`/movies?query=${encodeURIComponent(lastSearch)}`);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.movieDetailsContainer}>
      <button onClick={handleGoBack}>Go back</button>
      <h1>{movie.title}</h1>
      <div className={styles.movieDetails}>
        <img
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750'}
          alt={movie.title}
        />
        <div>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
      <nav className={styles.navContainer}>
      <Link to="cast" className={styles.navLink}>Cast</Link>
      <span className={styles.navSeparator}>|</span>
      <Link to="reviews" className={styles.navLink}>Reviews</Link>
    </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
