import React, {useState, useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Rating from "../rating/rating";
import ReviewContent from "../review-content/review-content";
import {sendReview} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {AuthorizationStatus, RATINIG_INIT} from "../../const";


const CommentForm = ({authorizationStatus, id, onSubmit, showErrorMessage}) => {
  const commentRef = useRef();

  const [readonly, setReadonly] = useState(false);
  const [rating, setRating] = useState(RATINIG_INIT);
  const [comment, setComment] = useState(``);

  const reset = () => {
    commentRef.current.reset();
  };

  const onSuccess = () => {
    reset();
    setReadonly(false);
  };

  const onFail = () => {
    setReadonly(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setReadonly(true);
    onSubmit(id, {rating, comment})
      .then(() => onSuccess())
      .catch(() => {
        onFail();
        showErrorMessage(`Failed to post data`);
      });
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleContentChange = (value) => {
    setComment(value);
  };


  return (
    authorizationStatus === AuthorizationStatus.AUTH &&
    <form
      ref={commentRef}
      className="reviews__form form" onSubmit={handleSubmit}

    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating onRatinChange={handleRatingChange} readonly={readonly}/>
      <ReviewContent onContentChange={handleContentChange} readonly={readonly}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and
                    describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={readonly}
        >Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  id: state.offer.id,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, data) {
    return dispatch(sendReview(id, data));
  },
  showErrorMessage(message) {
    dispatch(ActionCreator.setErrorMessage(message));
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
