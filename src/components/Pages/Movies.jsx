import React, { useState } from 'react';
import { searchMovies } from 'components/API/Api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
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
            <li key={movie.id}>{movie.title}</li>
          ))
        ) : (
          !loading && <li>No movies found</li>
        )}
      </ul>
    </div>
  );
};

export default Movies;
