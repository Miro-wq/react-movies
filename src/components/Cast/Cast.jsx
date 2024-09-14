import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/API/Api';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Failed to fetch cast details:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', listStyle: 'none', padding: 0 }}>
      {cast.length > 0 ? (
        cast.map(actor => (
          <li key={actor.id} style={{ width: '150px', textAlign: 'center' }}>
            <img
              src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : 'https://via.placeholder.com/150x225'}
              alt={actor.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p><strong>{actor.name}</strong></p>
            <p>as {actor.character}</p>
          </li>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </ul>
  );
};

export default Cast;
