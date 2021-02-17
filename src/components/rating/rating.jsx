import React, {useState} from 'react';
import {getArrayFromOneToN} from "../../utils/common";
import {MAX_RATING, RatingMap} from "../../const";

const Rating = () => {

  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(``);

  const handleFieldChange = (evt) => {
    evt.preventDefault();
    setRating(evt.target.value);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {getArrayFromOneToN(MAX_RATING).reverse().map((ratingScore) => {
        return (
          <React.Fragment key={ratingScore}>
            <input
              onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingScore}
              id={`${ratingScore}-start`}
              type="radio"
            />
            <label
              htmlFor={`${ratingScore}-start`}
              className="reviews__rating-label form__rating-label"
              title={RatingMap[ratingScore]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        );
      }

      )}
    </div>
  );
};

export default Rating;
