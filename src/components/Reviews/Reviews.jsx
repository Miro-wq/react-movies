import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/Api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch reviews.");
      }
    };
    fetchReviews();
  }, [movieId]);

  if (error) return <div>{error}</div>;
  if (reviews === null) return <div>Loading...</div>; 
  return (
    <ul className={styles.reviewsList}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <h3 className={styles.reviewAuthor}>Author: {review.author}</h3>
            <p className={styles.reviewContent}>{review.content}</p>
          </li>
        ))
      ) : (
        <p className={styles.noReviews}>No reviews available.</p>
      )}
    </ul>
  );
};

export default Reviews;
