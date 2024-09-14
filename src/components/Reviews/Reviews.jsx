import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/Api';

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
  if (reviews === null) return <div>Loading...</div>; // Verifică dacă recenziile sunt încărcate

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3> {/* Afișează autorul */}
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ul>
  );
};

export default Reviews;
