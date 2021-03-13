import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Rating from "../rating/rating";
import ReviewContent from "../review-content/review-content";
import {sendReview} from "../../store/api-actions";
import {setErrorMessage} from "../../store/action";
import {AuthorizationStatus, RATINIG_INIT, REVIEW_LENGTH_MIN, REVIEW_LENGTH_MAX} from "../../const";
import {getOfferID} from "../../store/data/selectors";


const CommentForm = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const id = useSelector(getOfferID);

  const dispatch = useDispatch();

  const [block, setBlock] = useState(true);
  const [readonly, setReadonly] = useState(false);
  const [rating, setRating] = useState(RATINIG_INIT);
  const [comment, setComment] = useState(``);

  useEffect(() => {
    changeBlock();
  }, [comment, rating]);

  const reset = () => {
    setReadonly(false);
    setRating(RATINIG_INIT);
    setComment(``);
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
    dispatch(sendReview(id, {rating, comment}))
      .then(() => onSuccess())
      .catch(() => {
        onFail();
        dispatch(setErrorMessage(`Failed to post data`));
      });
  };

  const changeBlock = () => {
    const isValid = rating > 0 &&
      comment.length >= REVIEW_LENGTH_MIN &&
      comment.length < REVIEW_LENGTH_MAX;
    // eslint-disable-next-line no-unused-expressions
    isValid ? setBlock(false) : setBlock(true);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleContentChange = (value) => {
    setComment(value);
  };


  return (
    authorizationStatus === AuthorizationStatus.AUTH &&
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={rating} onRatingChange={handleRatingChange} readonly={readonly}/>
      <ReviewContent comment={comment} onContentChange={handleContentChange} readonly={readonly}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and
                    describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={block}
        >Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
