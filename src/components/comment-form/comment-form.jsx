import React from 'react';
import {getArrayFromOneToN} from "../../utils/common";
import {MAX_RATING, RatingMap} from "../../const";

class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return <form className="reviews__form form" onSubmit={this.handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getArrayFromOneToN(MAX_RATING).reverse().map((rating) =>
          <label
            key={rating}
            htmlFor={`${rating}-start`}
            className="reviews__rating-label form__rating-label"
            title={RatingMap[rating]}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"/>
            </svg>
            <input
              onChange={this.handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${rating}-start`}
              type="radio"
            />
          </label>
        )}
      </div>
      <textarea
        onChange={this.handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>;
  }
}

export default CommentForm;
