import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/API/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieCast = await getMovieCredits(movieId);
        setCast(movieCast);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch cast details.");
      }
    };
    fetchCast();
  }, [movieId]);

  if (error) return <div>{error}</div>;
  if (cast.length === 0) return <div>Loading...</div>;

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;

