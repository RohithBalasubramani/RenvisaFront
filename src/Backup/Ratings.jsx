import React, { useState } from 'react';


const Ratings = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const handleRatingChange = (event) => {
      setRating(Number(event.target.value));
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Rating: ${rating}, Comment: ${comment}`);
      // TODO: Implement logic to submit rating and comment
    };
  
  return (
    <div>    <form onSubmit={handleSubmit}>
    <div>
      <p>Rate this product:</p>
      <label>
        <input
          type="radio"
          name="rating"
          value="1"
          checked={rating === 1}
          onChange={handleRatingChange}
        />
        <span role="img" aria-label="one star">
          ⭐️
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="rating"
          value="2"
          checked={rating === 2}
          onChange={handleRatingChange}
        />
        <span role="img" aria-label="two stars">
          ⭐️⭐️
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="rating"
          value="3"
          checked={rating === 3}
          onChange={handleRatingChange}
        />
        <span role="img" aria-label="three stars">
          ⭐️⭐️⭐️
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="rating"
          value="4"
          checked={rating === 4}
          onChange={handleRatingChange}
        />
        <span role="img" aria-label="four stars">
          ⭐️⭐️⭐️⭐️
        </span>
      </label>
      <label>
        <input
          type="radio"
          name="rating"
          value="5"
          checked={rating === 5}
          onChange={handleRatingChange}
        />
        <span role="img" aria-label="five stars">
          ⭐️⭐️⭐️⭐️⭐️
        </span>
      </label>
    </div>
    <div>
      <p>Leave a comment:</p>
      <textarea value={comment} onChange={handleCommentChange} />
    </div>
    <button type="submit">Submit</button>
  </form>
      
    </div>
  )
}

export default Ratings
