import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { getMovieDetails } from 'components/API/Api';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

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
    localStorage.removeItem('searchResults');
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      <h1>{movie.title}</h1>
      <div style={{ display: 'flex' }}>
        <img
          src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750'}
          alt={movie.title}
          style={{ width: '200px', marginRight: '20px' }}
        />
        <div>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
      <nav>
        <Link to="cast">Cast</Link> | <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
