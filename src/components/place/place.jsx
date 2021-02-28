import React from 'react';
import PropTypes from 'prop-types';
import {adaptOfferToClient, makeRatingScore, propTypesPlace} from "../../utils/place";
import {capitalize} from "../../utils/common";
import {Link} from "react-router-dom";
import {PLACE_SETTINGS} from "../../utils/place";

const Place = ({offer, cardType, setActive, unsetActive}) => {
  const {
    id,
    isPremium,
    previewImage,
    price,
    type,
    rating,
    title
  } = adaptOfferToClient(offer);

  const handleMouseEnter = () => setActive(offer.id);
  const handleMouseLeave = () => unsetActive();

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={PLACE_SETTINGS[cardType].articleClassName}>
      {
        (PLACE_SETTINGS[cardType].premiumMark && isPremium) &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={PLACE_SETTINGS[cardType].imgWrapperClassName}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={PLACE_SETTINGS[cardType].imgWidth}
            height={PLACE_SETTINGS[cardType].imgHeight}
            alt="Place image"
          />
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
          <Link to={`/offer/${id}`} href="#">{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

Place.propTypes = {
  offer: propTypesPlace,
  cardType: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  unsetActive: PropTypes.func.isRequired
};

export default Place;
