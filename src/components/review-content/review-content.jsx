import React, {useState} from 'react';

const ReviewContent = () => {

  const [review, setReview] = useState(``);

  const handleFieldChange = (evt) => {
    evt.preventDefault();
    setReview(evt.target.value);
  };

  return (
    <textarea
      onChange={handleFieldChange}
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      value={review}
      placeholder="Tell how was your stay, what you like and what can be improved"/>
  );
};

export default ReviewContent;
