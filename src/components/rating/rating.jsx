import React from "react";
import PropTypes from "prop-types";
import {getArrayFromOneToN} from "../../utils/common";
import {MAX_RATING, RatingMap} from "../../const";

const Rating = ({onRatinChange, readonly}) => {

  const handleChange = (evt) => {
    onRatinChange(evt.target.value);
  };

  return (
    <div className="reviews__rating-form form__rating">
      {getArrayFromOneToN(MAX_RATING).reverse().map((ratingScore) => {
        return (
          <React.Fragment key={ratingScore}>
            <input
              disabled={readonly}
              onChange={handleChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingScore}
              id={`${ratingScore}-start`}
              type="radio"
              required={true}
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

Rating.propTypes = {
  onRatinChange: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired
};
export default Rating;
