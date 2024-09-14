import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/API/Api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750'}
                alt={movie.title}
                style={{ width: '150px', height: '225px' }}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default Home;
