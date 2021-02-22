import PropTypes from "prop-types";
import dayjs from "dayjs";

export const adaptReviewToClient = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {
        user: Object.assign(
            {},
            review.user,
            {
              avatarUrl: review.user.avatar_url,
              isPro: review.user.is_pro
            }
        )
      }
  );

  return adaptedReview;
};

export const adaptReviewToServer = (review) => {
  const adaptedReview = Object.assign(
      {},
      review,
      {

      }
  );

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const propTypesReview = PropTypes.shape({
  "comment": PropTypes.string.isRequired,
  "date": PropTypes.string.isRequired,
  "id": PropTypes.number.isRequired,
  "rating": PropTypes.number.isRequired,
  "user": PropTypes.shape({
    "avatar_url": PropTypes.string.isRequired,
    "id": PropTypes.number.isRequired,
    "is_pro": PropTypes.bool.isRequired,
    "name": PropTypes.string.isRequired
  })
});

export const getDate = (date, format) => {
  return dayjs(date).format(format);
};
