import React, { useState, useEffect, useContext, useCallback } from 'react';
import { searchMovies } from 'components/API/Api';
import {useSearchParams, Link } from 'react-router-dom';
import { SearchHistoryContext } from 'components/SearchHistory/SearchHistory';
import styles from './Styles/Movies.module.css';
import noImage from '../images/noimg.png';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addSearchTerm } = useContext(SearchHistoryContext);


  const fetchMovies = useCallback(async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      addSearchTerm(searchQuery);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  }, [addSearchTerm]);


  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    setQuery(queryParam);
    if (queryParam) {
      fetchMovies(queryParam);
    }
  }, [searchParams, fetchMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div className={styles.movieSearch}>
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>Search</button>
    </form>
    {loading && <p className={styles.loadingMessage}>Loading...</p>}
    {error && <p className={styles.errorMessage}>{error}</p>}
    <ul className={styles.moviesList}>
      {movies.length > 0 ? (
        movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : noImage}
                alt={movie.title}
                className={styles.moviePoster}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))
      ) : (
        !loading && <li className={styles.noResult}>No movies found</li>
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

