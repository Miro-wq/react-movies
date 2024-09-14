import React, { useState, useEffect } from 'react';
import { searchMovies } from 'components/API/Api';
// import styles from '../Pages/Styles/Movies.module.css';
import {useSearchParams, Link } from 'react-router-dom';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    setQuery(queryParam);
    if (queryParam) {
      fetchMovies(queryParam);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {movies.length > 0 ? (
          movies.map(movie => (
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
          ))
        ) : (
          !loading && <li>No movies found</li>
        )}
      </ul>
    </div>
  );
};

export default Movies;

// const Movies = () => (
//   <div>
//     <h2>Movies Page</h2>
//     <p>If you see this, the component is being rendered.</p>
//   </div>
// );

// export default Movies;

