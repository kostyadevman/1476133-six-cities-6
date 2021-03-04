import React from "react";
import PropTypes from "prop-types";
import {REVIEW_LENGTH_MAX, REVIEW_LENGTH_MIN} from "../../const";

const ReviewContent = ({onContentChange, readonly}) => {

  const handleChange = (evt) => {
    onContentChange(evt.target.value);
  };

  return (
    <textarea
      disabled={readonly}
      maxLength={REVIEW_LENGTH_MAX}
      minLength={REVIEW_LENGTH_MIN}
      onChange={handleChange}
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"/>
  );
};

ReviewContent.propTypes = {
  onContentChange: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired
};

export default ReviewContent;
