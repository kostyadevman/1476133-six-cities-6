import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import {makeRatingScore, propTypesPlace} from "../../utils/place";
import {capitalize} from "../../utils/common";
import {PLACE_SETTINGS} from "../../utils/place";
import {useDispatch, useSelector} from "react-redux";
import {setFavoriteStatus} from "../../store/api-actions";
import {AppRoute, AuthorizationStatus} from "../../const";


const Place = ({offer, cardType, setActive, unsetActive}) => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isFavorite, setIsFavorite] = useState(offer.isFavorite);

  const {
    id,
    isPremium,
    previewImage,
    price,
    type,
    rating,
    title,
  } = offer;

  const classFavorite = isFavorite ?
    `place-card__bookmark-button place-card__bookmark-button--active button` :
    `place-card__bookmark-button button`;

  const handleMouseEnter = () => setActive(offer.id);
  const handleMouseLeave = () => unsetActive();

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }
    setIsFavorite(!isFavorite);

    dispatch(setFavoriteStatus(id, !isFavorite ? 1 : 0));

  };

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
      <div className={PLACE_SETTINGS[cardType].infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classFavorite}
            type="button"
            onClick={handleBookmarkClick}
          >
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
