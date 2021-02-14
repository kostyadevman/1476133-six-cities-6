import React from 'react';
import PropTypes from 'prop-types';
import {adaptToClient, makeRatingScore, propTypesPlace} from "../../utils/place";
import {capitalize} from "../../utils/common";
import {CardType} from "../../const";
import {Link} from "react-router-dom";


const Place = (props) => {
  const {offer, cardType} = props;
  const {id, isPremiun, previewImage, price, type, rating, description} = adaptToClient(offer);
  const articleClassName = cardType === CardType.CITIES ?
    `cities__place-card place-card` :
    `favorites__card place-card`;
  const imgWrapperClassName = `${cardType}__image-wrapper place-card__image-wrapper`;
  const imgWidth = cardType === CardType.CITIES ? 260 : 150;
  const imgHeight = cardType === CardType.CITIES ? 200 : 110;

  return (
    <article className={articleClassName}>
      {(isPremiun & cardType === CardType.CITIES) ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className={imgWrapperClassName}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: makeRatingScore(rating) + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} href="#">{description}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

Place.propTypes = {
  offer: propTypesPlace,
  cardType: PropTypes.string.isRequired,
};

export default Place;
