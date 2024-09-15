import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/API/Api';
import styles from './Cast.module.css';
import noImage from '../images/noimg.png';

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
    <ul className={styles.castList}>
      {cast.length > 0 ? (
        cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img
              src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : noImage}
              alt={actor.name}
            />
            <p><strong>{actor.name}</strong></p>
            <p>as {actor.character}</p>
          </li>
        ))
      ) : (
        <p className={styles.noCastInfo}>No cast information available.</p>
      )}
    </ul>
  );
};

export default Cast;
