import { Rating } from '@mui/material';
import { useState } from 'react';

function Reviews({ reviews }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === selectedRating)
    : reviews;

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        Filter by rating:{' '}
        {[1, 2, 3, 4, 5].map((rating) => (
        //   <button key={rating} onClick={() => setSelectedRating(rating)}>
        //     {rating} stars
        //   </button>
        <div onClick={() => setSelectedRating(rating)}>
            <Rating name="read-only" value={rating} readOnly/>
        </div>

        ))}
        <button onClick={() => setSelectedRating(null)}>Clear filter</button>
      </div>
      {filteredReviews.length > 0 ? (
        filteredReviews.map((review) => (
          <div key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

export default Reviews;
