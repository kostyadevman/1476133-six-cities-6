import React from 'react';
import PropTypes from 'prop-types';
import {propTypesReview} from "../../utils/review";
import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review-item/review-item';

const Reviews = ({reviews}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, reviewId) => (
          <ReviewItem key={reviewId} review={review}/>
        ))}
      </ul>
      <CommentForm />
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(propTypesReview).isRequired
};
export default Reviews;
