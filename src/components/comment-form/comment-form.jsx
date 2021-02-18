import React from 'react';
import Rating from "../rating/rating";
import ReviewContent from "../review-content/review-content";

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form className="reviews__form form" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating />
        <ReviewContent />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;
